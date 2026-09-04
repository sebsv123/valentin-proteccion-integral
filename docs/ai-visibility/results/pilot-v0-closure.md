# F0-B2 · Zero Benchmark Capture Pilot Closure

## Verdict

**PILOT PASS · READY FOR BASELINE**

All 12 historical runs have complete operator-supplied manual verbatim transcriptions, capture metadata, matching SHA-256 hashes and real capture references under `artifacts/ai-visibility/f0-zero/<RUN_ID>/`. No screenshot was manufactured, and no metadata or source URL was invented. The three designated QA rows are complete.

This is an instrumentation/data-completeness verdict only. No production, runtime, SEO, sitemap, schema, routing or content change is recommended or made from these observations. No rates, rankings or statistical conclusions were calculated.

## Registered observation

`P0-N01-PERPLEXITY` retains the supplied annotation: no VPI mention/citation/recommendation, unknown retrieval/entity/service/absorption, and response-inferred `Madrid` locality. Its literal response and metadata are hash-validated like the other 11 runs.

## Designated QA

| Run | Independent QA observation | QA state |
|---|---|---|
| `P0-E01-GOOGLE` | VPI mentioned `yes`; cited `yes`; entity correctness `no`. The response associates Rosa Isabel Valentín González with SegurCaixa Adeslas and uses broader agency/mediation language requiring entity-truth review. Mention position remains `unknown`. | complete |
| `P0-F01-COPILOT` | VPI mentioned `yes`; cited `no`; recommended `yes`; retrieval `unknown`; service correct `yes`; entity and absorption `unknown`. Boadilla del Monte appears although the prompt contains no location. Mention position remains `unknown`. Locality is response-inferred. | complete |
| `P0-N01-PERPLEXITY` | VPI mentioned/cited/recommended `no`; retrieval/entity/service/absorption `unknown`. Madrid-specific options appear although the prompt contains no location. Locality is response-inferred. | complete |

## Completeness and unresolved fields

All 12 deterministic run IDs are present and unique, with the canonical prompts and intended order. The core observational fields are complete as `yes`/`no`/`unknown`. All 12 capture references point to existing operator-supplied `response.txt` files, and all 12 `capture-meta.json` hashes match their current files.

The source landscape contains 58 rows after analytical normalization/deduplication: 29 previously recorded rows plus 29 N01 source observations. N01 map/CDN URLs, directions URLs and internal RefIds were retained only in raw transcripts and excluded from documentary source rows. URLs were not browsed, resolved or enriched. Duplicate tracking parameters and repeated occurrences were normalized only in the analytical layer.

## Qualitative instrumentation observations

The supplied records demonstrate the schema can represent branded mention/citation, recommendation without a VPI citation, observable versus unknown retrieval, entity inaccuracies, unbranded non-appearance, negative-control non-appearance, different source classes when provided, and response-inferred locality/context. These are examples of representable states, not pilot performance findings.

## Schema change

Added three optional columns to `pilot-v0.csv`:

- `observed_locality`
- `location_context`: `yes|no|unknown`
- `location_context_source`: `prompt_explicit|response_inferred|platform_observed|unknown`

Only the two supplied locality observations were backfilled, both as `response_inferred`; all other rows remain `unknown` unless their supplied capture directly establishes locality.

## Validation

`npm run test:pilot-kit` passes with zero hard errors and zero unresolved fields. It verifies 12 rows, unique IDs, canonical prompts, valid run ordering/enums, source-landscape foreign keys, local source provenance, all 12 capture references and all 12 SHA-256 hashes. Permitted historical warnings remain for absent screenshots and unavailable timestamp/context metadata. `git diff --check` passes. No consumer engine or external search was executed.

## Prospective baseline rule

Future full-baseline runs must capture execution-time context: run ID, exact prompt, engine/surface, timestamp, language, observed country, account/login context, response, visible sources and observable locality/context. Screenshots remain additionally required when interpretation depends on visual UI state, including Google AI cards/overviews, maps/local packs, source carousels, visual rankings or QA disagreements. This historical exception does not weaken those prospective requirements.
