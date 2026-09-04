"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { WhatsAppIcon as WhatsAppLogo } from "@/components/ui/whatsapp-icon";

const DotGrid = dynamic(() => import("@/components/ui/dot-grid"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0" />,
});

const Globe = dynamic(() => import("@/components/magicui/globe"), {
  ssr: false,
  loading: () => null,
});

import {
  Shield,
  Heart,
  Car,
  Home,
  Clock,
  FileText,
  UserCheck,
  RefreshCw,
  ChevronDown,
  ArrowRight,
  Phone,
  User,
  Users,
  Gift,
  Globe as GlobeIcon,
  Stethoscope,
  BadgeCheck,
  BadgePercent,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { WhatsAppLink } from '@/components/whatsapp-link';

const getFadeInUp = (prefersReducedMotion: boolean) => ({
  hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
  visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.5 } },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function AccidentesDecesosLanding() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    personas: "Solo yo",
  });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const fadeInUpVariants = getFadeInUp(prefersReducedMotion);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y quiero información sobre el seguro de accidentes y decesos.\n\n📞 Teléfono: ${form.telefono}\n🏠 Para: ${form.personas}\n\nGracias.`
    );
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'Contactar', {
        event_category: 'engagement',
        event_label: 'whatsapp_click',
      });
    }
    window.open(`https://wa.me/34603448765?text=${msg}`, "_blank");
    setSent(true);
  };

  const faqs = [
    {
      q: "¿Qué diferencia hay entre accidentes y decesos?",
      a: "Accidentes cubre si te pasa algo a ti (lesión, incapacidad, fallecimiento por accidente). Decesos cubre los gastos del funeral y sepelio cuando alguien fallece, por cualquier causa. Juntos son la protección más completa y económica.",
    },
    {
      q: "¿Desde qué edad se puede contratar?",
      a: "Desde recién nacidos hasta mayores. Para niños y mayores tenemos condiciones especiales. Cuéntanos el caso y lo estudiamos.",
    },
    {
      q: "¿Hay que pasar reconocimiento médico?",
      a: "No. En la mayoría de casos no se necesita. Te lo decimos antes de empezar.",
    },
    {
      q: "¿Puedo cancelar cuando quiera?",
      a: "Sí. Sin permanencia. Sin penalizaciones. Te explicamos todas las condiciones antes de firmar.",
    },
    {
      q: "¿Cubre accidentes de tráfico?",
      a: "Sí. Los accidentes de tráfico están incluidos en la cobertura general de accidentes.",
    },
    {
      q: "¿Y si ya tengo seguro de vida en el banco?",
      a: "Es diferente. El seguro de vida del banco suele estar vinculado a una hipoteca y no siempre cubre lo mismo. Con una llamada te analizamos lo que tienes y lo que necesitas, sin compromiso.",
    },
  ];

  return (
    <>
      {/* 1. BARRA STICKY */}
      <div className="sticky top-0 z-50 bg-amber-800 text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">

          {/* Texto CORTO en móvil, texto LARGO en desktop */}
          <p className="text-sm font-medium leading-snug flex-1 min-w-0">
            <span className="sm:hidden">
              🛡️ Desde 3€/mes. Accidentes y decesos.
            </span>
            <span className="hidden sm:inline">
              🛡️ Protección familiar desde 3€ al mes (precio orientativo). Consulta condiciones, límites y permanencia según la póliza.
            </span>
          </p>

          {/* CTA: siempre visible, siempre a la derecha */}
          <a
            href="#contacto"
            className="flex-none text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Ver mi precio →
          </a>

        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20 pt-32 bg-background">
        <DotGrid 
          className="z-0"
          dotSize={4}
          gap={isTouchDevice ? 32 : 28}
          baseColor="#fde68a"
          activeColor="#d97706"
          proximity={isTouchDevice ? 0 : 80}
          shockStrength={isTouchDevice ? 0 : 2}
        />
        <div className="absolute inset-x-0 top-0 h-64 lg:hidden pointer-events-none z-[3] bg-gradient-to-b from-amber-900/15 via-amber-800/8 to-transparent" />
        {/* Globe — fondo mitad izquierda, solo desktop */}
        <div className="absolute inset-y-0 left-0 w-[55%] hidden lg:block pointer-events-none z-[5]">
          <Globe className="inset-0" />
          <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-background to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Columna izquierda - Texto */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <AnimatedShinyText className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">
                  🛡️ El seguro que toda familia necesita — desde 3€/mes
                </AnimatedShinyText>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Protege a tu familia hoy.{" "}
                Desde <span className="underline decoration-amber-500 decoration-4 underline-offset-4">3€ al mes</span>.{" "}
                Sin excusas.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Si algo te pasa, tu familia no debería preocuparse por el dinero.
                Rosa y Sebastián te montan la protección completa en 
                una sola llamada, sin papeleos y sin letra pequeña.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {[
                  "Desde 3€/mes (menos que un café al día)",
                  "Consulta las condiciones de permanencia y cancelación de cada póliza.",
                  "Gestión completa sin complicaciones",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-none w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppLink
                  href={`https://wa.me/34603448765?text=${encodeURIComponent('Hola Rosa y Sebastián, vi la página de accidentes y decesos y me gustaría saber el precio para mi familia. Sin compromiso.')}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-amber-600 hover:bg-amber-700 text-white gap-2"
                  )}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp Directo
                </WhatsAppLink>
                <a
                  href="tel:603448765"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 px-8 text-lg font-bold border-2"
                  )}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  603 448 765
                </a>
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              id="contacto"
              className="relative"
            >
              <div className="bg-card border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg sm:shadow-2xl">
                <h3 className="text-2xl font-bold mb-2">¿Cuántos sois en casa?</h3>
                <p className="text-muted-foreground mb-6">Te preparamos tu precio en nuestro horario de atención.</p>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">¡Mensaje enviado!</h4>
                    <p className="text-muted-foreground">Una persona del equipo te llamará en nuestro horario de atención.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      required
                      className="w-full h-12 px-4 rounded-xl border bg-background"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      required
                      className="w-full h-12 px-4 rounded-xl border bg-background"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    />
                    <select
                      className="w-full h-12 px-4 rounded-xl border bg-background"
                      value={form.personas}
                      onChange={(e) => setForm({ ...form, personas: e.target.value })}
                    >
                      <option>Solo yo</option>
                      <option>Yo y mi pareja</option>
                      <option>Familia con hijos</option>
                      <option>Mis padres o mayores a cargo</option>
                    </select>
                    <button
                      type="submit"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full h-14 text-lg font-bold bg-amber-600 hover:bg-amber-700 text-white gap-2"
                      )}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Ver mi precio ahora
                    </button>
                    <p className="text-xs text-center text-muted-foreground">
                      Al enviar, serás redirigido a WhatsApp. Sin spam. Sin compromiso.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. EL MOMENTO QUE NADIE QUIERE PENSAR */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
              La realidad que cambia todo
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              ¿Qué pasaría si mañana{" "}
              <span className="text-amber-400">no puedes trabajar</span>?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              No es fácil pensarlo. Pero es más fácil pensarlo 
              hoy que gestionarlo sin estar preparado. Por eso existe este seguro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🏚️",
                title: "Un accidente en casa",
                sin: "Baja laboral, gastos médicos, y tu familia asumiendo todo sin red de seguridad.",
                con: "Indemnización inmediata. Rosa gestiona el parte ese mismo día.",
              },
              {
                emoji: "💔",
                title: "Fallecimiento inesperado",
                sin: "Funeral de 4.000-6.000€ que la familia adelanta en el peor momento.",
                con: "Gastos cubiertos al 100%. Sin que tu familia pida prestado en el momento más duro.",
              },
              {
                emoji: "🚗",
                title: "Accidente de tráfico",
                sin: "Proceso largo, peritajes, y tú solo navegando la burocracia.",
                con: "Sebastián te acompaña en todo el proceso desde el primer momento.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <p className="text-sm text-red-300 font-medium mb-1">Sin cobertura:</p>
                    <p className="text-sm text-white/70">{item.sin}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="text-sm text-green-300 font-medium mb-1">Con nuestra póliza:</p>
                    <p className="text-sm text-white/90">{item.con}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ¿QUÉ CUBRE? */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        className="py-14 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border">
            <Image
              src="/images/rosa_y_sebastian_mesa.png"
              alt="Rosa y Sebastián Valentín asesorando con honestidad"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              quality={75}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 text-center lg:text-left">Cobertura real. Precio justo.</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center lg:text-left">Sin letra pequeña. Te explicamos todo antes de firmar.</p>

            <div className="overflow-hidden rounded-2xl border bg-card/50 overflow-x-auto">
              <table className="w-full text-left">
                <tbody className="divide-y">
                  {[
                    { s: "Accidente en cualquier lugar", d: "✅ Cubierto" },
                    { s: "Fallecimiento por accidente", d: "✅ Cubierto" },
                    { s: "Incapacidad temporal", d: "✅ Cubierto" },
                    { s: "Gastos de sepelio y entierro", d: "✅ Cubierto" },
                    { s: "Traslado de restos a cualquier país", d: "✅ Cubierto" },
                    { s: "Gestión y papeleo del funeral", d: "✅ Cubierto" },
                    { s: "Asistencia 24h en viaje", d: "✅ Cubierto" },
                    { s: "Accidentes de tráfico", d: "✅ Cubierto" },
                  ].map((fila, i) => (
                    <tr key={i} className="hover:bg-accent/30 transition-colors">
                      <td className="px-4 py-3 font-medium">{fila.s}</td>
                      <td className="px-4 py-3 text-amber-600 font-semibold">{fila.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Nota especial combinado */}
            <div className="mt-6 p-4 rounded-xl border border-amber-200 bg-amber-50">
              <div className="flex items-start gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <p className="font-bold text-amber-800 mb-1">¿Ya tienes salud con nosotros?</p>
                  <p className="text-sm text-amber-700 mb-2">
                    Al combinar accidentes + salud individual, las condiciones mejoran y el precio baja. 
                    Un solo gestor para toda tu protección.
                  </p>
                  <WhatsAppLink
                    href={`https://wa.me/34603448765?text=${encodeURIComponent("Hola, tengo salud con vosotros y quiero consultar sobre añadir accidentes y decesos.")}`}
                    className="text-sm font-bold text-amber-800 underline hover:text-amber-900"
                  >
                    <WhatsAppIcon className="mr-1.5 inline h-4 w-4 align-[-2px]" />
                    Preguntar por combinado →
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. POR QUÉ ELEGIRNOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-slate-800 text-white overflow-hidden"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUpVariants} className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/rosa_y_sebastian_conversando.png"
                alt="Rosa y Sebastián Valentín, tus agentees de confianza"
                fill
                className="object-cover object-top"
                loading="lazy"
              />
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8">Un accidente no avisa. Nosotros, sí estamos.</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-4 leading-relaxed italic font-light">
                &ldquo;Rosa y Sebastián llevan más de 10 años siendo el primer teléfono al que llaman las familias madrileñas cuando algo pasa. Cada póliza es una conversación honesta, no una venta.&rdquo;
              </p>
              <a
                href="https://www.colegioagentees.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-amber-400 mb-6 hover:text-amber-300 transition-colors underline underline-offset-2"
              >
                <BadgeCheck className="h-4 w-4" />
                Asesoramiento profesional — Verificación oficial
              </a>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { num: "30min", desc: "Respuesta garantizada" },
                  { num: "0€", desc: "Sin letra pequeña" },
                  { num: "1", desc: "Gestor personal de por vida" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/10">
                    <p className="text-2xl font-bold text-amber-400">{stat.num}</p>
                    <p className="text-sm text-white/70">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. GARANTÍAS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Nuestras garantías</h2>
            <p className="text-xl text-white/80">Promesas que cumplimos</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="h-8 w-8" />, title: "Respuesta en horario", desc: "O te llamamos nosotros" },
              { icon: <FileText className="h-8 w-8" />, title: "Sin letra pequeña", desc: "Te explicamos todo antes de firmar" },
              { icon: <UserCheck className="h-8 w-8" />, title: "Gestor personal de por vida", desc: "Rosa o Sebastián, siempre" },
              { icon: <RefreshCw className="h-8 w-8" />, title: "Revisión anual gratuita", desc: "Revisamos tu cobertura cada año" },
            ].map((garantia, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className="text-center p-6 rounded-2xl bg-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  {garantia.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{garantia.title}</h3>
                <p className="text-white/70 text-sm">{garantia.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUpVariants}
            className="mt-12 mx-auto max-w-2xl rounded-2xl border border-white/20 
                       bg-white/5 px-8 py-6 text-center"
          >
            <p className="text-lg font-bold text-white mb-2">
              ¿Por qué confiar en nosotros?
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Si después de contratar tienes cualquier problema con tu seguro, somos nosotros quienes llamamos a la compañía por ti. No te dejamos solo con un número de teléfono. Respondemos en menos de 2 horas en horario laboral.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 7. PRECIO Y SORPRESA */}
      <section className="py-14 sm:py-20 lg:py-24 bg-amber-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">¿Cuánto cuesta proteger a tu familia?</h2>
            <p className="text-lg text-muted-foreground">Menos de lo que crees. De verdad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 - Solo tú */}
            <div className="rounded-2xl border border-amber-200 bg-white p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold mb-2">Solo tú</h3>
              <p className="text-3xl font-bold text-amber-600 mb-2">Desde ~3€/mes</p>
              <p className="text-sm text-muted-foreground">Accidentes completo + decesos básico</p>
            </div>

            {/* Card 2 - Familia (destacada) */}
            <div className="rounded-2xl bg-amber-600 text-white p-6 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                MÁS POPULAR
              </span>
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold mb-2">Familia completa</h3>
              <p className="text-3xl font-bold mb-2">Desde ~8€/mes</p>
              <p className="text-sm text-white/80">Toda la familia protegida. Un solo pago.</p>
            </div>

            {/* Card 3 - Padres */}
            <div className="rounded-2xl border border-amber-200 bg-white p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">👴👵</div>
              <h3 className="text-xl font-bold mb-2">Padres o mayores</h3>
              <p className="text-3xl font-bold text-amber-600 mb-2">Desde ~5€/mes</p>
              <p className="text-sm text-muted-foreground">Tranquilidad para ti. Dignidad para ellos.</p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mb-12">
            * Precios orientativos. Tu precio orientativo, gratis y sin compromiso.
          </p>

          {/* Sorpresa */}
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-100 p-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎁</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-amber-900 mb-2">Regalo Sorpresa para nuevos clientes</h3>
                <p className="text-amber-800 mb-4">
                  Al contratar tu primera póliza con nosotros, Rosa o Sebastián te regalan una revisión de todos tus seguros actuales completamente gratis. Muchos clientes descubren que pagan de más. O que tienen huecos que no sabían.
                </p>
                <WhatsAppLink
                  href={`https://wa.me/34603448765?text=${encodeURIComponent("Hola, me gustaría contratar accidentes/decesos y aprovechar la revisión gratuita de seguros.")}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-800 underline hover:text-amber-900"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Quiero mi revisión gratuita →
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROCESO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-amber-50/30"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Así de fácil. En serio.</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center max-w-6xl mx-auto">
            {/* Columna izquierda: los 3 pasos */}
            <div>
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-amber-200 hidden md:block" />

                {[
                  {
                    num: "1",
                    title: "Escríbenos o rellena el formulario",
                    desc: "Nos cuentas para quién es y te preparamos el precio.",
                  },
                  {
                    num: "2",
                    title: "Te explicamos todo sin presión",
                    desc: "Sin mencionar marcas. Solo lo que te conviene a ti.",
                  },
                  {
                    num: "3",
                    title: "Firmas solo cuando estás convencido",
                    desc: "Condiciones claras. Consulta permanencia, límites y exclusiones según la póliza.",
                  },
                ].map((paso, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUpVariants}
                    className="flex gap-8 relative"
                  >
                    <div className="flex-none w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
                      {paso.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{paso.title}</h3>
                      <p className="text-muted-foreground text-lg">{paso.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Columna derecha: imagen — oculta en móvil */}
            <div className="hidden lg:block relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
              <Image
                src="/images/sebastian_con_cliente.png"
                alt="Sebastián Valentín asesorando a un cliente"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={75}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. CROSS-SELL */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-100">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">La protección completa es más barata de lo que crees</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestros clientes que combinan accidentes + salud individual pagan menos por separado. 
              Un solo gestor, una sola llamada para todo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: <Shield className="h-6 w-6" />, label: "Accidentes" },
              { icon: <Heart className="h-6 w-6" />, label: "Salud Individual" },
              { icon: <GlobeIcon className="h-6 w-6" />, label: "Extranjero" },
              { icon: <UserCheck className="h-6 w-6" />, label: "Gestor único" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border">
                <div className="text-amber-600">{item.icon}</div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/seguros/salud-individual"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-6 bg-amber-600 hover:bg-amber-700 text-white"
              )}
            >
              Ver seguro de salud →
            </a>
          </div>
        </div>
      </section>

      {/* 10. SECCIÓN EMOCIONAL - Lo que más importa */}
      <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-amber-300 text-sm font-semibold mb-6">
              Compromiso en los momentos difíciles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Lo que más importa cuando menos te lo esperas
            </h2>
          </div>

          <div className="prose prose-lg prose-invert mx-auto text-white/80">
            <p className="text-xl leading-relaxed mb-8">
              Gestionar un fallecimiento es uno de los momentos más duros que existe. Los trámites, los tiempos, las decisiones. Con este seguro, tu familia no tiene que ocuparse de nada.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Nosotros conocemos el proceso y acompañamos en cada paso, con la discreción y el respeto que merece ese momento. Desde el primer aviso hasta la gestión final, estamos ahí.
              </p>

              <div className="flex items-start gap-4 bg-amber-900/30 border border-amber-500/30 rounded-xl p-6">
                <div className="flex-none w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Nuestro compromiso:</p>
                  <p className="text-amber-200 text-lg">
                    Nos comprometemos a ponernos en contacto con tu familia en menos de 2 horas desde que nos notifiquen cualquier siniestro.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-white/70 text-center">
              Porque en esos momentos, lo último que una familia necesita es preocuparse por papeleos, gestiones o gastos inesperados.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto px-4">
          {/* H2 visible en móvil, sticky en desktop */}
          <div className="lg:hidden text-center mb-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Preguntas frecuentes</h2>
          </div>

          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
            {/* Columna izquierda: foto + H2 (sticky en desktop) */}
            <div className="hidden lg:block sticky top-24">
              <h2 className="text-4xl font-bold mb-6">Preguntas frecuentes</h2>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border">
                <Image
                  src="/images/rosa_y_sebastian_mesa.png"
                  alt="Rosa y Sebastián resuelven tus dudas"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className="rounded-2xl border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-accent/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 transition-transform",
                      openFaq === i && "rotate-180"
                    )}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === i ? "auto" : 0, 
                    opacity: openFaq === i ? 1 : 0 
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 10.5. GARANTÍA DE PRECIO */}
      <section className="py-10 sm:py-14 bg-[var(--bg-soft)] border-y border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-white border border-[var(--border)] shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
              <BadgePercent className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-lg sm:text-xl font-bold text-[var(--blue-deep)]">
                El mismo seguro. Mejor precio. Garantizado.
              </p>
              <p className="text-sm sm:text-base text-[var(--muted)] mt-1">
                Tráenos el precio de tu banco o gestoría y lo revisamos contigo entre las modalidades que podemos distribuir, para que valores la opción que mejor se ajusta a tu caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-700 to-orange-800 text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
            Desde 3€/mes.* La tranquilidad no tiene precio.
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-2">
            Te ayudamos a prepararlo sin complicaciones.
          </p>
          <p className="text-sm text-white/60 mb-8">
            *Precio orientativo. Requiere consulta para determinar cobertura según perfil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink
              href={`https://wa.me/34603448765?text=${encodeURIComponent("Hola, me gustaría información sobre el seguro de accidentes y decesos.")}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 px-8 text-lg font-bold bg-white text-amber-700 hover:bg-amber-50 gap-2"
              )}
            >
              <WhatsAppLogo className="h-5 w-5" />
              WhatsApp Directo
            </WhatsAppLink>
            <a
              href="tel:603448765"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white/10"
              )}
            >
              <Phone className="h-5 w-5 mr-2" />
              603 448 765
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
