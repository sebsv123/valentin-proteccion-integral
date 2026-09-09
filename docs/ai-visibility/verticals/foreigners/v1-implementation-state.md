# V1 Foreigners — Implementation State

Status: `V1 FOREIGNERS CLOSED — READY FOR POST-FOUNDATION DEPLOYMENT`

## Pages reviewed

- `/extranjeros` and `/en/foreigners`
- `/seguros/salud-extranjeros` and `/en/insurance/health/foreigners`
- existing F3 canonical health and international links
- F4 evidence registry and F5 question/page map
- Existing Spain-oriented country pages for India and Peru

## Pages changed

- Foreigners hub content model in `app/extranjeros/foreigners-content.ts`.
- Canonical foreigners-health content model in `app/seguros/health-foreigners-content.ts`.
- Contextual canonical links in the India and Peru country journeys.
- Compact four-product comparison in `components/foreigners-product-comparison.tsx`.

## Improvements applied

- Kept `/extranjeros` as audience triage and `/seguros/salud-extranjeros` as product-decision canonical.
- Distinguished Students, Residents, Health Premium and Residents Premium in answer-first copy.
- Scoped copayment, waiting-period, certificate and timing language to the named product and insurer.
- Removed or qualified visa-approval, rejection-count, fixed-response-time and fixed-issue-time implications.
- Preserved the administrative/consular final-decision caveat in Spanish and English.
- Kept the existing conversion path through WhatsApp and the canonical health page.
- Added one contextual link from the India and Peru journeys to the canonical foreigners health page; South Korea and Australia were intentionally excluded because their current journey is outbound to those destinations.
- Added an ES/EN responsive card comparison for Students, Residents, Health Premium and Residents Premium, followed by a single guidance CTA.

## No new pages

No distinct intent gap justified a new visa, nationality, city or audience route in this wave.

## Closure boundary

No new visa, nationality, city or audience pages were created. V1 is ready for a later controlled deployment, but production remains frozen until the Foundation propagation check and fixed Entity panel are completed. No AI engines were run.
