# F0-B2 · Zero Benchmark Capture Pilot

This pilot validates the path `prompt → engine → response → capture → annotation → source landscape → QA → dataset`. It is an instrumentation pilot, not a visibility study. Do not calculate rates, rankings, engine comparisons, winners or competitive conclusions from these 12 runs.

## Scope and fixed order

Run exactly the canonical prompts E01, F01 and N01, once on each surface, in this order:

1. E01 on ChatGPT, Google AI Mode / available generative surface, Microsoft Copilot, Perplexity.
2. F01 on ChatGPT, Google AI Mode / available generative surface, Microsoft Copilot, Perplexity.
3. N01 on ChatGPT, Google AI Mode / available generative surface, Microsoft Copilot, Perplexity.

The deterministic IDs and sequence are in `docs/ai-visibility/results/pilot-v0-manifest.csv`. Do not use variant B/C. Record one UTC timestamp per run.

## Clean-context rules

### ChatGPT

- Do not use this conversation.
- Do not use the “Agente Seguros” project.
- Use a new conversation for every run, preferably Temporary Chat or an equivalent session without memory.
- Do not use stored VPI context, personalization or memory.
- Record whether web search/search was active.
- Do not mention VPI unless the prompt itself does (E01).

### Google

- Start a new query for every run.
- Record logged-in/logged-out state, the exact surface shown and whether AI Overview/AI Mode appeared.
- Do not repeat or insist until a generative surface appears. Traditional results without AI output are valid data.

### Microsoft Copilot

- Start a new chat for every run and do not reuse previous conversation context.
- Record whether search/web grounding is visibly active.

### Perplexity

- Start a new thread for every run.
- Record the observable mode/surface.
- Do not use follow-ups.

## Geography and account context

Record only what is actually observable or known by the operator: `observed_country`, `browser_language`, `logged_in`, `account_context` and `memory_context`. If the operator is executing from Spain and that is genuinely known, use `observed_country=Spain`; never infer location from an unexplained platform result.

## One opportunity

Submit the prompt exactly once. Do not reformulate, follow up, ask the engine to search the web, regenerate, retry because the result is unattractive, or switch surfaces after seeing the response. If no AI answer or citations appear, record that result. A CAPTCHA, network error, rate limit, broken UI or incomplete capture is `capture_quality=failed`, with the cause in `notes`; it is not a zero for VPI.

## Capture procedure

Store local, unversioned evidence under `artifacts/ai-visibility/f0-zero/pilot/<run_id>/`:

```text
screenshot.png     # when available
response.txt       # complete initial response, before opening sources
sources.txt        # visible source list, after response capture
metadata.yaml      # run context and capture quality
```

First save the complete response. Then inspect or capture the visible sources. Do not click a source before saving the initial response if the click may alter the interface. `capture_ref` and `response_capture_ref` point to the local run folder/file; they must not be left pending after execution.

## Annotation decision tree

Annotate only what the response visibly supports.

A. Does “Valentín Protección Integral” or VPI appear by name? Yes → `vpi_mentioned=yes`; otherwise `no`.

B. Is there an explicit link or attribution to `valentinproteccionintegral.com`? Yes → `vpi_cited=yes`; otherwise `no` when the captured response establishes that there is no such visible citation.

C. Does the answer propose VPI as a place/provider to use or contact? Yes → `vpi_recommended=yes`. An informative citation is not a recommendation.

D. Evaluate `entity_correct` only when VPI appears. If VPI does not appear, `unknown`.

E. Evaluate `service_correct` with the same rule: only when VPI appears; otherwise `unknown`.

F. Set `absorption_observed=yes` only with reasonable evidence that the answer uses differentiated information attributable to VPI. If uncertain, `unknown`.

The seven observational dimensions (`ai_surface_present`, `retrieval_observed`, `vpi_mentioned`, `vpi_cited`, `vpi_recommended`, `entity_correct`, `service_correct`, plus `absorption_observed`) use `yes`/`no`/`unknown` after execution. Before execution they remain `pending`.

## Position rules

`mention_position` is the ordinal position among explicitly named entities/providers, when applicable. `citation_position` is the ordinal position of VPI’s source in the visible ordered source list. If the UI gives no interpretable order, record `unknown`; do not infer order from ambiguous visual layout.

For Google, if no AI Overview/AI Mode appears, set `ai_surface_present=no` and `retrieval_observed=unknown` unless the UI gives explicit retrieval evidence. Do not repeat the run.

## Sources and source landscape

Add one row to `source-landscape-pilot-v0.csv` only for a source visibly shown by the platform. Record its domain, exact URL when available, type, cited/mentioned state and position. Do not infer internal retrieval from a source that the platform does not display.

## QA

After all 12 runs, second-review at least three runs selected deterministically as `P0-E01-GOOGLE`, `P0-F01-COPILOT` and `P0-N01-PERPLEXITY`. Keep the original annotation, document the review and set `qa_disagreement=yes` when values differ. Resolve discrepancies explicitly; do not silently overwrite the first pass. The acceptance target is at least 3 runs with QA, every run registered, every run with a capture reference, failed captures identified as failed, and every visible source representable without material ambiguity.

## Files and pre/post state

Before execution, all 12 rows in `pilot-v0-manifest.csv` and `pilot-v0.csv` are `pending`; `source-landscape-pilot-v0.csv` contains only its header. After execution, update only the result fields and evidence references. Keep raw artifacts out of Git. Do not modify runtime or production. Do not run external prompts from the contaminated Foundation conversation.
