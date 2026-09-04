# Entity Pre-F1 Baseline · Methodological Checkpoint

## Status

**ENTITY PRE-F1 BASELINE CLOSED**

The Zero Baseline is staged before intervention. The immediate gate is the canonical Entity family only.

- `E01-A`: 4/4 complete
- `E02-A`: 4/4 complete
- `E03-A`: 4/4 complete
- Entity Layer A: **12/24 complete**
- Remaining Entity Layer A: none
- Attempted Entity Layer A: **24/24**
- Valid evaluable Entity Layer A: **23/24**
- Protocol-failed attempts: **1/24**, only `Z0-E04-A-COPILOT`
- `E06-A`: 4/4 complete
- The pre-F1 Entity baseline is now closed.
- Next family after that checkpoint: `F01-A`

The four-engine order remains ChatGPT → Google → Copilot → Perplexity. Each group must be completed and validated before the next group begins.

## Frozen design boundary

This checkpoint changes execution priority only. It does not delete, regenerate or invalidate any manifest row, capture, prompt, batch or QA selection.

- Layer A: 120 canonical runs
- Layer B: 96 robustness runs, still `deferred_robustness`
- Maximum design: 216 runs

Layer B remains preserved and is not cancelled. No Layer B execution is due before the staged Entity gate is reviewed.

## Rationale

Entity-family evidence already shows a consistent cross-engine entity relationship failure. Continuing unrelated prompt families before correcting the foundational entity model has low marginal diagnostic value and delays the intervention the experiment is intended to evaluate. Entity will therefore use a pre/post staged baseline before subsequent vertical families proceed.

No production, runtime, content, SEO, schema, sitemap or routing change is authorized by this checkpoint.

## F1 Entity Truth audit scope — prepared, not applied

The F1 audit will inspect the current public implementation and distinguish human truth from engine observations. Scope:

- ES/EN homepage and `Sobre nosotros` / `About us`.
- Legal notice, ownership wording and footer/entity disclosure.
- Existing structured data.
- Person/brand relationships, including all Rosa and Sebastián references.
- Individual insurer/distribution relationships.
- Wording that implies brokerage, independence, market-wide comparison, sole founder, sole regulated person, or Sebastián as subordinate/team-only.

Human canonical truth for later F1:

- Valentín Protección Integral is the commercial brand/project co-founded by Rosa Isabel Valentín González and Sebastián Valentín at the same founder level.
- Both are distinct exclusive insurance agents.
- Rosa has an exclusive agency relationship with SegurCaixa Adeslas.
- Sebastián has an exclusive agency relationship with ASISA.
- VPI is not an insurer and must not be conflated with either person’s individual regulatory registration.
- Prefer `co-founder` / `cofundador` over `socio fundador` unless legal shareholding is separately verified.

This register is not an instruction to rewrite public content and must not be used to reinterpret or modify frozen baseline responses.
