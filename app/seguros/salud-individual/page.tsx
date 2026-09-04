import type { Metadata } from "next";
import Image from "next/image";
import dynamicImport from "next/dynamic";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { getPexelsImage } from "@/lib/pexels";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Hospital, Stethoscope, Pill, FlaskConical, SmilePlus, Ambulance, Award, MapPin, TrendingUp, Activity, Phone, User, Check } from "lucide-react";
import { WhatsAppLink } from '@/components/whatsapp-link';

import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AdeslasAgentLink } from "@/components/adeslas-agent-link";
// Dynamic imports for non-critical components (reduce initial JS bundle)
const StickyWhatsApp = dynamicImport(() => import("@/components/sticky-whatsapp").then(m => m.StickyWhatsApp));
const FAQChat = dynamicImport(() => import("@/components/faq-chat").then(m => m.FAQChat));

export const metadata: Metadata = {
  title: "Seguro de Salud Privado en Madrid desde 22,50€/mes | Valentín",
  description: "Seguro de salud privado en Madrid desde 22,50€/mes. Coberturas según modalidad y condiciones de la póliza. Asesoramiento directo con Rosa y Sebastián.",
  keywords: ["seguro salud privado Madrid","seguro medico privado Madrid","salud privada Madrid sin copagos","contratar seguro salud privado Madrid","seguro médico sin copagos Madrid precio","seguro médico privado sin carencias Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-individual" },
  openGraph: {
    title: "Seguro de Salud Privado en Madrid desde 22,50€/mes | Valentín",
    description: "Seguro de salud privado en Madrid desde 22,50€/mes. Coberturas según modalidad y condiciones de la póliza. Asesoramiento directo con Rosa y Sebastián.",
    url: "https://valentinproteccionintegral.com/seguros/salud-individual",
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
  "name": "Seguro Salud Privado Madrid - Valentín Protección Integral",
  "provider": localBusinessSchema,
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Seguro médico privado Madrid sin copagos. Cobertura inmediata. Especialistas sin lista de espera."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Hay que pagar copagos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Esta modalidad es sin copagos. Pagas la cuota mensual y nada más. Consultas, pruebas, hospitalización... todo incluido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo puedo ir al especialista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desde el primer día. No necesitas derivación del médico de cabecera. Eliges el especialista que prefieras de la red y pides cita directamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo elegir hospital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Tienes acceso a los principales hospitales privados de Madrid: La Zarzuela, Ruber, Clínica de la Luz, Nuestra Señora de América, etc."
      }
    },
    {
      "@type": "Question",
      "name": "¿Y si tengo una urgencia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tienes urgencias 24h en los hospitales de la red. También telemedicina por videollamada con médico las 24h del día."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio de entrada para un adulto es desde 22,50€/mes. Para perfiles de 30-40 años con cobertura completa sin copagos, el rango habitual es 50-80€/mes. Te damos presupuesto exacto en WhatsApp según tu edad y cobertura."
      }
    }
  ]
};

export const dynamic = "force-static";

