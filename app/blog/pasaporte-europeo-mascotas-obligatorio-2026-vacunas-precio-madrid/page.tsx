import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, AlertTriangle, FileText, Euro, Plane, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pasaporte Europeo Mascotas 2026: Vacunas y Precio",
  description: "Desde abril 2026, pasaporte europeo obligatorio para viajar con perros/gatos a la UE. Vacunas rabía, chip, precio Madrid 100-150€. Evita multas 600€. Check-up gratis.",
  keywords: ["pasaporte europeo perro obligatorio","precio pasaporte gato Madrid 2026","seguro mascotas viajes UE","pasaporte mascotas vacunas obligatorias","multa sin pasaporte perro Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/blog/pasaporte-europeo-mascotas-obligatorio-2026-vacunas-precio-madrid" },
  openGraph: {
    title: "Pasaporte Europeo Mascotas Obligatorio 2026: Vacunas, Precio Madrid",
    description: "Desde abril 2026, pasaporte obligatorio para viajar con mascotas a la UE. Evita multas de 600€.",
    url: "https://valentinproteccionintegral.com/blog/pasaporte-europeo-mascotas-obligatorio-2026-vacunas-precio-madrid",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "article",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mascotas.png", alt: "Pasaporte Europeo Mascotas Madrid 2026" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Pasaporte Europeo Mascotas Obligatorio 2026: Vacunas, Precio Madrid y Cómo Cumplir Sin Multas",
  "description": "Guía completa RD 83/2023: pasaporte europeo obligatorio para perros/gatos desde abril 2026. Costes Madrid, vacunas rabía, chip obligatorio. Evita multas 600€.",
  "image": "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mascotas.png",
  "author": {
    "@type": "Organization",
    "name": "Valentín Protección Integral",
    "url": "https://valentinproteccionintegral.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Valentín Protección Integral",
    "logo": {
      "@type": "ImageObject",
      "url": "https://valentinproteccionintegral.com/logo.png"
    }
  },
  "datePublished": "2026-04-23",
  "dateModified": "2026-04-23"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Desde cuándo es obligatorio el pasaporte europeo para mascotas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El pasaporte europeo para mascotas es obligatorio desde el 22 de abril de 2026 según el Real Decreto 83/2023. A partir de esta fecha, todos los perros, gatos y hurones que viajen a la Unión Europea o Suiza deben disponer de este documento oficial, junto con microchip y vacuna de la rabia vigente. Sin él, la mascota no podrá cruzar la frontera."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta sacar el pasaporte europeo a una mascota en Madrid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El coste total en Madrid para obtener el pasaporte europeo oscila entre 100€ y 150€. Este importe incluye: microchip (20-40€), vacuna de la rabia (30-50€), pasaporte oficial expedido por veterinario autorizado (25-40€), y revisión veterinaria general. Además, si la mascota viaja por primera vez después de los 12 meses de la vacunación, se requiere una titulación serológica adicional (50-70€)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué vacunas son obligatorias para el pasaporte europeo de mascotas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La única vacuna obligatoria para obtener el pasaporte europeo es la de la rabia. La mascota debe tener al menos 12 semanas de edad para recibir la primera dosis, y el pasaporte se puede expedir desde el día 21 después de la vacunación. Aunque otras vacunas (como moquillo o parvovirus) no son obligatorias para viajar, se recomiendan para proteger la salud del animal."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la multa por viajar sin pasaporte europeo con mi mascota?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Viajar sin pasaporte europeo puede acarrear una multa de hasta 600€ en la frontera, además de la retención del animal en cuarentena hasta que se regularice su situación sanitaria. El coste de la cuarentena y el traslado corren por cuenta del propietario, pudiendo superar los 1.000€ en total. Estas sanciones están establecidas en el RD 83/2023 de normativa comunitaria sobre movilidad de animales de compañía."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubre el seguro de mascotas los gastos del pasaporte europeo y vacunas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las pólizas de seguro de mascotas que gestionamos incluyen cobertura del 100% para las vacunas obligatorias (rabia), microchip, expedición del pasaporte europeo y revisión veterinaria previa al viaje. Además, cubrimos gastos veterinarios durante los viajes por la UE, incluyendo urgencias, accidentes y enfermedades. También ofrecemos un 10% de descuento si contratas el seguro de mascotas junto con el de salud familiar."
      }
    }
  ]
};

export const dynamic = "force-static";

