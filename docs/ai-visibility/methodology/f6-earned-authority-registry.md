# F6 · Earned Authority & Entity Corroboration Registry

## Status

F6 diagnostic pass recorded on 2026-09-09. No external profile was edited, no
external correction was submitted from the repository, no production copy was
changed, and no AI engine was run. External propagation remains
`EXTERNAL_PROPAGATION_PENDING`.

This registry reuses the F1B audit and correction pack. It is not a new Entity
baseline and does not rewrite historical observations.

## Target entity model

- Valentín Protección Integral (VPI) is the commercial brand/project.
- Rosa Isabel Valentín González and Sebastián Sifontes Valentín are equal
  co-founders.
- Rosa's individual exclusive-agent relationship is with SegurCaixa Adeslas.
- Sebastián's individual exclusive-agent relationship is with ASISA.
- VPI is not an insurer, an independent brokerage, a whole-market comparator,
  or one single insurer's exclusive agent.

## Current corroboration matrix

Status values: `CORRECT`, `PARTIAL`, `CONTRADICTORY`, `UNVERIFIED`,
`UNAVAILABLE`. Source type is classified separately from authority.

| Source | Type | Status | What it currently supports | Main gap or contradiction | Action |
|---|---|---|---|---|---|
| [VPI Sobre nosotros](https://valentinproteccionintegral.com/sobre-nosotros) and site disclosures | CONTROLLED | CORRECT | VPI as a mediation brand; both co-founders; person-specific Adeslas/ASISA relationships; Rosa's separate legal disclosure | First-party source, not independent corroboration | Preserve; use as the canonical on-site identity source |
| [VPI company LinkedIn](https://www.linkedin.com/company/valent%C3%ADn-proteccion-integral) | CONTROLLED / THIRD_PARTY platform | PARTIAL | VPI and both people are discoverable in the public profile/history | Public founder equality and person-specific insurer wording are not consistently established; current direct fetch was unavailable | P0: update or request correction through the legitimate page-admin route |
| [Rosa LinkedIn](https://es.linkedin.com/in/rosa-isabel-valentin-gonzalez-3a0b16141) | THIRD_PARTY / self-managed profile | PARTIAL | Explicitly identifies Rosa as an exclusive SegurCaixa Adeslas agent and links her activity to VPI | Equal co-founder wording is not the strongest public signal | P0: add symmetric co-founder wording if Rosa controls the profile |
| [Sebastián LinkedIn](https://es.linkedin.com/in/sebasti%C3%A1n-sifontes-valent%C3%ADn-752665187) | THIRD_PARTY / self-managed profile | PARTIAL | Identifies Sebastián in Boadilla and shows an ASISA professional association | Public profile does not independently establish the full co-founder + exclusive-agent wording | P0: add exact person-level relationship if Sebastián controls the profile |
| [Crunchbase](https://www.crunchbase.com/organization/valent%C3%ADn-proteccion-integral) | THIRD_PARTY | CONTRADICTORY | VPI name, location, website, insurance topics and Sebastián in the founders field | Calls VPI an “independent insurance brokerage” and “multi-company mediator”; legal name is Rosa and founder graph is asymmetric | P0: claim/request correction; do not treat as canonical truth |
| [TodoEnlaces](https://www.todoenlaces.com/valentin-proteccion-integral/) | THIRD_PARTY / directory | PARTIAL | Correct business name, agency category, address, phone and website | Founder field says Rosa only; directory is not regulatory evidence | P1: request factual founder correction |
| Google Business / Maps place observed in baseline | LOCAL_PLATFORM | UNVERIFIED | Historical captures support the same name, address, phone and agency category | A stable public profile was not independently fetched in this pass; review count is volatile | P1: verify ownership and NAP; do not create a duplicate listing |
| Bing Places / Microsoft business surface | LOCAL_PLATFORM | UNAVAILABLE | Copilot historical output shows local-business grounding | No current claimed/editable profile was confirmed | P1: inspect only through a legitimate owner account if available |
| [SegurCaixa Adeslas agent channel](https://www.segurcaixaadeslas.es/agentes) | OFFICIAL_INSURER | PARTIAL | Official insurer search mechanism; public VPI preview identifies Rosa as an exclusive agent | It corroborates Rosa's relationship, not founder equality or Sebastián's relationship | Preserve the existing official link; no VPI-level insurer claim |
| [DGSFP PUI](https://dgsfp.mineco.gob.es/es/Distribuidores/PUI/Paginas/default.aspx) | REGULATORY | PARTIAL | Official public distributor-registry access and Rosa's existing published code lineage | No person-specific Sebastián record or new code was verified in this pass; VPI is not a person registration | Keep Rosa's verified legal disclosure; publish no Sebastián code |
| [ASISA offices/search surface](https://www.asisa.es/encuentranos) | OFFICIAL_INSURER | UNVERIFIED | ASISA provides public office/search and mediator access surfaces | No public individual profile for Sebastián was found through the available public mechanisms | P0/P1: request a genuine ASISA-side corroboration if ASISA offers one |
| [Sebastián's LinkedIn ASISA association](https://es.linkedin.com/in/sebasti%C3%A1n-sifontes-valent%C3%ADn-752665187) | THIRD_PARTY / self-managed profile | PARTIAL | Public search/profile surface associates Sebastián with ASISA | Not an official ASISA-hosted agent profile | Use as corroboration lead, not as regulatory proof |
| [Google review profile](https://search.google.com/local/reviews?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA) | LOCAL_PLATFORM | UNVERIFIED | Stable review destination is already linked by the site | Rating/count are time-sensitive and were not independently recaptured here | Keep as a review destination; do not hard-code new counts or add review schema |
| Rankia legacy thread | THIRD_PARTY / historical | UNAVAILABLE | Historical contradiction is documented in F1B | The known URL currently returns HTTP 410; no active correction surface exists | No active remediation unless it resurfaces; never use as truth |

## Official insurer and regulatory findings

### Rosa → SegurCaixa Adeslas

The official SegurCaixa Adeslas agent channel is a legitimate corroboration
mechanism and the VPI page exposes the insurer-side result identifying Rosa as
an exclusive insurance agent. Rosa's public professional profile independently
also states the Adeslas relationship. This supports the person-specific edge,
not a VPI-level exclusive-agent registration.

### Sebastián → ASISA

ASISA exposes public office/search and mediator-access surfaces, but this pass
found no stable public individual agent profile for Sebastián Sifontes Valentín.
The public LinkedIn profile associates Sebastián with ASISA, which is useful
third-party corroboration but not an official insurer record. Therefore:

`NO PUBLIC INDIVIDUAL ASISA CORROBORATION MECHANISM FOUND`

No ASISA profile URL, registration number or DGSFP identifier is to be invented
or published from this evidence.

### DGSFP

The DGSFP PUI is the relevant official registry access point. Existing site
disclosures for Rosa may remain. This audit does not verify a Sebastián
registration identifier and does not convert the VPI brand into a regulatory
person or distributor record.

## Local identity and reviews

The stable business identity observed across the site and historical local
captures is: Valentín Protección Integral, Calle Reyes Católicos 1, Boadilla
del Monte, Madrid, telephone +34 603 448 765, website
`valentinproteccionintegral.com`, insurance-agency/mediation category. The
current Google/Bing ownership state is not sufficiently observable to claim
that every local platform has refreshed the F1A wording.

The repository links users to a stable Google review destination and renders a
central review snapshot. Reviews can corroborate that public customer feedback
exists, but the current count/rating must remain volatile and must not be
promoted into a permanent authority claim.

## Earned-authority target registry

These targets are based on named relationships already present in the
repository. They are not proposed directory creation or reciprocal-link
campaigns.

| Organization/platform | Relationship to VPI | Source type | Current mention | Desired factual mention | Target canonical URL | Topic supported | Action | Priority |
|---|---|---|---|---|---|---|---|---|
| ASISA official public mediator/agent mechanism | Sebastián's individual insurer relationship | OFFICIAL_INSURER | No individual public profile found | A genuine ASISA-hosted or insurer-confirmed profile for Sebastián, if available | `/sobre-nosotros` or the relevant ASISA health page only as context | ASISA distribution/entity corroboration | Ask ASISA for the real public mechanism; do not fabricate a URL | P0 |
| SegurCaixa Adeslas official agent channel | Rosa's individual insurer relationship | OFFICIAL_INSURER | Existing official agent link is live on VPI | Stable insurer-side result for Rosa | `/sobre-nosotros` | Adeslas agent corroboration | Preserve and periodically verify the existing official link | P0 |
| Crunchbase | Public company/entity record | THIRD_PARTY | Contradictory brokerage and multi-company wording | VPI mediation brand/project, equal co-founders, no independent-broker claim | `/` or `/sobre-nosotros` | Entity classification and founders | Claim profile/request factual correction; record request and propagation date | P0 |
| VPI LinkedIn company page | Controlled professional identity profile | CONTROLLED | Partial founder/entity graph | Both co-founders and person-specific insurer relationships | `/sobre-nosotros` | Entity discovery | Update through verified page admin; use natural concise wording | P0 |
| Rosa and Sebastián LinkedIn profiles | Person-to-brand and person-to-insurer relationships | CONTROLLED | Rosa/Adeslas strong; Sebastián/ASISA partial | Symmetric co-founder wording with individual insurer relationship | `/sobre-nosotros` | Person resolution and role association | Each profile owner updates their own headline/about/experience | P0 |
| TodoEnlaces | Local business directory | THIRD_PARTY | Correct NAP/category; Rosa-only founder | Both co-founders, mediation category, no brokerage claim | `/` | Local entity resolution | Submit factual correction request | P1 |
| Google Business / Maps | Local business identity and review source | LOCAL_PLATFORM | Historical NAP/category and review profile | Stable NAP/category; concise co-founder wording only if the field supports it | `/contacto` or `/opiniones` | Local discovery and review evidence | Verify/claim the existing listing; do not create duplicates | P1 |
| Bing Places / Microsoft surfaces | Local/Copilot grounding | LOCAL_PLATFORM | Current state unavailable | Same NAP and non-brokerage business description if a legitimate listing exists | `/` | Microsoft/Copilot local entity grounding | Verify through owner account or submit the normal claim path | P1 |
| Aara Consultancy | Publicly presented education/India-to-Spain collaboration | THIRD_PARTY relationship surfaced by VPI | VPI page names Aara and separates academic/visa work from VPI insurance support | Aara handles India-side academic/application support; VPI handles Spain-side insurance support | `/internacional/india` and `/en/international/india` | Student mobility and health-insurance context | Ask Aara whether a reciprocal resource/partner mention is useful; no link exchange requirement | P1 |
| LandKorea | Publicly presented Korea relocation collaboration | THIRD_PARTY relationship surfaced by VPI | VPI page describes LandKorea's local visa, housing and settling-in support | LandKorea handles local Korea support; VPI handles insurance preparation from Spain | `/internacional/corea-del-sur` and `/en/international/south-korea` | Relocation and international insurance context | Request a natural partner/resource mention if it benefits users | P1 |
| VIP Global Perú | Publicly presented Peru mobility collaboration | THIRD_PARTY relationship surfaced by VPI | Peru pages present VIP Global Perú for Peru-side process support and VPI for Spain insurance/arrival | Clear division of responsibilities for Peru→Spain mobility | `/internacional/peru` and its localized route | Visa/student mobility and insurance | Confirm the relationship and invite a factual resource mention only if active and approved | P1 |

No other named external business relationship in the repository was promoted to
the registry. The generic “academies, advisers, agencies and professionals”
referral pathway is an opportunity, not proof of a named partnership.

## Internal changes applied in F6

None. Existing controlled `sameAs` references were not expanded with
directories or uncertain profiles. No external insurer relationship was added
to the VPI Organization node, and no weak directory was promoted into
structured identity data.

## Actions that remain external

1. Request/verify a genuine ASISA-side public corroboration mechanism for
   Sebastián.
2. Correct the Crunchbase classification and asymmetric founder field.
3. Align the VPI, Rosa and Sebastián LinkedIn wording.
4. Request the TodoEnlaces founder correction.
5. Verify Google Business and Bing Places ownership/NAP without creating
   duplicates.
6. Confirm whether Aara Consultancy, LandKorea and VIP Global Perú want
   factual, user-useful partner/resource mentions.
7. Leave Rankia inactive while it returns 410; do not attempt artificial
   suppression.

## Rejected tactics

No mass directory submissions, purchased links, reciprocal-link schemes, fake
profiles, generated third-party articles, artificial reviews, unsupported
awards or press-release spam.

## F6 disposition

The core controlled graph is coherent, official insurer/regulatory mechanisms
were investigated to a reasonable endpoint, the principal contradiction is
identified with a concrete correction path, and three genuine contextual
relationships provide P1 earned-authority opportunities. Remaining profile
edits and recrawl are `EXTERNAL_PROPAGATION_PENDING`, not reasons to alter the
site or repeat the baseline.

Recommended next phase: execute only legitimate external corrections/requests,
capture dated evidence of each action, allow propagation, then run a small
verification set. Do not start F7 or a new broad Entity baseline from this
document alone.
