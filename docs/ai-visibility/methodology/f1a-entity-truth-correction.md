# F1A · Entity Truth Correction

## Scope

This intervention follows the closed pre-F1 Entity baseline checkpoint
`3a8cbe7cd25667b54168b06e21886a8e700bfe07`. The historical baseline data and
captures remain unchanged and are not re-annotated by this intervention.

## Pre-F1 failure patterns

Across the valid baseline observations, engines repeatedly treated Rosa as the
sole or principal founder and regulated person, reduced Sebastián to a team or
technical role, omitted Sebastián's ASISA relationship, and sometimes mapped
VPI to a brokerage or to one insurer's exclusive agency. These are diagnostic
observations retained in the baseline, not public copy to reproduce.

## Target correction

Valentín Protección Integral is the commercial brand/project. Rosa Isabel
Valentín González and Sebastián Sifontes Valentín are equal co-founders. Rosa's
individual exclusive-agent relationship is with SegurCaixa Adeslas and
Sebastián's individual exclusive-agent relationship is with ASISA. Neither
relationship is attributed to VPI as a single regulated person or registration.

The legal website owner/responsible disclosure remains separately associated
with Rosa and is not used to infer a founder hierarchy.

## Implementation record

- `lib/site-config.ts`: separates `coFounders`, `legalOwner` and individual
  `professionalRelationships`; the existing responsible-person access remains
  a legal-disclosure compatibility alias only.
- `app/sobre-nosotros/page.tsx` and `lib/corporate-content.ts`: makes the ES/EN
  founder relationship equal and states the two person-specific insurer
  relationships.
- `app/[locale]/about-us/page.tsx`: aligns English metadata with the same model.
- `components/home-content.ts` and `app/page.tsx`: removes Rosa-led project
  attribution and uses co-founded brand language.
- `components/seo/schema-persons.tsx`, `components/seo/schema-local-business.tsx`
  and the homepage JSON-LD: publishes two Person nodes and two founder edges
  from the InsuranceAgency brand node. Individual insurer relationships remain
  in Person descriptions/job titles and are not attached to VPI.
- `app/seguros/page.tsx` and `app/seguros/[slug]/page.tsx`: removes
  whole-market-comparison implications from the reviewed service copy.
- Residual pass: corrected the remaining public blog claims that implied
  whole-market comparison, made product CTAs use a neutral bilingual team
  label instead of the legal responsible-person alias, and restored an
  explicit homepage OpenGraph description aligned with the metadata.
- Compliance microfix: removed plural DGSFP-registration wording from public
  badges and editorial copy where Sebastián's individual registration is not
  verified. The same neutral wording was applied to remaining public location,
  product, hero and editorial surfaces. Rosa-specific legal/disclosure
  references remain unchanged.

## Deliberately untouched legal fields

No NIF, legal owner, DGSFP identifier, privacy controller, cookie identity or
legal-page ownership field was changed. No Sebastián registration number or
ASISA profile URL was invented. Article authorship remains unchanged where it
may represent actual authorship rather than organization identity.

## ES/EN parity

Both languages now express the same two-founder structure, the same distinction
between commercial brand and individual agents, the same Rosa/SegurCaixa
Adeslas and Sebastián/ASISA relationships, and the same non-insurer/non-
independent-brokerage distinction.

## F1B follow-up

Any remaining legal wording ambiguity around the scope of the public legal
disclosure, ownership terminology, and the precise publication of individual
distribution credentials must be reviewed in F1B. This F1A change does not
alter those legal identifiers.
