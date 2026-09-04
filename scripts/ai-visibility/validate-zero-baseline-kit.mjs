import { readFile } from 'node:fs/promises';

const parse = (line) => { const values = []; let value = ''; let quoted = false; for (let index = 0; index < line.length; index += 1) { const char = line[index]; if (char === '"') { if (quoted && line[index + 1] === '"') { value += '"'; index += 1; } else quoted = !quoted; } else if (char === ',' && !quoted) { values.push(value); value = ''; } else value += char; } values.push(value); return values; };
const readCsv = async (file) => { const lines = (await readFile(file, 'utf8')).trim().split(/\r?\n/); const header = parse(lines.shift()); return { header, rows: lines.filter(Boolean).map((line) => Object.fromEntries(parse(line).map((value, index) => [header[index], value]))) }; };
const engines = ['ChatGPT', 'Google', 'Copilot', 'Perplexity'];
const expectedHeaders = ['baseline_version','run_id','layer','prompt_id','variant_id','prompt_text','family','engine','engine_surface','run_sequence','status','capture_ref'];
const registry = await readCsv('docs/ai-visibility/prompts/zero-baseline-v0.csv');
const manifest = await readCsv('docs/ai-visibility/results/zero-baseline-v0-manifest.csv');
const dataset = await readCsv('docs/ai-visibility/results/zero-baseline-v0.csv');
const landscape = await readCsv('docs/ai-visibility/results/source-landscape-zero-baseline-v0.csv');
const batches = await readCsv('docs/ai-visibility/results/zero-baseline-batches-v0.csv');
const qa = await readCsv('docs/ai-visibility/results/zero-baseline-qa-sample-v0.csv');
const errors = [];
const fail = (message) => errors.push(message);
if (registry.rows.length !== 30) fail(`Prompt registry must have 30 rows, found ${registry.rows.length}`);
if (new Set(registry.rows.map((row) => row.prompt_id)).size !== registry.rows.length) fail('Prompt registry IDs are not unique');
const sentinels = registry.rows.filter((row) => row.sentinel === 'yes');
if (sentinels.length !== 12) fail(`Prompt registry must have 12 Sentinels, found ${sentinels.length}`);
if (manifest.rows.length !== 216) fail(`Manifest must have 216 rows, found ${manifest.rows.length}`);
if (dataset.rows.length !== 216) fail(`Dataset must have 216 rows, found ${dataset.rows.length}`);
if (new Set(manifest.rows.map((row) => row.run_id)).size !== manifest.rows.length) fail('Manifest run IDs are not unique');
if (new Set(dataset.rows.map((row) => row.run_id)).size !== dataset.rows.length) fail('Dataset run IDs are not unique');
if (manifest.header.join(',') !== expectedHeaders.join(',')) fail('Manifest header mismatch');
const pilotIds = new Set(['P0-E01-CHATGPT','P0-E01-GOOGLE','P0-E01-COPILOT','P0-E01-PERPLEXITY','P0-F01-CHATGPT','P0-F01-GOOGLE','P0-F01-COPILOT','P0-F01-PERPLEXITY','P0-N01-CHATGPT','P0-N01-GOOGLE','P0-N01-COPILOT','P0-N01-PERPLEXITY']);
if (manifest.rows.some((row) => pilotIds.has(row.run_id))) fail('Baseline manifest overlaps frozen P0 pilot IDs');
const registryById = new Map(registry.rows.map((row) => [row.prompt_id, row]));
for (const row of manifest.rows) {
  const prompt = registryById.get(row.prompt_id);
  if (!prompt) { fail(`Unknown prompt ${row.prompt_id}`); continue; }
  if (!['A','B','C'].includes(row.variant_id)) fail(`${row.run_id}: invalid variant`);
  if (row.variant_id !== 'A' && prompt.sentinel !== 'yes') fail(`${row.run_id}: non-Sentinel received variant ${row.variant_id}`);
  const expectedPrompt = row.variant_id === 'A' ? prompt.canonical_prompt : row.variant_id === 'B' ? prompt.variant_B : prompt.variant_C;
  if (row.prompt_text !== expectedPrompt) fail(`${row.run_id}: exact prompt mismatch`);
  if (!engines.includes(row.engine)) fail(`${row.run_id}: invalid engine`);
  if (row.status !== 'pending') fail(`${row.run_id}: pre-execution status must be pending`);
  if (row.capture_ref !== `artifacts/ai-visibility/f0-zero-baseline/${row.run_id}/response.txt`) fail(`${row.run_id}: non-deterministic capture_ref`);
}
const layerA = manifest.rows.filter((row) => row.layer === 'A');
const layerB = manifest.rows.filter((row) => row.layer === 'B');
if (layerA.length !== 120) fail(`Layer A must have 120 rows, found ${layerA.length}`);
if (layerB.length !== 96) fail(`Layer B must have 96 rows, found ${layerB.length}`);
for (const prompt of registry.rows) {
  for (const variant of prompt.sentinel === 'yes' ? ['A','B','C'] : ['A']) {
    const rows = manifest.rows.filter((row) => row.prompt_id === prompt.prompt_id && row.variant_id === variant);
    if (rows.length !== 4 || new Set(rows.map((row) => row.engine)).size !== 4) fail(`${prompt.prompt_id}-${variant}: expected exactly 4 engines`);
  }
}
const prospectiveRequired = ['execution_timestamp','browser_language','observed_country','account_context','memory_context','location_context','location_context_source','search_enabled','ai_surface_present','capture_quality','annotator','response_capture_ref'];
const allowedTri = new Set(['yes','no','unknown','pending']);
for (const row of dataset.rows) {
  if (!manifest.rows.some((candidate) => candidate.run_id === row.run_id)) fail(`Dataset row has unknown run_id ${row.run_id}`);
  for (const field of prospectiveRequired) if (row[field] === undefined || row[field] === '') fail(`${row.run_id}.${field} is missing`);
  for (const field of ['location_context','location_context_source','search_enabled','ai_surface_present']) if (!allowedTri.has(row[field]) && !['prompt_explicit','response_inferred','platform_observed'].includes(row[field])) fail(`${row.run_id}.${field} has invalid enum`);
}
if (batches.rows.length !== 54 || new Set(batches.rows.map((row) => row.batch_id)).size !== 9) fail('Batches must contain 54 groups in 9 batches');
if (batches.rows.some((row) => row.completion_state !== 'pending' || row.validation_state !== 'pending')) fail('Batches must begin pending');
if (qa.rows.length !== 44 || new Set(qa.rows.map((row) => row.run_id)).size !== qa.rows.length) fail('QA sample must contain 44 unique runs');
if (qa.rows.some((row) => !manifest.rows.some((candidate) => candidate.run_id === row.run_id))) fail('QA sample contains an unknown run ID');
if (new Set(qa.rows.map((row) => row.engine)).size !== 4) fail('QA sample must cover all four engines');
if (!qa.rows.some((row) => row.layer === 'A') || !qa.rows.some((row) => row.layer === 'B')) fail('QA sample must cover Layers A and B');
if (!['entity','foreigners','future_control','negative'].every((family) => qa.rows.some((qaRow) => manifest.rows.find((manifestRow) => manifestRow.run_id === qaRow.run_id)?.family === family))) fail('QA sample must cover Entity, Foreigners, future controls and negative controls');
if (qa.rows.some((row) => row.qa_method !== 'deterministic manifest ordinal modulo 5' || row.qa_status !== 'pending')) fail('QA sample must preserve its deterministic method and pending state');
if (landscape.header.join(',') !== 'run_id,prompt_id,variant_id,engine,domain,normalized_url,source_type,cited,mentioned,position,notes') fail('Source landscape header mismatch');
if (errors.length) { console.error(JSON.stringify({ status: 'fail', errors }, null, 2)); process.exit(1); }
  console.log(JSON.stringify({ status: 'pass', prompt_ids: registry.rows.length, sentinels: sentinels.length, layer_a: layerA.length, layer_b: layerB.length, total_runs: manifest.rows.length, batches: new Set(batches.rows.map((row) => row.batch_id)).size, qa_target: qa.rows.length, errors }, null, 2));
