# F4 Evidence Architecture — Claim/Evidence Registry

Status: `F4 EVIDENCE ARCHITECTURE CLOSED WITH RESIDUAL EVIDENCE QUEUE`

F3 was frozen in commit `4886816c0b4fa53656aa82e5eb2bf265f9554a4d`. F4 audits the claims currently published by the site; it does not reopen F1–F3 or use AI-engine measurements.

## Evidence status and source hierarchy

- `VERIFIED`: supported by an authoritative source available in the repository or by a deterministic technical fact.
- `FIRST_PARTY_ONLY`: stated by VPI-controlled content/configuration, without independent corroboration in the repository.
- `NEEDS_SOURCE`: material claim requires an insurer, regulator, product manual, platform, or internal record that is not currently available here.
- `NEEDS_REWORDING`: the claim may be valid in a narrower context but is currently too broad or ambiguous.
- `REMOVE_OR_AVOID`: unsupported or materially misleading wording that should not be published as fact.

Authority is qualitative: regulator/insurer/legal/product documentation is strongest; VPI-controlled content is first-party; LinkedIn/directories are corroboration; stale third-party material is historical context only. Rankia is not authoritative.

## Registry

| Claim | Current URL(s) / location | Type | Current evidence | Authority | Status | Exact location | Action |
|---|---|---|---|---|---|---|---|
| VPI is a commercial insurance-mediation brand/project, not an insurer | `/`, `/en`, `/sobre-nosotros`, `/en/about-us` | Entity/classification | Central site configuration, visible F1A copy and JSON-LD | Controlled first-party | `VERIFIED` | `lib/site-config.ts`; F1A schema components | Preserve the distinction in all page copy and metadata. |
| Rosa Isabel Valentín González and Sebastián Sifontes Valentín are co-founders of VPI | `/sobre-nosotros`, `/en/about-us` | Entity | VPI-controlled biographies and F1A human truth | Controlled first-party | `VERIFIED` | `lib/site-config.ts`; About pages | Keep equal founder semantics in ES/EN and JSON-LD. |
| Rosa has an individual exclusive-agent relationship with SegurCaixa Adeslas | `/sobre-nosotros`, `/en/about-us` | Regulatory/distribution | VPI-controlled public statement | First-party; external corroboration not stored in this registry | `FIRST_PARTY_ONLY` | `lib/site-config.ts`; Person descriptions | Keep person-specific. Add insurer evidence only when an authoritative source is captured. |
| Sebastián has an individual exclusive-agent relationship with ASISA | `/sobre-nosotros`, `/en/about-us` and product adviser copy | Regulatory/distribution | VPI-controlled public statement and approved human truth | First-party; official ASISA evidence not stored here | `FIRST_PARTY_ONLY` | `lib/site-config.ts`; `lib/products.ts` | Keep person-specific. Do not add a DGSFP number or invented ASISA profile URL. |
| Rosa is the legal website owner/responsible person and has the existing DGSFP disclosure | Legal notice, footer and site configuration | Legal/regulatory | Existing legal disclosure, NIF and code in repository | Legal/first-party; external registry capture not stored here | `FIRST_PARTY_ONLY` | `lib/site-config.ts`; legal-page consumers | Preserve legal meaning. Do not infer founder hierarchy from legal ownership. |
| Sebastián has a DGSFP registration number | Site-wide | Regulatory | No verified repository evidence | None | `REMOVE_OR_AVOID` | Entity and metadata searches | Do not publish or infer a number. |
| “+1,200 familias protegidas” | `/extranjeros`, zone pages, related landing content | Business proof | Repeated VPI-controlled marketing statement | First-party | `FIRST_PARTY_ONLY` | Searchable page copy | Retain only as first-party wording until an internal record or durable evidence lineage is supplied. |
| “+10 años de experiencia” | Homepage, credentials and local pages | Business proof | Repeated VPI-controlled statement | First-party | `FIRST_PARTY_ONLY` | `components/CredentialsBar.tsx` and page copy | Keep qualified as a VPI statement; do not present as independent proof. |
| Google rating/count and review examples | Zone pages and review components | Review evidence | Central snapshot plus page testimonials | Platform snapshot / first-party rendering | `FIRST_PARTY_ONLY` | `lib/google-reviews.ts`; zone JSON-LD | Treat counts as volatile. Do not add review schema or hard-code independent corroboration without a maintainable capture. |
| “5.0 / 60 reviews” in local JSON-LD | Boadilla, Majadahonda, Madrid and Pozuelo pages | Review evidence | Hard-coded page values differ from central snapshot (`62`) | First-party snapshot, inconsistent | `NEEDS_REWORDING` | Local `AggregateRating` JSON-LD | Consolidate or remove volatile counts in a focused review-data pass; do not claim current platform truth from stale literals. |
| Fast response claims (15/20 minutes, under one hour, 24 hours) | Local testimonials/blog content | Testimonial/service | User testimonials and marketing copy | First-party testimonial | `FIRST_PARTY_ONLY` | Zone page review blocks; blog content | Keep explicitly testimonial/illustrative, never as a service-level guarantee. |
| Visa/NIE/TIE suitability | `/extranjeros`, `/seguros/salud-extranjeros`, English equivalents | Immigration/product | ASISA 2026 Manual de Productos, Newcomers Protection section, pp. 66–71; final authority remains the administration/consulate | Strong primary insurer evidence, with administrative caveat | `VERIFIED` | ASISA Health Students p. 67; Health Residents p. 67; Health Premium p. 68; Residents Premium p. 69 | Keep product-specific names and the qualification that final acceptance depends on the authority. |
| No copayments/no waiting periods for foreigners products | `/extranjeros`, `/seguros/salud-extranjeros`, `lib/products.ts`, `app/seguros/health-foreigners-content.ts` | Product/eligibility | ASISA 2026 manual: Students, Residents and Health Premium state no copays/no waiting periods; Residents Premium states no copays with waiting periods; Copayment product has copays and waiting periods | Strong primary insurer evidence | `VERIFIED` | ASISA manual pp. 67–71 | Public copy now names/qualifies the applicable products. Never generalize the Students/Residents statement to Residents Premium or all products. |
| Product duration, renewal and advance contracting | Foreigners product pages | Product/contract | ASISA 2026 manual | Strong primary insurer evidence | `VERIFIED` | Students/Residents p. 67; Premium p. 68; Residents Premium p. 69 | Publish only against the named product: 2 months–1 year/non-renewable for Students and Premium; one year/conditional renewal for Residents; one year/automatic renewal for Residents Premium. |
| Immediate certificate and refund on official denial | Foreigners product pages and FAQs | Product/contract | ASISA 2026 manual | Strong primary insurer evidence | `VERIFIED` | ASISA manual pp. 67–68 and comparison p. 71 | Keep refund wording conditional: policy not in force plus official denial, where the product provides that exception. |
| Travel assistance and repatriation for foreigners products | Foreigners product pages | Product coverage | ASISA 2026 manual | Strong primary insurer evidence | `VERIFIED` | Students/Residents p. 67 (25,000 EUR); Premium/Residents Premium pp. 68–69 (30,000 EUR and repatriation conditions) | Keep amounts and events tied to the named product and policy. |
| Tax deduction for autónomos | `/autonomos` | Tax/product | ASISA 2026 Manual de Productos, “Tratamiento fiscal del seguro de salud” | Strong primary insurer evidence, not personal advice | `VERIFIED` | ASISA manual p. 163: 500 EUR per person; 1,500 EUR for persons with disabilities, with conditions and territorial caveat | Preserve the current qualification and referral to a tax adviser; do not present VPI as giving individual tax advice. |
| Funeral service, transport/repatriation, travel, legal and accident assistance | `/seguros/decesos`, `/seguros/accidentes-decesos` | Product coverage | OCASO Asistencia Familiar Plena sales manual | Primary insurer sales evidence, product-specific | `VERIFIED` | OCASO AFP manual pp. 2–5 | Keep as product-specific coverage and retain “according to the policy/conditions” qualification. Do not turn sales argument language into a universal guarantee. |
| Prima Única funeral service, transfer and travel assistance | `/seguros/decesos` and product data | Product/contract | OCASO Decesos Prima Única sales manual | Primary insurer sales evidence, product-specific | `VERIFIED` | Prima Única manual pp. 5–9 | Keep AFP and Prima Única distinct; payment/fraccionamiento, capital, waiting period and acceptance remain product/underwriting dependent. |
| No waiting periods for generic funeral insurance | `/seguros/decesos` | Product/eligibility | Prima Única manual states a one-year waiting period for transfer/travel assistance in that product, subject to the accidental-death exception | Primary insurer evidence contradicts blanket wording | `NEEDS_REWORDING` | Prima Única manual p. 5; generic decesos metadata/FAQ | Generic page wording was qualified to require checking the modality and policy conditions. |
| Funeral price, automatic acceptance and “all ages” | `/seguros/decesos`, decesos landing components | Price/eligibility | Product manuals contain tariffs and conditional-acceptance rules, not a universal VPI offer | Primary product evidence is conditional | `NEEDS_SOURCE` / `NEEDS_REWORDING` | Generic FAQ and landing copy | Do not publish universal price, no-medical-exam, automatic-acceptance or no-age-limit claims without the exact product and underwriting rules. |
| Company health options from two insured people | `/empresas/salud` | Product/commercial | VPI page FAQ and metadata | First-party only | `NEEDS_SOURCE` | `app/empresas/salud/page.tsx` | Obtain insurer/product eligibility conditions; avoid presenting “from two” as universal. |
| Prices, age limits, coverage limits and “best”/savings claims | Product pages and blog content | Product/marketing | Marketing copy; source pack does not cover the full catalogue or VPI performance | First-party / historical | `NEEDS_SOURCE` / `REMOVE_OR_AVOID` | `lib/products.ts`, product pages, `lib/blog*.ts` | Qualify or remove absolute claims until the relevant product documents or a reproducible methodology exists. |
| Local Boadilla/Madrid presence, contact details and opening information | Homepage, contact, zone pages | Location/service | Central site configuration and visible contact pages | Controlled first-party | `VERIFIED` | `lib/site-config.ts` and rendered contact components | Preserve; distinguish published availability from guaranteed response time. |
| Zone-page “Sin copagos, acceso inmediato” | `/zonas/[zona]` | Product/service | Generic zone template, no product-specific source | None for blanket claim | `NEEDS_REWORDING` | Zone popular-products card | Corrected to “Coberturas y tiempos según modalidad.” |
| Sebastián as “mediador de seguros colegiado” | Foreigners product data | Professional/regulatory | No approved evidence for colegiación | None | `REMOVE_OR_AVOID` | `lib/products.ts` | Corrected to “cofundador de VPI y agente exclusivo de seguros de ASISA.” |
| VPI compares the whole market / is an independent brokerage | Historical/product/blog wording | Classification | Contradictory legacy marketing language | Not authoritative | `REMOVE_OR_AVOID` | Remaining blog/product occurrences require targeted review | Preserve F1 corrections; do not describe VPI as a brokerage or unrestricted whole-market intermediary. |

