import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Quote } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site, testimonials } from '@/lib/products';

export const metadata: Metadata = {
  title: `Sobre mí — Rosa Valentín | ${site.name}`,
  description: 'Conoce a Rosa Valentín: asesora certificada con más de 10 años de experiencia, enfoque humano y acompañamiento real antes de contratar un seguro.',
  openGraph: {
    title: `Sobre mí — Rosa Valentín | ${site.name}`,
    description: 'Asesora certificada con más de 10 años de experiencia en seguros de salud, vida, mascotas y más.',
    images: [{ url: `${site.domain}/images/agent/rosa-valentin.jpg`, alt: 'Rosa Valentín' }],
  },
};

export default function SobreMiPage() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className="section-pad pt-6 md:pt-10">
          <div className="container-shell">
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Sobre mí' }]} />
            <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="soft-card overflow-hidden">
                <div className="relative min-h-[480px]">
                  <Image src="/images/agent/rosa-valentin.jpg" alt="Rosa Valentín, asesora personal en seguros" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,34,68,0.6))]" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="font-heading text-3xl font-bold">Rosa Valentín</p>
                    <p className="mt-1 text-base text-white/80">Asesora certificada en seguros</p>
                  </div>
                </div>
              </div>
              <div className="soft-card p-7 md:p-10">
                <p className="kicker">Sobre mí</p>
                <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl xl:text-6xl">Una orientación cercana, profesional y sin prisas</h1>
                <p className="mt-5 text-lg leading-9 text-[var(--muted)]">Valentín Protección Integral nace con una idea sencilla: ayudar a familias y particulares a entender mejor lo que están contratando. No se trata de empujar un producto, sino de comparar con criterio y acompañar cada decisión con más contexto.</p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">Mi nombre es Rosa Valentín. Soy asesora certificada con <strong>más de 10 años de experiencia</strong> en seguros de salud, vida, mascotas, viaje, dental, accidentes, hospitalización y decesos. Mi enfoque siempre es el mismo: escucharte, entender tu situación y ayudarte a encontrar una opción que tenga sentido real para ti y tu familia.</p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">No trabajo con presión comercial. Cada conversación empieza con tus preguntas, no con mis productos. Y cada orientación busca darte más claridad, no más confusión.</p>

                <div className="mt-7 grid gap-3 md:grid-cols-3">
                  {[
                    { stat: '+10 años', desc: 'Asesorando a familias y particulares con cercanía' },
                    { stat: 'Certificada', desc: 'Formación continua y actualización profesional' },
                    { stat: '8 ramos', desc: 'Salud, vida, mascotas, viaje, dental y más' },
                  ].map((item) => (
                    <div key={item.stat} className="rounded-[22px] bg-[var(--bg)] px-4 py-5 text-center">
                      <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{item.stat}</p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-[24px] border border-[var(--border)] bg-white px-5 py-5 text-base leading-8 text-[var(--muted)]">
                  <em>&ldquo;La prioridad es ayudarte a separar lo importante de lo accesorio, revisar qué cambia según modalidad y orientarte para que contrates con más tranquilidad y menos dudas.&rdquo;</em>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={buildWhatsAppHref('Hola Rosa, quiero hablar contigo sobre un seguro.')} className="btn-whatsapp">Hablar por WhatsApp</a>
                  <Link href="/contacto" className="btn-secondary">Ir a contacto</Link>
                  <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials snippet */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="mb-8 max-w-3xl">
              <p className="kicker">Lo que dicen quienes ya han confiado en mí</p>
              <h2 className="mt-3 section-title">Opiniones reales de personas reales</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {featuredTestimonials.map((t) => (
                <div key={t.name} className="soft-card p-7">
                  <Quote className="h-8 w-8 text-[var(--green)]" />
                  <p className="mt-4 text-base leading-8 text-[var(--muted)] italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--blue-deep)] font-heading text-lg font-bold text-white">{t.avatar}</div>
                    <div>
                      <p className="font-semibold text-[var(--blue-deep)]">{t.name}</p>
                      <p className="text-sm text-[var(--muted)]">{t.location}</p>
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
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
