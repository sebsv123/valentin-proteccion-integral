import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Link from "next/link";
import { WhatsAppLink } from '@/components/whatsapp-link';

export const metadata: Metadata = {
  title: "Seguros en Boadilla del Monte — Asesoría Personal | VPI",
  description:
    "Orientación de seguros con registro oficial en Boadilla del Monte. Salud, vida, dental, mascotas y más. Consulta gratis por WhatsApp.",
  keywords: [
    "seguros Boadilla del Monte",
    "asesor seguros Boadilla del Monte",
    "seguro salud Boadilla del Monte",
    "agente seguros registrado Boadilla",
    "seguro vida Boadilla del Monte",
    "seguro dental Boadilla del Monte",
  ],
  authors: [{ name: "Rosa Valentín" }],
  publisher: "Valentín Protección Integral",
  openGraph: {
    title: "Seguros en Boadilla del Monte — Asesoría Personal | VPI",
    description:
      "Agentes de seguros en Boadilla del Monte. Salud, vida, dental y mascotas. Asesoramiento cercano y con registro en la DGSFP. Consulta gratis.",
    url: "https://valentinproteccionintegral.com/zonas/boadilla-del-monte",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguros en Boadilla del Monte — Asesoría Personal",
    description:
      "Tu asesor de seguros en Boadilla del Monte. Salud, vida, dental y mascotas. Sin letra pequeña. Consulta gratis por WhatsApp.",
  },
  alternates: {
    canonical:
      "https://valentinproteccionintegral.com/zonas/boadilla-del-monte",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valentín Protección Integral - Seguros Boadilla del Monte",
  "telephone": "+34603448765",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C. de los Reyes Católicos, 1",
    "addressLocality": "Boadilla del Monte",
    "addressRegion": "Madrid",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4057,
    "longitude": -3.8783
  },
  "areaServed": ["Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas", "Madrid"],
  "description": "Orientación de seguros con registro oficial en Boadilla del Monte. Salud, vida, dental, mascotas, decesos y seguros para autónomos.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "ratingCount": "60"
  }
};

export const dynamic = "force-static";