## Page-level evidence architecture

| Canonical page family | Evidence needed on-page | Current action |
|---|---|---|
| Homepage and About | Brand/person distinction, equal co-founders, person-specific insurer relationships, differentiated legal disclosure | F1A graph and copy retained; registry treats insurer relationships as first-party until external corroboration is stored. |
| Health hub and product pages | Product-specific insurer/conditions, copay and waiting-period qualification, limits and eligibility | Keep claims scoped to each modality; product manuals are needed for verification. |
| Foreigners/students/residents | Product certificate/conditions and administrative caveat | Absolute audience-page wording was qualified in this pass; official/product evidence remains required. |
| Autónomos | Tax-source qualification and product conditions | Existing caveat retained; official tax/product source remains a follow-up. |
| Companies | Eligibility thresholds, coverage options and fiscal claims | Existing cautious FAQ retained; insurer conditions needed. |
| Life, accidents, funeral, dental, pets and travel | Product-specific policy evidence, limits and exclusions | No blanket claim should be promoted without product documentation. |
| Reviews and local pages | Current platform snapshot or clearly labelled testimonials | Existing first-party/testimonial distinction retained; volatile count inconsistency is a focused follow-up. |

## F4 actions applied

- Qualified the foreigners audience FAQs so copay/waiting-period claims depend on the product and policy/certificate conditions.
- Qualified the generic zone health card so it no longer promises “sin copagos, acceso inmediato” for every modality.
- Removed the unsupported “mediador de seguros colegiado” wording and identified Sebastián as VPI co-founder and ASISA exclusive insurance agent.
- No structured-data ratings, legal identifiers, registration numbers, insurer URLs or historical baseline data were invented or changed.

