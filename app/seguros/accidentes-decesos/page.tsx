import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, AlertTriangle, Users, Umbrella, Activity, Award, TrendingUp, Phone, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro de Accidentes y Decesos en Madrid | Valentín",
  description: "Seguro de accidentes y decesos en Madrid desde 3€/mes. Protección completa para ti y tu familia con gestión sin complicaciones.",
  keywords: ["pack accidentes decesos Madrid","seguro accidentes decesos combinado","proteccion completa familia Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/accidentes-decesos" },
  openGraph: {
    title: "Seguro de Accidentes y Decesos en Madrid | Valentín",
    description: "Seguro de accidentes y decesos en Madrid desde 3€/mes. Protección completa para ti y tu familia con gestión sin complicaciones.",
    url: "https://valentinproteccionintegral.com/seguros/accidentes-decesos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
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
  "@type": "InsuranceAgency",
  "name": "Seguro Accidentes + Decesos Madrid - Valentín Protección Integral",
  "provider": localBusinessSchema,
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Pack combinado accidentes + decesos. Protección completa para hoy y mañana."
};

export const dynamic = "force-static";

export default function AccidentesDecesosPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre el pack accidentes + decesos en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Accidentes y Decesos",url:"/seguros/accidentes-decesos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(localBusinessSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO OSCURO — Impactante, elegante, profesional */}
        <section className="relative bg-slate-950 min-h-[85vh] flex items-center overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/7642200/pexels-photo-7642200.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Familia protegida en casa Madrid - Seguro accidentes y decesos"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className="mb-8">
                  <GuaranteeBadge type="accidentes-decesos" />
                </div>
                
                {/* H1 potente */}
                <h1 className="text-[56px] sm:text-[64px] lg:text-[72px] font-bold text-white leading-[0.95] tracking-tight mb-6">
                  Seguro Accidentes y Decesos Madrid:
                  <br />
                  <span className="text-amber-400">Pack Familiar Completo</span>
                </h1>
                
                {/* Subheadline clara */}
                <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-10 max-w-lg">
                  Protección completa para ti y tu familia.
                  <br />
                  <span className="text-white/60">Hoy y mañana, siempre cubiertos.</span>
                </p>
                
                {/* CTAs con alto contraste */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                  >
                    Cotizar Pack
                  </a>
                  <a 
                    href="#pack"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Ver coberturas
                  </a>
                </div>
                
                {/* Trust pills oscuros */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    Un solo precio
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm border border-white/10">
                    <Clock className="w-4 h-4 text-amber-400" />
                    Respuesta en horario
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm border border-white/10">
                    <Shield className="w-4 h-4 text-amber-400" />
                    Sin permanencia
                  </span>
                </div>
              </div>
              
              {/* Right: Hero image */}
              <div className="hidden lg:block relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-white/10">
                  <Image
                    src="https://images.pexels.com/photos/4609037/pexels-photo-4609037.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Familia feliz protegida - Pack seguro accidentes y decesos Madrid"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE DEL PACK — Explicación clara */}
        <section id="pack" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm mb-6">
                <Package className="w-4 h-4" />
                Una solución combinada
              </div>
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                Un pack, doble protección
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                No tienes que elegir entre protegerte a ti o cuidar de tu familia. 
                Este pack te da ambas coberturas al mejor precio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card Accidentes */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
                  <AlertTriangle className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Accidentes</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Cubre el imprevisto de hoy. Desde una caída en casa hasta un accidente de tráfico. 
                  Invalidez, gastos médicos y hospitalización incluidos.
                </p>
                <ul className="space-y-3">
                  {[
                    "Muerte por accidente: 60.000€",
                    "Invalidez permanente: hasta 100%",
                    "Gastos médicos: 6.000€",
                    "Hospitalización: 100€/día"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Card Decesos */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Decesos</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Protege a tu familia del mañana. Cubre todos los gastos del funeral 
                  y deja un capital a quienes más quieres.
                </p>
                <ul className="space-y-3">
                  {[
                    "Capital hasta 50.000€",
                    "Gastos de funeral incluidos",
                    "Repatriación si es necesario",
                    "Gestión completa del trámite"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ACCIDENTES — Sección propia */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm mb-6">
                <AlertTriangle className="w-4 h-4" />
                Protección inmediata
              </div>
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                Accidentes
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Porque el imprevisto no avisa. Estés donde estés, estás cubierto.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Activity, title: "Muerte", desc: "60.000€ capital" },
                { icon: Shield, title: "Invalidez", desc: "Hasta 100%" },
                { icon: Umbrella, title: "Gastos médicos", desc: "6.000€ cubierto" },
                { icon: Clock, title: "Hospital", desc: "100€/día" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 text-center">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECESOS — Sección propia */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm mb-6">
                <Heart className="w-4 h-4" />
                Tranquilidad familiar
              </div>
              <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-4">
                Decesos
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Porque tu familia merece estar protegida. Previsión y tranquilidad.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Capital", desc: "Hasta 50.000€" },
                { icon: Heart, title: "Funeral", desc: "Gastos cubiertos" },
                { icon: Umbrella, title: "Repatriación", desc: "Si es necesario" },
                { icon: CheckCircle2, title: "Gestión", desc: "Trámite completo" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 mx-auto shadow-sm">
                    <item.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO Y GARANTÍA — Fondo blanco */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-slate-100/30 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Orientación de seguros con registro oficial
                </div>
                
                <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Te ayudamos a encontrar el pack que mejor se adapta a ti. 
                  Explicamos cada cobertura con claridad, sin tecnicismos, 
                  para que tomes la mejor decisión para ti y tu familia.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-slate-700">+10 años de experiencia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-slate-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-slate-700">Familias protegidas</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
                  <span className="font-semibold text-slate-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL — Fondo blanco con acento */}
        <section className="relative py-24 bg-white overflow-hidden">
          {/* Acento visual sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-amber-100/40 via-amber-50/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-6">
              Protección completa,
              <br />
              <span className="text-amber-500">un solo paso</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Un WhatsApp y te orientamos, sin compromiso.
              <br />
              Descubre el pack que mejor protege a ti y a tu familia.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-1"
            >
              Cotizar Pack Ahora
            </a>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Accidentes + Decesos
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <Clock className="w-4 h-4 text-amber-500" />
                En horario
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <Shield className="w-4 h-4 text-amber-500" />
                Sin permanencia
              </div>
            </div>
            
            <p className="text-sm text-slate-400 mt-8">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes sobre seguro accidentes y decesos" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#f59e0b" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
