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
import { Phone, AlertTriangle, Calculator, ShieldCheck, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro hipoteca en invalidez: ¿cuánto cobras? | Valentín",
  description: "Descubre el gap real de cobertura: hipoteca cubre 50% en invalidez, nómina solo 40% extra. Déficit de 1.000€/mes para familias Madrid. Calcula tu protección real con Rosa y Sebastián.",
  keywords: ["indemnización invalidez hipoteca Madrid","cobertura seguro colectivo trabajo España","seguro hipoteca invalidez permanente","gap cobertura vida Madrid","indemnización fallecimiento hipoteca"],
  alternates: { canonical: "https://valentinproteccionintegral.com/blog/cuanto-te-indemniza-realmente-tu-seguro-hipoteca-nomina-en-invalidez-solo-50" },
  openGraph: {
    title: "¿Cuánto te indemniza realmente tu seguro hipoteca o nómina en invalidez?",
    description: "Solo el 50% en invalidez. Descubre el gap que deja tu familia expuesta y cómo cubrirlo.",
    url: "https://valentinproteccionintegral.com/blog/cuanto-te-indemniza-realmente-tu-seguro-hipoteca-nomina-en-invalidez-solo-50",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "article",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian.jpeg", alt: "Rosa y Sebastián - Asesores seguros vida Madrid" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Cuánto te indemniza realmente tu seguro hipoteca o nómina en invalidez? Solo el 50%...",
  "description": "Análisis real de coberturas: hipoteca 50% en invalidez, nómina 40% extra. Impacto económico para familias Madrid y solución de protección integral.",
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
      "name": "¿Cuánto paga el seguro de hipoteca en caso de invalidez permanente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El seguro de hipoteca vinculado al préstamo cubre el 100% del capital en caso de fallecimiento, pero en invalidez permanente absoluta (IPA) la cobertura suele ser del 50% del capital pendiente, salvo que contrates explícitamente la cobertura del 100% (opcional y con recargo). Esto significa que si debes 200.000€, el seguro podría pagar solo 100.000€, dejando a tu familia con una deuda mensual significativa."
      }
    },
    {
      "@type": "Question",
      "name": "¿El convenio colectivo de trabajo cubre todo en caso de invalidez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. El convenio colectivo añade una indemnización extra sobre la base de la prestación por incapacidad permanente de la Seguridad Social (que es el 55% de la base reguladora). La indemnización convenio típica en Madrid oscila entre 30.000€ y 50.000€, insuficiente para cubrir el déficit de ingresos a largo plazo de una familia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto recibe una viuda en Madrid tras el fallecimiento del cónyuge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La pensión de viudedad de la Seguridad Social oscila entre el 52% y el 70% de la base reguladora del fallecido. En Madrid, esto suele traducirse en aproximadamente 1.200€ mensuales. Si la hipoteca son 900€/mes, quedan solo 300€ para cubrir alimentación, guardería (400€), transporte y demás gastos familiares, generando un déficit de al menos 1.000€ mensuales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre el seguro de vida del banco y una póliza independiente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El seguro de vida del banco suele tener primas más elevadas (entre 30% y 60% más caras) y coberturas estandarizadas que no se adaptan a la situación familiar real. Una póliza independiente permite personalizar el capital asegurado, añadir coberturas como invalidez permanente total y parcial, y el capital se paga directamente al beneficiario (notario), no al banco. Además, el suicidio está cubierto desde el primer año en pólizas independientes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un seguro de vida que cubra el 100% del gap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio depende de la edad, el capital asegurado y las coberturas elegidas. Para un perfil de 40 años en Madrid, una protección integral que cubra el capital de la hipoteca más un capital adicional para gastos familiares (mínimo 18.000€, frente a los ~9.000€ de la competencia) puede costar menos de lo que imaginas. Rosa y Sebastián calculan tu presupuesto personalizado en 30 minutos, sin compromiso."
      }
    }
  ]
};

export const dynamic = "force-static";