## Residual evidence queue after closure

1. Replace or centralize hard-coded volatile review counts (`60` versus the central `62`) using a maintainable captured source.
2. Review remaining high-risk savings, “best”, response-time and product-limit claims in product/blog content against the relevant product documents.
3. Keep VPI-specific experience, customer-count, response-time and savings claims labelled as first-party until internal or external evidence lineage is supplied.

These residual items do not block closure of this focused manual-backed pass. They are not reasons to alter F1A entity semantics or historical baseline results.

## Primary source pack added in this pass

The following local primary documents were supplied for this remediation pass and are referenced by product section/page rather than copied into the repository:

- `MANUAL DE PRODUCTOS ASISA 2026.pdf`: Newcomers Protection pp. 66–71; tax treatment p. 163.
- `Manual_de_ventas_OCASO_Asistencia_Familiar_Plena_0900ed9782f0078a.pdf`: funeral service, transport/repatriation, travel, legal and accident-assistance argumentation, pp. 2–5. This is a sales manual, so claims remain product/conditions dependent.
- `Manual-ventas-decesos-prima-unica_0900ed9782d94cb9.pdf`: definitions and waiting periods p. 5; guarantees pp. 6–7; contracting, conditional acceptance and age rules p. 9; payment/fraccionamiento pp. 8–9.

The source PDFs remain outside the repository. They were not used to establish VPI-specific performance claims, review counts, response times, savings, or experience figures.
