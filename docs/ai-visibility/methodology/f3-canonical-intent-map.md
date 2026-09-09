# F3 Canonical Intent Map

## Status

F3 consolidates one deterministic duplicate route and records the remaining intent architecture for subsequent content work. It does not create new landing pages or alter F1A entity meaning.

## Canonical intent registry

| Intent | Canonical destination | Competing/related pages | Decision |
|---|---|---|---|
| General insurance catalogue | `/seguros` | Product hubs and audience hubs | Hub only; detail pages own narrower intents. |
| General health insurance | `/seguros/salud` | `/seguros/salud-individual`, `/seguros/salud-senior` | Health hub owns broad intent; profile pages remain narrower destinations. |
| Individual health | `/seguros/salud-individual` | `/seguros/salud` | Separate individual-profile intent. |
| Family health | `/seguros/salud/familias` | `/para/familias` | Product detail owns insurance intent; audience page owns broader family needs. |
| Senior health | `/seguros/salud/senior` | `/seguros/salud-senior`, `/para/seniors` | The hierarchical product subpage is canonical; the standalone legacy page permanently redirects. `/para/seniors` remains the broader audience page. |
| Foreigners, visa, NIE and TIE health insurance | `/seguros/salud-extranjeros` | `/seguros/salud/extranjeros`, `/extranjeros` | Specialized product page is canonical; duplicate subpage permanently redirects. `/extranjeros` remains the broader audience hub. |
| Student travel insurance | `/seguros/viaje/estudios` | `/extranjeros`, international pages | Product detail owns student travel intent; audience/international pages remain contextual. |
| Self-employed audience | `/autonomos` | `/seguros/salud/autonomos`, `/para/autonomos` | `/autonomos` owns audience proposition; `/para/autonomos` already redirects. Product subpage owns health-product intent. |
| Business audience | `/empresas` | `/empresas/salud`, `/empresas/ciberseguridad` | Hub owns business insurance intent; service pages own health and cybersecurity details. |
| Life and mortgage protection | No dedicated current canonical page; `/seguros` is the current broad catalogue destination | Product mentions and blog content | No new page was created in F3; dedicated life-intent architecture is deferred. |
| Accident insurance | `/seguros/accidentes-decesos` | `/seguros/accidentes`, `/seguros/accidentes/pyme-autonomos` | Combined page is current canonical; both legacy/narrow paths redirect or are excluded. |
| Dental insurance | `/seguros/dental` | `/seguros/dental/familias` | Hub/detail split is intentional. |
| Pet insurance | `/seguros/mascotas` | `/seguros/mascotas/responsabilidad-civil` | Hub/detail split is intentional. |
| Travel insurance | `/seguros/viaje` | `/seguros/viaje/estudios` | Hub/detail split is intentional. |
| Funeral insurance | `/seguros/decesos` | `/seguros/decesos/familias` | Hub/detail split is intentional. |
| Business cybersecurity | `/empresas/ciberseguridad` | `/empresas` | Service detail remains subordinate to the business hub. |
| Local insurance service, Boadilla | `/zonas/boadilla-del-monte` | `/zonas`, `/seguros/*` | Local intent; not a replacement for product pages. |
| Local insurance service, Pozuelo | `/zonas/pozuelo-de-alarcon` | `/zonas` | Local intent. |
| Local insurance service, Majadahonda | `/zonas/majadahonda` | `/zonas` | Local intent. |
| Local insurance service, Las Rozas | `/zonas/las-rozas` | `/zonas` | Local intent. |
| Local insurance service, Madrid | `/zonas/madrid` | `/zonas` | Local intent. |

## Deterministic consolidation applied

- `/seguros/salud/extranjeros` now permanently redirects to `/seguros/salud-extranjeros`.
- `/seguros/salud-senior` now permanently redirects to `/seguros/salud/senior`.
- Product-link helpers now emit `/seguros/salud-extranjeros` for the Spanish foreigners product.
- Spanish product-subpage metadata uses the canonical helper destination.
- The duplicate route is absent from the sitemap.
- The English equivalent remains `/en/insurance/health/foreigners`.

## Deliberately separate or deferred decisions

- The senior health decision is resolved in favour of the hierarchical product route because the product inventory, internal modality links, English equivalent and sitemap alternate structure all use `/seguros/salud/senior`; the standalone page had no equivalent English route or internal links.
- `/extranjeros` is an audience/immigration hub, while `/seguros/salud-extranjeros` is a product destination.
- `/autonomos` and `/seguros/salud/autonomos` serve audience and product intent respectively.
- Zone pages remain local-intent pages and are not merged with product pages.
- The English `next-intl` aliases (`/en/reviews`, `/en/business`, `/en/for/*`, `/en/foreigners/rentals` and the localized legal pages) now resolve through one middleware rewrite to the internal filesystem route and return 200. The proxy bypasses only those internal rewritten paths to prevent the prior self-referential 307 loop.

No additional pages were created in F3.
