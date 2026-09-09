# F7 · Measurement & Experimentation Engine

## Status

`F7 MEASUREMENT & EXPERIMENTATION ENGINE CLOSED`

This is a lean measurement contract for decisions after Foundation. It does
not replace the Z0 dataset, the partial Z1 diagnostic, or any historical
capture. It does not define a composite GEO score.

Operating rule:

`MEASURE → DECIDE → ACT`

## Existing analytics stack

The repository already contains:

- Google Tag Manager container `GTM-TNB5FR4W`, loaded only after accepted
  optional-cookie consent.
- GA4-compatible `gtag` and `dataLayer` event helpers. The GA4 property and
  production tag configuration live in the GTM environment; no separate GA4
  integration or credentials are added by F7.
- Vercel Analytics, also rendered only after accepted consent.
- Optional Microsoft Clarity and Meta Pixel, controlled by environment
  variables and loaded only after accepted consent.
- UTM capture in session storage (`utm_source`, `utm_medium`, `utm_campaign`,
  `utm_term`, `utm_content`).
- Lead payload provenance fields: landing/page URL, raw referrer and UTM data.
- Existing events for WhatsApp/contact clicks, form start, form submit,
  lead-form submit, Adeslas-agent clicks and professional-referral actions.

No Search Console API integration or credentials were found. F7 therefore
defines Search Console as a manual/export input, not a new API project.

## Minimum measurement model

### A. Technical visibility

Record separately:

- canonical URL and HTTP status;
- indexability and robots state;
- sitemap inclusion;
- redirect/canonical defects;
- crawl or indexing warnings when observable.

The existing F2/F3 validators and rendered-route checks are the technical
source of truth. A technical pass does not imply search visibility.

### B. Search visibility

When Search Console data is available, import or record the native dimensions:

`query`, `landing_page`, `impressions`, `clicks`, `CTR`, `average_position`,
date range and country/device filters when relevant.

Do not infer AI exposure from a query or from a missing click. Search Console
data is search-surface evidence, not proof of an AI answer.

### C. AI referral traffic

Use actual referrer and UTM evidence only. The current site preserves raw
referrer/UTM data for lead provenance, but it does not yet maintain a separate
AI-referrer classifier for all visits.

Permitted analytical labels, when the raw referrer supports them:

- `chatgpt_referral`
- `perplexity_referral`
- `copilot_bing_referral`
- `google_referral_unclassified`
- `other_referral`
- `direct_or_unknown`

Known referrer domains may be grouped for reporting, but a missing referrer is
not evidence that no AI system influenced the visit. Google traffic must not be
labelled AI-generated unless the source evidence distinguishes that surface.

### D. AI answer observations

Use a fixed manual panel, with one observation record per engine/prompt:

- VPI retrieved or mentioned;
- VPI cited;
- canonical VPI page cited;
- entity interpretation correct;
- founder equality;
- Sebastián discovered;
- Sebastián regulatory-role association;
- brokerage misclassification;
- VPI-as-single-exclusive-agent misclassification;
- recommendation observed.

Retrieval, mention, citation and recommendation remain independent fields.
Citation absence is not retrieval absence. No synthetic or composite score is
created.

### E. Business outcomes

At the most reliable level currently available, connect:

- landing page and locale;
- CTA type: `whatsapp`, `phone`, `form`, `email`, `official_insurer_link`;
- form start and submit;
- lead submission;
- raw referrer and UTM provenance where consent and implementation permit.

Visits and leads can be related to canonical pages. Policy conversion remains
downstream and is not available as a reliable website event in this phase.

## Measurement hooks and privacy

Existing low-risk hooks are sufficient for the current stage. No new runtime
hook was required in F7.

Analytics events must contain only operational dimensions such as event name,
form identifier, product slug, CTA location, locale, page URL, UTM values and
referrer where permitted. They must never contain passport data, health data,
medical conditions, policy details, names, telephone numbers, email addresses,
free-text form contents or immigration-document contents.

Lead forms may transmit business/contact data to the existing lead endpoint for
fulfilment, but that is not an analytics event. The professional-referral form
also has an explicit sensitive-data confirmation and tracks only its form
identifier in analytics.

Consent remains a prerequisite for GTM, Vercel Analytics, Clarity and Meta
Pixel. F7 does not weaken the cookie banner or add a second analytics stack.

## Post-Foundation verification panel

Do not run this panel until Foundation is deployed, live-verified and has had a
reasonable propagation/indexing interval.

Maximum panel: `2 prompts × 4 engines = 8 observations`.

| Panel ID | Exact prompt | Engines |
|---|---|---|
| F7-ENTITY-ES | `¿Quién está detrás de Valentín Protección Integral y qué tipo de negocio de seguros es?` | ChatGPT, Google generative surface, Copilot, Perplexity |
| F7-ENTITY-EN | `Who runs Valentín Protección Integral and what type of insurance business is it?` | ChatGPT, Google generative surface, Copilot, Perplexity |

Protocol:

- Firefox;
- new independent query/conversation for every observation;
- clean context;
- operator annotator;
- exact prompt preserved;
- contextual metadata may remain unknown when unrecoverable;
- no follow-up, regeneration or retry for preferred citations;
- protocol contamination is preserved and excluded from substantive evaluation.

No 24-run replay is planned. Expand only if these eight observations reveal a
new unresolved issue that changes a decision.

## Future vertical registration

The first vertical is `V1 FOREIGNERS`. Before execution, freeze a small panel
containing only:

`target_intent → canonical_page → 3–5 representative questions → engines →
observation_date → independent result fields`.

No prompt inventory is generated by F7. Each vertical must freeze its own
questions before measurement begins.

## Cadence and causal discipline

Run verification after a meaningful intervention has propagated, when a known
incorrect surface appears refreshed, or when a material traffic/lead change
requires investigation. Do not run because a week passed or because an empty
spreadsheet cell exists.

A post-deployment change is an observed association, not proof that one
Foundation change caused it. Stronger causal interpretation requires a
pre-defined intervention, known deployment date, stable measurement definition,
comparable before/after observations and consideration of external changes.

## Foundation closure and handoff

Foundation is system-ready when the Entity model, technical eligibility,
canonical architecture, evidence-backed content, external corroboration plan
and lean measurement system are all in place. Perfect ranking or citation is
not a closure requirement.

Exact handoff:

1. Foundation code and methodology complete.
2. Run final validation.
3. Push `feat/ai-visibility-foundation` through the normal workflow.
4. Promote to production through the controlled clean-cherry-pick workflow.
5. Run the live smoke test.
6. Wait for observable propagation/indexing readiness; do not assume recrawl.
7. Run the fixed 8-observation Entity panel.
8. Freeze and begin the `V1 FOREIGNERS` panel only if the Entity result does
   not reveal a blocking unresolved issue.

The Z0 pre-F1 evidence remains complete historical evidence. The Z1
post-F1A measurement remains a partial diagnostic paused after E01-A; it is not
converted into a misleading aggregate rate.
