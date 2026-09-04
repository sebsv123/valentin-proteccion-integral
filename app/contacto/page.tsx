import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { LeadForm } from '@/components/lead-form';
import { buildWhatsAppHref, site } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import HowItWorksSection from '@/components/HowItWorksSection';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { AdeslasAgentLink } from '@/components/adeslas-agent-link';


export const metadata: Metadata = {
  title: "Contacto · Asesor de Seguros Boadilla | VPI",
  description: "Estamos en Boadilla del Monte, Madrid. Llámanos al 603 44 87 65 o escríbenos por WhatsApp. Rosa y Sebastián Valentín responden en menos de 2 horas. Consulta gratuita sin compromiso.",
  keywords: "contacto asesora seguros madrid, consulta gratuita seguros boadilla del monte, telefono seguros madrid, agentes seguros madrid",
  openGraph: {
    title: "Contacto · Asesor de Seguros Boadilla | VPI",
    description: "Rosa y Sebastián Valentín, agentes de seguros en Boadilla del Monte. Responden en nuestro horario de atención. Consulta gratuita.",
    url: "https://valentinproteccionintegral.com/contacto",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/contacto",
    languages: { es: "https://valentinproteccionintegral.com/contacto", en: "https://valentinproteccionintegral.com/en/contact", "x-default": "https://valentinproteccionintegral.com/contacto" },
  },
};

export const dynamic = 'force-static';

export function ContactoPageView({ locale = 'es' }: { locale?: 'es' | 'en' } = {}) {
  const en = locale === 'en';
  const copy = en ? {
    home: 'Home', crumb: 'Contact', kicker: 'Contact — Boadilla del Monte, Madrid', title: 'Contact us — Valentín Protección Integral', body: <>We are based in Boadilla del Monte, Madrid. Call us on <strong>603 44 87 65</strong> or message us on WhatsApp. Rosa and Sebastián Valentín reply during opening hours.</>, whatsapp: 'No-obligation consultation', phone: 'Call', response: <>We reply during our opening hours.<br />No call centres. No forms nobody reads.</>, reviews: 'Complete trust from our clients', alt: 'Rosa and Sebastián Valentín, insurance advisers in Boadilla del Monte', adeslasTitle: 'You can also contact us through the official Adeslas channel', adeslasDescription: 'Before leaving VPI, you can check that the link opens the official agent directory with Rosa Valentín’s associated channel in Boadilla del Monte.', adeslasCta: 'Open official channel'
  } : {
    home: 'Inicio', crumb: 'Contacto', kicker: 'Contacto — Boadilla del Monte, Madrid', title: 'Contacta con Nosotros — Valentín Protección Integral', body: <>Estamos en Boadilla del Monte, Madrid. Llámanos al <strong>603 44 87 65</strong> o escíbenos por WhatsApp. Rosa y Sebastián Valentín responden en horario de atención.</>, whatsapp: 'Consulta sin compromiso', phone: 'Llamar al', response: <>Respondemos en nuestro horario de atención.<br />Sin call centers. Sin formularios que nadie lee.</>, reviews: 'Confianza total de nuestros clientes', alt: 'Rosa y Sebastián Valentín, asesores de seguros en Boadilla del Monte', adeslasTitle: 'También puedes solicitar contacto desde el canal oficial de Adeslas', adeslasDescription: 'Antes de salir de VPI, puedes comprobar que el enlace abre el buscador oficial de agentes con el canal asociado a Rosa Valentín en Boadilla del Monte.', adeslasCta: 'Abrir canal oficial'
  };
  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: copy.home, item: en ? `${site.domain}/en` : site.domain, position: 1 },
          { name: copy.crumb, item: en ? `${site.domain}/en/contact` : `${site.domain}/contacto`, position: 2 }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "inLanguage": locale,
            "name": "Valentín Protección Integral",
            "description": en ? "Personal insurance guidance in Boadilla del Monte, Madrid, with official registration. Health, life, dental, pet, accident and travel insurance." : "Asesoramiento personalizado en seguros en Boadilla del Monte, Madrid, con registro oficial. Salud, vida, dental, mascotas, accidentes y viaje.",
            "url": en ? "https://valentinproteccionintegral.com/en/contact" : "https://valentinproteccionintegral.com/contacto",
            "telephone": "+34603448765",
            "email": "info@valentinproteccionintegral.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Boadilla del Monte",
              "addressLocality": "Boadilla del Monte",
              "addressRegion": "Madrid",
              "postalCode": "28660",
              "addressCountry": "ES"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.4072,
              "longitude": -3.8747
            },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" }
            ],
            "sameAs": ["https://www.instagram.com/segurosvalentin/"],
            "priceRange": "Consulta gratuita"
          })
        }}
      />
      <Header />
      <main id="contacto-main" aria-labelledby="contact-h1" className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: copy.home, href: en ? '/en' : '/' }, { label: copy.crumb }]} />
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="soft-card overflow-hidden">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[340px] overflow-hidden">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt={copy.alt}
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    loading="eager"
                  />
                </div>
                <div className="p-7 md:p-9">
                  <p className="kicker">{copy.kicker}</p>
                  <h1 id="contact-h1" className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">{copy.title}</h1>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
                    {copy.body}
                  </p>
                  <div className="mt-6 grid gap-3">
                    <a href={buildWhatsAppHref(en ? 'Hello, I would like to resolve an insurance question.' : 'Hola, quiero resolver una duda sobre seguros.')} className="btn-whatsapp justify-center"><WhatsAppIcon className="h-4 w-4" /> {copy.whatsapp}</a>
                    <a href={`tel:${site.phoneHref}`} className="btn-secondary justify-center">{copy.phone} {site.phone}</a>
                  </div>
                </div>
              </div>
            </div>
            <LeadForm compact />
          </div>
          <div className="mt-8 max-w-4xl">
            <AdeslasAgentLink
              location="contact_page_external_channel"
              variant="mini-preview"
              locale={locale}
              title={copy.adeslasTitle}
              description={copy.adeslasDescription}
              linkLabel={copy.adeslasCta}
            />
          </div>
          <div className="mt-10 flex items-center gap-4 rounded-[22px]
                          border-2 border-[var(--blue)]/20 bg-[var(--blue)]/5
                          px-6 py-5 max-w-xl">
            <span className="text-2xl flex-none">⏱️</span>
            <p className="text-base font-semibold text-[var(--blue-deep)] leading-relaxed">
              {copy.response}
            </p>
          </div>
          <div className="mt-16">
            <GoogleReviewsWidget title={copy.reviews} locale={locale} />
          </div>
        </div>
      </main>
      <HowItWorksSection />
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

export default function ContactoPage() { return <ContactoPageView locale="es" />; }
