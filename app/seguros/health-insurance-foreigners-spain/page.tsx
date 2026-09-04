import type { Metadata } from "next";
import Image from "next/image";
import dynamicImport from "next/dynamic";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Shield, CheckCircle2, Phone, Globe, FileCheck, Check, FileText, Heart, Users, Scale, MessageSquare } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";

// Dynamic imports for non-critical components (reduce initial JS bundle)
const StickyWhatsApp = dynamicImport(() => import("@/components/sticky-whatsapp").then(m => m.StickyWhatsApp));
const FAQChat = dynamicImport(() => import("@/components/faq-chat").then(m => m.FAQChat));

export const metadata: Metadata = {
  title: "Health Insurance for Foreigners in Spain | NIE, TIE & Visa",
  description: "No co-payments, certificate in 24h, valid for visa and residence permit. +100 approved cases. Personal advisor in English. From 22.50€/month.",
  keywords: ["health insurance NIE Spain","health insurance TIE Spain","health insurance visa Spain","foreigners health insurance Madrid","expat health insurance Spain"],
  authors: [{ name: "Rosa Valentín" }],
  publisher: "Valentín Protección Integral",
  alternates: { canonical: "https://valentinproteccionintegral.com/en/insurance/health/foreigners", languages: { es: "https://valentinproteccionintegral.com/seguros/salud-extranjeros", en: "https://valentinproteccionintegral.com/en/insurance/health/foreigners", 'x-default': "https://valentinproteccionintegral.com/seguros/salud-extranjeros" } },
  openGraph: {
    title: "Health Insurance for Foreigners in Spain | NIE, TIE & Visa",
    description: "No co-payments, certificate in 24h, valid for visa and residence permit. +100 approved cases. From 22.50€/month.",
    url: "https://valentinproteccionintegral.com/en/insurance/health/foreigners",
    siteName: "Valentín Protección Integral",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian.jpeg", width: 1200, height: 630, alt: "Rosa and Sebastián — Registered insurance agents in Madrid" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Insurance for Foreigners in Spain | NIE, TIE & Visa",
    description: "No co-payments, certificate in 24h. Valid for all Spanish visas and residence permits. Personal advisor in English.",
  },
  other: {
    'content-language': 'en',
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
  "name": "Health Insurance NIE/TIE Foreigners Spain — Valentín Protección Integral",
  "provider": localBusinessSchema,
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Health insurance for residence in Spain 2026. Meets NIE/TIE requirements. +100 international clients approved. Certificate in 24h."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this insurance valid for all types of Spanish visas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our policies are accepted by Spanish consulates and immigration offices for student visas, non-lucrative visas, digital nomad visas, work permits and all NIE/TIE applications."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will I receive my insurance certificate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 24 hours from the moment you confirm your policy. In urgent cases, we do everything possible to get it to you the same day."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to pay co-payments when I visit the doctor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Our policies have zero co-payments — you pay your monthly premium and that's it. No surprise costs."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel the insurance once my visa or NIE is approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. There is no mandatory long-term commitment. We will advise you on the best option for your situation."
      }
    }
  ]
};

export const dynamic = "force-static";