export default function BlogPostPage() {
  const wConsulta = buildWhatsAppHref("Hola, quiero información sobre el pasaporte europeo para mi mascota y el seguro que cubre vacunas y viajes.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Blog",url:"/blog"},{name:"Pasaporte Europeo Mascotas 2026",url:"/blog/pasaporte-europeo-mascotas-obligatorio-2026-vacunas-precio-madrid"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-900 via-[#0F5E9C] to-blue-900 py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-bold mb-6">
              <AlertTriangle className="w-4 h-4" />
              Obligatorio desde Abril 2026 · RD 83/2023
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Pasaporte Europeo Mascotas Obligatorio 2026: Vacunas, Precio Madrid y Cómo Cumplir Sin Multas
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Desde el 22 de abril de 2026, viajar sin pasaporte europeo con tu perro o gato puede costarte <strong>600€ de multa</strong> en la frontera. Descubre qué necesitas, cuánto cuesta en Madrid y cómo cubrirlo todo con tu seguro de mascotas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-16 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2")}>
                <WhatsAppIcon className="w-6 h-6" />
                Check-up mascota gratis
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl mb-8">
              <Image src="/images/rosa_y_sebastian_mascotas.png" alt="Rosa y Sebastián - Pasaporte Europeo Mascotas Madrid" width={100} height={100} className="rounded-full object-cover" />
              <div>
                <p className="font-bold text-slate-900">Rosa Valentín y Sebastián</p>
                <p className="text-slate-600">mascotas protegidas en Madrid</p>
                <p className="text-sm text-slate-500">Especialistas seguro de mascotas · Boadilla del Monte</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                ¿Sabías que desde el <strong>22 de abril de 2026</strong> (RD 83/2023), viajar a la Unión Europea con tu perro o gato sin pasaporte europeo puede suponer una <span className="bg-red-100 text-red-900 px-2 py-1 rounded font-bold">multa de 600€</span> en la frontera más la retención de tu compañero en cuarentena?
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                <p className="text-amber-900 font-bold text-lg mb-2">⚠️ La realidad en Madrid 2026:</p>
                <p className="text-amber-800">Más de <strong>500.000 mascotas</strong> en la Comunidad de Madrid están afectadas por esta normativa. El proceso completo (chip + vacunas rabia + pasaporte) cuesta entre <strong>100€ y 150€</strong>. Sin seguro, este gasto sale directo de tu bolsillo. Con nuestras pólizas, está cubierto al 100%.</p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                En esta guía te explicamos paso a paso qué exige la nueva normativa, cuánto cuesta realmente en Madrid, qué riesgos corres si no cumples, y cómo una póliza de mascotas integral te cubre todo: desde las vacunas obligatorias hasta los gastos veterinarios si tu perro o gato enferma de camino a París.
              </p>
            </div>
          </div>
        </section>

        {/* Sección 1: Nueva Norma */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              Qué exige RD 83/2023: Pasaporte Europeo obligatorio
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              El Real Decreto 83/2023 transpone la normativa comunitaria española sobre movilidad de animales de compañía. A partir del 22 de abril de 2026, para viajar con tu mascota a cualquier país de la Unión Europea (y Suiza) necesitas cumplir estos requisitos:
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                Requisitos obligatorios pasaporte europeo
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-900">1. Microchip ISO 11784/11785</span>
                    <p className="text-slate-600 text-sm">Debe implantarse antes de la vacuna de la rabia. El número debe coincidir exactamente con el del pasaporte.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-900">2. Vacuna de la rabia vigente</span>
                    <p className="text-slate-600 text-sm">La mascota debe tener al menos 12 semanas. El pasaporte se expide desde el día 21 post-vacunación.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-900">3. Pasaporte oficial expedido por veterinario autorizado</span>
                    <p className="text-slate-600 text-sm">Solo veterinarios colegiados pueden expedirlo. Debe llevar el sello y firma del profesional.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-900">4. Titulación serológica (si aplica)</span>
                    <p className="text-slate-600 text-sm">Si viajas por primera vez más de 12 meses después de la vacuna, necesitas análisis de anticuerpos (50-70€).</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold">Animal</th>
                    <th className="px-6 py-4 font-bold">Pasaporte obligatorio</th>
                    <th className="px-6 py-4 font-bold">Notas especiales</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-4 font-medium">Perros</td>
                    <td className="px-6 py-4 text-green-600 font-bold">✓ Sí</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">Todas las razas, incluidas PPP</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Gatos</td>
                    <td className="px-6 py-4 text-green-600 font-bold">✓ Sí</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">Incluidos los de interior</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Hurones</td>
                    <td className="px-6 py-4 text-green-600 font-bold">✓ Sí</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">Considerados animales de compañía</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sección 2: Costes Madrid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              Precio real pasaporte mascota Madrid 2026
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              En Madrid, el coste total para preparar a tu mascota para viajar a Europa oscila entre <strong>100€ y 150€</strong>. Este precio incluye todos los trámites veterinarios obligatorios. Si necesitas la titulación serológica (viaje tras 12 meses de la vacuna), suma otros 50-70€.
            </p>

            <div className="bg-slate-900 rounded-2xl p-6 text-white mb-8">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <Euro className="w-6 h-6 text-green-400" />
                Desglose de costes Madrid (2026)
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-slate-300">Microchip ISO + implantación</span>
                  <span className="font-bold text-white">20-40€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-slate-300">Vacuna rabia (obligatoria)</span>
                  <span className="font-bold text-white">30-50€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-slate-300">Pasaporte oficial (expedición)</span>
                  <span className="font-bold text-white">25-40€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="text-slate-300">Revisión veterinaria general</span>
                  <span className="font-bold text-white">25-30€</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-green-500/20 px-4 rounded-lg">
                  <span className="font-bold text-green-300">TOTAL BÁSICO</span>
                  <span className="font-black text-green-400 text-xl">100-150€</span>
                </div>
                <div className="flex justify-between items-center py-2 text-sm text-amber-300">
                  <span>Titulación serológica (si &gt;12 meses)</span>
                  <span>+50-70€</span>
                </div>
                <div className="flex justify-between items-center py-2 text-sm text-amber-300">
                  <span>Análisis anual mantenimiento</span>
                  <span>+50€</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <p className="text-red-900 font-bold mb-3">❌ Sin seguro de mascotas</p>
                <ul className="text-red-700 text-sm space-y-2">
                  <li>• Pagas 100-150€ de bolsillo</li>
                  <li>• +50€ anuales mantenimiento</li>
                  <li>• Emergencias viaje: gasto extra</li>
                  <li>• Vacunas futuras: a tu costa</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <p className="text-green-900 font-bold mb-3">✓ Con nuestra póliza mascotas</p>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>• 100% cubierto: chip + vacunas + pasaporte</li>
                  <li>• Reembolso gastos expedición</li>
                  <li>• Veterinario ilimitado viajes UE</li>
                  <li>• Accidentes/enfermedades: cubierto</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Riesgos Sin Cumplir */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              Multas, cuarentenas y gastos extra
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              No cumplir la normativa no solo impide viajar: puede dejarte sin tu mascota durante días y con un agujero económico de más de <strong>1.500€</strong>.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                Consecuencias de viajar sin pasaporte
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-bold text-red-900">Multa en frontera: 600€</p>
                    <p className="text-red-700 text-sm">La Guardia Civil o aduanas de la UE pueden sancionarte con hasta 600€ por intentar entrar sin documentación.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-bold text-amber-900">Retención en cuarentena: 500-1.000€</p>
                    <p className="text-amber-700 text-sm">Tu mascota puede ser retenida en instalaciones oficiales hasta que se regularice. Pagas transporte, alojamiento y veterinario.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-slate-600 font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Gastos veterinarios no cubiertos</p>
                    <p className="text-slate-600 text-sm">Si tu perro o gato enferma de camino y no tienes seguro, pagas consultas, medicamentos y posible hospitalización en otro país.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 rounded-2xl p-6 text-white text-center">
              <Plane className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <p className="text-xl font-bold mb-2">¿Viajas este verano?</p>
              <p className="text-blue-200">Prepárate ya. El proceso completo puede tardar 3-4 semanas (21 días post-vacuna + gestión pasaporte). No esperes a última hora.</p>
            </div>
          </div>
        </section>

        {/* Sección 4: Solución Integral */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black mb-8 text-center">
              Póliza mascotas que cubre TODO: Vacunas, pasaporte, viajes
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">1</div>
                <h3 className="font-bold mb-2">Diseño profesional</h3>
                <p className="text-slate-300 text-sm">Infografía clara de costes, plazos y requisitos. Sin letra pequeña.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">2</div>
                <h3 className="font-bold mb-2">Sencillez total</h3>
                <p className="text-slate-300 text-sm">WhatsApp → Check-up veterinario → Póliza activa. En 30 minutos.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">3</div>
                <h3 className="font-bold mb-2">Sorpresas reales</h3>
                <p className="text-slate-300 text-sm">Primer check-up gratuito. 10% dto si contratas mascota + salud familiar.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">4</div>
                <h3 className="font-bold mb-2">Garantías sólidas</h3>
                <p className="text-slate-300 text-sm">Reembolso 100% vacunas/pasaporte si viajas. Veterinario 24h en toda la UE.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur md:col-span-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">5</div>
                <h3 className="font-bold mb-2">Honestidad</h3>
                <p className="text-slate-300 text-sm">"Cubrimos lo que los veterinarios no: viajes sin estrés ni multas." Orientación de seguros con registro oficial.</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-xl font-bold mb-4">Proceso en 3 pasos:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">1️⃣</span>
                  <span>WhatsApp foto chip</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 hidden sm:block" />
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">2️⃣</span>
                  <span>Cobertura activa</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 hidden sm:block" />
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">3️⃣</span>
                  <span>Viaja tranquilo</span>
                </div>
              </div>
            </div>

            <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-18 px-12 text-xl font-black bg-white text-slate-900 hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl shadow-2xl w-full sm:w-auto block text-center")}>
              <WhatsAppIcon className="w-7 h-7 inline" />
              WhatsApp: Check-up mascota gratis
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Desde cuándo es obligatorio el pasaporte europeo para mascotas?", a: "El pasaporte europeo para mascotas es obligatorio desde el 22 de abril de 2026 según el Real Decreto 83/2023. A partir de esta fecha, todos los perros, gatos y hurones que viajen a la Unión Europea o Suiza deben disponer de este documento oficial, junto con microchip y vacuna de la rabia vigente. Sin él, la mascota no podrá cruzar la frontera." },
                { q: "¿Cuánto cuesta sacar el pasaporte europeo a una mascota en Madrid?", a: "El coste total en Madrid para obtener el pasaporte europeo oscila entre 100€ y 150€. Este importe incluye: microchip (20-40€), vacuna de la rabia (30-50€), pasaporte oficial expedido por veterinario autorizado (25-40€), y revisión veterinaria general. Además, si la mascota viaja por primera vez después de los 12 meses de la vacunación, se requiere una titulación serológica adicional (50-70€)." },
                { q: "¿Qué vacunas son obligatorias para el pasaporte europeo de mascotas?", a: "La única vacuna obligatoria para obtener el pasaporte europeo es la de la rabia. La mascota debe tener al menos 12 semanas de edad para recibir la primera dosis, y el pasaporte se puede expedir desde el día 21 después de la vacunación. Aunque otras vacunas (como moquillo o parvovirus) no son obligatorias para viajar, se recomiendan para proteger la salud del animal." },
                { q: "¿Cuál es la multa por viajar sin pasaporte europeo con mi mascota?", a: "Viajar sin pasaporte europeo puede acarrear una multa de hasta 600€ en la frontera, además de la retención del animal en cuarentena hasta que se regularice su situación sanitaria. El coste de la cuarentena y el traslado corren por cuenta del propietario, pudiendo superar los 1.000€ en total. Estas sanciones están establecidas en el RD 83/2023 de normativa comunitaria sobre movilidad de animales de compañía." },
                { q: "¿Cubre el seguro de mascotas los gastos del pasaporte europeo y vacunas?", a: "Sí. Las pólizas de seguro de mascotas que gestionamos incluyen cobertura del 100% para las vacunas obligatorias (rabia), microchip, expedición del pasaporte europeo y revisión veterinaria previa al viaje. Además, cubrimos gastos veterinarios durante los viajes por la UE, incluyendo urgencias, accidentes y enfermedades. También ofrecemos un 10% de descuento si contratas el seguro de mascotas junto con el de salud familiar." }
              ].map((faq, i) => (
                <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                    <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusión / CTA */}
        <section className="py-16 bg-[#0F5E9C]">
          <div className="container mx-auto px-4 max-w-3xl text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">
              Evita multas: Protege a tu compañero hoy
            </h2>
            <p className="text-xl text-white/80 mb-8">
              No dejes el pasaporte para última hora. Un simple WhatsApp y en 30 minutos sabrás exactamente qué necesitas y cuánto cuesta. Check-up veterinario gratuito para mascotas de Madrid y Boadilla del Monte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:603448765" className="inline-flex items-center justify-center gap-3 text-2xl font-bold text-white hover:text-amber-300 transition-colors">
                <Phone className="w-8 h-8" />
                603 44 87 65
              </a>
            </div>
            <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-18 px-12 text-xl font-black bg-white text-[#0F5E9C] hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl shadow-2xl")}>
              <WhatsAppIcon className="w-7 h-7" />
              WhatsApp: Check-up mascota gratis
            </a>
            <p className="mt-6 text-white/60 text-sm">
              mascotas protegidas · +10 años en Madrid · DGSFP C012479234434D
            </p>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-12 bg-slate-50 border-t">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm text-slate-500 mb-4">Artículos relacionados:</p>
            <div className="flex flex-wrap gap-3">
              <a href="/seguros/mascotas" className="px-4 py-2 bg-white rounded-full text-slate-600 hover:text-[#0F5E9C] border border-slate-200 text-sm font-medium transition-colors">
                Seguro de Mascotas Madrid
              </a>
              <a href="/zonas/boadilla-del-monte" className="px-4 py-2 bg-white rounded-full text-slate-600 hover:text-[#0F5E9C] border border-slate-200 text-sm font-medium transition-colors">
                Asesores Boadilla del Monte
              </a>
              <a href="/blog/cuanto-te-indemniza-realmente-tu-seguro-hipoteca-nomina-en-invalidez-solo-50" className="px-4 py-2 bg-white rounded-full text-slate-600 hover:text-[#0F5E9C] border border-slate-200 text-sm font-medium transition-colors">
                Cobertura real seguro hipoteca
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
