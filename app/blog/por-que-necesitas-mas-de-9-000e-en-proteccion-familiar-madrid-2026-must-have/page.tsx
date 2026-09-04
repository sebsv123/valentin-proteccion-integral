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
import { Phone, Shield, TrendingUp, Clock, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "9.000€ en protección familiar Madrid 2026: must-have",
  description: "Capital mínimo 9.000€ es insuficiente. Funeral Madrid 4-6k€ + deudas + hipoteca = déficit 15k€. Descubre por qué 18.000€ directos es el must-have 2026 para familias Madrid.",
  keywords: ["mejor seguro vida Madrid 2026","capital seguro vida mínimo España","indemnización directa familia","protección económica familia Madrid","gap seguro vida hipoteca"],
  alternates: { canonical: "https://valentinproteccionintegral.com/blog/por-que-necesitas-mas-de-9-000e-en-proteccion-familiar-madrid-2026-must-have" },
  openGraph: {
    title: "Por qué necesitas más de 9.000€ en protección familiar Madrid 2026",
    description: "9.000€ no bajan. Descubre el must-have de 18.000€ directos que cierra los gaps reales de tu familia.",
    url: "https://valentinproteccionintegral.com/blog/por-que-necesitas-mas-de-9-000e-en-proteccion-familiar-madrid-2026-must-have",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "article",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian.jpeg", alt: "Protección familiar Madrid 18.000€ directos" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Por qué necesitas más de 9.000€ en protección familiar Madrid 2026: El must-have que nadie cuenta",
  "description": "Análisis real: 9.000€ es insuficiente. Funeral 4-6k€ + hipoteca + deudas = déficit 15k€+. Por qué 18.000€ directos al notario es el must-have 2026.",
  "image": "https://valentinproteccionintegral.com/images/rosa_y_sebastian.jpeg",
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
      "name": "¿Cuánto es el capital mínimo de protección familiar en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El capital mínimo típico en el mercado español oscila entre 9.000€ y 10.000€, pero este importe resulta insuficiente para cubrir las necesidades reales de una familia en Madrid. Considerando funeral (4.000-6.000€), deudas pendientes, hipoteca y gastos del primer mes sin ingresos, el déficit real supera los 15.000€. Por eso, en Valentín Protección Integral recomendamos un mínimo de 18.000€, el doble de la competencia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Está cubierto el suicidio en el primer año de la póliza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. A diferencia de la mayoría de pólizas del mercado que excluyen el suicidio durante el primer año o incluso los dos primeros años, nuestras pólizas incluyen cobertura desde el día uno. Esto está respaldado por la Ley de Contrato de Seguro (LCS) artículo 27, que garantiza el pago íntegro al beneficiario incluso en caso de suicidio, siempre que se cumplan las condiciones contractuales."
      }
    },
    {
      "@type": "Question",
      "name": "¿El pago es directo al notario o hay intermediarios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El pago se realiza directamente al beneficiario designado a través del notario, sin gestores ni intermediarios. Esto garantiza que la familia reciba el capital íntegro de forma ágil, normalmente en un plazo de 10-15 días desde la declaración de fallecimiento. La Ley de Contrato de Seguro (LCS) asegura este derecho, evitando demoras burocráticas que pueden extenderse meses en otras compañías."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un funeral en Madrid en 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El coste medio de un funeral en Madrid en 2026 oscila entre 4.000€ y 6.000€, dependiendo del tipo de servicio (cremación o inhumación), flores, esquelas y otros gastos asociados. Este importe consume casi la totalidad de los 9.000€ típicos de capital mínimo en pólizas básicas, dejando a la familia sin recursos para afrontar hipoteca, deudas y gastos de subsistencia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué 18.000€ es el must-have para familias en Madrid 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Porque el cálculo real de necesidades de una familia madrileña media revela un déficit de al menos 15.000€ en el primer año tras un fallecimiento: funeral (5.000€), hipoteca pendiente (50% del capital no cubierto por seguro hipoteca en invalidez), gastos de subsistencia (1.000€/mes x 12 meses = 12.000€), menos la pensión de viudedad (~14.400€/año). Los 18.000€ directos cierran este gap y permiten a la familia mantener su nivel de vida mientras reorganiza sus finanzas."
      }
    }
  ]
};

export const dynamic = "force-static";

