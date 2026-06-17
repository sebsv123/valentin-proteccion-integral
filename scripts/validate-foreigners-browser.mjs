import { mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from '@playwright/test';

const baseUrl = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3001';
const outDir = 'validation-artifacts/extranjeros';
mkdirSync(outDir, { recursive: true });

const failures = [];
const checks = [];

function check(name, value, detail = '') {
  checks.push({ name, ok: Boolean(value), detail });
  if (!value) failures.push(`${name}${detail ? `: ${detail}` : ''}`);
}

async function overflow(page) {
  return page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
}

async function visibleFocus(page) {
  return page.evaluate(() => {
    const active = document.activeElement;
    if (!active) return false;
    const style = window.getComputedStyle(active);
    return style.outlineStyle !== 'none' && parseFloat(style.outlineWidth || '0') > 0;
  });
}

async function readEvents(page) {
  return page.evaluate(() => window.__foreignersEvents || []);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
await context.addInitScript(() => {
  window.__foreignersEvents = [];
  window.gtag = (...args) => window.__foreignersEvents.push(args);
});

const page = await context.newPage();
const consoleErrors = [];
const pageErrors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', (error) => pageErrors.push(error.message));

await page.goto(`${baseUrl}/extranjeros`, { waitUntil: 'networkidle' });
check('/extranjeros HTTP/document', await page.locator('h1').filter({ hasText: 'Seguro médico para extranjeros en España' }).isVisible());

const title = await page.title();
check('metadata title', title.includes('Seguro médico para extranjeros y colaboradores'));
check('metadata description', (await page.locator('meta[name="description"]').getAttribute('content'))?.includes('canal profesional'));
check('Open Graph title', (await page.locator('meta[property="og:title"]').getAttribute('content')) === 'Seguro médico para extranjeros | Valentín Protección Integral');
check('Open Graph image', (await page.locator('meta[property="og:image"]').getAttribute('content'))?.includes('/images/products/salud-extranjeros.png'));

const whatsappHref = await page.locator('a[href^="https://wa.me/34603448765"]').first().getAttribute('href');
check('WhatsApp number 34603448765', whatsappHref?.includes('34603448765'), whatsappHref || '');

const dgsfp = page.getByRole('link', { name: 'Consultar en el registro público de la DGSFP' }).first();
check('DGSFP href oficial', (await dgsfp.getAttribute('href')) === 'https://rrpp.dgsfp.mineco.es/Mediador');
check('DGSFP target blank', (await dgsfp.getAttribute('target')) === '_blank');
check('DGSFP rel noopener noreferrer', (await dgsfp.getAttribute('rel')) === 'noopener noreferrer');

await page.screenshot({ path: `${outDir}/01-hero-desktop.png`, fullPage: false });

const desktopOverflow = await overflow(page);
check('desktop no horizontal overflow', desktopOverflow.scrollWidth <= desktopOverflow.clientWidth, JSON.stringify(desktopOverflow));

await page.keyboard.press('Tab');
check('keyboard navigation focus exists', await page.evaluate(() => document.activeElement !== document.body));
check('focus visible', await visibleFocus(page));

await page.getByRole('link', { name: /Soy profesional/ }).click();
await page.waitForTimeout(700);
check('scroll desde segundo CTA del hero', await page.locator('#colaboradores').isVisible());
check('hash colaboradores after CTA', page.url().includes('#colaboradores'), page.url());
await page.screenshot({ path: `${outDir}/02-b2b-block.png`, fullPage: false });

await page.getByRole('textbox', { name: 'Nombre del profesional' }).fill('Profesional Demo');
await page.getByRole('textbox', { name: 'Empresa o entidad' }).fill('Entidad Demo');
await page.getByRole('textbox', { name: 'Correo profesional' }).fill('profesional@example.com');
await page.getByRole('textbox', { name: 'Nombre del cliente' }).fill('Cliente Demo');
await page.getByRole('textbox', { name: 'Contacto del cliente' }).fill('+34 600 000 000');
await page.getByRole('combobox', { name: 'Tipo aproximado de trámite' }).selectOption('estancia-estudios');
await page.getByLabel(/Confirmo que el cliente ha autorizado/).check();
await page.getByLabel(/Confirmo que no enviaré documentación sensible/).check();
await page.screenshot({ path: `${outDir}/03-form-filled.png`, fullPage: false });
await page.getByRole('button', { name: /Enviar derivación/ }).click();
await page.getByText('Solicitud recibida').waitFor({ timeout: 5000 });
check('formulario profesional success', await page.getByText('Solicitud recibida').isVisible());

const eventsAfterSubmit = await readEvents(page);
const actionCounts = eventsAfterSubmit.reduce((acc, event) => {
  const params = event[2] || {};
  if (event[0] === 'event' && event[1] === 'foreigners_partner' && params.action) {
    acc[params.action] = (acc[params.action] || 0) + 1;
  }
  return acc;
}, {});

for (const action of ['cta_click', 'section_view', 'form_start', 'form_submit']) {
  check(`analytics ${action}`, actionCounts[action] >= 1, JSON.stringify(actionCounts));
}
check('form_start not repeated by typing', actionCounts.form_start === 1, JSON.stringify(actionCounts));

await page.evaluate(() => {
  window.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href^="https://wa.me"], a[href^="mailto:"], a[href^="https://rrpp.dgsfp.mineco.es"]');
      if (link) event.preventDefault();
    },
    true,
  );
});