export default function HealthInsuranceForeignersSpainPage() {
  const wVisado = buildWhatsAppHref("I need health insurance for my visa in Spain");

  return (
    <>
      <link rel="preload" href="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900" as="image" fetchPriority="high" />
      <BreadcrumbSchema items={[{name:"Home",url:"/en"},{name:"Insurance",url:"/en/insurance"},{name:"Health Insurance for Foreigners",url:"/en/insurance/health/foreigners"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />

      {/* Top Bar — Money-back guarantee */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 border-b border-slate-700 text-white py-2.5 text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">If your insurance is not valid for your application → <span className="text-amber-400">we refund your money</span></span>
            <span className="sm:hidden">If not valid for your application → <span className="text-amber-400 font-black">we refund your money</span></span>
          </p>
        </div>
      </div>

      <header className="fixed top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-16">
          <a href="/" className="font-bold text-slate-900 text-lg tracking-tight">
            Valentín <span className="text-emerald-600">Protección Integral</span>
          </a>
          <a
            href={wVisado}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Get a quote on </span>WhatsApp
          </a>
        </div>
      </header>

      <main className="min-h-screen bg-white pt-24 sm:pt-28">
        
        {/* HERO */}
        <section className="relative py-20 lg:py-32 bg-[#1e3a5f] overflow-hidden min-h-[85vh] flex items-center">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Health insurance for foreigners in Spain — NIE TIE visa consulate"
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
                  Health insurance for foreigners <span className="text-emerald-400">approved</span> for visa in Spain
                </h1>
                
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-10 font-medium">
                  Avoid mistakes that could delay or reject your visa.
                  <br />
                  <span className="text-emerald-400 font-bold underline decoration-emerald-400/30 underline-offset-8">We get you the right insurance in 24–48h.</span>
                </p>

                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                  {[
                    "Valid for immigration offices",
                    "No co-payments",
                    "Certificate ready",
                    "If not valid, we refund your money"
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3 text-white font-bold">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                        <Check className="w-4 h-4 text-gray-900" />
                      </div>
                      {bullet}
                    </div>
                  ))}
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
                      I want my insurance for visa now
                    </a>
                    <p className="text-center mt-3 text-white font-bold flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Response in less than 10 minutes
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full border-4 border-emerald-500/20 overflow-hidden shadow-xl ring-4 ring-white/10">
                  <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa and Sebastián" fill sizes="64px" className="object-cover object-[center_20%]" />
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Direct assistance</p>
                      <p className="text-lg font-bold text-white leading-none">Rosa and Sebastián</p>
                      <p className="text-xs text-emerald-400 mt-1 font-medium italic">Your personal advisors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate preview card */}
              <div className="hidden lg:block relative group perspective-1000">
                <div className="absolute inset-0 bg-emerald-600/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative transform rotate-2 group-hover:rotate-0 transition-all duration-700 hover:scale-[1.02]">
                  <div className="relative">
                    <div className="relative bg-white p-2 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden">
                      <Image 
                        src="/images/premium/certificado-oficial.png" 
                        alt="Certificado Oficial de Seguro de Salud" 
                        width={600} 
                        height={800} 
                        className="rounded-[24px] w-full h-auto"
                      />
                    </div>
                    
                    {/* Ready in 24h badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-bounce-soft z-20">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-bold text-slate-700">Ready in 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IS THIS FOR */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Who is this insurance for?</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">Three profiles. One solution. Fast and hassle-free.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  emoji: "🎓",
                  title: "International Student",
                  desc: "Studying in Spain and need health insurance for your student visa? We provide the certificate your consulate requires — fast, clear and hassle-free."
                },
                {
                  emoji: "🏠",
                  title: "NIE/TIE Residence Applicant",
                  desc: "Applying for NIE or TIE in Spain? Health insurance is mandatory. We handle everything so your application goes through without delays."
                },
                {
                  emoji: "💼",
                  title: "Foreign Worker or Entrepreneur",
                  desc: "Moving to Spain to work or start a business? We find the right coverage for your specific situation, with no hidden fees and no complicated paperwork."
                }
              ].map((perfil, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="text-4xl mb-4">{perfil.emoji}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{perfil.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{perfil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUARANTEES */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Real guarantees for your peace of mind
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  t: "If your insurance is not valid for your application → we refund your money",
                  icon: <Shield className="w-10 h-10 text-emerald-600" />
                },
                {
                  t: "We support you until you submit your documentation correctly",
                  icon: <Heart className="w-10 h-10 text-emerald-600" />
                },
                {
                  t: "No hidden small print or lock-in periods",
                  icon: <FileText className="w-10 h-10 text-emerald-600" />
                }
              ].map((g, i) => (
                <div key={i} className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center group">
                  <div className="mb-8 w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto group-hover:bg-emerald-50 group-hover:scale-110 transition-all">
                    {g.icon}
                  </div>
                  <p className="text-2xl font-bold text-slate-800 leading-tight">
                    {g.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 STEPS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Ready in 3 simple steps
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { num: "1", t: "Contact us on WhatsApp", d: "Tell us your situation — visa type, nationality, where you live. We respond the same day." },
                { num: "2", t: "We find your policy", d: "We select the right option for your specific case. No generic policies — just what you actually need." },
                { num: "3", t: "Receive your certificate", d: "Your insurance certificate arrives in 24 hours, ready to submit to the consulate or immigration office." }
              ].map((paso, i) => (
                <div key={i} className="relative">
                  <div className="text-[120px] font-black text-slate-100 absolute -top-20 left-1/2 -translate-x-1/2 z-0 opacity-50 select-none">
                    {paso.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl shadow-emerald-600/20">
                      {paso.num}
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
                I want my insurance for visa now
              </a>
            </div>
          </div>
        </section>

        {/* Gancho A — Common mistake */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 
            text-red-300 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8">
              ⚠️ Common mistake
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              You don't get rejected for not having insurance.<br />
              <span className="text-red-400">You get rejected for having the wrong one.</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Many policies sold online don't meet immigration requirements — 
              no co-payment coverage, waiting periods, or insufficient minimum coverage. 
              The most common mistake we see: buying a generic policy without checking 
              whether the certificate is actually valid for your specific application.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto mb-8">
              <p className="text-emerald-400 font-black text-lg mb-2">
                We verify it for you — before issuing any certificate.
              </p>
              <p className="text-slate-400">
                We confirm that your policy meets the exact requirements 
                of your specific immigration application.
              </p>
            </div>
            <a
              href={buildWhatsAppHref("I want you to verify if my insurance is valid for my visa application")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 
              text-white px-8 py-4 rounded-xl font-black transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Check my case now
            </a>
          </div>
        </section>

        {/* Gancho B — Urgency selector */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              When is your appointment?
            </h2>
            <p className="text-slate-500 mb-10">
              We help you either way — but the sooner you contact us, the more relaxed you'll be.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href={buildWhatsAppHref("I have an URGENT immigration appointment in less than 7 days — I need the insurance now")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-red-50 border-2 border-red-200 
                hover:border-red-400 hover:bg-red-100 text-slate-900 p-8 rounded-2xl 
                font-black transition-all group"
              >
                <span className="text-4xl">🚨</span>
                <span className="text-lg font-extrabold text-red-700">In less than 7 days</span>
                <span className="text-sm text-slate-500 font-medium">
                  Urgent — we give you immediate priority
                </span>
                <span className="inline-flex items-center gap-2 mt-2 bg-red-600 text-white 
                px-5 py-2 rounded-xl text-sm font-black group-hover:bg-red-700 transition-all">
                  <WhatsAppIcon className="w-4 h-4" />
                  Message now
                </span>
              </a>

              <a
                href={buildWhatsAppHref("My immigration appointment is coming up — I want to prepare the insurance in advance")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-emerald-50 border-2 border-emerald-200 
                hover:border-emerald-400 hover:bg-emerald-100 text-slate-900 p-8 rounded-2xl 
                font-black transition-all group"
              >
                <span className="text-4xl">📅</span>
                <span className="text-lg font-extrabold text-emerald-700">I have time</span>
                <span className="text-sm text-slate-500 font-medium">
                  Great — we'll prepare everything properly, no rush
                </span>
                <span className="inline-flex items-center gap-2 mt-2 bg-emerald-600 text-white 
                px-5 py-2 rounded-xl text-sm font-black group-hover:bg-emerald-700 transition-all">
                  <WhatsAppIcon className="w-4 h-4" />
                  Message now
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* SPECIALISTS */}
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
              Specialists in health insurance for visa and residency in Spain
            </h2>
            <p className="text-2xl md:text-3xl text-emerald-100/70 leading-relaxed mb-8 font-medium">
              We have helped over 100 people successfully obtain their NIE, TIE and visa with our health insurance. We know exactly what each consulate and immigration office requires — so you don't have to figure it out alone.
            </p>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
              More than 10 years helping people from over 30 countries settle in Spain with the right insurance for their visa and residency process.
            </p>
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Everything included with your insurance
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "✓ No co-payments from day one", icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" /> },
                { t: "✓ Certificate ready in 24 hours", icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" /> },
                { t: "✓ Valid for all Spanish consulates and immigration offices", icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                  <div className="mb-6">{item.icon}</div>
                  <p className="text-lg font-bold text-slate-800 leading-relaxed">{item.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY YOU NEED IT */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md">
              <Scale className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
              Why do you need this insurance?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Spanish immigration law requires proof of private health insurance to obtain a visa, NIE or TIE. Without it, your application will be rejected — regardless of how complete the rest of your documentation is. Not just any insurance will do. It must meet specific requirements set by each consulate or immigration office. We know exactly what those requirements are and make sure your policy meets all of them.
            </p>
          </div>
        </section>

        {/* WE SPEAK YOUR LANGUAGE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa and Sebastián — Valentín Protección Integral"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div>
                <p className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">We speak your language</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Sebastián handles your case in English, personally
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Sebastián speaks fluent English and will personally handle your case from the first WhatsApp message to the moment you receive your certificate. No language barriers. No miscommunication. Just clear, direct help from someone who understands exactly what you need.
                </p>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <Heart className="w-6 h-6 text-emerald-500" />
                  <a href={wVisado} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 hover:text-emerald-600 transition-colors">Message Sebastián in English →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Client reviews — health insurance for foreigners in Spain" />

        {/* FAQ */}
        <FAQChat
          brandColor="emerald"
          title="❓ Frequently asked questions"
          subtitle="Everything you need to know for your visa"
          items={[
            {
              q: "Is this insurance valid for all types of Spanish visas?",
              a: "Yes. Our policies are accepted by Spanish consulates and immigration offices for student visas, non-lucrative visas, digital nomad visas, work permits and all NIE/TIE applications."
            },
            {
              q: "How quickly will I receive my insurance certificate?",
              a: "In 24 hours from the moment you confirm your policy. In urgent cases, we do everything possible to get it to you the same day."
            },
            {
              q: "Do I need to pay co-payments when I visit the doctor?",
              a: "No. Our policies have zero co-payments — you pay your monthly premium and that's it. No surprise costs."
            },
            {
              q: "What happens if the consulate rejects my insurance?",
              a: "It has never happened with our policies. But if there were ever an error on our part, we resolve it at no cost to you — that is our guarantee."
            }
          ]}
        />

        {/* FINAL CTA */}
        <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Avoid mistakes that could delay your visa
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Every week we speak with people whose visa applications were delayed because their insurance didn't meet the requirements. Don't let that happen to you.
            </p>
            <a
              href={wVisado}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-emerald-600/20"
            >
              <WhatsAppIcon className="w-6 h-6" />
              I want my insurance for visa now
            </a>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-bold text-slate-400">
              <p className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                Fast response (reply in less than 10 minutes)
              </p>
              <p className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-500" />
                Complete processing in 24–48h
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-white mb-4">Valentín Protección Integral</p>
          <p className="text-sm">© 2026 · Officially registered insurance guidance · NIF 79234434D · Boadilla del Monte, Madrid</p>
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
          I want my insurance for visa
        </a>
      </div>
    </>
  );
}
