import { mkdir, readFile, writeFile } from 'node:fs/promises';

const benchmarkPath = 'docs/ai-visibility/prompts/benchmark-v0.yaml';
const sentinelPath = 'docs/ai-visibility/prompts/sentinel-v0.yaml';
const outputDir = 'docs/ai-visibility/results';
const engines = [
  ['CHATGPT', 'ChatGPT', 'ChatGPT'],
  ['GOOGLE', 'Google', 'Google generative search surface'],
  ['COPILOT', 'Copilot', 'Microsoft Copilot'],
  ['PERPLEXITY', 'Perplexity', 'Perplexity'],
];
const csv = (rows) => rows.map((row) => row.map((value) => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n') + '\n';
const parsePrompt = (line) => {
  const fields = {};
  const pattern = /([a-z_]+):\s*(?:"((?:[^"\\]|\\.)*)"|([^,]+?))(?=,\s+[a-z_]+:|$)/g;
  for (const match of line.matchAll(pattern)) fields[match[1]] = match[2] ?? match[3].trim();
  return fields;
};
const benchmarkText = await readFile(benchmarkPath, 'utf8');
const prompts = benchmarkText.split(/\r?\n/).filter((line) => line.trim().startsWith('- {')).map(parsePrompt);
const sentinelText = await readFile(sentinelPath, 'utf8');
const sentinelIds = sentinelText.match(/prompts:\s*\[([^\]]+)\]/)[1].split(',').map((id) => id.trim());
const sentinelSet = new Set(sentinelIds);
const promptById = new Map(prompts.map((prompt) => [prompt.id, prompt]));
if (prompts.length !== 30 || sentinelSet.size !== 12 || sentinelIds.some((id) => !promptById.has(id))) throw new Error('Prompt registry is inconsistent with the frozen 30/12 design');
const registryHeaders = ['prompt_id','prompt_family','canonical_prompt','variant_A','variant_B','variant_C','sentinel','target_control_class','language','intent_description'];
const registryRows = prompts.map((prompt) => [prompt.id, prompt.family, prompt.canonical_prompt, prompt.canonical_prompt, prompt.variant_b, prompt.variant_c, sentinelSet.has(prompt.id) ? 'yes' : 'no', prompt.target_or_control, prompt.language, prompt.intent]);
const groups = prompts.flatMap((prompt) => {
  const variants = [['A', prompt.canonical_prompt]];
  if (sentinelSet.has(prompt.id)) variants.push(['B', prompt.variant_b], ['C', prompt.variant_c]);
  return variants.map(([variantId, promptText]) => ({ prompt, variantId, promptText }));
});
const manifestHeaders = ['baseline_version','run_id','layer','prompt_id','variant_id','prompt_text','family','engine','engine_surface','run_sequence','status','capture_ref'];
const datasetHeaders = ['baseline_version','run_id','layer','prompt_id','variant_id','prompt_text','engine','engine_surface','execution_timestamp','browser_language','observed_country','account_context','memory_context','conversation_context','location_context','location_context_source','observed_locality','search_enabled','ai_surface_present','retrieval_observed','vpi_mentioned','vpi_cited','vpi_recommended','entity_correct','service_correct','absorption_observed','vpi_urls','mention_position','citation_position','response_capture_ref','capture_quality','annotator','qa_status','qa_disagreement','notes'];
const manifestRows = [];
const datasetRows = [];
let sequence = 1;
for (const group of groups) for (const [engineId, engineName, surface] of engines) {
  const layer = group.variantId === 'A' ? 'A' : 'B';
  const runId = `Z0-${group.prompt.id}-${group.variantId}-${engineId}`;
  const captureRef = `artifacts/ai-visibility/f0-zero-baseline/${runId}/response.txt`;
  manifestRows.push(['zero-v0', runId, layer, group.prompt.id, group.variantId, group.promptText, group.prompt.family, engineName, surface, sequence, 'pending', captureRef]);
  datasetRows.push(['zero-v0', runId, layer, group.prompt.id, group.variantId, group.promptText, engineName, surface, ...Array(20).fill('pending'), captureRef, ...Array(5).fill('pending')]);
  sequence += 1;
}
const batchHeaders = ['batch_id','batch_sequence','group_sequence','prompt_id','variant_id','exact_prompt','run_ids','completion_state','validation_state'];
const batchRows = [];
for (let index = 0; index < groups.length; index += 6) {
  const batchGroups = groups.slice(index, index + 6);
  batchRows.push(batchGroups.map((group, offset) => [
    `B${String(Math.floor(index / 6) + 1).padStart(2, '0')}`,
    Math.floor(index / 6) + 1,
    index + offset + 1,
    group.prompt.id,
    group.variantId,
    group.promptText,
    engines.map(([engineId]) => `Z0-${group.prompt.id}-${group.variantId}-${engineId}`).join(' ; '),
    'pending',
    'pending',
  ]));
}
const qaHeaders = ['qa_sequence','run_id','layer','prompt_id','variant_id','engine','qa_method','qa_status'];
const qaRows = manifestRows.filter((_, index) => index % 5 === 0).map((row, index) => [index + 1, row[1], row[2], row[3], row[4], row[7], 'deterministic manifest ordinal modulo 5', 'pending']);
await mkdir(outputDir, { recursive: true });
await writeFile('docs/ai-visibility/prompts/zero-baseline-v0.csv', csv([registryHeaders, ...registryRows]));
await writeFile(`${outputDir}/zero-baseline-v0-manifest.csv`, csv([manifestHeaders, ...manifestRows]));
await writeFile(`${outputDir}/zero-baseline-v0.csv`, csv([datasetHeaders, ...datasetRows]));
await writeFile(`${outputDir}/zero-baseline-batches-v0.csv`, csv([batchHeaders, ...batchRows.flat()]));
await writeFile(`${outputDir}/zero-baseline-qa-sample-v0.csv`, csv([qaHeaders, ...qaRows]));
await writeFile(`${outputDir}/source-landscape-zero-baseline-v0.csv`, csv([['run_id','prompt_id','variant_id','engine','domain','normalized_url','source_type','cited','mentioned','position','notes']]));
console.log(JSON.stringify({ prompt_ids: prompts.length, sentinel_ids: sentinelSet.size, groups: groups.length, layer_a: prompts.length * 4, layer_b: (groups.length - prompts.length) * 4, total_runs: manifestRows.length, batches: batchRows.length }, null, 2));
