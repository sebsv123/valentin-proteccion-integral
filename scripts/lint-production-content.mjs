import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const roots = ['app', 'components', 'lib'];
const productionExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs']);
const blocked = [
  'agente de seguros vinculado',
  'agencia de seguros',
  'agencia de confianza',
  'firma de confianza',
  'nadie en el sector',
  'garantizamos',
  'aceptado por todos',
  '34689791380',
  'app.dgsfp.com',
];

const matches = [];

function extensionOf(path) {
  const index = path.lastIndexOf('.');
  return index === -1 ? '' : path.slice(index);
}

function walk(path) {
  const stat = statSync(path);
  if (stat.isDirectory()) {
    for (const entry of readdirSync(path)) walk(join(path, entry));
    return;
  }

  if (!productionExtensions.has(extensionOf(path))) return;

  const content = readFileSync(path, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const lower = line.toLowerCase();
    blocked.forEach((term) => {
      if (lower.includes(term.toLowerCase())) matches.push(`${path}:${index + 1}: ${term}`);
    });
  });
}

roots.forEach(walk);

if (matches.length) {
  console.error(matches.join('\n'));
  process.exit(1);
}

console.log('Production content lint passed.');
