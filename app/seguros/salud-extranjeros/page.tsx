import type { Metadata } from "next";
import Image from "next/image";
import dynamicImport from "next/dynamic";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Shield, CheckCircle2, Phone, Globe, FileCheck, Check, FileText, Heart, Users, Scale, MessageSquare } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { healthForeignersContent } from '@/app/seguros/health-foreigners-content';

// Dynamic imports for non-critical components (reduce initial JS bundle)
const StickyWhatsApp = dynamicImport(() => import("@/components/sticky-whatsapp").then(m => m.StickyWhatsApp));
const FAQChat = dynamicImport(() => import("@/components/faq-chat").then(m => m.FAQChat));

export const metadata: Metadata = {
  title: "Seguro Médico para NIE, TIE y Visado | VPI",
  description: "Seguro médico para extranjeros en España (precios orientativos desde 22,50€/mes). Modalidades para visado, NIE y TIE. Revisamos que se ajuste a los requisitos habituales de tu trámite; la decisión final corresponde a la administración o consulado.",
  keywords: ["seguro médico NIE España","seguro residencia Madrid latinos 2026","seguro médico extranjeros","NIE TIE seguro Madrid","seguro extranjería España","seguro medico para visado españa","seguro sin copagos extranjeros españa","certificado seguro medico consulado españa"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-extranjeros", languages: { es: "https://valentinproteccionintegral.com/seguros/salud-extranjeros", en: "https://valentinproteccionintegral.com/en/insurance/health/foreigners", 'x-default': "https://valentinproteccionintegral.com/seguros/salud-extranjeros" } },
  openGraph: {
    title: "Seguro Médico para NIE, TIE y Visado | VPI",
    description: "Modalidades para visado y residencia. Revisamos que se ajuste a los requisitos habituales de tu trámite; decide la administración o consulado.",
    url: "https://valentinproteccionintegral.com/seguros/salud-extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/rosa_y_sebastian.jpeg", width: 1200, height: 630, alt: "Rosa y Sebastián - Agentes de seguros en Madrid" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral",
  "url": "https://valentinproteccionintegral.com",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. de los Reyes Católicos, 1",
    "addressLocality": "Boadilla del Monte",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "areaServed": ["Boadilla del Monte", "Madrid", "Majadahonda", "Pozuelo de Alarcón"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "60",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Médico NIE/TIE Extranjeros Madrid - Valentín Protección Integral",
  "provider": localBusinessSchema,
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Seguro médico para residencia en España. Modalidades que pueden cubrir los requisitos habituales de NIE/TIE; la decisión final corresponde a la administración."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿El seguro es válido para solicitar el visado o NIE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con modalidades diseñadas para cubrir los requisitos habituales exigidos para visado, NIE y TIE. Revisamos tu caso concreto, aunque la decisión final corresponde al consulado o a la comisaría de extranjería."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en emitirse el certificado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El certificado lo emite la aseguradora tras la contratación; te indicamos el plazo estimado según la compañía."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tiene copagos o carencias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los copagos y las carencias dependen de la modalidad contratada; te detallamos las condiciones antes de contratar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo contratar si ya estoy en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, puedes contratar desde cualquier punto de España sin necesidad de desplazarte."
      }
    }
  ]
};

export const dynamic = "force-static";

