# Run protocol

Initial surfaces: ChatGPT, Google AI Mode/AI Overviews where available, Microsoft Copilot and Perplexity. Do not scrape consumer interfaces, use unofficial APIs, invent responses or substitute ordinary web searches for benchmark results.

The monthly zero benchmark has 30 prompt IDs: 24 primary prompts and 6 negative controls, each with three semantically equivalent variants. Record UTC time, country/context, engine/surface and one independent execution per prompt/variant. Sentinel repeats the fixed 12 canonical prompts weekly; later repeated benchmarks measure temporal variance.

Initial capture is two-layered: Layer A runs the 30 canonical prompts across four surfaces (maximum 120 runs); Layer B runs `variant_b` and `variant_c` for the 12 Sentinel prompts across the same four surfaces (maximum 96 additional runs), for 216 maximum. Do not force an AI surface: record `ai_surface_present=no` when it does not appear.

Use clean context: ChatGPT Temporary Chat or a new session without VPI project, memory or personalization; record `account_context` and `memory_context`. For other engines record login state, locale, country and browser language without fabricating geolocation. Capture raw evidence outside Git under `artifacts/ai-visibility/f0-zero/`. At least 20% of runs receive a later second-pass QA review using `qa_status` and `qa_disagreement`; discrepancies are not auto-resolved.

In the zero inventory, a public URL means a URL observable as a public HTTP resource or redirect, whether or not it is in the sitemap. It may be indexable 200, deliberate noindex 200, known redirect, locale-only page or legacy URL. Physical internal paths are not nodes unless publicly requestable. Sitemap membership and redirect membership are independent sets. URLs are normalized without fragments; query strings are test/request metadata and do not create canonical URL nodes.

CSV integrity rules: one normalized URL per inventory row; quoted UTF-8 CSV; booleans use `yes`/`no`, tri-state observations use `yes`/`no`/`unknown`, and absent external data is never represented as `0` or an empty value.

Retrieval is not assumed observable. Use `unknown` rather than infer `no` from absence of a citation.
