import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const parse = (line) => { const values = []; let value = ''; let quoted = false; for (let index = 0; index < line.length; index += 1) { const char = line[index]; if (char === '"') { if (quoted && line[index + 1] === '"') { value += '"'; index += 1; } else quoted = !quoted; } else if (char === ',' && !quoted) { values.push(value); value = ''; } else value += char; } values.push(value); return values; };
const readCsv = async (file) => { const lines = (await readFile(file, 'utf8')).trim().split(/\r?\n/); const header = parse(lines.shift()); return { header, rows: lines.filter(Boolean).map((line) => Object.fromEntries(parse(line).map((value, index) => [header[index], value]))) }; };
const canonical = { E01: '¿Qué es Valentín Protección Integral?', F01: 'Seguro médico para visado de estudios en España', N01: '¿Qué gestoría me puede llevar la contabilidad trimestral de un autónomo?' };
const engines = ['CHATGPT', 'GOOGLE', 'COPILOT', 'PERPLEXITY'];
const expected = ['E01', 'F01', 'N01'].flatMap((prompt, familyIndex) => engines.map((engine, engineIndex) => ({ run_id: `P0-${prompt}-${engine}`, prompt_id: prompt, sequence: familyIndex * 4 + engineIndex + 1 })));
const manifest = await readCsv('docs/ai-visibility/results/pilot-v0-manifest.csv');
const dataset = await readCsv('docs/ai-visibility/results/pilot-v0.csv');
const landscape = await readCsv('docs/ai-visibility/results/source-landscape-pilot-v0.csv');
const errors = [];
const unresolved = [];
const warnings = [];
const fail = (message) => errors.push(message);
if (manifest.rows.length !== 12) fail(`Manifest must have 12 rows, found ${manifest.rows.length}`);
if (dataset.rows.length !== 12) fail(`Dataset must have 12 rows, found ${dataset.rows.length}`);
if (new Set(manifest.rows.map((row) => row.run_id)).size !== manifest.rows.length) fail('Manifest run IDs are not unique');
if (new Set(dataset.rows.map((row) => row.run_id)).size !== dataset.rows.length) fail('Dataset run IDs are not unique');
for (const item of expected) {
  const row = manifest.rows.find((candidate) => candidate.run_id === item.run_id);
  if (!row) { fail(`Missing manifest row ${item.run_id}`); continue; }
  if (row.prompt_id !== item.prompt_id || row.prompt_text !== canonical[item.prompt_id] || row.intended_sequence !== String(item.sequence)) fail(`Invalid manifest row ${item.run_id}`);
  const data = dataset.rows.find((candidate) => candidate.run_id === item.run_id);
  if (!data || data.prompt_id !== item.prompt_id || data.prompt_text !== canonical[item.prompt_id] || data.variant_id !== 'canonical_prompt' || data.run_sequence !== String(item.sequence)) { fail(`Invalid dataset row ${item.run_id}`); continue; }
  for (const field of ['ai_surface_present','retrieval_observed','vpi_mentioned','vpi_cited','vpi_recommended','entity_correct','service_correct','absorption_observed']) if (data[field] === 'pending') unresolved.push(`${item.run_id}.${field}`);
  const captureDir = `artifacts/ai-visibility/f0-zero/${item.run_id}`;
  const responsePath = `${captureDir}/response.txt`;
  const metaPath = `${captureDir}/capture-meta.json`;
  let responseText;
  let captureMeta;
  try { responseText = await readFile(responsePath, 'utf8'); } catch { responseText = null; }
  try { captureMeta = JSON.parse(await readFile(metaPath, 'utf8')); } catch { captureMeta = null; }
  if (!responseText || !captureMeta) errors.push(`${item.run_id}: missing capture evidence entirely (expected response.txt + capture-meta.json)`);
  if (data.response_capture_ref !== responsePath) errors.push(`${item.run_id}.response_capture_ref must point to ${responsePath}`);
  if (row.capture_ref !== responsePath) errors.push(`${item.run_id}.capture_ref must point to ${responsePath}`);
  if (captureMeta) {
    if (captureMeta.run_id !== item.run_id) errors.push(`${item.run_id}: capture-meta run_id mismatch`);
    if (!['visual_raw_capture','manual_verbatim_transcription'].includes(captureMeta.capture_type)) errors.push(`${item.run_id}: invalid capture_type`);
    if (captureMeta.capture_type === 'manual_verbatim_transcription' && captureMeta.transcript_complete !== true) errors.push(`${item.run_id}: transcript_complete must be true`);
    if (captureMeta.source_urls_preserved !== true) errors.push(`${item.run_id}: source_urls_preserved must be true`);
    if (responseText && captureMeta.sha256 !== createHash('sha256').update(responseText).digest('hex')) errors.push(`${item.run_id}: capture sha256 mismatch`);
    if (captureMeta.capture_type === 'manual_verbatim_transcription' && captureMeta.screenshot_available !== true) warnings.push(`${item.run_id}: no screenshot; valid for historical manual transcription`);
  }
  if (data.capture_quality === 'pending') errors.push(`${item.run_id}.capture_quality is unresolved`);
  for (const field of ['timestamp_utc','country_context','account_context','logged_in','browser_language','observed_country','annotator']) if (data[field] === 'unknown') warnings.push(`${item.run_id}.${field} unavailable in historical capture`);
  for (const field of ['ai_surface_present','search_enabled','logged_in','retrieval_observed','vpi_mentioned','vpi_cited','vpi_recommended','entity_correct','service_correct','absorption_observed','location_context']) if (!['yes','no','unknown'].includes(data[field]) && data[field] !== 'pending') fail(`${item.run_id}.${field} has invalid enum ${data[field]}`);
  if (!['prompt_explicit','response_inferred','platform_observed','unknown'].includes(data.location_context_source)) fail(`${item.run_id}.location_context_source has invalid enum`);
}
if (manifest.header.join(',') !== 'run_id,benchmark_version,prompt_id,prompt_text,family,engine,engine_surface,intended_sequence,status,capture_ref') fail('Manifest header mismatch');
const landscapeIds = new Set(dataset.rows.map((row) => row.run_id));
for (const row of landscape.rows) {
  if (!landscapeIds.has(row.run_id)) fail(`Source landscape row has unknown run_id ${row.run_id}`);
  if (row.source_url !== 'unknown') {
    if (!/^https?:\/\/[^\s]+$/.test(row.source_url)) fail(`Source landscape has invalid source_url for ${row.run_id}`);
    try {
      const response = await readFile(`artifacts/ai-visibility/f0-zero/${row.run_id}/response.txt`, 'utf8');
      if (!response.includes(row.source_url)) fail(`Source landscape URL is not present in supplied capture for ${row.run_id}: ${row.source_url}`);
    } catch {
      fail(`Source landscape cannot verify capture provenance for ${row.run_id}: ${row.source_url}`);
    }
  }
}
if (errors.length || unresolved.length) { console.error(JSON.stringify({ errors, unresolved, warnings }, null, 2)); process.exit(1); }
console.log(JSON.stringify({ status: 'pass', errors, unresolved, warnings }, null, 2));
