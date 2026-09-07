# Post-F1A Entity Readiness Snapshot #2 · 2026-09-06

## Decision

**READY FOR POST-F1A ENTITY MEASUREMENT**

This decision concerns readiness to measure the F1A on-site intervention. F1B
external corrections remain unapplied and deferred.

## Timing

- `production_live_since`: `2026-09-04T18:31:35+02:00` (production commit
  `0fc2889672864ebee2724a3286fd500e846f79a5`)
- `post_f1a_readiness_snapshot_timestamp`: `2026-09-06T14:34:43+02:00`
- elapsed F1A exposure at snapshot: `44h 03m 08s`
- `post_f1a_measurement_timestamp`: not started

The deployment timestamp is the production Git commit timestamp; no provider-
side deployment timestamp was available. No chat message timestamp was used.

## Production integrity

All four required routes returned HTTP 200 and still expose the F1A model:

- `/` — corrected Spanish copy, metadata, canonical/hreflang, OpenGraph and
  JSON-LD present.
- `/en` — corrected English copy, metadata, canonical/hreflang, OpenGraph and
  JSON-LD present.
- `/sobre-nosotros` — equal co-founder copy and individual Adeslas/ASISA
  relationships present.
- `/en/about-us` — semantic parity with Spanish and the same entity graph.

The observed generated graph remains:

```text
VPI / InsuranceAgency
├── founder → Rosa Isabel Valentín González
└── founder → Sebastián Sifontes Valentín
```

Rosa's Adeslas and Sebastián's ASISA relationships remain on the individual
Person nodes. No rollback was observed.

## Search/index observations

| Surface | Snapshot #1 | Snapshot #2 | Evidence |
|---|---|---|---|
| General VPI/About search | stale | refreshed | Search result now exposes the current About page and current legal/disclosure context. |
| `Valentín Protección Integral sobre nosotros` | stale | refreshed | Result exposes both people as co-founders and the equal-founder section. |
| English About-equivalent | unknown | refreshed | `/en/about-us` result exposes “co-founders” and the corrected English relationship wording. |
| Sebastián + ASISA | unknown | partially_refreshed | Public LinkedIn result shows Sebastián, ASISA and an ASISA experience association, but not a complete independent “exclusive agent” regulatory proof. |
| Production HTML/JSON-LD | refreshed | refreshed | Direct reads continue to expose the two founder edges and person-specific insurer relationships. |
| Uncorrected external directories | stale/contradictory | stale/contradictory | Crunchbase and Rankia remain F1B targets and were deliberately not changed. |

The indexed canonical VPI/About surfaces now show meaningful F1A refresh. This
does not claim that every external source has recrawled or been corrected.
Unknown and partial surfaces remain explicitly classified rather than silently
treated as complete corroboration.

## Readiness rationale

The prior blocker was stale canonical About indexing. That blocker is no longer
present: Spanish and English About search results now expose the corrected
co-founder model, while the Sebastián–ASISA search surface has moved from
unknown to partial refresh. Production integrity is intact and the remaining
stale sources are deliberately deferred F1B treatment targets, not a reason to
withhold the causal post-F1A measurement.

## Next action

Execute the frozen 24-run post-F1A Entity measurement gate for E01-A through
E06-A across ChatGPT, Google generative search, Microsoft Copilot and
Perplexity, using the original prompts and rubric. Freeze that measurement
before applying any F1B external corrections.
