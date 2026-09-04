import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, getSubpagesForProduct, products, site } from '@/lib/products';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import RevealLight from '@/components/ui/reveal-light';
import { getLocalPexelsImage } from '@/lib/pexels';
import { localizedPath } from '@/i18n/navigation';
import { localizedProductPath, localizedSubpagePath } from '@/lib/product-locales';

export const metadata: Metadata = {
  title: "Todos Nuestros Seguros en Madrid | Valentín Protección",
  description: "Salud, vida, dental, mascotas, viaje y mucho más. Te ayudamos a valorar las modalidades y coberturas que podemos distribuir, sin presión y sin complicaciones.",
  keywords: "seguros madrid, comparar seguros madrid, asesor seguros madrid, tipos de seguros",
  openGraph: {
    title: "Todos Nuestros Seguros en Madrid | Valentín Protección",
    description: "Salud, vida, dental, mascotas, viaje y mucho más. Te ayudamos a valorar las modalidades y coberturas que podemos distribuir, sin presión y sin complicaciones.",
    url: "https://valentinproteccionintegral.com/seguros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/seguros",
    languages: { es: "https://valentinproteccionintegral.com/seguros", en: "https://valentinproteccionintegral.com/en/insurance", "x-default": "https://valentinproteccionintegral.com/seguros" },
  },
};

export const dynamic = 'force-static';

const insuranceCopy = {
  es: { home: 'Inicio', crumb: 'Seguros', kicker: 'Nuestros seguros', title: 'Seguros en Madrid: salud, vida, dental, mascotas y más — sin complicaciones, sin presión', intro: 'Cada producto tiene su propia página con ventajas, preguntas frecuentes y formas reales de pedir orientación.', details: 'Ver detalles', whatsapp: 'Consultar por WhatsApp', reviews: 'Lo que dicen nuestros clientes', trustKicker: 'Tu equipo de confianza', trustTitle: 'Familias de Madrid confían en nuestro criterio, con registro oficial en la DGSFP', trustBody: 'Somos Rosa y Sebastián Valentín. Te acompañamos personalmente en todo el proceso: escuchamos lo que necesitas, buscamos la mejor solución para tu situación concreta y te explicamos cada detalle con claridad. Sin presiones, sin letra pequeña, sin sorpresas.', trustCta: 'Hablar con Rosa', trustAlt: 'Sebastián Valentín asesorando a un cliente sobre su seguro en Boadilla del Monte' },
  en: { home: 'Home', crumb: 'Insurance', kicker: 'Our insurance', title: 'Insurance in Madrid: health, life, dental, pet cover and more — without pressure or complications', intro: 'Each product has its own page with practical benefits, frequently asked questions and clear ways to ask for guidance.', details: 'View details', whatsapp: 'Ask on WhatsApp', reviews: 'What our clients say', trustKicker: 'Your trusted team', trustTitle: 'Families in Madrid trust our judgement, with official registration with the DGSFP', trustBody: 'We are Rosa and Sebastián Valentín. We guide you personally through the whole process: we listen to what you need, find the right solution for your situation and explain every detail clearly. No pressure, no small print, no surprises.', trustCta: 'Talk to Rosa', trustAlt: 'Sebastián Valentín advising a client about insurance in Boadilla del Monte' },
} as const;
const productEnglish: Record<string, { label: string; summary: string }> = {
  salud: { label: 'Health insurance', summary: 'Private health cover for individuals, families and international residents.' },
  vida: { label: 'Life insurance', summary: 'Protection for the people and commitments that matter most.' },
  dental: { label: 'Dental insurance', summary: 'Dental care with practical options for everyday needs.' },
  mascotas: { label: 'Pet insurance', summary: 'Support and protection for your dog or cat.' },
  viaje: { label: 'Travel insurance', summary: 'Travel with support for the unexpected, wherever you go.' },
  decesos: { label: 'Funeral insurance', summary: 'Planning and support for your family when it matters most.' },
  accidentes: { label: 'Accident insurance', summary: 'Financial protection for the unexpected, in your personal and professional life.' },
};
const childLabelEnglish: Record<string, string> = {
  completa: 'Comprehensive', familias: 'Families', senior: 'Senior', extranjeros: 'Foreigners', reembolso: 'Reimbursement', autonomos: 'Self-employed',
  'responsabilidad-civil': 'Civil liability', 'pyme-autonomos': 'Business and self-employed', estudios: 'Studies',
};

