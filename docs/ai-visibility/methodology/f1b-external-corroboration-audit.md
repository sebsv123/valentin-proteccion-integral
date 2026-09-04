# F1B · External Corroboration & Regulatory Truth Audit

## Scope and status

Read-only audit performed on 2026-09-04. **F1B audit completed; F1B
intervention has not started.** No LinkedIn, Crunchbase, TodoEnlaces or Rankia
action was taken; no external profile was changed; no new on-site change was
made; and no AI engine test was run. F1A remains the only applied intervention
under review; this record does not alter historical baseline observations.

Deployment record:

- Foundation F1A commit: `fe8d9115a86a2c539084241d34203029a0f9b785`
- F1A commit timestamp: `2026-09-04T18:24:10+02:00`
- Production base: `21fb6cdb079722e5a0e4d851bd3abd6ad70dee27`
- Production commit: `0fc2889672864ebee2724a3286fd500e846f79a5`
- Production commit timestamp: `2026-09-04T18:31:35+02:00`
- Deployment method: clean cherry-pick onto `production/main`, then normal push
- Live status before this audit: F1A verified

## Executive diagnosis

The corrected two-person model is corroborated by VPI-controlled pages and by
public professional profiles, but external corroboration is asymmetric. Rosa's
SegurCaixa Adeslas relationship has direct public profile support. Sebastián's
association with ASISA is visible in his public LinkedIn identity/search
surface, but no independently fetched official ASISA agent profile was found.
The DGSFP source confirms the existence and scope of the public distributor
registry, but this audit did not obtain a person-specific result that can be
used to publish a new Sebastián registration number.

Third-party directory material remains a material entity-resolution risk:
Crunchbase currently describes VPI as an independent brokerage and
multi-company mediator, while Rankia describes Rosa as an independent mediator
and VPI as a small brokerage. These are preserved as contradictory signals,
not authoritative truth.

## Corroboration matrix

