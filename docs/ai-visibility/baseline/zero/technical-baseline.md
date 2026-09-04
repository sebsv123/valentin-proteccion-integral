# Technical baseline

Captured before intervention at `b9e25b58826473838c72c096c2258b8fef68b40e`.

The complete public-surface inventory contains 167 deduplicated URLs: 136 sitemap URLs, 12 known redirects, 7 deliberate noindex 200 pages, 1 campaign 200 and 11 additional indexable 200 pages discovered from the route tree/internal-link crawl. It contains 148 indexable 200 pages, 7 noindex 200 pages, 12 redirects and no 4xx/other statuses. The completeness universe is the deduplicated union of sitemap, public route tree, i18n mappings, observed internal links and known redirect configuration; sitemap membership is not a completeness criterion.

| Area | Status | Observation |
|---|---|---|
| HTTP/HTML/UTF-8 | PASS | Public pages serve textual SSR HTML with `charset=utf-8`. |
| robots.txt | PASS | `Allow: /`; `/gracias` and `/api/` excluded; no `/_next/` exclusion. |
| OAI-SearchBot | PASS | Allowed by the wildcard group; no observed HTTP challenge. |
| Googlebot/Bingbot | UNKNOWN | Policy is observable, crawler logs/coverage are not connected. |
| Sitemap | PASS | XML endpoint available and referenced by robots. |
| i18n | PASS | ES uses no `/es`; EN uses `/en`. |
| Canonical/hreflang | WARNING | Some legacy/product entities intentionally have no equivalent locale. |
| Redirects | WARNING | Historical redirects and internal Accident pathname debt remain. |
| Public noindex | PASS | Seven public 200 pages are explicitly noindex: six legal pages and `/gracias`; legal exclusions are deliberate. |
| SSR textual content | PASS | Titles, headings and JSON-LD observable in HTML. |
| Public surface coverage | WARNING | 11 public indexable 200 URLs are absent from sitemap and require future sitemap/routing decisions; the campaign is deliberately excluded and retained as an F2 anomaly. |

## Completeness and policy dimensions

`all_public_urls` is the deduplicated set of HTTP-publicly-resolvable page URLs identified from sitemap, public routing, the `app/` route tree, typed catalogs, `Header`, `Footer`, observed internal HTML links and configured redirects, independently of indexability. APIs, `/_next`, static assets, dev-only routes and non-page files are excluded.

Each inventory row records multi-source provenance (`discovered_via_*`). `robots_txt_allowed`/`crawl_policy` and `meta_robots`/`x_robots_tag`/`index_policy` are separate dimensions. `/gracias` is `robots.txt` disallowed and also metadata-noindex; disallow alone was not treated as noindex.

The seven requested legal/utility URLs are 200, noindex, sitemap-absent intentional. The 11 additional indexable pages are `sitemap_absent_unexpected`: nine product subpages, `/seguros/salud/extranjeros` and `/zonas/las-rozas`. No F0 production correction was made.

Graph after expansion: 14,419 raw internal link occurrences, 4,916 unique directed edges and 155 unique targets. Nodes with zero internal inlinks are intentional redirects/utilities plus `/garantias` (orphan candidate); none was repaired in F0.

Known debts, not fixed in F0: mojibake in `app/zonas/**` source; Accident internal pathnames remain ES-like although public URLs work. Neither is automatically a public FAIL.
