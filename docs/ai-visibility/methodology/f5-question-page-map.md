# F5 Question → Canonical Page Map

Status: `F5 AI-NATIVE CONTENT SYSTEM CLOSED` after the focused second pass.

This map follows the F3 canonical intent registry. It records the questions each existing canonical page should answer; it does not create new routes or change the prompt registry.

| Canonical page | Primary questions | Answer/evidence focus | Related canonical links |
|---|---|---|---|
| `/seguros/salud-extranjeros` | What health insurance can support a Spanish visa, NIE or residence process? Does it have copayments or waiting periods? What certificate is issued? What happens if the visa is denied? | Name the product family and state that copayments, waiting periods, duration, renewal and refund rules depend on the named ASISA product. Students, Residents, Premium and Residents Premium must not be merged. | `/extranjeros`, `/seguros/salud`, `/seguros/viaje/estudios` |
| `/extranjeros` | Am I a student, resident, renewal applicant or family-arrival user? Where is the product page? Can I contract before travelling? | Audience triage and next action. Keep product conditions on the canonical health page and administrative acceptance qualified. | `/seguros/salud-extranjeros`, `/seguros/viaje/estudios` |
| `/seguros/salud` | What kinds of health cover exist? What is the difference between outpatient, comprehensive, senior, reimbursement and immigration products? | Health hub answer first; link to detail pages instead of duplicating their claims. | `/seguros/salud/completa`, `/seguros/salud/senior`, `/seguros/salud-extranjeros`, `/seguros/salud/reembolso` |
| `/autonomos` | What can an autónomo insure? Can health premiums be deductible? What does VPI actually do? | Tax treatment is conditional; distinguish health, accidents and RC; VPI gives insurance guidance, not personal tax advice. | `/seguros/salud/autonomos`, `/empresas/salud`, `/contacto` |
| `/empresas/salud` | How many people can form a group? Are hospitalisation and reimbursement included? What information is needed? | Group composition and cover vary by modality; answer with the existing cautious FAQ. | `/empresas`, `/empresas/ciberseguridad` |
| `/seguros/decesos` | What does funeral insurance cover? Are transfer, repatriation and legal assistance included? What about waiting periods and acceptance? | Service, capital, guarantees and waiting periods are policy/product-specific; avoid universal price or acceptance claims. | `/seguros/accidentes-decesos`, `/para/seniors` |
| `/blog/seguro-vida-hipoteca-obligatorio` | Is life insurance compulsory with a mortgage? What should I review before changing it? | Answer depends on the mortgage documents, binding offer and applicable rules; separate lender requirements from the policy's benefits and provider. | `/seguros`, `/contacto` |
| `/blog/seguros-vida-hipoteca-boadilla-madrid` | What does mortgage-linked life insurance cover? Can capital follow the outstanding debt? What should I check before replacing it? | ASISA Vida Capital Decreciente is a product-specific reference for death from any cause and optional absolute permanent disability; limits and acceptance depend on the policy. | `/seguros`, `/contacto` |
| `/seguros/accidentes` | What can accident insurance cover? Does every modality include death, disability or hospitalisation? | Accidental death, disability, hospitalisation, capital, age and exclusions depend on the product; distinguish accident-only products from life-risk cover. | `/seguros/accidentes-decesos`, `/para/autonomos` |

## First-wave implementation notes

- Direct-answer blocks were added only where they improve early comprehension without replacing existing page sections.
- Foreigners product distinctions use the F4 ASISA manual-backed facts and preserve the administrative/contractual qualification.
- Internal links point to the F3 canonical destinations; no duplicate page was created.
- Existing visible FAQ content remains the source for FAQ structured data. No new FAQ schema claims were added.
- First-party residual claims (`+1,200 families`, `+10 years`, review counts, response times and savings) are not strengthened by F5.
- The Life pages remain editorial canonical pages in the current architecture; no new Life route was created. The ASISA manual is used as product evidence, not as a blanket statement about every life or accident product.

## Focused second-pass closure

- Existing English equivalents for self-employed and business-health journeys now use answer-first blocks with the same intent and qualifications as Spanish; existing localized foreigners, health and funeral pages retain their shared answer-first treatment.
- Mortgage-life articles now distinguish mortgage requirements from policy conditions and use the ASISA Vida Capital Decreciente evidence only for product-specific death/optional IPA/decreasing-capital statements. Unsupported savings percentages and blanket legal or provider claims were removed or qualified.
- Accident and accident/funeral pages now state that capital, disability, hospitalisation, funeral service and repatriation depend on the modality. Accident-only products are not presented as life-risk cover.
- Residual first-party claims such as review counts, experience, customer counts, response times and savings outside this focused pass remain in the F4 evidence queue and do not block F5 closure.
