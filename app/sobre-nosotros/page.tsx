import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Briefcase, ClipboardList, HeartHandshake, Instagram, MapPin, MessageCircle, Phone, Quote, ShieldCheck, Star, Users } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site } from '@/lib/products';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import HowItWorksSection from '@/components/HowItWorksSection';
import RevealLight from '@/components/ui/reveal-light';
import { AdeslasAgentLink } from '@/components/adeslas-agent-link';

export const metadata: Metadata = {
  title: "Rosa y Sebastián · Asesores de Seguros en Madrid",
  description: "Rosa Isabel Valentín González y Sebastián Sifontes Valentín son cofundadores de Valentín Protección Integral en Madrid, con relaciones individuales de distribución exclusiva con SegurCaixa Adeslas y ASISA.",
  keywords: "rosa valentin agente seguros, sebastian valentin equipo seguros, asesoria seguros boadilla del monte",
  openGraph: {
    title: "Rosa y Sebastián · Asesores de Seguros en Madrid",
    description: "Rosa y Sebastián son cofundadores de Valentín Protección Integral y mantienen relaciones individuales de distribución exclusiva con SegurCaixa Adeslas y ASISA.",
    url: "https://valentinproteccionintegral.com/sobre-nosotros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín, agentes de seguros en Boadilla del Monte, Madrid" }],
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/sobre-nosotros",
    languages: { es: "https://valentinproteccionintegral.com/sobre-nosotros", en: "https://valentinproteccionintegral.com/en/about-us", 'x-default': "https://valentinproteccionintegral.com/sobre-nosotros" },
  },
};

export const dynamic = 'force-static';