export function SaludExtranjerosPageView({ locale = 'es' }: { locale?: 'es' | 'en' } = {}) {
  const en = locale === 'en';
  const c = healthForeignersContent[locale];
  const wVisado = buildWhatsAppHref(en ? "Hello, I am interested in health insurance for a visa, NIE or TIE. I would like guidance on the right option for my situation and how to arrange it." : "Hola, estoy interesado/a en un seguro médico para visado, NIE o TIE. Me gustaría recibir orientación sobre la opción más adecuada para mi situación y el proceso para contratarlo.");
  const localizedSchemas = en ? {
    ...localBusinessSchema,
    inLanguage: 'en',
    url: 'https://valentinproteccionintegral.com/en/insurance/health/foreigners',
    name: 'Valentín Protección Integral',
    description: 'Health insurance guidance for visa, NIE and TIE applications in Spain.',
  } : { ...localBusinessSchema, inLanguage: 'es' };
  const localizedService = en ? { ...serviceSchema, inLanguage: 'en', provider: { ...localBusinessSchema, inLanguage: 'en' }, name: 'Health insurance for foreigners in Spain - Valentín Protección Integral', description: 'Health insurance options for visa, NIE and TIE applications in Spain.' } : { ...serviceSchema, inLanguage: 'es' };
  const localizedFaq = { ...faqSchema, inLanguage: locale, mainEntity: c.faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };


  return (
    <>
      <link rel="preload" href="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900" as="image" fetchPriority="high" />
      <BreadcrumbSchema items={[{name: en ? 'Home' : 'Inicio',url: en ? '/en' : '/'},{name: en ? 'Insurance' : 'Seguros',url: en ? '/en/insurance' : '/seguros'},{name: en ? 'Health insurance for foreigners' : 'Salud Extranjeros',url: en ? '/en/insurance/health/foreigners' : '/seguros/salud-extranjeros'}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(localizedSchemas)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(localizedFaq)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(localizedService)}} />

      {/* Gancho Principal - Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 border-b border-slate-700 text-white py-2.5 text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{c.topNotice} </span>
            <span className="sm:hidden">{c.mobileNotice}</span>
          </p>
        </div>
      </div>

      <header className="fixed top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-16">
          <a href={en ? '/en' : '/'} className="font-bold text-slate-900 text-lg tracking-tight">
            Valentín <span className="text-emerald-600">Protección Integral</span>
          </a>
          <a
            href={wVisado}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{en ? 'Quote ' : 'Presupuesto '}</span>WhatsApp
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-white pt-24 sm:pt-28">

        {/* 1. HERO — Impacto Inmediato (Fondo Restaurado) */}
        <section className="relative py-20 lg:py-32 bg-[#1e3a5f] overflow-hidden min-h-[85vh] flex items-center">
          {/* Fondo con imagen multicultural - optimizada para LCP */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt={en ? 'Health insurance for foreigners in Spain — NIE, TIE and visa' : 'Seguro médico para extranjeros en España — NIE TIE visado consulado'}
              width={900}
              height={600}
              className="object-cover opacity-30 w-full h-full"
              priority
              fetchPriority="high"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFlM2E1ZiIvPjwvc3ZnPg=="
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
              <div>
                <h1 className="text-[40px] sm:text-[60px] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                  {c.heroTitle}
                </h1>

                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-10 font-medium">
                  {c.heroIntro}
                  <br />
                  <span className="text-emerald-400 font-bold underline decoration-emerald-400/30 underline-offset-8">{c.heroAccent}</span>
                </p>

                <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 px-4 py-2 rounded-full text-sm font-black mb-6">
                  ⚡ {c.timing}
                </div>

                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                  {c.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3 text-white font-bold">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                        <Check className="w-4 h-4 text-gray-900" />
                      </div>
                      {bullet}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-emerald-400 flex items-center justify-center text-xs text-white font-bold">
                        {["A","M","L","R","K"][i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm font-bold">{c.heroProof}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-full sm:w-auto">
                    <a
                      href={wVisado}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-xl shadow-emerald-500/20 w-full"
                    >
                      <WhatsAppIcon className="w-6 h-6" />
                      {c.cta}
                    </a>
                    <p className="text-center mt-3 text-white font-bold flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {c.response}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full border-4 border-emerald-500/20 overflow-hidden shadow-xl ring-4 ring-white/10">
                      <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián" fill sizes="64px" className="object-cover object-[center_20%]" />
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-white/50 font-bold uppercase tracking-widest">{c.advisorLabel}</p>
                      <p className="text-lg font-bold text-white leading-none">Rosa y Sebastián</p>
                      <p className="text-xs text-emerald-400 mt-1 font-medium italic">{c.advisorRole}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta tipo "Documento Oficial" (Imagen Real con Efecto Premium) */}
              <div className="hidden lg:block relative group perspective-1000">
                <div className="absolute inset-0 bg-emerald-600/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative transform rotate-2 group-hover:rotate-0 transition-all duration-700 hover:scale-[1.02]">
                  <div className="relative">
                    <div className="relative bg-white p-2 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden">
                      <Image
                        src="/images/premium/certificado-oficial.png"
                        alt={c.documentAlt}
                        width={600}
                        height={800}
                        className="rounded-[24px] w-full h-auto"
                      />
                    </div>

                    {/* Badge flotante "Según la aseguradora" - Ahora fuera del overflow */}
                    <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-bounce-soft z-20">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-bold text-slate-700">{c.documentBadge}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN PERFILES — ¿Para quién es este seguro? */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{c.profilesTitle}</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">{c.profilesIntro}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {c.profiles.map((perfil, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-4">{['🎓', '🏠', '💼'][i]}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{perfil.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{perfil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BLOQUE GARANTÍAS (Subido arriba) */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                {c.guaranteesTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {c.guarantees.map((t, i) => (
                <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center group">
                  <div className="mb-8 w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto group-hover:bg-emerald-50 group-hover:scale-110 transition-all">
                    {[Shield, Heart, FileText][i] && (() => { const Icon = [Shield, Heart, FileText][i]; return <Icon className="w-10 h-10 text-emerald-600" />; })()}
                  </div>
                  <p className="text-2xl font-bold text-slate-800 leading-tight">
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BLOQUE CÓMO FUNCIONA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                {c.processTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              {c.process.map((paso, i) => (
                <div key={i} className="relative">
                  <div className="text-[120px] font-black text-slate-100 absolute -top-20 left-1/2 -translate-x-1/2 z-0 opacity-50 select-none">
                    {i + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl shadow-emerald-600/20">
                      {i + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{paso.t}</h3>
                    <p className="text-slate-500 font-bold">{paso.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href={wVisado}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-xl shadow-emerald-600/20"
              >
                <WhatsAppIcon className="w-6 h-6" />
                {c.processCta}
              </a>
            </div>
          </div>
        </section>


        {/* Gancho A — Error frecuente */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30
            text-red-300 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8">
              {c.errorKicker}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              {c.errorTitle}<br />
              <span className="text-red-400">{c.errorAccent}</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              {c.errorCopy}
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto mb-8">
              <p className="text-emerald-400 font-black text-lg mb-2">
                {c.errorLead}
              </p>
              <p className="text-slate-400">
                {c.errorDetail}
              </p>
            </div>
            <a
              href={buildWhatsAppHref(en ? "I want you to check whether my insurance is valid for immigration" : "Quiero que verifiquéis si mi seguro es válido para extranjería")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700
              text-white px-8 py-4 rounded-xl font-black transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {c.errorCta}
            </a>
          </div>
        </section>
        {/* STATS VISUALES */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{c.statsTitle}</h2>
              <p className="text-slate-500 mt-3">{c.statsIntro}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {c.stats.map((stat, i) => (
                  <div key={i} className="bg-slate-50 rounded-[32px] p-10 border border-slate-100">
                    <div className="text-4xl mb-3">{['✅', '⚡', '🛡️'][i]}</div>
                    <p className="text-5xl font-black text-slate-900 mb-2">{stat.num}</p>
                    <p className="text-slate-500 font-bold text-sm">{stat.label}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gancho B — Calculadora de urgencia */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              {c.urgencyTitle}
            </h2>
            <p className="text-slate-500 mb-10">
              {c.urgencyIntro}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href={buildWhatsAppHref(en ? "I have an urgent immigration appointment in less than 7 days and need insurance now" : "Tengo cita de extranjería URGENTE en menos de 7 días, necesito el seguro ya")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-red-50 border-2 border-red-200
                hover:border-red-400 hover:bg-red-100 text-slate-900 p-8 rounded-2xl
                font-black transition-all group"
              >
                <span className="text-4xl">🚨</span>
                  <span className="text-lg font-extrabold text-red-700">{c.urgent.title}</span>
                  <span className="text-sm text-slate-500 font-medium">{c.urgent.desc}</span>
                <span className="inline-flex items-center gap-2 mt-2 bg-red-600 text-white
                px-5 py-2 rounded-xl text-sm font-black group-hover:bg-red-700 transition-all">
                  <WhatsAppIcon className="w-4 h-4" />
                  {c.write}
                </span>
              </a>

              <a
                href={buildWhatsAppHref(en ? "I have an immigration appointment coming up and would like to prepare my insurance in advance" : "Tengo cita de extranjería próximamente, quiero preparar el seguro con tiempo")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-emerald-50 border-2 border-emerald-200
                hover:border-emerald-400 hover:bg-emerald-100 text-slate-900 p-8 rounded-2xl
                font-black transition-all group"
              >
                <span className="text-4xl">📅</span>
                  <span className="text-lg font-extrabold text-emerald-700">{c.planned.title}</span>
                  <span className="text-sm text-slate-500 font-medium">{c.planned.desc}</span>
                <span className="inline-flex items-center gap-2 mt-2 bg-emerald-600 text-white
                px-5 py-2 rounded-xl text-sm font-black group-hover:bg-emerald-700 transition-all">
                  <WhatsAppIcon className="w-4 h-4" />
                  {c.write}
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. BLOQUE ESPECIALISTAS (Reposicionado y Protagonista) */}
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5V4zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '6px 6px'
            }}
          />
          <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            <div className="flex justify-center mb-10">
              <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <Users className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              {c.specialistTitle}
            </h2>
            <p className="text-2xl md:text-3xl text-emerald-100/70 leading-relaxed mb-8 font-medium">
              {c.specialistIntro}
            </p>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              {c.specialistDetail}
            </p>
          </div>
        </section>

        {/* 5. BLOQUE SORPRESAS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                {c.easyTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {c.easy.map((t, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                  <div className="mb-6"><CheckCircle2 className="w-8 h-8 text-emerald-500" /></div>
                  <p className="text-lg font-bold text-slate-800 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. BLOQUE CONTEXTO LEGAL */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md">
              <Scale className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
              {c.whyTitle}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {c.whyText}
            </p>
          </div>
        </section>

        {/* 7. BLOQUE IDENTIDAD */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt={c.identityAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div>
                <p className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">{c.identityKicker}</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                  {c.identityTitle}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {c.identityIntro}
                </p>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <Heart className="w-6 h-6 text-emerald-500" />
                  <p className="font-bold text-slate-800">{c.identityNote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title={en ? 'Client reviews about insurance for foreigners' : 'Opiniones de clientes sobre seguros para extranjeros'} />

        {/* 8. FAQ */}
        <FAQChat
          brandColor="emerald"
          title={c.faqTitle}
          subtitle={c.faqSubtitle}
          ctaQuestion={en ? 'Do you have more questions?' : '¿Tienes más preguntas?'}
          ctaLabel={en ? 'Talk to us on WhatsApp' : 'Habla con nosotros por WhatsApp'}
          ctaResponse={en ? 'Reply during office hours' : 'Respuesta en horario'}
          items={[...c.faqs]}
        />
        {/* 9. CTA FINAL */}
        <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              {c.finalTitle}
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              {c.finalIntro}
            </p>
            <a
              href={wVisado}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-emerald-600/20"
            >
              <WhatsAppIcon className="w-6 h-6" />
              {c.finalCta}
            </a>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-bold text-slate-400">
              <p className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                {c.fast}
              </p>
              <p className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-500" />
                {c.complete}
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-white mb-4">Valentín Protección Integral</p>
          <p className="text-sm">© 2026 · {en ? 'Officially registered insurance guidance' : 'Orientación de seguros con registro oficial'} · NIF 79234434D · Boadilla del Monte, Madrid</p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm">
            <a href="tel:+34603448765" className="text-slate-400 hover:text-white transition-colors">603 44 87 65</a>
            <span className="text-slate-600">·</span>
            <a href="mailto:contacto@valentinproteccionintegral.com" className="text-slate-400 hover:text-white transition-colors">contacto@valentinproteccionintegral.com</a>
          </div>
        </div>
      </footer>

      <StickyWhatsApp />

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 sm:hidden">
        <a
          href={wVisado}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-emerald-600 text-white py-4 rounded-xl font-black shadow-lg"
        >
          <WhatsAppIcon className="w-5 h-5" />
          {c.cta.replace(' ahora', '')}
        </a>
      </div>
    </>
  );
}

export default function SaludExtranjerosPage() { return <SaludExtranjerosPageView locale="es" />; }
