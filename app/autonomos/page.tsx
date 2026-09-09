import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { AnswerFirstSection } from "@/components/answer-first-section";
import { Sparkles, CheckCircle2, Clock, Shield, TrendingDown, Briefcase, Globe, ChevronDown, Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro para Autónomos en Madrid | Valentín",
  description: "Seguro para autónomos en Madrid: salud, accidentes y vida. Posible deducción en el IRPF según tu situación fiscal, gestionado sin complicaciones.",
  keywords: "seguro autónomos madrid, seguro médico autónomos irpf, rc profesional madrid, seguro autónomos deducible, protección autónomos madrid",
  alternates: { canonical: "https://valentinproteccionintegral.com/autonomos", languages: { es: "https://valentinproteccionintegral.com/autonomos", en: "https://valentinproteccionintegral.com/en/for/self-employed", "x-default": "https://valentinproteccionintegral.com/autonomos" } },
  openGraph: {
    title: "Seguro para Autónomos en Madrid | Valentín",
    description: "Seguro para autónomos en Madrid: salud, accidentes y vida. Posible deducción en el IRPF según tu situación fiscal, gestionado sin complicaciones.",
    url: "https://valentinproteccionintegral.com/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguros Autónomos Madrid - Valentín Protección Integral",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Valentín Protección Integral",
    "telephone": "+34603448765",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boadilla del Monte",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    }
  },
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Seguros para autónomos en Madrid: salud, RC profesional y accidentes. Posible deducción en el IRPF según tu situación fiscal. Te orientamos por WhatsApp, sin promesas de ahorro.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿El seguro médico de autónomos es deducible en el IRPF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las primas de seguro de salud pueden ser deducibles en el IRPF para autónomos en estimación directa, dentro de los límites y requisitos que establece la normativa fiscal vigente. La aplicación concreta depende de tu situación personal, por lo que conviene confirmarla con tu asesor fiscal. VPI no presta asesoramiento fiscal personalizado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si tengo un accidente siendo autónomo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Como autónomo cotizas por prestaciones públicas, pero un seguro de accidentes puede complementarlas según la modalidad contratada. Las coberturas, carencias y plazos dependen de las condiciones de la póliza; te los explicamos antes de contratar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito RC profesional como autónomo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si ejerces una profesión donde puedes cometer errores (consultoría, IT, diseño...), la RC profesional protege tu patrimonio personal ante reclamaciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en activarse la cobertura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La entrada en vigor de cada cobertura, así como posibles carencias, dependen de las condiciones de la póliza y de la aseguradora. Te informamos de los plazos concretos antes de contratar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay permanencia en los seguros para autónomos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La duración, la renovación y la cancelación dependen de las condiciones de cada póliza y de los plazos legalmente aplicables. Te explicamos las condiciones concretas de cada producto antes de contratar."
      }
    }
  ]
};

export const dynamic = "force-static";