export function InsuranceHubPageView({ locale = 'es' }: { locale?: 'es' | 'en' } = {}) {
  const copy = insuranceCopy[locale];
  const en = locale === 'en';
  // Usar imágenes locales de Pexels para mejor rendimiento (LCP)
  const productsWithImages = products.map((product) => {
    const localImage = getLocalPexelsImage(product.slug);
    return {
      ...product,
      pexelsImage: localImage || product.cardImage,
    };
  });

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: copy.home, url: en ? '/en' : '/' },
          { name: copy.crumb, url: localizedPath(locale, '/insurance') }
        ]} 
      />
      <Header />
      <main className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: copy.home, href: en ? '/en' : '/' }, { label: copy.crumb }]} />
          <div className="mb-10 max-w-3xl">
            <p className="kicker">{copy.kicker}</p>
            <h1 className="mt-3 section-title">{copy.title}</h1>
            <p className="section-copy mt-4">{copy.intro}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {productsWithImages.map((product, idx) => {
              const children = getSubpagesForProduct(product.slug);
              const localizedProduct = en ? productEnglish[product.slug] : undefined;
              return (
                 <RevealLight key={product.slug} delay={idx * 0.1}>
                  <article className="glass-card-premium group overflow-hidden h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        src={product.pexelsImage} 
                        alt={localizedProduct?.label ?? product.cardAlt}
                        width={800}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        className="object-cover transition-transform duration-700 group-hover:scale-110 w-full h-full" 
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(18,59,104,0.85)] to-transparent p-5 text-white">
                        <h2 className="font-heading text-3xl font-bold">{localizedProduct?.label ?? product.label}</h2>
                      </div>
                    </div>
                    <div className="p-7 flex-grow flex flex-col">
                      <p className="text-base leading-8 text-[var(--muted)] line-clamp-3 flex-grow">{localizedProduct?.summary ?? product.summary}</p>
                      {children.length ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                              {children.map((child) => (
                            <Link key={child.slug} href={localizedSubpagePath(product.slug, child.slug, en ? 'en' : 'es')} className="rounded-full bg-white/50 backdrop-blur-sm border border-[var(--border)] px-3 py-1.5 text-xs font-bold text-[var(--blue-deep)] hover:bg-[var(--blue)] hover:text-white transition-all">
                              {en ? (childLabelEnglish[child.slug] ?? child.label) : child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                      <div className="mt-8 flex flex-col gap-3">
                        <Link href={product.slug === 'salud' ? localizedPath(locale, '/insurance/health') : localizedProductPath(product.slug, en ? 'en' : 'es')} className="btn-secondary w-full justify-center">{copy.details}</Link>
                        <a 
                          href={buildWhatsAppHref(
                            en ? `Hello, I would like information about ${localizedProduct?.label ?? product.label}.` : `Hola, me interesa información sobre ${product.label}.`
                          )} 
                          className="btn-whatsapp w-full justify-center"
                          target="_blank" 
                          rel="noreferrer"
                        >
                          <WhatsAppIcon className="h-4 w-4" /> 
                          {copy.whatsapp}
                        </a>
                      </div>
                    </div>
                  </article>
                </RevealLight>
              );
            })}
          </div>

          <GoogleReviewsWidget title={copy.reviews} locale={locale} />

          {/* Rosa Trust Block — Conversión y cercanía */}
          <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#002244] to-[#0F5E9C] p-8 md:p-12 text-white overflow-hidden">
            <div className="grid gap-8 md:grid-cols-[280px_1fr] items-center">
              <div className="relative mx-auto md:mx-0 h-[320px] w-[260px] rounded-[24px] overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image src="/images/sebastian_con_cliente.png" alt={copy.trustAlt} fill className="object-cover object-top" />
              </div>
              <div className="space-y-5">
                <p className="font-heading text-lg font-semibold text-white/70 uppercase tracking-widest">{copy.trustKicker}</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
                  {copy.trustTitle}
                </h2>
                <p className="text-lg leading-8 text-white/80 max-w-2xl">
                  {copy.trustBody}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <a href={buildWhatsAppHref(en ? 'Hello Rosa, I would like personalised guidance about insurance.' : 'Hola Rosa, quiero una orientación personalizada sobre seguros.')} className="btn-whatsapp !text-base !px-8 !py-4 shadow-xl"><WhatsAppIcon className="h-5 w-5" /> {copy.trustCta}</a>
                  <a href={`tel:${site.phoneHref}`} className="inline-flex items-center gap-2 rounded-[16px] border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"><Phone className="h-4 w-4" /> {site.phone}</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

export default function SegurosHubPage() { return <InsuranceHubPageView locale="es" />; }