export default async function SaludIndividualPage() {
  const wCotiza = buildWhatsAppHref("Hola, estoy interesado/a en un seguro de salud y me gustaría recibir orientación sobre la opción más adecuada según mi situación y el precio orientativo.");
  const wAsesoramiento = buildWhatsAppHref("Hola, necesito asesoramiento para elegir mi seguro de salud");
  const wHeader = buildWhatsAppHref("Hola, quiero cotizar un seguro de salud privado");

  const pexelsImage = await getPexelsImage('salud-individual');

  return (
    <>
      <link rel="preload" href="/images/hero-salud.webp" as="image" fetchPriority="high" type="image/webp" />
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Individual",url:"/seguros/salud-individual"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(localBusinessSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      {/* Barra Garantía Superior */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 border-b border-slate-700 text-white py-2.5 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">
              ¿Tienes médico de cabecera mañana?{" "}
              <span className="text-amber-400">Con nosotros tienes especialista hoy — escríbenos ahora</span>
            </span>
            <span className="sm:hidden">
              Especialista hoy →{" "}
              <span className="text-amber-400 font-black">escríbenos ahora</span>
            </span>
          </p>
        </div>
      </div>
      <header className="fixed top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-16">
          <a href="/" className="font-bold text-[#163300] text-lg tracking-tight">
            Valentín <span className="text-emerald-600">Protección Integral</span>
          </a>
          <WhatsAppLink
            href={wHeader}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cotizar ahora
          </WhatsAppLink>
        </div>
      </header>
      <main className="min-h-screen bg-white pt-28">
        
        {/* HERO — Impacto y Confianza */}
        <section className="relative min-h-[85vh] flex items-center bg-gray-950 overflow-hidden">
          {/* Overlay gradiente premium */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-salud.webp"
              alt="Asesoramiento médico profesional y tecnológico"
              fill
              className="object-cover opacity-60"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-3xl">
                <div className="mb-8">
                  <GuaranteeBadge type="salud" />
                </div>
                
                <h1 className="text-[40px] sm:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-6">
                  Tu seguro de salud privado en Madrid — <span className="text-emerald-400">sin copagos, sin listas de espera, desde 22,50€/mes</span>
                </h1>
                
                <p className="text-xl text-white/70 leading-relaxed mb-4 max-w-2xl">
                  Elige la cobertura adecuada sin pagar de más y sin quedarte corto cuando lo necesites.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex flex-col gap-3">
                    <WhatsAppButton 
                      href={wCotiza}
                      location="salud-individual-hero"
                      className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-gray-950 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-emerald-500/20"
                    >
                      Quiero mi seguro de salud ahora
                    </WhatsAppButton>
                    <p className="text-white/80 text-sm font-bold ml-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Respuesta en menos de 10 minutos
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-xs text-white font-bold">
                        {["R","M","A","L","P"][i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm font-bold">Familias protegidas en Madrid</p>
                </div>

                {/* Bloque Asesores - Estilo Extranjería */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full border-4 border-emerald-500/20 overflow-hidden shadow-xl ring-4 ring-white/10">
                    <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián" fill sizes="64px" className="object-cover object-[center_20%]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-bold uppercase tracking-widest leading-none mb-1">Atención directa</p>
                    <p className="text-lg font-bold text-white leading-none">Rosa y Sebastián</p>
                    <p className="text-xs text-emerald-400 mt-1 font-medium italic">Tus asesores personales</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mt-12">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Desde 22,50€/mes
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Sin copagos
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Citas en el día
                  </div>
                </div>
              </div>

              {/* Tarjeta tipo "Estudio de Cobertura" (Imagen Real con Efecto Premium) */}
              <div className="hidden lg:block relative group perspective-1000">
                <div className="absolute inset-0 bg-emerald-600/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative transform rotate-2 group-hover:rotate-0 transition-all duration-700 hover:scale-[1.02]">
                  <div className="relative">
                    <div className="relative bg-white p-2 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden">
                      <Image 
                        src="/images/premium/certificado-salud-individual.png" 
                        alt="Estudio de Cobertura Personalizada" 
                        width={600} 
                        height={800} 
                        className="rounded-[24px] w-full h-auto"
                      />
                    </div>
                    
                    {/* Badge flotante "Garantía de Ahorro" - Ahora fuera del overflow */}
                    <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-bounce-soft z-20">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-bold text-slate-700">Garantía de Ahorro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BLOQUE GARANTÍAS DE CONFIANZA */}
        <section className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Garantías de confianza</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                "Sin copagos ni carencias desde el primer día",
                "Si hay un error nuestro, lo resolvemos sin coste para ti",
                "Asesoramiento directo con Rosa o Sebastián — no con un bot"
              ].map((g, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 justify-center sm:justify-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-slate-800 font-bold">{g}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gancho A — Descuento combinado */}
        <section className="py-16 bg-amber-50 border-y border-amber-100">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              Ventaja exclusiva
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">¿Tienes pareja o familiar en casa?</h2>
            <p className="text-lg text-slate-600 mb-2">
              Consulta por el <span className="font-black text-amber-700">descuento por póliza combinada</span>. Muchos de nuestros clientes ahorran entre un 5% y un 10% al combinar coberturas.
            </p>
            <p className="text-sm text-slate-400 mb-8">Cuéntanos tu situación y te decimos exactamente cuánto puedes ahorrar.</p>
            <a href={buildWhatsAppHref("Hola, quiero saber si puedo ahorrar combinando pólizas")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-black transition-all shadow-lg">
              <WhatsAppIcon className="w-5 h-5" />
              Quiero saber cuánto ahorro
            </a>
          </div>
        </section>

        {/* 3. BLOQUE CÓMO FUNCIONA */}
        <section className="py-16 bg-white border-b border-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Cómo funciona</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { n: "1", t: "Nos escribes por WhatsApp", d: "Atención directa sin esperas." },
                { n: "2", t: "Analizamos tu caso", d: "Buscamos el seguro que necesitas." },
                { n: "3", t: "Te recomendamos la mejor opción", d: "La que más te protege al mejor precio." }
              ].map((p, i) => (
                <div key={i} className="relative">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {p.n}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{p.t}</h3>
                  <p className="text-slate-500 text-sm">{p.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <WhatsAppButton 
                href={wCotiza}
                location="salud-individual-como-funciona"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg"
              >
                Quiero asesoramiento
              </WhatsAppButton>
            </div>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes sobre seguros de salud" />

        {/* 4. BLOQUE VALOR AÑADIDO */}
        <section className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Te ayudamos a no pagar de más</h2>
            </div>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                "Revisamos tu situación actual sin compromiso",
                "Te ayudamos a elegir la cobertura adecuada",
                "Evitamos errores en la contratación",
                "Revisamos gratis tu seguro actual — si puedes mejorar, te lo decimos sin compromiso"
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm border border-slate-100 text-center justify-center">
                  <p className="text-slate-700 font-bold text-sm">✔ {v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VENTAJAS — Fondo blanco puro */}
        <section id="ventajas" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-tight mb-4">
                ¿Qué póliza se adapta a ti?
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                No existe "la mejor". Existe la que mejor encaja con tu situación.
                Te explicamos las diferencias para que elijas con criterio.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="text-left py-4 pr-6 text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/4">Cobertura</th>
                    <th className="text-center py-4 px-4 text-base font-bold text-gray-900">Entrada<br/><span className="text-emerald-600 font-semibold text-sm">~22–35€/mes</span></th>
                    <th className="text-center py-4 px-4 text-base font-bold text-gray-900 bg-emerald-50 rounded-t-xl">Completa<br/><span className="text-emerald-600 font-semibold text-sm">~50–80€/mes</span></th>
                    <th className="text-center py-4 px-4 text-base font-bold text-gray-900">Premium<br/><span className="text-gray-400 font-semibold text-sm">desde 90€/mes</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Médico general y especialistas", "Incluido", "Incluido", "Incluido"],
                    ["Sin copagos en consulta", "No incluido", "Incluido", "Incluido"],
                    ["Urgencias 24h", "Incluido", "Incluido", "Incluido"],
                    ["Hospitalización incluida", "No incluido", "Incluido", "Incluido"],
                    ["Pruebas diagnósticas completas", "Básicas", "Incluido", "Incluido"],
                    ["Asistencia en viaje", "No incluido", "Incluido", "Incluido"],
                  ].map(([feature, entry, complete, premium], i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 pr-6 text-sm text-gray-700">{feature}</td>
                      <td className="py-4 px-4 text-center text-sm text-gray-500">{entry}</td>
                      <td className="py-4 px-4 text-center text-sm font-semibold text-emerald-700 bg-emerald-50">{complete}</td>
                      <td className="py-4 px-4 text-center text-sm text-gray-600">{premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-sm text-gray-400 mt-8">
              * Precios orientativos para adulto entre 30-45 años en Madrid. El precio exacto depende de tu edad y modalidad.
              <WhatsAppLink href={buildWhatsAppHref("Hola, estoy interesado/a en un seguro de salud y me gustaría recibir orientación sobre la opción más adecuada según mi situación y el precio orientativo.")} className="text-emerald-600 font-medium ml-1 hover:underline">
                <WhatsAppIcon className="mr-1 inline h-4 w-4 align-[-2px]" />
                Pídenos tu presupuesto sin compromiso →
              </WhatsAppLink>
            </p>
          </div>
        </section>

        {/* GARANTÍA RESPUESTA — Fondo diferenciado */}
        <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-emerald-100/50 border border-emerald-100">
              <h2 className="text-[36px] sm:text-[44px] font-bold text-gray-900 leading-tight mb-6 text-center">
                Escríbenos ahora. Si en 2 horas no tienes tu presupuesto,{" "}
                <span className="text-emerald-600">Rosa te llama personalmente.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Sin centralitas. Sin formularios. Sin excusas.{" "}
                <span className="text-emerald-600 font-semibold">
                  Nadie en el sector lo hace. Nosotros sí.
                </span>
              </p>
              
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa Valentín"
                    fill
                    sizes="56px"
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rosa Valentín</p>
                  <p className="text-sm text-gray-500">Agente de Seguros · DGSFP: C012479234434D</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gancho B — Referido */}
        <section className="py-14 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <p className="text-amber-400 font-black uppercase tracking-widest text-xs mb-3">Para clientes nuevos</p>
            <h2 className="text-2xl font-extrabold mb-3">¿Conoces a alguien que también necesite seguro?</h2>
            <p className="text-slate-300 text-base mb-6">
              Si nos traes a un familiar o amigo que contrata con nosotros,{" "}
              <span className="text-amber-400 font-black">
                ambos recibís un 5% de descuento en vuestra cuota mensual.
              </span>{" "}
              Sin letra pequeña.
            </p>
            <a href={buildWhatsAppHref("Hola, quiero información sobre el bono por referido")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-black hover:bg-amber-400 transition-all text-sm">
              <WhatsAppIcon className="w-4 h-4" />
              Más información
            </a>
          </div>
        </section>

        {/* EQUIPO Y CONFIANZA — Fondo blanco */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Tu equipo de confianza"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    priority
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Orientación de seguros con registro oficial
                </div>
                
                <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Más de 10 años ayudando a familias a elegir correctamente su seguro de salud en España.
                  Tu caso tiene atención directa y personalizada de principio a fin.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">+10 años de experiencia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">clientes satisfechos</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                  <span className="font-semibold text-gray-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20" aria-labelledby="salud-caminos-title">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">Elige cómo avanzar</p>
              <h2 id="salud-caminos-title" className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">Dos formas de avanzar</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border-2 border-emerald-200 bg-emerald-50/50 p-7 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">Opción recomendada</p>
                <h3 className="mt-3 text-2xl font-bold text-gray-900">Hablar primero con un asesor</h3>
                <p className="mt-4 leading-7 text-gray-600">Recomendado si quieres comparar modalidades, resolver dudas, revisar opciones familiares o entender qué encaja mejor antes de dejar tus datos.</p>
                <WhatsAppButton href={wAsesoramiento} location="salud-individual-conversion-vpi" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"><WhatsAppIcon className="h-4 w-4" /> Hablar por WhatsApp</WhatsAppButton>
              </article>
              <AdeslasAgentLink
                location="salud_individual_conversion_block"
                variant="mini-preview"
                title="Solicitar contacto desde Adeslas"
                description="Recomendado si ya tienes claro que quieres avanzar por el canal oficial de SegurCaixa Adeslas asociado a Rosa Valentín. La vista previa muestra el destino antes de abrirlo."
                linkLabel="Abrir canal oficial"
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL — Fondo blanco con acento sutil */}
        <section className="relative py-24 bg-gray-50/50 overflow-hidden">
          {/* Acento visual sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-emerald-100/40 via-emerald-50/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-tight mb-6">
              Tu salud no puede esperar
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Un WhatsApp y te orientamos, sin compromiso.
              <br />
              Descubre el seguro que mejor se adapta a ti.
            </p>
            
            <WhatsAppButton 
              href={wAsesoramiento}
              location="salud-individual-cta-final"
              className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1"
            >
              Quiero mi asesoramiento de seguro de salud
            </WhatsAppButton>
            
            <p className="mt-6 text-slate-500 font-bold text-sm">
              Respuesta en menos de 10 minutos
            </p>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Sin copagos
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <Clock className="w-4 h-4 text-emerald-500" />
                Respuesta en horario
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <Shield className="w-4 h-4 text-emerald-500" />
                Sin permanencia
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#10b981" />

        {/* FAQ CHAT */}
        <FAQChat 
          brandColor="emerald"
          title="¿Tienes dudas sobre el seguro de salud?"
          subtitle="Preguntas frecuentes"
          items={[
            { 
              q: "¿Hay que pagar copagos?", 
              a: "No. Esta modalidad es sin copagos. Pagas la cuota mensual y nada más. Consultas, pruebas, hospitalización... todo incluido." 
            },
            { 
              q: "¿Cuándo puedo ir al especialista?", 
              a: "Desde el primer día. No necesitas derivación del médico de cabecera. Eliges el especialista que prefieras de la red y pides cita directamente." 
            },
            { 
              q: "¿Puedo elegir hospital?", 
              a: "Sí. Tienes acceso a los principales hospitales privados de Madrid: La Zarzuela, Ruber, Clínica de la Luz, Nuestra Señora de América, etc." 
            },
            { 
              q: "¿Y si tengo una urgencia?", 
              a: "Tienes urgencias 24h en los hospitales de la red. También telemedicina por videollamada con médico las 24h del día." 
            },
            { 
              q: "¿Cuánto cuesta?", 
              a: "El precio de entrada para un adulto es desde 22,50€/mes. Para perfiles de 30-40 años con cobertura completa sin copagos, el rango habitual es 50-80€/mes. Te damos presupuesto exacto en WhatsApp según tu edad y cobertura." 
            },
          ]}
        />

      </main>
      <footer className="bg-gray-950 text-white/50 py-8 text-center text-xs">
        <p>© 2026 Valentín Protección Integral · NIF: 79234434D · DGSFP: C012479234434D</p>
        <p className="mt-1">Orientación de seguros con registro oficial · Boadilla del Monte, Madrid</p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <a href="tel:+34603448765" className="text-white/40 hover:text-white/70 transition-colors">603 44 87 65</a>
          <span className="text-white/20">·</span>
          <a href="mailto:contacto@valentinproteccionintegral.com" className="text-white/40 hover:text-white/70 transition-colors">contacto@valentinproteccionintegral.com</a>
        </div>
      </footer>
      <StickyWhatsApp />
    </>
  );
}
