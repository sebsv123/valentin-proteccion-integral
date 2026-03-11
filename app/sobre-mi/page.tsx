import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Briefcase, ClipboardList, HeartHandshake, Instagram, MapPin, MessageCircle, Phone, Quote, ShieldCheck, Star, Users } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site, testimonials } from '@/lib/products';

export const metadata: Metadata = {
  title: `Valentín Protección Integral · Equipo y Valores | ${site.name}`,
  description: 'Conoce a Rosa Valentín, asesora experta de Valentín Protección Integral. Más de 10 años de experiencia en seguros de salud, vida, mascotas y negocios.',
  openGraph: {
    title: `Valentín Protección Integral · Equipo y Valores | ${site.name}`,
    description: 'Asesoramiento personalizado en seguros para familias y particulares. Sin presión y con una comparativa transparente.',
    images: [{ url: `${site.domain}/images/agent/rosa-valentin.jpg`, alt: 'Rosa Valentín — Asesora en Valentín Protección Integral' }],
  },
};

export default function SobreMiPage() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero split section */}
        <section className="section-pad pt-6 md:pt-10">
          <div className="container-shell">
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Sobre mí' }]} />
            <div className="mt-6 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
              {/* Photo section */}
              <div className="space-y-6">
                <div className="soft-card overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
                  <div className="relative aspect-[4/5] w-full">
                    <Image src="/images/agent/rosa-despacho.jpg" alt="Rosa Valentín, asesora personal de seguros en Madrid" fill className="object-cover object-top" priority />
                  </div>
                </div>

                {/* Name & Title - Now separate from image card */}
                <div className="soft-card bg-white p-6 text-center shadow-md">
                  <p className="font-heading text-3xl font-bold text-[var(--blue-deep)]">Rosa Valentín</p>
                  <p className="mt-1 text-base font-semibold text-[var(--blue)]">Socia y asesora experta en VPI</p>
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
                    { icon: ClipboardList, text: 'Comparativa real' },
                    { icon: MessageCircle, text: 'Escucha activa' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex flex-col items-center gap-2 rounded-[24px] bg-white px-4 py-5 text-center text-sm font-bold text-[var(--blue-deep)] shadow-sm border border-[var(--border)] transition-all hover:border-[var(--blue)]/20 hover:shadow-md">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--blue)]/5 text-[var(--blue)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        {item.text}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="soft-card p-8 md:p-10 lg:p-12">
                <p className="kicker font-bold tracking-[0.3em]">Nuestra filosofía</p>
                <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-gradient md:text-5xl xl:text-6xl leading-[1.08]">
                  Valentín Protección Integral: Criterio y cercanía
                </h1>
                <p className="mt-6 text-lg leading-9 text-[var(--muted)]">
                  Valentín Protección Integral nace con una idea sencilla: ayudar a familias y particulares a entender mejor lo que están contratando. No se trata de empujar un producto, sino de comparar con criterio y acompañar cada decisión con más contexto.
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  Mi nombre es Rosa Valentín. Soy asesora certificada con <strong>más de 10 años de experiencia</strong> en seguros de salud, vida, mascotas, viaje, dental, accidentes, hospitalización y decesos. Trabajo desde <strong>Boadilla del Monte, Madrid</strong>, atendiendo a familias y particulares de toda España.
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  No trabajo con presión comercial. Cada conversación empieza con tus preguntas, no con mis productos. Y cada orientación busca darte más claridad, no más confusión.
                </p>

                {/* Stats */}
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    { icon: Award, stat: '+10 años', desc: 'Asesorando familias con cercanía' },
                    { icon: Briefcase, stat: 'Certificada', desc: 'Formación continua y actualizada' },
                    { icon: Users, stat: '8 ramos', desc: 'Salud, vida, mascotas, viaje y más' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.stat} className="rounded-[22px] bg-[var(--bg)] px-5 py-5 text-center border border-[var(--border)]">
                        <Icon className="h-6 w-6 mx-auto text-[var(--blue)] mb-2" />
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

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={buildWhatsAppHref('Hola Rosa, quiero hablar contigo sobre un seguro.')} className="btn-whatsapp"><MessageCircle className="h-4 w-4" /> Hablar por WhatsApp</a>
                  <Link href="/contacto" className="btn-secondary"><Phone className="h-4 w-4" /> Contactar</Link>
                  <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo trabajo contigo */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card glass overflow-hidden border-white/40 shadow-xl">
              <div className="p-8 md:p-10 lg:p-12">
                <p className="kicker font-bold tracking-[0.3em]">Cómo trabajo contigo</p>
                <h2 className="mt-4 section-title">Un proceso sencillo orientado a que decidas con más claridad</h2>
                <p className="section-copy mt-4 max-w-3xl">No hay fórmulas mágicas. Hay escucha, comparación y acompañamiento. Así funciona:</p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    { step: '01', title: 'Escuchamos', desc: 'Empezamos por entender tu momento, tus prioridades y qué te preocupa. Sin prisas.', icon: MessageCircle },
                    { step: '02', title: 'Comparamos', desc: 'Revisamos opciones reales, explicamos diferencias y te orientamos con lenguaje claro.', icon: ClipboardList },
                    { step: '03', title: 'Decidimos juntos', desc: 'Tú decides con toda la información. Sin presiones, sin letra pequeña oculta.', icon: ShieldCheck },
                    { step: '04', title: 'Seguimos contigo', desc: 'No desaparecemos al contratar. Seguimos disponibles para dudas, renovaciones y cambios.', icon: HeartHandshake },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.step} className="group rounded-[28px] border border-[var(--border)] bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[var(--blue)]/20 hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-5">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--blue-deep)] text-sm font-extrabold text-white shadow-lg">{item.step}</span>
                          <Icon className="h-5 w-5 text-[var(--blue)] opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{item.title}</h3>
                        <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rosa lifestyle photo block */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-xl border border-[var(--border)]">
                <Image src="/images/agent/rosa-oficina-2.jpg" alt="Rosa Valentín en su oficina de Boadilla del Monte" fill className="object-cover object-top" />
              </div>
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-xl border border-[var(--border)]">
                <Image src="/images/agent/rosa-exterior-2.jpg" alt="Rosa Valentín, cercanía y profesionalidad" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="mb-8 max-w-3xl">
              <p className="kicker">Lo que dicen quienes ya han confiado en mí</p>
              <h2 className="mt-3 section-title">Opiniones reales de personas reales</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {featuredTestimonials.map((t) => (
                <div key={t.name} className="soft-card p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-[var(--green)]/40" />
                  <p className="mt-3 text-base leading-8 text-[var(--muted)] italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)] font-heading text-lg font-bold text-white">{t.avatar}</div>
                    <div>
                      <p className="font-semibold text-[var(--blue-deep)]">{t.name}</p>
                      <div className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
                        <MapPin className="h-3 w-3" />
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/opiniones" className="btn-secondary">Ver todas las opiniones</Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 text-white md:p-10 text-center">
              <p className="kicker !text-white/70">¿Quieres que hablemos?</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Una consulta sin compromiso puede ser el mejor primer paso</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-9 text-white/80">
                Cuéntame tu situación y te ayudo a entender qué opciones tienen sentido para ti. Sin presión, sin compromiso, con toda la claridad.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row justify-center">
                <a href={buildWhatsAppHref('Hola Rosa, quiero una consulta para entender qué seguro me conviene.')} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"><MessageCircle className="h-4 w-4" /> Hablar por WhatsApp</a>
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
