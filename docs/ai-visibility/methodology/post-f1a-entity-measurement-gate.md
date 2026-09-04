# Post-F1A Entity Measurement Gate

## Purpose and causal sequence

This gate measures the effect of the on-site F1A correction before applying
any external corroboration treatment. The sequence is immutable for this
comparison:

```text
PRE-F1 ENTITY BASELINE
        ↓
F1A ON-SITE ENTITY CORRECTION
        ↓
POST-F1A ENTITY MEASUREMENT  ← this gate
        ↓
F1B EXTERNAL CORROBORATION CORRECTIONS
        ↓
POST-F1B ENTITY MEASUREMENT
```

F1B audit findings are treatment-design evidence only. Until this gate closes,
there must be no LinkedIn, Crunchbase, TodoEnlaces, Rankia, insurer-profile or
other external-source correction, and no additional on-site entity change.

## Measurement set

Repeat exactly the canonical Entity prompts used in the pre-F1 measurement:

- E01-A
- E02-A
- E03-A
- E04-A
- E05-A
- E06-A

Run each prompt with the same prompt text, variant, engine/surface and
annotation rubric across:

- ChatGPT
- Google generative search surface
- Microsoft Copilot
- Perplexity

Do not create new wording, alter the human ground truth, or modify historical
baseline rows. The expected set is 24 attempted runs. The pre-F1 E04 Copilot
protocol-failed run remains failed/missing for matched substantive comparison;
no rerun is implied by this gate.

## Readiness snapshot

Do not impose an arbitrary fixed waiting period as scientific truth. Open the
gate only after a dated readiness snapshot shows that F1A signals are publicly
observable and potentially retrievable. Record these fields separately:

- `production_live_since`: earliest defensible time the F1A production version
  was observed live, using deployment/Git metadata where available.
- `post_f1a_measurement_timestamp`: UTC timestamp at which the measurement
  set begins or is closed, recorded independently of chat message timestamps.

The readiness snapshot must check:

- F1A production remains live at the current production commit.
- Canonical URLs return HTTP 200.
- Corrected Spanish and English visible copy remains present.
- Corrected JSON-LD remains present, including both founder edges.
- No rollback has occurred.
- Search/index surfaces show refreshed VPI pages where observable.

Failure to confirm search-engine recrawl is not evidence of recrawl. Record
`recrawl_status=unknown` when refreshed search/index evidence is unavailable;
do not silently convert it to confirmed recrawl.

## Annotation and comparison

Reuse the frozen pre-F1 semantics. Preserve separate fields for:

- `retrieval_observed`
- `vpi_mentioned`
- `vpi_cited`
- `entity_correct`
- `service_correct`
- `absorption_observed`
- founder equality
- Sebastián discovery
- Sebastián regulatory-role association
- brokerage misclassification
- wrong-entity resolution

Compare at the individual-run level before any aggregation. Do not collapse
these dimensions into a composite GEO score. Do not calculate performance rates
until the measurement set and its provenance are complete and validated.

## Gate criteria

The gate is ready to execute when:

1. The readiness snapshot is recorded with its evidence and unknowns.
2. The exact 24-run manifest is generated from E01-A through E06-A.
3. Every run has the prospective critical capture metadata and artifact
   contract required by the Zero Baseline protocol.
4. The same four-engine order and independent-conversation policy are confirmed.
5. QA selection is generated prospectively and covers the designated Entity
   sample without selecting after observing results.
6. F1B external treatment candidates remain marked deferred.

The gate closes only after all attempted runs are accounted for, failed or
contaminated runs are explicitly preserved, raw evidence hashes validate, and
the comparison dataset is frozen. Only then may the separate F1B intervention
be authorized.
