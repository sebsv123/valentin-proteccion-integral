# Post-F1A Entity Readiness Snapshot · 2026-09-04

## Decision

**NOT READY — RECHECK LATER**

Production is correct and live, but publicly observable search/index evidence
still contains stale pre-F1A snippets. Production observability is therefore
not treated as proof of refreshed retrieval.

## Timing

- `production_live_since`: `2026-09-04T18:31:35+02:00` (production commit
  `0fc2889672864ebee2724a3286fd500e846f79a5`)
- `post_f1a_readiness_snapshot_timestamp`: `2026-09-04T19:08:11+02:00`
- elapsed exposure at snapshot: `36m 36s`
- `post_f1a_measurement_timestamp`: not started

The deployment timestamp is the production Git commit timestamp; no exact
provider-side deployment timestamp was available. No chat timestamp was used.

## Production integrity

Checked read-only at:

- `/` — HTTP 200, corrected visible copy, canonical/hreflang/OG present,
  corrected JSON-LD present.
- `/en` — HTTP 200, corrected visible copy, canonical/hreflang/OG present,
  corrected JSON-LD present.
- `/sobre-nosotros` — HTTP 200, equal co-founder copy, individual
  Adeslas/ASISA relationships, canonical/hreflang/OG and corrected JSON-LD.
- `/en/about-us` — HTTP 200, semantic parity with Spanish page, canonical/
  hreflang/OG and corrected JSON-LD.

The generated graph observed on all four routes is:

```text
VPI / InsuranceAgency
├── founder → Rosa Isabel Valentín González
└── founder → Sebastián Sifontes Valentín
```

The insurer relationships remain on the individual Person descriptions:
Rosa → SegurCaixa Adeslas and Sebastián → ASISA. No rollback was observed.

## Search/index refresh evidence

| Surface | State | Evidence |
|---|---|---|
| Google/web search result for VPI | stale | Indexed snippet still contains older “Socia fundadora”, “Socio · Especialista”, and “Agentes registrados” wording. |
| Search result for `/sobre-nosotros` | stale | Result was crawled days earlier and exposes pre-F1A asymmetric wording. |
| Search result for VPI + Sebastián + ASISA | unknown | No reliable result exposing the corrected two-person graph was returned. |
| Search result for English `/en/about-us` | unknown | No refreshed result proving the corrected English graph was observed. |
| Production HTML/JSON-LD | refreshed | Direct HTTP reads expose the F1A graph and corrected metadata. |

Search/index recrawl is not confirmed. The stale snippets are evidence against
readiness, while the unknown surfaces remain unknown rather than being treated
as refreshed.

## Next action

Recheck search/index surfaces later. Do not run the 24 post-F1A engine captures
until a new readiness snapshot either observes refreshed retrieval evidence or
records an explicit methodological decision to proceed despite unknown recrawl
status. Do not apply F1B external corrections before the post-F1A measurement.