export default function BlogPostPage() {
  const wConsulta = buildWhatsAppHref("Hola, leí el artículo sobre los 18.000€ de protección familiar y quiero mi simulación personalizada gratuita.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Blog",url:"/blog"},{name:"¿Por qué necesitas más de 9.000€ en protección familiar?",url:"/blog/por-que-necesitas-mas-de-9-000e-en-proteccion-familiar-madrid-2026-must-have"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-[#0F5E9C] to-slate-900 py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold mb-6">
              <TrendingUp className="w-4 h-4" />
              Must-Have 2026 · Análisis Real Madrid
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Por qué necesitas más de 9.000€ en protección familiar Madrid 2026: El must-have que nadie cuenta
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              La competencia te ofrece 9.000€ mínimo. Pero funeral + deudas + hipoteca + mes sin sueldo = déficit de 15.000€+. Descubre por qué 18.000€ directos es la protección real que tu familia necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-16 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2")}>
                <WhatsAppIcon className="w-6 h-6" />
                Simulación gratuita de tu gap
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl mb-8">
              <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián - Protección familiar Madrid" width={100} height={100} className="rounded-full object-cover" />
              <div>
                <p className="font-bold text-slate-900">Rosa Valentín y Sebastián</p>
                <p className="text-slate-600">+1.200 familias tranquilas en Madrid</p>
                <p className="text-sm text-slate-500">Valentín Protección Integral · Boadilla del Monte</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                ¿Tu familia sobreviviría con solo <strong>9.000€</strong>? Ese es el capital mínimo "estándar" que ofrece la competencia. Pero hagamos números reales: <span className="bg-amber-100 text-amber-900 px-2 py-1 rounded font-bold">funeral en Madrid (4.000-6.000€) + deudas pendientes (5.000€ típico) + un mes sin sueldo = déficit de más de 15.000€</span>.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <p className="text-red-900 font-bold text-lg mb-2">Madrid 2026: La realidad económica</p>
                <p className="text-red-800">Las hipotecas han subido un 5% en el último año. El coste de vida de una familia con niños en Madrid supera los 2.500€/mes. Y si el siniestro es invalidez en lugar de fallecimiento, tu seguro de hipoteca cubre solo el <strong>50% del capital</strong>. ¿Proteges realmente a tu familia o dejas un hueco económico que la hundirá?</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 1: Capital Mín Real */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              9.000€ no basta: ¿Qué cubre de verdad?
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              La mayoría de pólizas "básicas" del mercado ofrecen entre 9.000€ y 10.000€ de capital asegurado. Suena a dinero, pero desglosémoslo en gastos reales que enfrenta una familia tras un fallecimiento en Madrid:
            </p>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <table className="w-full text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold">Concepto</th>
                    <th className="px-6 py-4 font-bold">Coste real Madrid</th>
                    <th className="px-6 py-4 font-bold">% del capital 9k€</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-4 font-medium">Funeral (cremación/inhumación)</td>
                    <td className="px-6 py-4 text-red-600 font-bold">4.000 - 6.000€</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">44-67%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Deudas pendientes (tarjetas, préstamos)</td>
                    <td className="px-6 py-4 text-red-600 font-bold">3.000 - 8.000€</td>
                    <td className="px-6 py-4 text-red-600 font-bold">33-89%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Primer mes sin ingresos</td>
                    <td className="px-6 py-4 text-red-600 font-bold">2.500€</td>
                    <td className="px-6 py-4 text-red-600 font-bold">28%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Subsidio SS (auxilio defunción)</td>
                    <td className="px-6 py-4 text-green-600 font-bold">+46€</td>
                    <td className="px-6 py-4 text-slate-400">0.5%</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-6 py-4 font-bold text-red-900">TOTAL NECESARIO</td>
                    <td className="px-6 py-4 font-black text-red-600">15.000€+</td>
                    <td className="px-6 py-4 font-black text-red-600">167%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center mb-8">
              <p className="text-2xl font-black text-amber-900 mb-2">GAP REAL: 6.000€+ sin cubrir</p>
              <p className="text-amber-800">Con 9.000€, tu familia queda con deudas y sin recursos para el primer mes. El capital mínimo real debería ser el doble.</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <h3 className="font-bold text-green-900 text-xl">Nuestra propuesta: 18.000€ mínimo directos</h3>
              </div>
              <p className="text-green-800 leading-relaxed">
                En Valentín Protección Integral, el capital mínimo que gestionamos es de <strong>18.000€</strong>, el doble de la competencia. Este importe cubre el funeral, liquida deudas pendientes deja un colchón de 8.000-10.000€ para que la familia respire durante los primeros meses mientras reorganiza sus finanzas. Y lo más importante: <strong>pago directo al notario, sin intermediarios ni gestores que se queden con comisiones.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Sección 2: Ventajas Únicas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              Cobertura año 1 completa + directo notario
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Hay dos ventajas que diferencian una protección real de una póliza "estándar": la <strong>cobertura completa desde el primer día</strong>, incluso en situaciones que otras compañías excluyen, y la <strong>liquidación directa sin intermediarios</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">Suicidio cubierto año 1</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  La mayoría de pólizas excluyen el suicidio durante el primer año (e incluso los dos primeros). Nuestras pólizas lo cubren desde el día uno, respaldado por la <strong>Ley de Contrato de Seguro (LCS) artículo 27</strong>. Una ventaja brutal que protege a la familia incluso en las circunstancias más difíciles.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">Directo al notario: Sin gestores</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  El capital se paga íntegramente al beneficiario a través del notario, sin gestores ni intermediarios que retengan comisiones. La familia recibe el 100% del capital en <strong>10-15 días</strong>, frente a los meses que pueden tardar otras compañías con procesos burocráticos complejos.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white mb-8">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-amber-400" />
                Caso real: El día 15 vs los meses de espera
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-amber-400 font-bold mb-2">Competencia típica (9.000€)</p>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>• Funeral: -5.000€</li>
                    <li>• Gestor comisión: -900€ (10%)</li>
                    <li>• Demora: 3-6 meses</li>
                    <li>• Recibe familia: ~3.000€</li>
                  </ul>
                </div>
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                  <p className="text-green-400 font-bold mb-2">Nuestra póliza (18.000€)</p>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>• Funeral: -5.000€</li>
                    <li>• Sin gestor: 0€</li>
                    <li>• Día 15: ~13.000€ netos</li>
                    <li>• Colchón primeros meses: ✓</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Impacto Sin Protección */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              Si no proteges el 100%: Familia endeudada Madrid
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Imagina una viuda con dos niños en Madrid. La pensión de viudedad cubre el 52-70% de la base reguladora del fallecido: aproximadamente <strong>1.200€/mes</strong>. Pero la hipoteca son 900€ mensuales, la guardería 400€, y el resto de gastos (alimentación, luz, transporte) otros 900€. El cálculo es demoledor.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Balance mensual viuda + 2 niños</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-green-200">
                  <span className="text-slate-600">Pensión viudedad (52-70% SS)</span>
                  <span className="font-bold text-green-600">+1.200€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-slate-600">Hipoteca mensual</span>
                  <span className="font-bold text-red-600">-900€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-slate-600">Guardería/colegio (2 niños)</span>
                  <span className="font-bold text-red-600">-400€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-slate-600">Alimentación, luz, transporte</span>
                  <span className="font-bold text-red-600">-900€</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-red-50 px-4 rounded-lg">
                  <span className="font-bold text-red-900">DÉFICIT MENSUAL</span>
                  <span className="font-black text-red-600 text-xl">-1.000€</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-2xl font-bold text-slate-900 mb-4">¿18.000€ cambian todo?</p>
              <p className="text-lg text-slate-600">Con 18.000€ directos, esa viuda puede pagar:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                <p className="text-2xl font-black text-green-600 mb-1">5.000€</p>
                <p className="text-green-800 text-sm">Funeral y trámites</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                <p className="text-2xl font-black text-green-600 mb-1">6.000€</p>
                <p className="text-green-800 text-sm">Deuda hipoteca parcial</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                <p className="text-2xl font-black text-green-600 mb-1">7.000€</p>
                <p className="text-green-800 text-sm">Colchón 7 meses déficit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Cómo Cerrar Gaps */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black mb-8 text-center">
              Protección must-have: Sencilla y superior
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">1</div>
                <h3 className="font-bold mb-2">Diseño profesional</h3>
                <p className="text-slate-300 text-sm">Stats impactantes: 15k€ déficit real, 50% gap hipoteca, 1.000€/mes déficit viudedad.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">2</div>
                <h3 className="font-bold mb-2">Sencillez absoluta</h3>
                <p className="text-slate-300 text-sm">WhatsApp → Cálculo personalizado en 2 min → Firma digital. Sin papeleo innecesario.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">3</div>
                <h3 className="font-bold mb-2">Sorpresas reales</h3>
                <p className="text-slate-300 text-sm">Condiciones especiales bundle vida+salud. Revisión anual de gaps gratuita.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3 text-amber-300 font-bold">4</div>
                <h3 className="font-bold mb-2">Garantías legales</h3>
                <p className="text-slate-300 text-sm">Directo notario (LCS asegura pago íntegro). Respuesta en 30 minutos o cita gratuita.</p>
              </div>
            </div>

            <div className="bg-amber-500/20 rounded-2xl p-6 mb-8 border border-amber-500/30 text-center">
              <p className="text-amber-300 font-bold mb-2">🔥 Honestidad: Mejoramos bancos en el 95% de casos</p>
              <p className="text-slate-300 text-sm">Como agentes de seguros, revisamos las coberturas que podemos ofrecer y ayudamos a detectar los huecos reales que pueden dejar las pólizas bancarias estándar.</p>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold mb-6">3 pasos para tu tranquilidad:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">1️⃣</span>
                  <span>WhatsApp</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 hidden sm:block" />
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">2️⃣</span>
                  <span>Cálculo personalizado</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 hidden sm:block" />
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">3️⃣</span>
                  <span>Tranquilidad real</span>
                </div>
              </div>
              <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-16 px-10 text-xl font-black bg-white text-slate-900 hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl")}>
                <WhatsAppIcon className="w-7 h-7" />
                WhatsApp: Tu simulación gratis
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Cuánto es el capital mínimo de protección familiar en España?", a: "El capital mínimo típico en el mercado español oscila entre 9.000€ y 10.000€, pero este importe resulta insuficiente para cubrir las necesidades reales de una familia en Madrid. Considerando funeral (4.000-6.000€), deudas pendientes, hipoteca y gastos del primer mes sin ingresos, el déficit real supera los 15.000€. Por eso, en Valentín Protección Integral recomendamos un mínimo de 18.000€, el doble de la competencia." },
                { q: "¿Está cubierto el suicidio en el primer año de la póliza?", a: "Sí. A diferencia de la mayoría de pólizas del mercado que excluyen el suicidio durante el primer año o incluso los dos primeros años, nuestras pólizas incluyen cobertura desde el día uno. Esto está respaldado por la Ley de Contrato de Seguro (LCS) artículo 27, que garantiza el pago íntegro al beneficiario incluso en caso de suicidio, siempre que se cumplan las condiciones contractuales." },
                { q: "¿El pago es directo al notario o hay intermediarios?", a: "El pago se realiza directamente al beneficiario designado a través del notario, sin gestores ni intermediarios. Esto garantiza que la familia reciba el capital íntegro de forma ágil, normalmente en un plazo de 10-15 días desde la declaración de fallecimiento. La Ley de Contrato de Seguro (LCS) asegura este derecho, evitando demoras burocráticas que pueden extenderse meses en otras compañías." },
                { q: "¿Cuánto cuesta un funeral en Madrid en 2026?", a: "El coste medio de un funeral en Madrid en 2026 oscila entre 4.000€ y 6.000€, dependiendo del tipo de servicio (cremación o inhumación), flores, esquelas y otros gastos asociados. Este importe consume casi la totalidad de los 9.000€ típicos de capital mínimo en pólizas básicas, dejando a la familia sin recursos para afrontar hipoteca, deudas y gastos de subsistencia." },
                { q: "¿Por qué 18.000€ es el must-have para familias en Madrid 2026?", a: "Porque el cálculo real de necesidades de una familia madrileña media revela un déficit de al menos 15.000€ en el primer año tras un fallecimiento: funeral (5.000€), hipoteca pendiente (50% del capital no cubierto por seguro hipoteca en invalidez), gastos de subsistencia (1.000€/mes x 12 meses = 12.000€), menos la pensión de viudedad (~14.400€/año). Los 18.000€ directos cierran este gap y permiten a la familia mantener su nivel de vida mientras reorganiza sus finanzas." }
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
              Must-have 2026: Tu simulación gratuita
            </h2>
            <p className="text-xl text-white/80 mb-8">
              No esperes a comprobar si tus 9.000€ bastan. Calcula tu gap real y descubre cómo 18.000€ directos protegen realmente a tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:603448765" className="inline-flex items-center justify-center gap-3 text-2xl font-bold text-white hover:text-amber-300 transition-colors">
                <Phone className="w-8 h-8" />
                603 44 87 65
              </a>
            </div>
            <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-18 px-12 text-xl font-black bg-white text-[#0F5E9C] hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl shadow-2xl")}>
              <WhatsAppIcon className="w-7 h-7" />
              WhatsApp: Simulación gratuita
            </a>
            <p className="mt-6 text-white/60 text-sm">
              +10 años protegiendo familias en Madrid y Boadilla del Monte · DGSFP C012479234434D
            </p>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-12 bg-slate-50 border-t">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm text-slate-500 mb-4">Artículos relacionados:</p>
            <div className="flex flex-wrap gap-3">
              <a href="/seguros/salud" className="px-4 py-2 bg-white rounded-full text-slate-600 hover:text-[#0F5E9C] border border-slate-200 text-sm font-medium transition-colors">
                Seguro de Salud Madrid
              </a>
              <a href="/para/familias" className="px-4 py-2 bg-white rounded-full text-slate-600 hover:text-[#0F5E9C] border border-slate-200 text-sm font-medium transition-colors">
                Protección para Familias
              </a>
              <a href="/blog/cuanto-te-indemniza-realmente-tu-seguro-hipoteca-nomina-en-invalidez-solo-50" className="px-4 py-2 bg-white rounded-full text-slate-600 hover:text-[#0F5E9C] border border-slate-200 text-sm font-medium transition-colors">
                ¿Cuánto indemniza tu seguro hipoteca?
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
