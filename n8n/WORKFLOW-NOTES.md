# Workflow mínimo sugerido

## Flujo
1. **Webhook**
2. **Validate Lead**:
   - comprueba `X-Lead-Secret`
   - comprueba honeypot
   - comprueba consentimiento
   - comprueba campos mínimos
3. **If**
   - inválido -> responder `401`
   - válido -> normalizar
4. **Store Lead**
5. **Notify Sales**
6. **Respond Success**

## Destinos recomendados para fase 1
- Google Sheets + email
- Airtable + Slack
- Postgres + email

## Mejoras para fase 2
- deduplicación por `phone + productInterest`
- rate limit
- Turnstile
- score de lead
- enrichment con horario o provincia
