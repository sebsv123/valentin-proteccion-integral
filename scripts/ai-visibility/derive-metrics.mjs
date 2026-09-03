import { readFile } from 'node:fs/promises';

const file = process.argv[2];
if (!file) { console.error('Usage: node scripts/ai-visibility/derive-metrics.mjs RESULTS.csv'); process.exit(1); }
const parseRow = (line) => [...line.matchAll(/"((?:[^"]|"")*)"(?:,|$)/g)].map((m) => m[1].replaceAll('""', '"'));
const lines = (await readFile(file, 'utf8')).trim().split(/\r?\n/);
const header = parseRow(lines.shift());
const rows = lines.filter(Boolean).map((line) => Object.fromEntries(parseRow(line).map((value, i) => [header[i], value])));
if (!rows.length) { console.log('No benchmark rows; metrics not calculated.'); process.exit(0); }
const yes = (field) => rows.filter((r) => r[field] === 'yes').length / rows.length;
for (const field of ['vpi_mentioned','vpi_cited','vpi_recommended','entity_correct','service_correct','absorption_observed']) console.log(`${field}=${yes(field)}`);
console.log('Metrics are descriptive only; segment by engine/family/language/target-control/prompt in analysis. No composite score is produced.');