export default function BoadillaPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy de Boadilla del Monte y necesito información sobre seguros.");

  const seguros = [
    { nombre: "Salud", desc: "Médicos y hospitales sin esperas ni copagos ocultos." },
    { nombre: "Vida", desc: "Protección para tu familia ante cualquier imprevisto." },
    { nombre: "Dental", desc: "Revisiones, limpiezas y tratamientos sin sorpresas." },
    { nombre: "Mascotas", desc: "Veterinario, vacunas y responsabilidad civil incluidos." },
    { nombre: "Decesos", desc: "Todo organizado. Un trámite menos en momentos difíciles." },
    { nombre: "Autónomos", desc: "Protección para ti y tu negocio en Boadilla." },
  ];

  const reviews = [
    { nombre: "María G.", barrio: "Urbanización Montepríncipe", texto: "Rosa nos explicó todo sin prisa. Al final contratamos salud y dental para toda la familia. Muy recomendables." },
    { nombre: "Carlos R.", barrio: "Boadilla Centro", texto: "Responden al momento por WhatsApp. En menos de una hora tenía la comparativa de tres compañías. Profesionales de verdad." },
    { nombre: "Ana y Pedro", barrio: "Viñas Viejas", texto: "Llevamos 3 años con ellos. Cuando tuvimos un siniestro, Sebastián lo gestionó todo. No nos arrepentimos de haberlos elegido." },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Zonas",url:"/zonas"},{name:"Boadilla del Monte",url:"/zonas/boadilla-del-monte"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* 1. HERO — Fondo oscuro profesional */}
        <section className="bg-slate-900 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Seguro de salud en Boadilla del Monte
                </h1>
                <p className="text-xl text-slate-300 mb-4">
                  Asesoría personal y sin intermediarios
                </p>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Rosa y Sebastián ofrecen orientación de seguros en Boadilla del Monte.
                  Más de 10 años ayudando a vecinos a elegir el mejor seguro, 
                  con asesoramiento personalizado, sin coste ni compromiso.
                </p>
                <WhatsAppLink 
                  href={wCotiza}
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escríbenos por WhatsApp
                </WhatsAppLink>
                <p className="text-sm text-slate-500 mt-4">Respuesta en nuestro horario de atención</p>
              </div>
              
              {/* Right: Foto del equipo */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Asesores de seguros en Boadilla del Monte"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                  +10 años en Boadilla
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRUEBA LOCAL — Fondo negro, texto grande */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Familias protegidas en Madrid Oeste
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 mt-4">
              +10 años en Boadilla del Monte
            </p>
          </div>
        </section>

        {/* IMAGEN LOCAL — Boadilla del Monte */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/zonas/boadilla-del-monte.webp"
                alt="Boadilla del Monte - Asesores de seguros locales"
                width={800}
                height={450}
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-sm">
                  📷 Boadilla del Monte · Tu asesor de seguros local
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SEGUROS POPULARES EN BOADILLA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Seguros populares en Boadilla del Monte
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seguros.map((seguro, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{seguro.nombre}</h3>
                  <p className="text-slate-600 mb-4">{seguro.desc}</p>
                  <WhatsAppLink 
                    href={wCotiza}
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Más información
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </WhatsAppLink>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <WhatsAppLink 
                href={wCotiza}
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-emerald-600/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pide tu asesoría gratis
              </WhatsAppLink>
            </div>
          </div>
        </section>

        {/* 4. FOTO DEL EQUIPO */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián Valentín - Asesores de seguros en Boadilla del Monte"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Rosa y Sebastián
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Llevamos más de 10 años asesorando a familias en Boadilla del Monte. 
                  Nos conocemos en persona o por WhatsApp. Cada cliente es diferente, 
                  por eso no vendemos seguros prefabricados: buscamos el que realmente 
                  se ajusta a lo que necesitas.
                </p>
                <p className="text-slate-500 mb-8">
                  <span className="font-semibold text-slate-700">Dirección:</span> C. de los Reyes Católicos, 1, Boadilla del Monte, Madrid<br/>
                  <span className="font-semibold text-slate-700">WhatsApp:</span> 603 44 87 65
                </p>
                <WhatsAppLink 
                  href={wCotiza}
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Habla con nosotros
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROCESO EN 3 PASOS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
              Proceso en 3 pasos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-emerald-600 mb-4">1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Nos escribes por WhatsApp</h3>
                <p className="text-slate-600">Cuéntanos qué necesitas. Te respondemos en nuestro horario de atención.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-emerald-600 mb-4">2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Te asesoramos sin coste</h3>
                <p className="text-slate-600">Te explicamos en detalle cada cobertura. Sin coste ni compromiso.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-emerald-600 mb-4">3</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Te damos la mejor opción</h3>
                <p className="text-slate-600">Tú decides. Si te interesa, gestionamos todo el papeleo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. REVIEWS — Opiniones de vecinos de Boadilla */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Lo que dicen los vecinos de Boadilla
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 leading-relaxed">"{review.texto}"</p>
                  <div>
                    <p className="font-semibold text-slate-900">{review.nombre}</p>
                    <p className="text-sm text-slate-500">{review.barrio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GARANTÍAS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Nuestras garantías
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Si hay un error, lo resolvemos</h3>
                <p className="text-slate-600">Si cometemos un error, lo corregimos sin coste para ti. Asumimos nuestra responsabilidad.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Te acompañamos en todo</h3>
                <p className="text-slate-600">No desaparecemos tras la firma. Estamos contigo en renovaciones, cambios y siniestros.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Sin letra pequeña</h3>
                <p className="text-slate-600">Te explicamos todo antes de firmar. Sin permanencias ocultas ni cláusulas que luego te sorprendan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL — Fondo oscuro */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Vives en Boadilla del Monte?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Habla con nosotros hoy. Te atendemos en nuestro horario de atención.
            </p>
            <WhatsAppLink 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full text-xl font-semibold transition-colors shadow-xl shadow-emerald-600/20"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </WhatsAppLink>
            <p className="text-slate-400 mt-6">wa.me/34603448765</p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
