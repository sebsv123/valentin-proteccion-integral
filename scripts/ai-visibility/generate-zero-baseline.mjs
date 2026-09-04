import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const base = 'https://valentinproteccionintegral.com';
const origin = new URL(base).origin;
const out = 'docs/ai-visibility/baseline/zero';
const csv = (rows) => rows.map((row) => row.map((v) => `"${String(v ?? 'unknown').replaceAll('"', '""')}"`).join(',')).join('\n') + '\n';
const headers = ['url','route_exists','locale','http_status','final_url','redirect_hops','indexable','canonical','hreflang_es','hreflang_en','x_default','title','h1','meta_robots','x_robots_tag','robots_txt_allowed','crawl_policy','index_policy','classification','page_type','product','audience','content_language','schema_types','source_route','source_file','sitemap_present','sitemap_absence_classification','internal_inlinks','internal_outlinks','intent_label_provisional','intent_confidence','notes','discovered_via_sitemap','discovered_via_route_tree','discovered_via_i18n','discovered_via_internal_link','discovered_via_redirect_config'];
const pathnameUrl = (pathname) => { const url = new URL(pathname, base); return url.pathname === '/' ? base : url.href; };
const pathnameOf = (url) => new URL(url).pathname;
const localeOf = (url) => pathnameOf(url) === '/en' || pathnameOf(url).startsWith('/en/') ? 'en' : 'es';
const isPagePath = (pathname) => !pathname.startsWith('/api/') && !pathname.startsWith('/_next/') && !pathname.startsWith('/images/') && !pathname.startsWith('/static/') && !/\.[a-z0-9]{2,5}$/i.test(pathname);
const sitemapText = await (await fetch(`${base}/sitemap.xml`)).text();
const sitemapUrls = new Set([...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
const robotsText = await (await fetch(`${base}/robots.txt`)).text();
const disallows = [...robotsText.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);
const robotsAllowed = (url) => !disallows.some((rule) => rule && pathnameOf(url).startsWith(rule));
const redirectPaths = ['/seguros/accidentes','/seguros/accidentes/pyme-autonomos','/en/seguros/accidentes','/en/seguros/accidentes/pyme-autonomos','/para/autonomos','/para/autonomos/','/landing/autonomos','/sobre-mi','/sobre-mi/','/en/aviso-legal','/en/privacidad','/seguros/health-insurance-foreigners-spain'];
const redirectUrls = new Set(redirectPaths.map(pathnameUrl));
const routeFiles = [];
async function collectRoutes(dir = 'app') { for (const entry of await readdir(dir, { withFileTypes: true })) { const full = path.join(dir, entry.name); if (entry.isDirectory()) await collectRoutes(full); else if (entry.name === 'page.tsx') routeFiles.push(full); } }
await collectRoutes();
const routeTreeUrls = new Set();
for (const file of routeFiles) {
  const relative = path.dirname(file).replace(/^app/, '').replaceAll('\\', '/');
  if (relative.includes('/api') || relative.split('/').some((segment) => /^\[.*\]$/.test(segment))) continue;
  const segments = relative.split('/').filter(Boolean);
  if (segments[0] !== '[locale]') routeTreeUrls.add(pathnameUrl(relative || '/'));
}
const routingText = await readFile('i18n/routing.ts', 'utf8');
const i18nUrls = new Set();
const i18nRoutes = new Map();
for (const match of routingText.matchAll(/'([^']+)'\s*:\s*\{\s*es:\s*'([^']+)'\s*,\s*en:\s*'([^']+)'\s*\}/g)) { i18nRoutes.set(match[1], { es: match[2], en: match[3] }); i18nUrls.add(pathnameUrl(match[2])); i18nUrls.add(pathnameUrl(match[3].startsWith('/en') ? match[3] : `/en${match[3] === '/' ? '' : match[3]}`)); }
for (const match of routingText.matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)) { if (!i18nRoutes.has(match[1])) { i18nRoutes.set(match[1], { es: match[2], en: match[2] }); i18nUrls.add(pathnameUrl(match[2])); } }
for (const match of routingText.matchAll(/'\/[^']+'\s*:\s*'\/[^']+'/g)) { const pair = [...match[0].matchAll(/'([^']+)'/g)].map((m) => m[1]); if (pair.length === 2) i18nUrls.add(pathnameUrl(pair[1])); }
for (const url of [...i18nUrls]) if (pathnameOf(url).includes('[')) i18nUrls.delete(url);
for (const file of routeFiles) { const relative = path.dirname(file).replace(/^app/, '').replaceAll('\\', '/'); if (!relative.startsWith('/[locale]') || relative.includes('[')) continue; const key = `/${relative.split('/').slice(2).filter(Boolean).join('/')}` || '/'; const mapped = i18nRoutes.get(key); if (mapped) { routeTreeUrls.add(pathnameUrl(mapped.es)); routeTreeUrls.add(pathnameUrl(mapped.en.startsWith('/en') ? mapped.en : `/en${mapped.en === '/' ? '' : mapped.en}`)); } }
const seeds = new Set([...sitemapUrls, ...routeTreeUrls, ...i18nUrls, ...redirectUrls]);
const records = new Map(); const pages = new Map(); const provenance = new Map(); const queue = [...seeds];
const mark = (url, via) => { if (!provenance.has(url)) provenance.set(url, new Set()); provenance.get(url).add(via); };
for (const url of sitemapUrls) mark(url, 'sitemap'); for (const url of routeTreeUrls) mark(url, 'route_tree'); for (const url of i18nUrls) mark(url, 'i18n'); for (const url of redirectUrls) mark(url, 'redirect_config');
async function fetchPage(inputUrl) { let url = inputUrl; let response; let hops = 0; for (; hops < 10; hops += 1) { response = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'VPI-AI-Visibility-Baseline/0.1' } }); if (![301,302,303,307,308].includes(response.status)) break; const location = response.headers.get('location'); if (!location) break; url = new URL(location, url).href; } const body = response.headers.get('content-type')?.includes('text/html') ? await response.text() : ''; return { response, finalUrl: response.url || url, hops, body }; }
async function worker() {
  while (queue.length) {
    const url = queue.shift(); if (records.has(url)) continue;
    try {
      const { response, finalUrl, hops, body } = await fetchPage(url);
      const canonical = body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1] ?? body.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1] ?? 'unknown';
      const alts = Object.fromEntries([...body.matchAll(/<link[^>]+rel=["']alternate["'][^>]+hrefLang=["']([^"']+)["'][^>]+href=["']([^"']+)/gi)].map((m) => [m[1], m[2]]));
      const title = body.match(/<title>(.*?)<\/title>/is)?.[1]?.replace(/<[^>]+>/g, '').trim() ?? 'unknown'; const h1 = body.match(/<h1[^>]*>(.*?)<\/h1>/is)?.[1]?.replace(/<[^>]+>/g, '').trim() ?? 'unknown';
      const metaRobots = body.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)/i)?.[1] ?? body.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']robots["']/i)?.[1] ?? 'unknown';
      const xRobots = response.headers.get('x-robots-tag') ?? 'unknown'; const isRedirect = [301,302,303,307,308].includes(response.status) || hops > 0; const indexable = isRedirect ? 'no' : /noindex/i.test(`${metaRobots} ${xRobots}`) ? 'no' : 'yes';
      const classification = isRedirect ? 'public_redirects' : response.status === 200 && indexable === 'yes' ? 'public_indexable_200' : response.status === 200 ? 'public_noindex_200' : response.status >= 400 && response.status < 500 ? 'public_4xx' : 'public_other';
      const absentIntentional = classification === 'public_redirects' || classification === 'public_noindex_200' || pathnameOf(url).startsWith('/landing/') || pathnameOf(url) === '/gracias';
      const absence = sitemapUrls.has(url) ? 'sitemap_present' : absentIntentional ? 'sitemap_absent_intentional' : 'sitemap_absent_unexpected';
      const notes = pathnameOf(url).startsWith('/landing/') && response.status === 200 ? 'Campaign route deliberately excluded from sitemap; indexable state retained for F2.' : classification === 'public_noindex_200' ? 'Deliberate non-indexable public utility/legal surface; no F0 correction.' : isRedirect ? 'Redirect entrypoint retained for public-surface accounting.' : '';
      records.set(url, { url, locale: localeOf(url), status: response.status, finalUrl, hops, indexable, canonical, alts, title, h1, metaRobots, xRobots, robotsAllowed: robotsAllowed(url) ? 'yes' : 'no', classification, absence, notes, body }); if (body) pages.set(url, body);
      for (const match of body.matchAll(/href=["']([^"'#]+)(?:[#'"])/gi)) { let target; try { target = new URL(match[1], url); } catch { continue; } if (target.origin !== origin || !isPagePath(target.pathname)) continue; const targetUrl = pathnameUrl(target.pathname); mark(targetUrl, 'internal_link'); if (!records.has(targetUrl)) queue.push(targetUrl); }
    } catch (error) { records.set(url, { url, locale: localeOf(url), status: 'unknown', finalUrl: 'unknown', hops: 'unknown', indexable: 'unknown', canonical: 'unknown', alts: {}, title: 'unknown', h1: 'unknown', metaRobots: 'unknown', xRobots: 'unknown', robotsAllowed: robotsAllowed(url) ? 'yes' : 'no', classification: 'public_other', absence: 'sitemap_absent_unexpected', notes: String(error), body: '' }); }
  }
}
await Promise.all(Array.from({ length: 6 }, worker));
const inlinks = new Map([...records.keys()].map((url) => [url, 0])); const edges = [['source_url','target_url','source_locale','target_locale','link_context','internal_external','target_status','target_canonical']];
for (const [source, html] of pages) for (const match of html.matchAll(/href=["']([^"'#]+)(?:[#'"])/gi)) { let target; try { target = new URL(match[1], source); } catch { continue; } if (target.origin !== origin || !isPagePath(target.pathname)) continue; const targetUrl = pathnameUrl(target.pathname); if (!records.has(targetUrl)) continue; const record = records.get(targetUrl); inlinks.set(targetUrl, (inlinks.get(targetUrl) ?? 0) + 1); edges.push([source, targetUrl, localeOf(source), localeOf(targetUrl), 'html link', 'internal', record.status, record.canonical]); }
const inventory = [headers];
for (const record of records.values()) { const via = provenance.get(record.url) ?? new Set(); const sourceFile = routeFiles.find((file) => { const rel = path.dirname(file).replace(/^app/, '').replaceAll('\\', '/'); return record.url === pathnameUrl(rel || '/') || (rel.startsWith('/[locale]') && i18nUrls.has(record.url)); }) ?? 'unknown'; inventory.push([record.url,routeTreeUrls.has(record.url) || i18nUrls.has(record.url) ? 'yes' : 'no',record.locale,record.status,record.finalUrl,record.hops,record.indexable,record.canonical,record.alts.es ?? 'unknown',record.alts.en ?? 'unknown',record.alts['x-default'] ?? 'unknown',record.title,record.h1,record.metaRobots,record.xRobots,record.robotsAllowed,record.robotsAllowed === 'yes' ? 'allowed' : 'disallowed',record.indexable === 'no' ? 'noindex_or_redirect' : 'index',record.classification,'unknown','unknown','unknown',record.body.match(/<html[^>]+lang=["']([^"']+)/i)?.[1] ?? 'unknown','unknown','unknown',sourceFile,sitemapUrls.has(record.url) ? 'yes' : 'no',record.absence,inlinks.get(record.url) ?? 0,edges.filter((edge) => edge[0] === record.url).length,'unknown','unknown',record.notes,via.has('sitemap') ? 'yes' : 'no',via.has('route_tree') ? 'yes' : 'no',via.has('i18n') ? 'yes' : 'no',via.has('internal_link') ? 'yes' : 'no',via.has('redirect_config') ? 'yes' : 'no']); }
await mkdir(out, { recursive: true }); await writeFile(`${out}/url-inventory.csv`, csv(inventory)); await writeFile(`${out}/url-edges.csv`, csv(edges));
const counts = Object.fromEntries([...records.values()].reduce((map, record) => map.set(record.classification, (map.get(record.classification) ?? 0) + 1), new Map())); const uniqueEdges = new Set(edges.slice(1).map((edge) => `${edge[0]}\t${edge[1]}`));
console.log(JSON.stringify({ total: records.size, counts, sitemap_present: sitemapUrls.size, sitemap_absent_intentional: [...records.values()].filter((record) => record.absence === 'sitemap_absent_intentional').length, sitemap_absent_unexpected: [...records.values()].filter((record) => record.absence === 'sitemap_absent_unexpected').length, raw_link_occurrences: edges.length - 1, unique_directed_edges: uniqueEdges.size, unique_targets: new Set(edges.slice(1).map((edge) => edge[1])).size }, null, 2));
