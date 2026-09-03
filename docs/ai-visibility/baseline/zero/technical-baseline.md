# Technical baseline

Captured before intervention at `21fb6cdb079722e5a0e4d851bd3abd6ad70dee27`.

The complete public-surface inventory contains 155 deduplicated URLs: 136 sitemap URLs, 12 known redirects, and 8 additional public 200/utility or legal URLs, with `/` as the sole sitemap/redirect overlap. It contains 136 indexable 200 pages, 7 deliberate noindex 200 pages, 12 redirects and no other statuses. The completeness universe is the deduplicated union of sitemap, public route tree, i18n mappings, observed internal links and known redirect configuration; sitemap membership is not a completeness criterion.

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
| Public noindex | PASS | Public sample is index/follow; private/legal policy remains out of scope. |
| SSR textual content | PASS | Titles, headings and JSON-LD observable in HTML. |
| Public surface coverage | WARNING | `/landing/asesoria-gratuita` is public 200/index-follow but absent from sitemap; deliberate legal/utility pages are now represented as non-indexable nodes. |

Known debts, not fixed in F0: mojibake in `app/zonas/**` source; Accident internal pathnames remain ES-like although public URLs work. Neither is automatically a public FAIL.
