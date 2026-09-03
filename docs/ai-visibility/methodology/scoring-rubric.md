# Scoring rubric

Every observable field accepts `yes`, `no`, or `unknown`. Unknown is mandatory when the engine does not expose evidence.

- `retrieval_observed`: yes only when the engine exposes evidence that VPI was retrieved.
- `vpi_mentioned`: yes when Valentín Protección Integral or VPI is identifiable.
- `vpi_cited`: yes only with explicit attribution or link to the domain.
- `vpi_recommended`: yes only when VPI is recommended as a provider, not merely cited.
- `entity_correct`: yes only when its identity/type is accurately described.
- `service_correct`: yes only when associated with the correct service.
- `absorption_observed`: yes only when distinctive VPI information is demonstrably used; otherwise unknown.

These remain separate dimensions. F0 creates no composite GEO score.
