# V1 Foreigners — Intent → Canonical Page Map

Status: `V1 SECOND PASS — production frozen at Foundation 1.0`

This registry maps the first Foreigners vertical to existing canonical pages. It does not create new routes or define an AI measurement run.

| Stage | User question / intent | Commercial intent | Canonical page | Evidence available | Gap / action |
|---|---|---|---|---|---|
| REQUIREMENT / ELIGIBILITY | What health insurance may support a Spanish visa, NIE or TIE process? | High | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 66–71; administrative caveat | Explain product fit and keep final acceptance with the authority. |
| REQUIREMENT / ELIGIBILITY | Can I arrange cover before arriving in Spain? | High | `/seguros/salud-extranjeros` | Product manual and insurer issue conditions | Ask for dates and confirm the selected product before issue. |
| DECISION | What is the difference between Students and Residents? | High | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 67–69 | Keep the answer-first comparison product-specific. |
| COMPARISON | How does Residents Premium differ from Residents? | High | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 67, 69–71 | State that Residents Premium has waiting periods; do not merge it with Residents. |
| DECISION | What are Health Premium and Residents Premium for? | Medium | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 68–69 | Explain intended situation and conditions without price claims. |
| DECISION | What certificate and dates will I receive? | High | `/seguros/salud-extranjeros` | Insurer-issued certificate; product manual | Clarify that the insurer issues the document and the policy controls dates. |
| DECISION | Does the plan have copayments or waiting periods? | High | `/seguros/salud-extranjeros` | ASISA 2026 manual, pp. 67–71 | Name the product before stating the condition. |
| AFTER-SALE / POLICY | What happens if an official visa or residence application is refused? | High | `/seguros/salud-extranjeros` | Conditional refund wording in ASISA manual, pp. 67–68 | Explain that any refund depends on the named product, policy not being in force and official refusal evidence. |
| TRANSACTIONAL | I need help choosing and arranging the insurance | High | `/extranjeros` → `/seguros/salud-extranjeros` | Existing CTA and insurer/product evidence | Make the hub triage the situation and send product decisions to the canonical page. |
| TRANSACTIONAL | I am a student, resident, renewal applicant or family member | High | `/extranjeros` | First-party service flow; product evidence on canonical page | Keep the hub as audience triage, not a duplicate product page. |
| DECISION | What should I confirm with an immigration lawyer or adviser? | Medium | `/extranjeros` | Administrative caveat in current content | Clarify that VPI explains insurance; legal/immigration advice remains separate. |

## Contextual country-page links

| Existing page | Natural context | Destination |
|---|---|---|
| `/internacional/india` and `/en/international/india` | Student route from India to Spain | `/seguros/salud-extranjeros` and `/en/insurance/health/foreigners` |
| `/internacional/peru` and `/en/international/peru` | Mobility, study and residence routes involving Spain | `/seguros/salud-extranjeros` and `/en/insurance/health/foreigners` |
| South Korea and Australia pages | Current content is primarily outbound to those destinations, not a Spain immigration journey | Intentionally excluded |

## Intent families deliberately not split into new pages

- Student visa, non-lucrative residence, digital-nomad/remote-worker and family-member cases remain on the hub plus canonical health page unless a distinct product/evidence gap is demonstrated.
- Country pages remain contextual discovery surfaces and should link to the canonical health page; they do not own separate insurance claims.
- No nationality × visa or city × product pages are justified by the current evidence.

## V1 content decisions

- Product facts are scoped to the named ASISA modality.
- The administration or consulate makes the final immigration decision.
- VPI does not promise visa approval, universal acceptance, a fixed issue time or a universal no-copayment/no-waiting-period policy.
- English follows the same intent ownership and qualification as Spanish on the localized routes.
