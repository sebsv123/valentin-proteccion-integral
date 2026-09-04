# F0 Zero Baseline · Operational Runbook v0

## Scope and frozen pilot boundary

F0-B2 is immutable historical pilot evidence. Its 12 `P0-*` run IDs, local artifacts and hashes must not be reused or altered. The pilot validates instrumentation only; it is not part of zero-baseline performance metrics and must not be combined with baseline observations. Future runs use only the separate `Z0-*` namespace.

F0 does not modify production behavior, public content, SEO, schema, sitemap or routing. No finding from the pilot or baseline is corrected during capture.

## Frozen design

The prompt registry has 30 canonical prompt IDs. Every prompt receives variant `A`, which is its canonical prompt. The fixed 12 Sentinel IDs receive variants `B` and `C` as well:

`E01, E03, E05, F01, F04, F07, F08, F10, F11, F12, C01, N01`.

Layer A is 30 × 4 = 120 runs. Layer B is 12 × 2 × 4 = 96 runs. The maximum baseline is therefore 216 runs. Run IDs are deterministic:

`Z0-<PROMPT_ID>-<VARIANT>-<ENGINE>`

The four engines are executed in this order for every prompt/variant group:

1. ChatGPT
2. Google generative search surface
3. Microsoft Copilot
4. Perplexity

Do not run all prompts for one engine before moving to the next engine. Complete and validate the four-engine group before advancing to the next group.

## Clean execution context

Use a new conversation/thread for every run. For ChatGPT use Temporary Chat or an equivalent context without VPI memory, project context or personalization. Do not use this conversation or the Agente Seguros project. Record whether web/search grounding is active. Do not mention VPI except when it appears in the prompt.

For Google, start a new query, record logged-in state and the exact surface shown, and do not repeat the query to provoke an AI Overview. For Copilot, use a new chat and record visible search/web grounding. For Perplexity, use a new thread, record the observable mode/surface and do not use follow-ups.

Record execution-time metadata; do not use `unknown` for an observable field:

`run_id`, `prompt_id`, `variant_id`, exact prompt, engine, engine surface, UTC timestamp, browser language, observed country, account context, memory context, location context, location context source, observed locality when present, search enabled, AI surface present, capture quality, annotator and capture reference.

`retrieval_observed` may be `unknown` when the platform does not expose retrieval evidence. `location_context_source` is one of `prompt_explicit`, `response_inferred`, `platform_observed`, `unknown`; do not claim GPS, browser or account localization without direct evidence.

## One-opportunity rule

Submit each exact prompt exactly once. Do not reformulate, follow up, request web search, regenerate, switch surface after seeing the result or repeat because VPI is absent. If no AI surface or citations appear, record that state. A CAPTCHA, rate limit, network error, broken UI or incomplete capture is `capture_quality=failed`, never an observation of VPI absence.

## Capture contract

Each run uses:

`artifacts/ai-visibility/f0-zero-baseline/<RUN_ID>/`

`response.txt` and `capture-meta.json` are mandatory. `response.txt` contains the complete literal interface response, including visible titles, lists, tables and URLs. Capture the response before opening any source that could change the interface. `capture-meta.json` stores the run identity, capture type, completeness, context metadata and SHA-256 of `response.txt`.

Use `capture_type=visual_raw_capture` for a screenshot/raw dump and `capture_type=manual_verbatim_transcription` only for a literal operator transcription. Do not reconstruct or enrich either artifact from the source landscape.

Require `screenshot.png` when visual state is material: Google AI cards/overviews, map or local packs, source carousels, visual rankings, UI structure that cannot be represented faithfully in text, or a QA disagreement. A purely textual response may use a complete verbatim transcription when source and position evidence are unambiguous. Raw captures are ignored by Git.

## Batches and checkpoints

The generated batch plan uses nine deterministic batches of six prompt/variant groups, 24 runs per batch. Each batch has exactly six groups, each group has the four engine runs in the frozen order. The batch fields are `batch_id`, group sequence, exact prompt, run IDs, completion state and validation state.

Recommended execution:

1. Work one group at a time in engine order.
2. Complete the four artifacts and dataset rows for the group.
3. Validate capture references, metadata and hashes before the next group.
4. Mark the batch complete only when all six groups pass the checkpoint.
5. Never mix unregistered runs with closed runs.

## Annotation rubric

Keep dimensions separate:

- `retrieval_observed`: `yes|no|unknown`; do not infer `no` from non-appearance.
- `vpi_mentioned`: VPI appears by name.
- `vpi_cited`: an explicit link or attribution to `valentinproteccionintegral.com` exists.
- `vpi_recommended`: the response proposes VPI as a provider/place to use; an informational citation alone is not recommendation.
- `entity_correct`: evaluate only when VPI appears; otherwise `unknown`.
- `service_correct`: evaluate only when VPI appears; otherwise `unknown`.
- `absorption_observed`: `yes` only with reasonable evidence of differentiated information attributable to VPI; otherwise `unknown` when uncertain.

`mention_position` is ordinal among explicitly named entities/providers. `citation_position` is ordinal among visible ordered source citations. Use `unknown` where the UI has no interpretable order. Do not create a composite GEO score.

## Source landscape

Record only sources visibly supplied by the platform. Do not infer hidden retrieval. The separate `source-landscape-zero-baseline-v0.csv` stores `run_id`, prompt, variant, engine, domain, normalized URL, source type, cited, mentioned, position and notes. Normalize tracking parameters and duplicate occurrences only in this analytical layer; preserve every raw URL in the run artifact. This is private competitive intelligence and is not published or enriched during F0.

## Prospective QA

The pre-generated QA sample contains 44 of 216 runs, approximately 20.4%, selected reproducibly by manifest ordinal modulo 5. QA selection is fixed before observing results and covers all four engines, Entity, Foreigners, future controls, negative controls, Layer A and Layer B. QA is a second-pass review only; do not execute it until the corresponding primary capture exists, and do not silently overwrite first-pass values. Record disagreement and resolution explicitly.

## Validation and metrics boundary

Before execution run `npm run test:zero-baseline-kit`. It checks the frozen registry, exact run counts, Sentinel restriction, engine combinations, unique/non-overlapping IDs, deterministic capture paths, dataset schema, batch plan, source-landscape schema and QA sample.

After each batch, rerun the validator and the relevant capture/hash checks. No Mention Rate, Citation Rate, Recommendation Rate, Correct Entity Rate, Correct Service Rate, Absorption Rate, source share, ranking or winner is calculated until the complete zero baseline is closed and validated.