export default function SobreNosotrosPage() {

  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Sobre nosotros', item: `${site.domain}/sobre-nosotros`, position: 2 },
        ]}
      />
      <Header />
      <main>
        {/* Hero split section */}
         <RevealLight>
          <section id="sobre-nosotros-hero" aria-labelledby="sobre-nosotros-title" className="section-pad pt-6 md:pt-10">
            <div className="container-shell">
              <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Sobre nosotros' }]} />
              <div className="mt-6 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
                {/* Photo section */}
                <div className="space-y-6">
                  <div className="soft-card overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
                    <div className="relative aspect-square w-full">
                      <Image src="/images/rosa_y_sebastian_de_pie.png" alt="Rosa y Sebastián Valentín, asesores de seguros en Boadilla del Monte, Madrid" fill className="object-cover object-[center_20%]" priority />
                    </div>
                  </div>
  
                  {/* Name & Title - Now separate from image card */}
                  <div className="soft-card bg-white p-6 text-center shadow-md">
                    <p className="font-heading text-3xl font-bold text-[var(--blue-deep)]">Rosa &amp; Sebastián Valentín</p>
                    <p className="mt-1 text-base font-semibold text-[var(--blue)]">Tu equipo de asesores en Boadilla del Monte</p>
                    <div className="mt-3 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                      <MapPin className="h-4 w-4" />
                      Boadilla del Monte, Madrid
                    </div>
                  </div>
  
                  {/* Values grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: HeartHandshake, text: 'Enfoque personalizado' },
                      { icon: ShieldCheck, text: 'Sin presión comercial' },
                      { icon: ClipboardList, text: 'Asesoría real' },
                      { icon: MessageCircle, text: 'Escucha activa' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.text} className="flex flex-col items-center gap-2 rounded-[24px] bg-white px-4 py-5 text-center text-sm font-bold text-[var(--blue-deep)] shadow-sm border border-[var(--border)] transition-all hover:border-[var(--blue)]/20 hover:shadow-md">
                          <Icon className="h-7 w-7 text-[var(--blue)]" />
                          {item.text}
                        </div>
                      );
                    })}
                  </div>
                </div>

              {/* Content */}
              <div className="soft-card p-8 md:p-10 lg:p-12">
                <p className="kicker font-bold tracking-[0.3em]">Dos personas. Un mismo compromiso.</p>
                <h1 id="sobre-nosotros-title" className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-gradient md:text-5xl xl:text-6xl leading-[1.08]">
                  Rosa y Sebastián: el equipo que protege a familias en Madrid desde hace más de 10 años
                </h1>
                <p className="mt-6 text-lg leading-9 text-[var(--muted)]">
                  Valentín Protección Integral nace con una idea sencilla: ayudar a familias y particulares a entender mejor lo que están contratando. No se trata de empujar un producto, sino de decidir con criterio y acompañar cada decisión con más contexto.
                </p>

                {/* BLOQUE ROSA */}
                <p className="kicker font-bold text-[var(--blue)] mt-8">Rosa Valentín</p>
                <p className="text-sm text-[var(--muted)] mb-4">Cofundadora de VPI · Agente exclusiva de seguros de SegurCaixa Adeslas</p>
                <p className="text-base leading-8 text-[var(--muted)]">
                  Mi nombre es Rosa Valentín. Soy asesora certificada con <strong>más de 10 años de experiencia</strong> en seguros de salud, vida, mascotas, viaje, dental, accidentes, hospitalización y decesos. Trabajo desde <strong>Boadilla del Monte, Madrid</strong>, atendiendo a familias y particulares de toda España.
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  No trabajo con presión comercial. Cada conversación empieza con tus preguntas, no con mis productos. Y cada orientación busca darte más claridad, no más confusión.
                </p>

                {/* Stats */}
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    { icon: Award, stat: '+10 años', desc: 'Asesorando familias con cercanía' },
                    { icon: Users, stat: 'Cercanía', desc: 'Atención personal, sin presión comercial' },
                    { icon: Briefcase, stat: '8 ramos', desc: 'Salud, vida, mascotas, viaje y más' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.stat} className="rounded-[22px] bg-[var(--bg)] px-5 py-5 text-center border border-[var(--border)]">
                                                <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{item.stat}</p>
                        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Quote */}
                <div className="mt-8 rounded-[24px] border border-[var(--blue)]/15 bg-gradient-to-r from-[rgba(15,94,156,0.04)] to-transparent px-6 py-6">
                  <Quote className="h-6 w-6 text-[var(--blue)]/30 mb-2" />
                  <em className="text-base leading-8 text-[var(--muted)]">&ldquo;La prioridad es ayudarte a separar lo importante de lo accesorio, revisar qué cambia según modalidad y orientarte para que contrates con más tranquilidad y menos dudas.&rdquo;</em>
                </div>

                {/* Pilar 5 — Honestidad e independencia */}
                <div className="mt-6 rounded-[24px] border border-[var(--blue-deep)]/20 bg-[var(--blue-deep)]/4 px-6 py-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--blue-deep)] mb-2">Actividad y registro profesional</p>
                  <p className="text-base leading-8 text-[var(--muted)]">
                    Valentín Protección Integral es una marca comercial y proyecto de mediación de
                    seguros, no una compañía aseguradora ni una correduría independiente. Rosa y
                    Sebastián son cofundadores al mismo nivel y mantienen sus relaciones
                    individuales de distribución separadas de la marca. La responsable legal de la
                    actividad publicada es Rosa Isabel Valentín González, cuya inscripción puede
                    consultarse en el registro público de la DGSFP. Orientamos entre los productos
                    que podemos distribuir.
                  </p>
                  <div className="mt-4">
                    <AdeslasAgentLink
                      location="about_rosa_profile"
                      variant="mini-preview"
                      title="Consulta el canal de Rosa en el buscador oficial de agentes"
                      description="La vista previa te muestra qué encontrarás antes de abrir la página externa de SegurCaixa Adeslas para Boadilla del Monte."
                      linkLabel="Ver canal oficial"
                    />
                  </div>
                </div>
                {/* BLOQUE SEBASTIÁN */}
                <div className="mt-10 pt-8 border-t border-[var(--border)]">
                  <div>
                      <p className="kicker font-bold text-[var(--blue)]">Sebastián Valentín</p>
                      <p className="text-sm text-[var(--muted)] mb-4">Cofundador de VPI · Agente exclusivo de seguros de ASISA</p>
                      <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)] mb-4">
                        El rigor técnico al servicio de tu tranquilidad
                      </h3>
                      <p className="text-base leading-8 text-[var(--muted)]">
                        Sebastián aporta al equipo una visión más técnica y analítica del mundo asegurador.
                        Especializado en seguros de salud y accidentes, su trabajo es asegurarse de
                        que cada propuesta que llega al cliente es la más adecuada — no la más cómoda.
                      </p>
                      <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                        Cree que la confianza se construye siendo directo: explicando exactamente qué cubre
                        una póliza, qué no cubre y por qué. Sin atajos. Sin letra pequeña escondida.
                      </p>
                      <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                        <strong>Es cofundador de Valentín Protección Integral.</strong>
                      </p>

                      {/* Mini-stats Sebastián */}
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {[
                          { icon: ShieldCheck, text: 'Especialista en Salud' },
                          { icon: ClipboardList, text: 'Análisis técnico detallado' },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.text}
                                 className="flex items-center gap-3 rounded-[18px] bg-[var(--bg)]
                                            px-4 py-3 text-sm font-semibold text-[var(--blue-deep)]
                                            border border-[var(--border)]">
                              <Icon className="h-5 w-5 text-[var(--blue)] flex-none" />
                              {item.text}
                            </div>
                          );
                        })}
                      </div>
                  </div>
                </div>

                {/* Garantía */}
                <div className="mt-6 mb-2 rounded-2xl border border-[var(--green)]/20 bg-[var(--green)]/5 px-5 py-4 flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 mt-0.5 text-[var(--green)] shrink-0" />
                  <p className="text-sm leading-6 text-[var(--blue-deep)] font-medium">
                    <strong>Nuestra garantía:</strong> Si después de contratar tienes cualquier problema con tu seguro, somos nosotros quienes llamamos a la compañía por ti. No te dejamos solo con un número de teléfono.
                  </p>
                </div>

                {/* CTAs */}
                <p className="mt-8 text-sm font-semibold text-[var(--muted)]">
                  ¿Quieres hablar directamente con nosotros?
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <a href={buildWhatsAppHref('Hola Rosa, quiero hablar contigo sobre un seguro.')} className="btn-whatsapp"><WhatsAppIcon className="h-4 w-4" /> Hablar por WhatsApp</a>
                  <Link href="/contacto" className="btn-secondary"><Phone className="h-4 w-4" /> Contactar</Link>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> Instagram</a>
                  <a
                    href="https://www.linkedin.com/in/rosa-isabel-valentin-gonzalez-3a0b16141/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    aria-label="Ver perfil de Rosa en LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealLight>

        <HowItWorksSection />

        {/* Principios de trabajo */}
        <RevealLight>
          <section aria-labelledby="principios-title" className="section-pad pt-0">
            <div className="container-shell">
              <div className="rounded-[28px] border border-[var(--border)] bg-white px-7 py-9 shadow-sm md:px-10 md:py-11">
                <div className="max-w-3xl">
                  <p className="kicker font-bold tracking-[0.3em]">Nuestra forma de trabajar</p>
                  <h2 id="principios-title" className="mt-4 font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">
                    Claridad antes de contratar y acompañamiento después
                  </h2>
                </div>
                <div className="mt-9 grid gap-7 border-t border-[var(--border)] pt-8 md:grid-cols-3 md:gap-0">
                  {[
                    ['01', 'Entendemos tu situación', 'Antes de recomendar una modalidad, revisamos qué necesitas y qué dudas quieres resolver.'],
                    ['02', 'Te lo explicamos con claridad', 'Conocemos las coberturas y condiciones para ayudarte a tomar una decisión informada.'],
                    ['03', 'Seguimos disponibles', 'Nuestro acompañamiento no termina cuando se formaliza la contratación.'],
                  ].map(([number, title, copy], index) => (
                    <div key={title} className={`md:px-7 ${index === 0 ? 'md:pl-0' : 'md:border-l md:border-[var(--border)]'} ${index === 2 ? 'md:pr-0' : ''}`}>
                      <p className="text-xs font-bold tracking-[0.22em] text-[var(--blue)]">{number}</p>
                      <h3 className="mt-3 font-heading text-2xl font-bold text-[var(--blue-deep)]">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </RevealLight>

        <GoogleReviewsWidget title="Lo que dicen quienes ya han confiado en nosotros" />

        {/* Final CTA */}
        <section id="cta-sobre-nosotros" aria-labelledby="cta-sobre-nosotros-title" className="section-pad pt-0">
          <div className="container-shell">
            <div
              className="rounded-[32px] border border-white/10 p-8 md:p-10 text-center text-white shadow-[0_18px_60px_rgba(18,59,104,0.18)]"
              style={{ background: 'linear-gradient(135deg, rgba(18,59,104,0.96), rgba(15,94,156,0.9))' }}
            >
              <p className="kicker !text-white/70">¿Quieres que hablemos?</p>
              <h2 id="cta-sobre-nosotros-title" className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Una consulta sin compromiso puede ser el mejor primer paso</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-9 text-white/80">
                Cuéntame tu situación y te ayudo a entender qué opciones tienen sentido para ti. Sin presión, sin compromiso, con toda la claridad.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row justify-center">
                <a href={buildWhatsAppHref('Hola Rosa, quiero una consulta para entender qué seguro me conviene.')} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"><WhatsAppIcon className="h-4 w-4" /> Hablar por WhatsApp</a>
                <Link href="/contacto" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]">Contactar</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