export default function BlogPostPage() {
  const wConsulta = buildWhatsAppHref("Hola, he leído el artículo sobre el gap de cobertura en hipotecas y quiero que me calculéis mi protección real.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Blog",url:"/blog"},{name:"¿Cuánto te indemniza realmente tu seguro hipoteca?",url:"/blog/cuanto-te-indemniza-realmente-tu-seguro-hipoteca-nomina-en-invalidez-solo-50"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* Hero */}
        <section className="relative bg-slate-900 py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold mb-6">
              <AlertTriangle className="w-4 h-4" />
              Análisis de Cobertura Real · Madrid 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              ¿Cuánto te indemniza realmente tu seguro hipoteca o nómina en invalidez? Solo el 50%...
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              La mayoría de familias en Madrid creen que están cubiertas al 100%. La realidad: hipoteca paga 50% en invalidez, nómina añade solo 40% extra. Descubre el déficit real y cómo cerrar el gap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-16 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2")}>
                <WhatsAppIcon className="w-6 h-6" />
                Calcula tu gap en 2 minutos
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                ¿Sabes cuánto recibiría tu familia si mañana sufrieras una <strong>invalidez permanente absoluta</strong>? La mayoría de madrileños cree que su seguro cubre el 100% de la hipoteca y los gastos familiares. La realidad es muy diferente: <span className="bg-amber-100 text-amber-900 px-2 py-1 rounded font-bold">la hipoteca solo cubre el 50% del capital en invalidez</span>, y la nómina aporta apenas un 40% extra sobre la base de la Seguridad Social.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                <p className="text-red-900 font-bold text-lg mb-2">⚠️ El déficit real de una familia media en Madrid:</p>
                <p className="text-red-800">Viudedad 1.200€ - Hipoteca 900€ = 300€/mes. Con guardería (400€), alimentación y transporte, el déficit supera los <strong>1.000€ mensuales</strong>. ¿Podría tu familia sobrevivir con eso?</p>
              </div>

              <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl mb-8">
                <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián - Asesores de seguros en Madrid" width={120} height={120} className="rounded-full object-cover" />
                <div>
                  <p className="font-bold text-slate-900">Rosa Valentín y Sebastián</p>
                  <p className="text-slate-600">Valentín Protección Integral · Boadilla del Monte</p>
                  <p className="text-sm text-slate-500">+10 años · +1.200 familias protegidas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 1: Realidad Hipoteca */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              Seguro hipoteca Madrid: Cubre 100% muerte, pero ¿invalidez?
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              El seguro de vida vinculado a tu hipoteca tiene una característica que pocos conocen: <strong>la cobertura de fallecimiento es del 100%</strong> del capital pendiente, pero <strong>la cobertura de invalidez permanente absoluta (IPA) suele ser solo del 50%</strong>, salvo que contrates explícitamente la cobertura del 100% (opcional y con prima más elevada).
            </p>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <table className="w-full text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold">Situación</th>
                    <th className="px-6 py-4 font-bold">Cobertura típica</th>
                    <th className="px-6 py-4 font-bold">Ejemplo (200.000€)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-medium">Fallecimiento</td>
                    <td className="px-6 py-4 text-green-700 font-bold">100%</td>
                    <td className="px-6 py-4">Paga 200.000€</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="px-6 py-4 font-medium">IPA (Invalidez Permanente Absoluta)</td>
                    <td className="px-6 py-4 text-amber-700 font-bold">50-100%*</td>
                    <td className="px-6 py-4">Paga 100.000€ (50%)</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-6 py-4 font-medium">IPT (Invalidez Permanente Total)</td>
                    <td className="px-6 py-4 text-red-700 font-bold">0-50%</td>
                    <td className="px-6 py-4">No cubre o parcial</td>
                  </tr>
                </tbody>
              </table>
              <p className="px-6 py-3 bg-slate-100 text-slate-500 text-sm">*El 100% en IPA es opcional y requiere contratación explícita con recargo de prima.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Caso real: La familia que pagó el exceso
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Juan, ingeniero de 42 años en Madrid, sufrió una invalidez permanente absoluta tras un accidente de tráfico. Su seguro de hipoteca pagó 100.000€ de los 200.000€ pendientes. Su familia siguió pagando 600€/mes de hipoteca durante 12 años, mientras los ingresos se redujeron a la pensión de invalidez. El déficit acumulado: <strong>86.400€</strong> que no tenían presupuestados.
              </p>
            </div>
          </div>
        </section>

        {/* Sección 2: Nómina/Trabajo */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              ¿Tu convenio colectivo salva todo? Solo 30-50% extra INSS
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Muchos trabajadores creen que su convenio colectivo les protege suficientemente. La realidad: la <strong>Seguridad Social paga el 55% de la base reguladora</strong> en incapacidad permanente total (IPT), y el convenio añade una indemnización extra que en Madrid suele oscilar entre <strong>30.000€ y 50.000€</strong> — insuficiente para cubrir años de déficit de ingresos.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">¿Qué paga realmente?</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>INSS (IPT): 55% base reguladora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Convenio: +30.000-50.000€ típico Madrid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Cobertura real: ~40% de tu nómina neta</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="font-bold text-red-900 mb-4">El gap que deja expuesta tu familia</h3>
                <p className="text-red-800 text-sm mb-3">Ejemplo: Nómina neta 2.500€/mes</p>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• INSS (55%): ~1.100€/mes</li>
                  <li>• Convenio (40k€/20años): ~167€/mes</li>
                  <li className="font-bold border-t pt-2">• Total: ~1.267€ (50% de tu nómina)</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-center">
              <p className="text-2xl font-black text-amber-900 mb-2">Hueco del 50%</p>
              <p className="text-amber-800">Tu familia recibe solo la mitad de tus ingresos. ¿Es suficiente para mantener el nivel de vida, la hipoteca y la educación de los niños?</p>
            </div>
          </div>
        </section>

        {/* Sección 3: Impacto Familia */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8">
              Qué pasa si no cubres el 100%: Déficit real Madrid
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              El impacto económico del fallecimiento o invalidez no se limita a la pérdida del salario. Las familias madrileñas enfrentan un <strong>déficit estructural</strong> que combina reducción drástica de ingresos con mantenimiento de gastos fijos.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Cálculo del déficit mensual real</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-slate-600">Pensión viudedad (52-70% SS)</span>
                  <span className="font-bold text-slate-900">1.200€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-slate-600">Hipoteca mensual</span>
                  <span className="font-bold text-red-600">- 900€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-slate-600">Guardería/colegio (1 niño)</span>
                  <span className="font-bold text-red-600">- 400€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-slate-600">Alimentación, luz, transporte</span>
                  <span className="font-bold text-red-600">- 900€</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-red-50 px-4 rounded-lg">
                  <span className="font-bold text-red-900">DÉFICIT MENSUAL</span>
                  <span className="font-black text-red-600 text-xl">- 1.000€</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <p className="text-3xl font-black text-slate-900 mb-1">52%</p>
                <p className="text-slate-600 text-sm">De la base reguladora recibe la viudedad (1.200€/mes típico)</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <p className="text-3xl font-black text-slate-900 mb-1">46€</p>
                <p className="text-slate-600 text-sm">Auxilio por defunción de la SS (pago único, no mensual)</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold text-slate-900 mb-4">¿Tu familia sobreviviría con 300€ al mes después de pagar la hipoteca?</p>
              <p className="text-slate-600">Esa es la realidad matemática que enfrentan miles de familias en Madrid cada año.</p>
            </div>
          </div>
        </section>

        {/* Sección 4: Solución Sencilla */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-black mb-8 text-center">
              Protección integral que cierra gaps: Directo, 18k€ mín, año 1 completo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Capital mínimo 18.000€</h3>
                <p className="text-slate-300 text-sm">Doble que la competencia (~9.000€). Cobertura real para gastos inmediatos: funeral, trámites, supervivencia primeros meses.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Suicidio cubierto año 1</h3>
                <p className="text-slate-300 text-sm">A diferencia de la mayoría de pólizas del mercado, incluimos cobertura desde el primer día incluso en caso de suicidio (ley LCS).</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Simulación gap gratis</h3>
                <p className="text-slate-300 text-sm">Calculamos exactamente cuánto te falta cubrir: hipoteca + gastos familiares - coberturas actuales = capital necesario.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Pago directo al notario</h3>
                <p className="text-slate-300 text-sm">Sin gestores intermedios. El capital se liquida directamente al beneficiario, no al banco. Más rápido, más transparente.</p>
              </div>
            </div>

            <div className="bg-amber-500/20 rounded-2xl p-6 mb-8 border border-amber-500/30">
              <p className="text-amber-300 font-bold mb-2">🔥 Condiciones especiales bundle vida + salud</p>
              <p className="text-slate-300 text-sm">Contrata seguro de vida junto con salud y accedes a condiciones especiales en tu primera prima. Gestión 100% digital o presencial en Boadilla del Monte.</p>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold mb-6">Proceso en 3 pasos:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">1️⃣</span>
                  <span>WhatsApp</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 hidden sm:block" />
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">2️⃣</span>
                  <span>Gap calculado (2 min)</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 hidden sm:block" />
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl">
                  <span className="text-2xl">3️⃣</span>
                  <span>Presupuesto PDF</span>
                </div>
              </div>
              <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-16 px-10 text-xl font-black bg-white text-slate-900 hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl")}>
                <WhatsAppIcon className="w-7 h-7" />
                Calcula tu gap real ahora
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
                { q: "¿Cuánto paga el seguro de hipoteca en caso de invalidez permanente?", a: "El seguro de hipoteca vinculado al préstamo cubre el 100% del capital en caso de fallecimiento, pero en invalidez permanente absoluta (IPA) la cobertura suele ser del 50% del capital pendiente, salvo que contrates explícitamente la cobertura del 100% (opcional y con recargo). Esto significa que si debes 200.000€, el seguro podría pagar solo 100.000€, dejando a tu familia con una deuda mensual significativa." },
                { q: "¿El convenio colectivo de trabajo cubre todo en caso de invalidez?", a: "No. El convenio colectivo añade una indemnización extra sobre la base de la prestación por incapacidad permanente de la Seguridad Social (que es el 55% de la base reguladora). La indemnización convenio típica en Madrid oscila entre 30.000€ y 50.000€, insuficiente para cubrir el déficit de ingresos a largo plazo de una familia." },
                { q: "¿Cuánto recibe una viuda en Madrid tras el fallecimiento del cónyuge?", a: "La pensión de viudedad de la Seguridad Social oscila entre el 52% y el 70% de la base reguladora del fallecido. En Madrid, esto suele traducirse en aproximadamente 1.200€ mensuales. Si la hipoteca son 900€/mes, quedan solo 300€ para cubrir alimentación, guardería (400€), transporte y demás gastos familiares, generando un déficit de al menos 1.000€ mensuales." },
                { q: "¿Qué diferencia hay entre el seguro de vida del banco y una póliza independiente?", a: "El seguro de vida del banco suele tener primas más elevadas (entre 30% y 60% más caras) y coberturas estandarizadas que no se adaptan a la situación familiar real. Una póliza independiente permite personalizar el capital asegurado, añadir coberturas como invalidez permanente total y parcial, y el capital se paga directamente al beneficiario (notario), no al banco. Además, el suicidio está cubierto desde el primer año en pólizas independientes." },
                { q: "¿Cuánto cuesta un seguro de vida que cubra el 100% del gap?", a: "El precio depende de la edad, el capital asegurado y las coberturas elegidas. Para un perfil de 40 años en Madrid, una protección integral que cubra el capital de la hipoteca más un capital adicional para gastos familiares (mínimo 18.000€, frente a los ~9.000€ de la competencia) puede costar menos de lo que imaginas. Rosa y Sebastián calculan tu presupuesto personalizado en 30 minutos, sin compromiso." }
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
              No esperes al imprevisto. Calcula tu gap real hoy.
            </h2>
            <p className="text-xl text-white/80 mb-8">
              En el 95% de los casos, mejoramos los presupuestos bancarios con coberturas superiores y primas más ajustadas. <strong>Orientación de seguros con registro oficial.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:603448765" className="inline-flex items-center justify-center gap-3 text-2xl font-bold text-white hover:text-amber-300 transition-colors">
                <Phone className="w-8 h-8" />
                603 44 87 65
              </a>
            </div>
            <a href={wConsulta} className={cn(buttonVariants({size:"lg"}),"h-18 px-12 text-xl font-black bg-white text-[#0F5E9C] hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl shadow-2xl")}>
              <WhatsAppIcon className="w-7 h-7" />
              WhatsApp: Calcula tu gap en 2 minutos
            </a>
            <p className="mt-6 text-white/60 text-sm">
              +1.200 familias de Madrid y Boadilla del Monte ya protegidas · DGSFP C012479234434D
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
              <a href="/zonas/boadilla-del-monte" className="px-4 py-2 bg-white rounded-full text-slate-600 hover:text-[#0F5E9C] border border-slate-200 text-sm font-medium transition-colors">
                Asesores Boadilla del Monte
              </a>
              <a href="/seguros/accidentes" className="px-4 py-2 bg-white rounded-full text-slate-600 hover:text-[#0F5E9C] border border-slate-200 text-sm font-medium transition-colors">
                Seguro Accidentes Autónomos
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
