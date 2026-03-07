# Checklist de despliegue en Cloudflare Pages

## Opción elegida en esta fase
Landing **estática** con `next build` y carpeta `out/`.

## Pasos

1. Sube el proyecto a GitHub.
2. En Cloudflare, crea un proyecto en **Workers & Pages**.
3. Elige **Pages** e importa el repositorio.
4. Usa:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Añade variables de entorno del proyecto:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_URL`
   - `NEXT_PUBLIC_LEAD_ENDPOINT`
   - `NEXT_PUBLIC_LEAD_SECRET`
6. Despliega.
7. En DNS, apunta el dominio:
   - `valentinproteccionintegral.com`
   - `www.valentinproteccionintegral.com`
8. Verifica HTTPS.
9. Publica el workflow de n8n y cambia el endpoint de prueba por el endpoint de producción.
10. Envía un lead real de prueba y revisa:
   - recepción
   - respuesta del webhook
   - guardado
   - notificación

## Recomendación práctica
Mantén dos entornos:

- preview / staging
- producción

## Antes de lanzar campañas
- revisa el número de WhatsApp
- revisa textos legales
- prueba el formulario desde móvil
- prueba UTMs
- comprueba que el honeypot rechaza bots simples
- comprueba que el webhook devuelve 401 si el secret es incorrecto