export default function AutonomosRootPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy autónomo/a y me gustaría recibir orientación sobre la opción de seguro más adecuada para mi situación profesional y personal.");


  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Autónomos",url:"/autonomos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">

        {/* HERO STRIPE — Purple gradients, weight-300 */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#635BFF] to-[#96F7D6] opacity-[0.15] blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#635BFF] to-[#ea2261] opacity-[0.1] blur-[120px]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(99,91,255,0.4)] bg-[rgba(99,91,255,0.15)] text-[#533afd] text-sm mb-6">
                  <Sparkles className="w-4 h-4" />
                  2026 · Seguros para autónomos · DGSFP
                </div>

                {/* H1 Stripe — 56px weight 300 */}
                <h1 className="text-[48px] sm:text-[56px] font-light text-[#061b31] leading-[1.03] tracking-[-1.4px] mb-6">
                  Seguros Autónomos Madrid 2026:
                  <br />
                  <span className="bg-gradient-to-r from-[#635BFF] to-[#96F7D6] bg-clip-text text-transparent font-normal">
                    IRPF, RC y Accidentes
                  </span>
                </h1>

                {/* Subhead */}
                <p className="text-xl text-[#64748d] font-light leading-relaxed mb-8 max-w-lg">
                  Posible deducción IRPF + RC profesional + Accidentes.
                  <br />
                  <span className="text-[#533afd] font-normal">Precio adaptado a tu perfil.</span>
                </p>

                {/* CTAs Stripe */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href={wCotiza}
                    className="inline-flex items-center gap-2 bg-[#533afd] hover:bg-[#4434d4] text-white px-6 py-3 rounded text-base font-normal transition-all shadow-[rgba(50,50,93,0.25)_0px_4px_8px_-2px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]"
                  >
                    WhatsApp Ahora
                  </a>
                  <Link
                    href="/seguros/salud-individual"
                    className="inline-flex items-center gap-2 bg-transparent text-[#533afd] px-6 py-3 rounded text-base font-normal border border-[#b9b9f9] hover:bg-[rgba(83,58,253,0.05)] transition-all"
                  >
                    Ver salud individual →
                  </Link>
                </div>

                {/* Trust row */}
                <div className="flex flex-wrap gap-6 text-sm text-[#64748d]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15be53]" />
                    Posible deducción IRPF
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#533afd]" />
                    Respuesta en horario
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#533afd]" />
                    Agente registrada DGSFP
                  </span>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Autónomo profesional laptop Madrid 2026"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.1)_0px_8px_16px_-8px] border border-[#e5edf5]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#533afd]/10 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-[#533afd]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#061b31]">Ahorro fiscal 2026</p>
                      <p className="text-xs text-[#64748d]">Según tu situación fiscal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnswerFirstSection
          eyebrow="Respuesta rápida"
          title="Qué puede resolver VPI para un autónomo"
          answer="VPI puede orientarte sobre seguros de salud, accidentes y responsabilidad civil profesional. La posible deducción de salud depende de tu situación fiscal y de los límites y requisitos aplicables; VPI no presta asesoramiento fiscal personalizado."
          facts={['Las primas de salud pueden ser deducibles para autónomos en estimación directa si se cumplen las condiciones.', 'El manual de ASISA recoge límites de 500 € por persona y 1.500 € para personas con discapacidad, con condiciones.', 'La cobertura, las carencias y la renovación dependen de la póliza.', 'La página de salud para autónomos explica el producto; este hub organiza la necesidad profesional.']}
          links={[{ label: 'Ver salud para autónomos', href: '/seguros/salud/autonomos' }, { label: 'Ver salud para empresas', href: '/empresas/salud' }]}
        />

        {/* IRPF EXPLICADO — Stripe cards */}
        <section className="py-20 border-t border-[#e5edf5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-4">
¿Cómo puede ayudarte fiscalmente?
            </h2>
            <p className="text-lg text-[#64748d] text-center mb-12">
Información general; el efecto real depende de tu situación fiscal
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Posible deducción", desc: "Las primas de salud pueden ser deducibles en el IRPF para autónomos en estimación directa, dentro de los límites de la normativa vigente." },
                { num: "02", title: "Factura a tu nombre", desc: "Recibes la factura correspondiente para tu contabilidad; su tratamiento fiscal depende de tu situación y de tu asesor." },
                { num: "03", title: "Sin promesas", desc: "El ahorro real depende de tu tramo, tus ingresos y la normativa. No prometemos devoluciones: te orientamos con prudencia." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-[#e5edf5] shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.1)_0px_8px_16px_-8px]">
                  <span className="text-[#533afd] text-sm font-medium">{item.num}</span>
                  <h3 className="text-lg font-light text-[#061b31] mt-2 mb-3">{item.title}</h3>
                  <p className="text-sm text-[#64748d] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANES — Stripe pricing */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-12">
              Planes para autónomos
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "BÁSICO",
                  price: "Adaptado",
                  period: "/mes",
                  features: ["Salud privada IRPF deducible", "Especialistas ilimitados", "Urgencias 24h"],
                  cta: "Elegir Básico",
                  popular: false
                },
                {
                  name: "PRO",
                  price: "Adaptado",
                  period: "/mes",
                  features: ["Todo lo de Básico", "RC profesional incluida", "Accidentes laboral/extra", "Cobertura internacional UE"],
                  cta: "Elegir Pro",
                  popular: true
                },
                {
                  name: "ENTERPRISE",
                  price: "Adaptado",
                  period: "/mes",
                  features: ["Todo ilimitado", "RC profesional ampliada", "Accidentes premium", "Asesor fiscal incluido"],
                  cta: "Elegir Enterprise",
                  popular: false
                },
              ].map((plan, i) => (
                <div key={i} className={`bg-white rounded-lg p-6 border ${plan.popular ? 'border-[#533afd] ring-1 ring-[#533afd]' : 'border-[#e5edf5]'} shadow-[rgba(23,23,23,0.08)_0px_15px_35px]`}>
                  {plan.popular && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[rgba(21,190,83,0.2)] border border-[rgba(21,190,83,0.4)] text-[#108c3d] text-xs mb-4">
                      <Star className="w-3 h-3" />
                      Más popular
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-[#061b31]">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2 mb-4">
                    <span className="text-3xl font-light text-[#061b31]">{plan.price}</span>
                    <span className="text-sm text-[#64748d]">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#64748d]">
                        <CheckCircle2 className="w-4 h-4 text-[#15be53] mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={wCotiza}
                    className={`block w-full text-center py-2.5 rounded text-sm font-medium transition-all ${plan.popular ? 'bg-[#533afd] text-white hover:bg-[#4434d4]' : 'bg-[#f6f9fc] text-[#061b31] hover:bg-[#e5edf5]'}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Stripe grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-12">
              Cobertura completa
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: TrendingDown, title: "IRPF médico", desc: "Posible deducción" },
                { icon: Shield, title: "RC profesional", desc: "Errores cubiertos" },
                { icon: Briefcase, title: "Accidentes", desc: "Laboral/extra" },
                { icon: Globe, title: "Internacional", desc: "Cobertura UE" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-5 border border-[#e5edf5] hover:border-[#533afd]/30 transition-all">
                  <div className="w-10 h-10 rounded bg-[#f6f9fc] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#533afd]" />
                  </div>
                  <h3 className="text-base font-medium text-[#061b31] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#64748d]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO 3 PASOS — Del landing fusionado */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] tracking-[-0.64px] text-center mb-12">
              Tan fácil como esto:
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Nos escribes", desc: "Por WhatsApp contándonos tu actividad." },
                { num: "02", title: "Propuesta", desc: "En menos de 24h tienes una propuesta personalizada." },
                { num: "03", title: "Tú decides", desc: "Nosotros lo gestionamos todo. Sin papeleo para ti." },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#533afd] text-white flex items-center justify-center text-lg font-normal mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-light text-[#061b31] tracking-[-0.22px] mb-2">{step.title}</h3>
                  <p className="text-base text-[#64748d] font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍA RESPUESTA — Del landing fusionado */}
        <section className="py-20 bg-gradient-to-br from-[#f6f9fc] via-[#eef2ff] to-[#f5f3ff]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-[#533afd]/10 border border-[#e0e7ff]">
              <h2 className="text-[36px] sm:text-[44px] font-bold text-[#061b31] leading-tight mb-6 text-center">
                ¿Prefieres que te llamemos?
              </h2>

              <p className="text-xl text-[#64748d] leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Rosa o Sebastián te llaman directamente.
                <br />
                Sin esperas. Sin centralitas. Sin excusas.
                <br />
                <span className="text-[#533afd] font-semibold">Nadie en el sector ofrece esta garantía. Nosotros sí.</span>
              </p>

              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#e5edf5]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa Valentín"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#061b31]">Rosa Valentín</p>
                  <p className="text-sm text-[#64748d]">Agente de Seguros · DGSFP: C012479234434D</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS — Stripe carousel style */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-12">
              Lo que dicen los autónomos
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Me explicaron con claridad qué cubría cada póliza y qué dependía de mi situación fiscal. Sin presión y sin promesas de ahorro que luego no se cumplen.",
                  author: "Carlos M.",
                  role: "Consultor IT, Madrid",
                  stars: 5
                },
                {
                  quote: "Tuve un accidente en obra y el seguro cubrió todos los gastos más la baja. Me salvó el año.",
                  author: "Laura S.",
                  role: "Arquitecta técnica",
                  stars: 5
                },
                {
                  quote: "La RC profesional me da tranquilidad. Un error en un informe podría costarme miles sin ella.",
                  author: "Miguel A.",
                  role: "Asesor fiscal",
                  stars: 5
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-[#e5edf5] shadow-[rgba(23,23,23,0.06)_0px_15px_35px]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#ea2261] text-[#ea2261]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#533afd]/20 mb-3" />
                  <p className="text-sm text-[#061b31] leading-relaxed mb-4">{testimonial.quote}</p>
                  <div className="border-t border-[#e5edf5] pt-4">
                    <p className="text-sm font-medium text-[#061b31]">{testimonial.author}</p>
                    <p className="text-xs text-[#64748d]">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — Stripe accordion */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-12">
              Preguntas frecuentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "¿El seguro médico de autónomos es deducible en el IRPF?",
                  a: "Las primas de seguro de salud pueden ser deducibles en el IRPF para autónomos en estimación directa, dentro de los límites y requisitos de la normativa fiscal vigente. Depende de tu situación personal: conviene confirmarlo con tu asesor fiscal. VPI no presta asesoramiento fiscal personalizado."
                },
                {
                  q: "¿Qué pasa si tengo un accidente siendo autónomo?",
                  a: "Como autónomo cotizas por prestaciones públicas, pero un seguro de accidentes puede complementarlas según la modalidad contratada. Las coberturas, carencias y plazos dependen de las condiciones de la póliza; te los explicamos antes de contratar."
                },
                {
                  q: "¿Necesito RC profesional como autónomo?",
                  a: "Si ejerces una profesión donde puedes cometer errores (consultoría, IT, diseño...), la RC profesional protege tu patrimonio personal ante reclamaciones."
                },
                {
                  q: "¿Cuánto tarda en activarse la cobertura?",
                  a: "La entrada en vigor de cada cobertura, así como posibles carencias, dependen de las condiciones de la póliza y de la aseguradora. Te informamos de los plazos concretos antes de contratar."
                },
                {
                  q: "¿Hay permanencia en los seguros para autónomos?",
                  a: "La duración, la renovación y la cancelación dependen de las condiciones de cada póliza y de los plazos legalmente aplicables. Te explicamos las condiciones concretas de cada producto antes de contratar."
                },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-lg border border-[#e5edf5] shadow-[rgba(23,23,23,0.06)_0px_15px_35px] overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-sm font-medium text-[#061b31]">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-[#64748d] transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-[#64748d] leading-relaxed border-t border-[#e5edf5] pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Stripe dark section */}
        <section className="py-24 bg-[#1c1e54]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[56px] font-light text-white leading-[1.03] tracking-[-1.4px] mb-4">
              Protege tu negocio
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Un WhatsApp y te orientamos con criterio, sin promesas de ahorro.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={wCotiza}
                className="inline-flex items-center gap-2 bg-[#533afd] hover:bg-[#665efd] text-white px-8 py-4 rounded text-lg font-medium transition-all shadow-[rgba(50,50,93,0.25)_0px_4px_8px_-2px]"
              >
                Cotizar WhatsApp
              </a>
              <a
                href="tel:603448765"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded text-lg font-medium border border-white/30 transition-all"
              >
                📞 603 44 87 65
              </a>
            </div>

            <p className="text-sm text-white/40 mt-8">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
