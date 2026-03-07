# Valentín Protección Integral

Landing en **Next.js + App Router + Tailwind** preparada para una fase 1 simple:

- landing estática
- CTA a WhatsApp
- formulario que hace `POST` directo al webhook de **n8n**
- copy prudente basado en tus JSON
- páginas legales placeholder
- checklist de despliegue para Cloudflare

## 1) Variables de entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Configura:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `NEXT_PUBLIC_LEAD_ENDPOINT`
- `NEXT_PUBLIC_LEAD_SECRET`

## 2) Desarrollo local

```bash
npm install
npm run dev
```

## 3) Build de producción

```bash
npm run build
```

El proyecto usa `output: "export"` en `next.config.ts`, así que el build genera una carpeta `out/` apta para **Cloudflare Pages**.

## Estructura

- `app/page.tsx`: landing principal
- `components/lead-form.tsx`: formulario y envío a n8n
- `lib/site-data.ts`: productos, FAQs, disclaimers y datos renderizados
- `n8n/lead-intake-workflow.json`: blueprint del workflow
- `DEPLOY-CLOUDFLARE.md`: checklist de despliegue

## Nota importante sobre seguridad en fase 1

El header `X-Lead-Secret` desde navegador sirve como filtro **ligero**, no como secreto real, porque el cliente puede inspeccionar el código o la petición.

Para la fase 2, la arquitectura más sólida es:

`Landing -> API propia -> n8n`

Ahí sí puedes tener:

- validación real del lado servidor
- rate limiting
- deduplicación
- almacenamiento persistente
- secretos privados
- observabilidad limpia

## Qué falta para dejarlo de producción total

- textos legales finales
- logo definitivo
- dominio y DNS conectados
- credenciales reales de n8n
- almacenamiento persistente para leads
- sistema anti-spam más fuerte como Turnstile o API intermedia
