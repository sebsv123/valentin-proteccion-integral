import { readFileSync } from 'node:fs';

const files = {
  page: readFileSync('app/extranjeros/page.tsx', 'utf8'),
  form: readFileSync('components/foreigners-partner-form.tsx', 'utf8'),
  api: readFileSync('app/api/professional-referrals/route.ts', 'utf8'),
  analytics: readFileSync('lib/foreigners-partner-analytics.ts', 'utf8'),
};

const requiredSnippets = [
  ['official DGSFP URL', files.page, 'https://rrpp.dgsfp.mineco.es/Mediador'],
  ['DGSFP link text', files.page, 'Consultar en el registro público de la DGSFP'],
  ['professional name field', files.form, 'professionalName'],
  ['organization field', files.form, 'organization'],
  ['professional email field', files.form, 'professionalEmail'],
  ['client name field', files.form, 'clientName'],
  ['client contact field', files.form, 'clientContact'],
  ['procedure type field', files.form, 'procedureType'],
  ['authorization checkbox', files.form, 'clientAuthorization'],
  ['privacy link', files.form, '/privacidad'],
  ['sensitive document notice', files.form, 'No adjuntes pasaportes'],
  ['server validation schema', files.api, 'referralSchema.safeParse'],
  ['honeypot', files.form, 'website'],
  ['success state', files.form, "'success'"],
  ['error state', files.form, "'error'"],
  ['generic event', files.analytics, 'foreigners_partner'],
];

const requiredActions = [
  'cta_click',
  'section_view',
  'form_start',
  'form_submit',
  'whatsapp_click',
  'email_click',
  'dgsfp_click',
];

const missing = [];

for (const [name, content, snippet] of requiredSnippets) {
  if (!content.includes(snippet)) missing.push(name);
}

for (const action of requiredActions) {
  if (!files.analytics.includes(`'${action}'`)) missing.push(`analytics action ${action}`);
}

if (missing.length) {
  console.error(`Missing foreigners page requirements: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Foreigners page related checks passed.');