await page.locator('#colaboradores').getByRole('link', { name: 'WhatsApp' }).click();
await page.waitForTimeout(200);
await page.getByRole('link', { name: 'Email profesional' }).click();
await page.waitForTimeout(200);
await dgsfp.click();
await page.waitForTimeout(200);

const allEvents = await readEvents(page);
const allActionCounts = allEvents.reduce((acc, event) => {
  const params = event[2] || {};
  if (event[0] === 'event' && event[1] === 'foreigners_partner' && params.action) {
    acc[params.action] = (acc[params.action] || 0) + 1;
  }
  return acc;
}, {});

for (const action of ['whatsapp_click', 'email_click', 'dgsfp_click']) {
  check(`analytics ${action}`, allActionCounts[action] >= 1, JSON.stringify(allActionCounts));
}
check('analytics without personal data keys', allEvents.every((event) => {
  const params = event[2] || {};
  return !['professionalName', 'organization', 'professionalEmail', 'clientName', 'clientContact', 'procedureType'].some((key) => key in params);
}));

const direct = await context.newPage();
await direct.goto(`${baseUrl}/extranjeros#colaboradores`, {
  waitUntil: 'networkidle',
  referer: 'https://example.org/external-source',
});
check('direct external URL with #colaboradores', await direct.locator('#colaboradores').isVisible());
check('direct external URL keeps hash', direct.url().includes('#colaboradores'), direct.url());
await direct.close();

const mobile = await browser.newPage({ viewport: { width: 320, height: 900 } });
await mobile.goto(`${baseUrl}/extranjeros`, { waitUntil: 'networkidle' });
await mobile.screenshot({ path: `${outDir}/04-mobile-320.png`, fullPage: false });
const mobileOverflow = await overflow(mobile);
check('mobile 320 no horizontal overflow', mobileOverflow.scrollWidth <= mobileOverflow.clientWidth, JSON.stringify(mobileOverflow));
await mobile.close();

check('console sin errores', consoleErrors.length === 0, consoleErrors.join(' | '));
check('page errors absent', pageErrors.length === 0, pageErrors.join(' | '));

writeFileSync(`${outDir}/browser-validation.json`, JSON.stringify({ baseUrl, checks, consoleErrors, pageErrors, events: allEvents }, null, 2));

await browser.close();

if (failures.length) {
  console.error(`Browser validation failed:\n${failures.map((failure) => `- ${failure}`).join('\n')}`);
  process.exit(1);
}

console.log(`Browser validation passed. Artifacts: ${outDir}`);
