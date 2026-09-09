# F2 Technical Eligibility

## Scope and outcome

F2 verifies crawlability, indexability, canonical and language signals, sitemap coverage, rendered machine-readable output and ordinary internal discoverability. F1A entity meaning and historical AI-visibility data remain unchanged.

The deterministic P1 follow-ups completed in this checkpoint are:

- synchronized `public/llms.txt` and `public/llms-full.txt` with the live F1A entity model;
- added the canonical product-subpage inventory from `lib/products.ts` to the sitemap, excluding the known redirecting accidents subpage;
- added the public canonical `las-rozas` zone route to the sitemap;
- preserved the encoding-only correction in `app/zonas/[zona]/page.tsx`.

The campaign route `/landing/asesoria-gratuita` remains intentionally excluded from the organic sitemap because the sitemap policy excludes `/landing/*` campaigns. It is not a blocker for F2.

## Route overlap handoff to F3

The following pair remains unresolved for an architectural decision: `/seguros/salud/extranjeros` and `/seguros/salud-extranjeros`. Both are currently served as public routes with distinct canonical declarations and are used by existing route logic. No redirect was introduced without an unambiguous canonical decision.

## Validation record (2026-09-09)

The final validation commands and sitemap counts are recorded in the checkpoint report accompanying this file. The generated sitemap contains 147 unique URLs after the follow-up (136 before); 10 eligible Spanish product subpages and `las-rozas` were added, while their English alternates were already represented by existing entries. The accidents/pyme-autonomos subpage remains excluded because it permanently redirects. F2 is closed when those checks pass and only the documented non-deterministic route choice remains.

`npm run typecheck`, `npm run lint`, `npm run test:related`, `npm run build`, `npm run test:zero-baseline-kit` and `git diff --check` passed. The zero-baseline validator retains only its documented historical metadata warnings and reported no hard errors. Robots remains permissive for public routes, F1A JSON-LD still exposes two founder references and person-specific insurer descriptions, and the local generated sitemap contains no duplicate URLs.

## Final status

**F2 TECHNICAL ELIGIBILITY CLOSED.** The remaining health-foreigners route pair is deferred to F3 because the current architecture does not establish an unambiguous redirect target.
