import { readFile } from 'node:fs/promises';

const parse = (line) => { const values = []; let value = ''; let quoted = false; for (let index = 0; index < line.length; index += 1) { const char = line[index]; if (char === '"') { if (quoted && line[index + 1] === '"') { value += '"'; index += 1; } else quoted = !quoted; } else if (char === ',' && !quoted) { values.push(value); value = ''; } else value += char; } values.push(value); return values; };
const readCsv = async (file) => { const lines = (await readFile(file, 'utf8')).trim().split(/\r?\n/); const header = parse(lines.shift()); return { header, rows: lines.filter(Boolean).map((line) => Object.fromEntries(parse(line).map((value, index) => [header[index], value]))) }; };
const canonical = { E01: '¿Qué es Valentín Protección Integral?', F01: 'Seguro médico para visado de estudios en España', N01: '¿Qué gestoría me puede llevar la contabilidad trimestral de un autónomo?' };
const engines = ['CHATGPT', 'GOOGLE', 'COPILOT', 'PERPLEXITY'];
const expected = ['E01', 'F01', 'N01'].flatMap((prompt, familyIndex) => engines.map((engine, engineIndex) => ({ run_id: `P0-${prompt}-${engine}`, prompt_id: prompt, sequence: familyIndex * 4 + engineIndex + 1 })));
const manifest = await readCsv('docs/ai-visibility/results/pilot-v0-manifest.csv');
const dataset = await readCsv('docs/ai-visibility/results/pilot-v0.csv');
const landscape = await readCsv('docs/ai-visibility/results/source-landscape-pilot-v0.csv');
const fail = (message) => { throw new Error(message); };
if (manifest.rows.length !== 12) fail(`Manifest must have 12 rows, found ${manifest.rows.length}`);
if (dataset.rows.length !== 12) fail(`Dataset must have 12 rows, found ${dataset.rows.length}`);
if (landscape.rows.length !== 0) fail('Source landscape must contain header only before execution');
for (const item of expected) {
  const row = manifest.rows.find((candidate) => candidate.run_id === item.run_id);
  if (!row) fail(`Missing manifest row ${item.run_id}`);
  if (row.prompt_id !== item.prompt_id || row.prompt_text !== canonical[item.prompt_id] || row.intended_sequence !== String(item.sequence) || row.status !== 'pending' || row.capture_ref !== 'pending') fail(`Invalid preflight manifest row ${item.run_id}`);
  const data = dataset.rows.find((candidate) => candidate.run_id === item.run_id);
  if (!data || data.prompt_id !== item.prompt_id || data.prompt_text !== canonical[item.prompt_id] || data.variant_id !== 'canonical_prompt' || data.run_sequence !== String(item.sequence)) fail(`Invalid preflight dataset row ${item.run_id}`);
  for (const field of ['timestamp_utc','ai_surface_present','retrieval_observed','vpi_mentioned','vpi_cited','vpi_recommended','entity_correct','service_correct','absorption_observed','response_capture_ref','capture_quality','annotator','qa_status','qa_disagreement']) if (data[field] !== 'pending') fail(`${item.run_id}.${field} must be pending before execution`);
}
if (manifest.header.join(',') !== 'run_id,benchmark_version,prompt_id,prompt_text,family,engine,engine_surface,intended_sequence,status,capture_ref') fail('Manifest header mismatch');
console.log('Pilot kit valid: 12 deterministic pending runs, canonical prompts, empty source landscape.');