| Source | Authority | VPI / people | Founder equality | Rosa → Adeslas | Sebastián → ASISA | Contradiction | Editable by VPI |
|---|---|---|---|---|---|---|---|
| [DGSFP PUI](https://dgsfp.mineco.gob.es/es/Distribuidores/PUI/Paginas/default.aspx) | HIGH, official regulator | Registry infrastructure confirmed; person result not independently obtained | No | No person-specific result obtained | No person-specific result obtained | None | No |
| [SegurCaixa Adeslas agent search](https://www.segurcaixaadeslas.es/agentes) | HIGH, insurer-owned | Search surface exists; exact VPI result was not fetchable in this pass | No | VPI's live preview and Rosa's public profile identify her as exclusive agent | No | None observed | No |
| [Rosa LinkedIn profile](https://es.linkedin.com/in/rosa-isabel-valentin-gonzalez-3a0b16141) | MEDIUM, self-managed professional profile | Identifies Rosa; associates her with Adeslas | No | Explicit “Agente exclusivo Seguros SEGURCAIXA ADESLAS” | No | Does not establish equal co-founder graph | Yes, by Rosa |
| [Sebastián LinkedIn profile](https://es.linkedin.com/in/sebasti%C3%A1n-sifontes-valent%C3%ADn-752665187) | MEDIUM, self-managed professional profile | Identifies Sebastián in Boadilla and ASISA-associated search/profile surface | Not explicitly verified as co-founder in the fetched profile | No | ASISA association is visible; exclusive-agent wording is not independently explicit in the fetched page | Insufficient to establish official agent status alone | Yes, by Sebastián |
| [VPI LinkedIn company profile](https://www.linkedin.com/company/valent%C3%ADn-proteccion-integral) | MEDIUM, VPI-controlled | Identifies the project and both people in public posts | Partial; both names appear, equal founder graph not independently established | Indirect | Indirect | Self-description, not independent corroboration | Yes |
| [VPI Sobre nosotros](https://valentinproteccionintegral.com/sobre-nosotros) | LOW/MEDIUM, VPI-controlled | Identifies VPI, Rosa and Sebastián | Current page states the intended model, but remains self-description | States official Adeslas channel for Rosa | Does not independently verify ASISA | Historical wording remains asymmetric in indexed snippets | Yes |
| [TodoEnlaces](https://www.todoenlaces.com/valentin-proteccion-integral/) | LOW, directory | Identifies VPI and location | Some founder/project context; not regulatory proof | No | No | Limited/incomplete person-role data | Usually claim/edit request |
| [Crunchbase](https://www.crunchbase.com/organization/valent%C3%ADn-proteccion-integral) | LOW, directory/database | Identifies VPI and both names inconsistently | Founders field is incomplete/asymmetric | No | No | Calls VPI an independent brokerage and multi-company mediator | Profile claim/edit |
| [Rankia thread](https://www.rankia.com/foros/seguros/temas/7305217-llevo-10-anos-como-mediadora-seguros-independiente-madrid-preguntad-que-querais-cualquier-seguro) | LOW, user-generated | Mentions Rosa, Sebastián and VPI | No reliable equality proof | No | No | Calls Rosa independent and VPI a brokerage | Thread author/moderation |

Google Business/Maps surfaces were observed in the historical captures, but no
stable independently inspectable profile URL was obtained in this audit. They
should remain provenance signals rather than regulatory evidence.

## Regulatory truth

Verified or safely supportable:

- The DGSFP PUI is the official access point for administrative registers of
  insurance and reinsurance distributors. It explains that data comes from
  state and competent regional registers and that changes are handled by the
  relevant administration.
- Rosa's public LinkedIn profile explicitly identifies her as an exclusive
  SegurCaixa Adeslas insurance agent.
- The operator-approved human truth identifies Sebastián as an exclusive ASISA
  insurance agent. Public search surfaces associate Sebastián with ASISA, but
  this audit did not obtain a direct official ASISA agent-profile record.

Not verified by this audit:

- Any new DGSFP registration number for Sebastián.
- Any official ASISA agent-profile URL for Sebastián.
- A public official record proving both people are equal co-founders.
- Corporate shareholding, legal-company ownership, employer relationships, or
  a single VPI-level exclusive-agent registration.

Accordingly, no registry number or official ASISA URL should be added to public
copy or structured data on the basis of this audit alone.

## Contradictory sources and likely baseline impact

1. **Crunchbase — highest external correction priority.** It labels VPI an
   independent brokerage/multi-company mediator and makes the founder field
   asymmetric. It is a compact, machine-readable entity record and was directly
   surfaced by Perplexity; correcting it has high expected entity-resolution
   value.
2. **Rankia — high diagnostic priority, lower editability.** Its title and body
   reinforce independent-mediator/brokerage language and were surfaced in the
   baseline. Preserve as contradictory historical evidence; seek correction or
   clarification only through the platform's normal author/moderation channel.
3. **VPI LinkedIn company and personal profiles — high leverage and editable.**
   They should state the equal co-founder relationship and keep Adeslas/ASISA
   relationships person-specific, without turning VPI into a broker or one
   insurer's agent.
4. **Official insurer surfaces — highest authority.** Maintain Rosa's
   insurer-side profile. Pursue an ASISA-side public corroboration only if ASISA
   provides a genuine public agent directory/profile; do not manufacture a URL.
5. **Directories such as TodoEnlaces and Google Business/Maps — medium value.**
   Align names, category and founder equality where the platform permits edits,
   but do not use them as substitutes for regulatory evidence.

## Recommended external action order

1. Obtain a genuine public ASISA-side corroboration for Sebastián, if one exists.
2. Align the VPI LinkedIn company and both relevant personal profiles.
3. Request factual corrections to Crunchbase, then TodoEnlaces/business-profile
   records, preserving evidence of the requests.
4. Treat Rankia as a contradiction to monitor, not as canonical truth; request
   correction only through its normal editorial path.
5. Re-run the same read-only corroboration matrix and record URLs/dated evidence
   before any further public copy change.

All treatment candidates above are **DEFERRED UNTIL AFTER POST-F1A
MEASUREMENT**. In particular, no correction request, profile edit, directory
edit, Rankia action or additional site change is part of this F1B checkpoint.

Priority candidates retained for the later intervention design are:

- Crunchbase
- VPI company, Rosa and Sebastián LinkedIn profiles
- authoritative ASISA corroboration for Sebastián, if obtainable
- TodoEnlaces and other business directories
- Rankia contradiction handling

## F1A/F1B decision

No additional on-site F1B change is required from this audit. F1A is already
aligned with the approved human model and its legal-preservation decisions.
External inconsistencies should be handled as profile/source corrections, not
by weakening the on-site entity graph or inventing regulatory evidence.

The earliest next step is the post-F1A measurement defined in
`post-f1a-entity-measurement-gate.md`. External actions remain deferred until
that measurement is closed and its results are frozen.
