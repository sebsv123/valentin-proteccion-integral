"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, HeartHandshake, Instagram, MessageCircle, ShieldCheck, Stethoscope } from 'lucide-react';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, comparisonProfiles, generalFaqs, products, site, trustBadges } from '@/lib/products';
import { FAQAccordion } from './faq-accordion';

const cardImages: Record<string, string> = {
  salud: '/images/premium/hero-family.png',
  vida: '/images/premium/life.png',
  mascotas: '/images/premium/happy-pets.png',
  viaje: '/images/premium/travel.png',
  dental: '/images/premium/dental-care.png',
  accidentes: '/brand/banner-accidentes.png',
  hospitalizacion: '/brand/banner-hospitalizacion.png',
  decesos: '/brand/banner-decesos.png',
};

const sectionTints: Record<string, string> = {
  salud: 'from-[rgba(15,94,156,0.12)] to-[rgba(123,198,126,0.04)]',
  vida: 'from-[rgba(18,59,104,0.09)] to-[rgba(242,140,40,0.05)]',
  mascotas: 'from-[rgba(123,198,126,0.12)] to-[rgba(15,94,156,0.04)]',
  viaje: 'from-[rgba(15,94,156,0.08)] to-[rgba(15,94,156,0.02)]',
  dental: 'from-[rgba(242,140,40,0.08)] to-[rgba(15,94,156,0.04)]',
  accidentes: 'from-[rgba(18,59,104,0.08)] to-[rgba(242,140,40,0.05)]',
  hospitalizacion: 'from-[rgba(123,198,126,0.08)] to-[rgba(15,94,156,0.05)]',
  decesos: 'from-[rgba(18,59,104,0.08)] to-[rgba(123,198,126,0.03)]',
};

export function HeroLeadSection() {
  return (
    <section className="section-pad pt-4 md:pt-8 overflow-hidden bg-premium">
      <div className="container-shell hero-grid items-stretch gap-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="soft-card glass relative overflow-hidden p-8 md:p-12 xl:p-16 border-white/40 shadow-2xl">
          <div className="absolute inset-0">
            <Image src="/images/premium/hero-family.png" alt="Familia feliz disfrutando de un momento de bienestar y seguridad" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.94)_0%,rgba(248,250,252,0.88)_42%,rgba(248,250,252,0.68)_70%,rgba(248,250,252,0.18)_100%)]" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <p className="kicker text-[var(--blue)] font-bold tracking-[0.3em]">{site.brandLine}</p>
            <h1 className="mt-6 max-w-4xl font-heading text-6xl font-extrabold tracking-tight text-gradient md:text-7xl xl:text-8xl leading-[1.05]">
              {site.heroTagline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)] md:text-xl">
              Asesoramiento personalizado en <strong>SALUD</strong>, <strong>VIDA</strong>, <strong>MASCOTAS</strong>, <strong>VIAJE</strong>, <strong>DENTAL</strong>, <strong>ACCIDENTES</strong>, <strong>HOSPITALIZACIÓN</strong> y <strong>DECESOS</strong>.
              {' '}Te ayudamos a entender, comparar y elegir mejor antes de contratar.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contacto" className="btn-primary hover-lift px-10 py-5 text-lg shadow-xl">Cuéntanos qué necesitas</Link>
              <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.')} className="btn-whatsapp animate-pulse-soft px-10 py-5 text-lg shadow-xl"><MessageCircle className="h-5 w-5" /> Hablar por WhatsApp</a>
            </div>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {[
                ['Te ayudamos a elegir con claridad', 'Comparamos opciones contigo y te explicamos lo importante sin prisas ni presión.'],
                ['Asesoramiento experto', 'No somos un comparador frío. Hay una persona detrás de cada orientación.'],
                ['Consulta sin compromiso', 'Puedes empezar por llamada, WhatsApp o un formulario corto, como prefieras.'],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[22px] bg-white/92 p-4 shadow-sm backdrop-blur">
                  <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4 text-sm font-bold text-[var(--blue-deep)]">
              {products.map((product) => (
                <Link key={product.slug} href={`/seguros/${product.slug}`} className="glass rounded-full border border-white/60 bg-white/40 px-6 py-4 tracking-wider hover:bg-white hover:text-[var(--blue)] hover:border-[var(--blue)] transition-all">
                  {product.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, delay: 0.05 }} id="lead-form">
          <LeadForm defaultProduct="salud" compact />
        </motion.div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { label: 'Años de experiencia', value: '10+' },
    { label: 'Familias protegidas', value: '1.200+' },
    { label: 'Ramos de seguro', value: '8' },
    { label: 'Atención personalizada', value: '100%' },
  ];

  return (
    <section className="bg-[var(--blue-deep)] py-12 md:py-16 overflow-hidden">
      <div className="container-shell">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#81C784] mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm md:text-base font-semibold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustBadgesSection() {
  const icons = [ShieldCheck, HeartHandshake, Stethoscope, BadgeCheck];
  return (
    <section className="section-pad pb-6" style={{ background: 'linear-gradient(180deg, rgba(15,94,156,0.03), transparent 75%)' }}>
      <div className="container-shell">
        <div className="soft-card overflow-hidden">
          <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 md:p-10">
              <p className="kicker">Más de 10 años protegiendo lo importante</p>
              <h2 className="mt-3 section-title">Confianza, experiencia y cuidado personalizado</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {trustBadges.map((badge, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={badge.title} className="rounded-[26px] border border-[var(--border)] bg-[var(--off-white)] p-5">
                      <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-[var(--blue)] shadow-sm"><Icon className="h-6 w-6" /></div>
                      <h3 className="font-heading text-2xl font-semibold text-[var(--blue-deep)]">{badge.title}</h3>
                      <p className="mt-3 text-base leading-8 text-[var(--muted)]">{badge.copy}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative min-h-[360px] xl:min-h-full">
              <Image src="/images/home/handshake-real.jpg" alt="Apretón de manos que transmite confianza y acompañamiento" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,104,0.08),rgba(18,59,104,0.36))]" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="font-heading text-3xl font-bold">Protegemos lo que más importa</p>
                <p className="mt-2 max-w-md text-base leading-7 text-white/88">Más de 10 años ayudando a familias y particulares a entender, comparar y elegir mejor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductCategoryGrid() {
  const list = products.map((product) => ({ ...product, image: cardImages[product.slug] || product.cardImage }));
  return (
    <section className="section-pad" id="categorias">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <p className="kicker">Nuestros seguros</p>
          <h2 className="mt-3 section-title">Encuentra el ramo que mejor encaje con lo que quieres proteger</h2>
          <p className="section-copy mt-4">La portada te orienta y cada producto tiene su propia página para ampliar coberturas, ventajas, preguntas frecuentes y formas de contacto.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-4">
          {list.map((product, index) => (
            <motion.article key={product.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }} className="soft-card overflow-hidden hover-lift border-white/20 shadow-lg">
              <div className="relative h-72">
                <Image src={product.image} alt={product.cardAlt} fill className="object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${sectionTints[product.slug] || 'from-[rgba(18,59,104,0.6)] to-transparent'}`} />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="kicker !text-white/80">{product.eyebrow}</p>
                  <h3 className="mt-2 font-heading text-4xl font-bold tracking-wide">{product.label}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-base leading-8 text-[var(--muted)]">{product.summary}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link href={`/seguros/${product.slug}`} className="btn-secondary w-full justify-center">Ver más sobre {product.label} <ArrowRight className="h-4 w-4" /></Link>
                  <a href={buildWhatsAppHref(product.whatsappMessage)} className="btn-ghost w-full justify-center">Resolver por WhatsApp</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonCardsSection() {
  const actions = [
    { href: '/seguros', wa: buildWhatsAppHref('Hola, quiero una primera orientación para saber por dónde empezar.'), cta: 'Quiero una primera orientación' },
    { href: '/seguros/salud', wa: buildWhatsAppHref('Hola, ya sé el ramo pero quiero afinar qué modalidad me encaja.'), cta: 'Afina tu modalidad' },
    { href: '/contacto', wa: buildWhatsAppHref('Hola, quiero resolverlo rápido y con orientación real.'), cta: 'Empezar ahora' },
  ];

  return (
    <section className="section-pad" style={{ background: 'linear-gradient(180deg, rgba(18,59,104,0.03), rgba(123,198,126,0.04))' }}>
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <p className="kicker">Cómo decidir mejor</p>
          <h2 className="mt-3 section-title">Compara opciones con acompañamiento real</h2>
          <p className="section-copy mt-4">No se trata solo de ver coberturas. Se trata de entender qué encaja contigo, qué cambia entre modalidades y cómo empezar por el canal que te resulte más cómodo.</p>
        </div>
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 xl:grid-cols-3">
            {comparisonProfiles.map((profile, index) => (
              <div key={profile.title} className="soft-card glass group p-8 transition-all hover-lift border-white/40 shadow-xl">
                <div className="mb-6 inline-flex rounded-full bg-[var(--blue-deep)] px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-lg">
                  Paso {index + 1}
                </div>
                <h3 className="font-heading text-3xl font-bold text-[var(--blue-deep)] leading-tight">{profile.title}</h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{profile.description}</p>
                <div className="mt-6 grid gap-4">
                  {profile.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl border border-white/60 bg-white/60 px-5 py-4 text-sm font-semibold text-[var(--text)] shadow-sm backdrop-blur">
                      {bullet}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <Link href={actions[index].href} className="btn-secondary w-full justify-center shadow-lg hover:shadow-2xl">
                    {actions[index].cta}
                  </Link>
                  <a href={actions[index].wa} className="btn-ghost w-full justify-center border-white/40 bg-white/40 backdrop-blur">
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="soft-card overflow-hidden">
            <div className="relative min-h-[520px] h-full">
              <Image src="/images/home/meeting-real.jpg" alt="Reunión de orientación personalizada en seguros" fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(18,59,104,0.58))]" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                <p className="kicker !text-white/70">Una decisión mejor empieza con una conversación clara</p>
                <h3 className="mt-3 font-heading text-4xl font-bold">Te escuchamos, aterrizamos opciones y te acompañamos de verdad</h3>
                <div className="mt-5 grid gap-3">
                  {['Escuchamos tu situación y tus prioridades', 'Traducimos coberturas y matices a lenguaje claro', 'Te guiamos hacia SALUD, VIDA, MASCOTAS, VIAJE, DENTAL, ACCIDENTES, HOSPITALIZACIÓN o DECESOS'].map((item) => (
                    <div key={item} className="rounded-[22px] bg-white/14 px-4 py-4 text-sm leading-7 text-white/92 backdrop-blur md:text-base">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AgentTrustBlock() {
  return (
    <section className="section-pad" id="como-funciona">
      <div className="container-shell">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card overflow-hidden">
            <div className="grid h-full lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[420px]">
                <Image src="/images/agent/rosa-valentin.jpg" alt="Rosa Valentín, asesora personal en seguros" fill className="object-cover object-top" />
              </div>
              <div className="p-7 md:p-9">
                <p className="kicker">Tu asesor personal en seguros</p>
                <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">Más de 10 años de experiencia para ayudarte a elegir con claridad</h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">Rosa Valentín acompaña cada caso con una mirada cercana, profesional y comparativa. La idea no es venderte rápido, sino ayudarte a encontrar una opción que de verdad tenga sentido para tu vida y tu tranquilidad.</p>
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  <div className="rounded-[22px] bg-[var(--bg)] p-4"><p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Más de 10 años</p><p className="mt-1 text-sm leading-6 text-[var(--muted)]">asesorando a familias y particulares</p></div>
                  <div className="rounded-[22px] bg-[var(--bg)] p-4"><p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Asesoramiento personalizado</p><p className="mt-1 text-sm leading-6 text-[var(--muted)]">según tu etapa, prioridades y necesidades</p></div>
                  <div className="rounded-[22px] bg-[var(--bg)] p-4"><p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Comparativa entre compañías</p><p className="mt-1 text-sm leading-6 text-[var(--muted)]">con criterio y sin saturarte de información</p></div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contacto" className="btn-primary">Consulta sin compromiso</Link>
                  <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> @segurosrosavalentin</a>
                </div>
              </div>
            </div>
          </div>
          <div className="soft-card overflow-hidden">
            <div className="grid h-full lg:grid-cols-[1.02fr_0.98fr]">
              <div className="p-7 md:p-9">
                <p className="kicker">Cómo te ayudamos</p>
                <h3 className="mt-3 font-heading text-4xl font-bold text-[var(--blue-deep)]">Una orientación clara antes de contratar</h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">No te dejamos solo con un listado de coberturas. Convertimos la comparación en un proceso más claro, humano y útil.</p>
                <div className="mt-6 grid gap-4">
                  {[
                    ['01', 'Escuchamos qué quieres proteger y en qué momento estás.'],
                    ['02', 'Comparamos opciones con una explicación que se entiende.'],
                    ['03', 'Aterrizamos coberturas, matices y diferencias sin lenguaje frío.'],
                    ['04', 'Seguimos a tu lado también después de contratar.'],
                  ].map(([step, line]) => (
                    <div key={line} className="flex items-center gap-4 rounded-[22px] border border-[var(--border)] bg-white px-5 py-4 shadow-sm">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--blue-deep)] text-sm font-bold text-white">{step}</div>
                      <div className="text-base font-medium text-[var(--text)]">{line}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contacto" className="btn-primary">Solicitar orientación</Link>
                  <a href={buildWhatsAppHref('Hola, quiero una orientación clara antes de contratar.')} className="btn-whatsapp">Hablar por WhatsApp</a>
                </div>
              </div>
              <div className="relative min-h-[360px]">
                <Image src="/images/home/handshake-real.jpg" alt="Acompañamiento cercano antes de contratar" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,104,0.08),rgba(18,59,104,0.34))]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="font-heading text-3xl font-bold">Acompañamiento real antes y después de decidir</p>
                  <p className="mt-2 text-base leading-7 text-white/88">Una conversación clara puede ahorrarte dudas, tiempo y elecciones precipitadas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GeneralFaqSection() {
  return (
    <section className="section-pad" id="faqs" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(18,59,104,0.03))' }}>
      <div className="container-shell grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
        <div>
          <p className="kicker">Preguntas frecuentes</p>
          <h2 className="mt-3 section-title">Resolvemos dudas que suelen aparecer antes de decidir</h2>
          <p className="section-copy mt-4">Aquí respondemos con más detalle a preguntas habituales. Y si prefieres una explicación más personal, puedes escribirnos por WhatsApp o pedir orientación.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
            <a href={buildWhatsAppHref('Hola, tengo una duda sobre seguros y quiero una orientación.')} className="btn-whatsapp sm:w-auto xl:w-fit">Hablar por WhatsApp</a>
            <Link href="/contacto" className="btn-secondary sm:w-auto xl:w-fit">Pedir orientación</Link>
          </div>
        </div>
        <FAQAccordion items={generalFaqs} contextualLinks />
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="section-pad pt-2">
      <div className="container-shell">
        <div className="soft-card overflow-hidden">
          <div className="grid gap-0 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[340px] xl:min-h-full">
              <Image src="/images/home/final-cta.jpg" alt="Apretón de manos como cierre de confianza" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,104,0.06),rgba(18,59,104,0.22))]" />
            </div>
            <div className="p-7 md:p-10">
              <p className="kicker">¿Tienes el seguro adecuado?</p>
              <h2 className="mt-3 section-title">Cuéntanos qué necesitas y te ayudamos a encontrar la opción adecuada</h2>
              <p className="section-copy mt-4">Si quieres una orientación clara, humana y con más contexto, podemos empezar por una consulta sin compromiso. Desde ahí vemos juntos qué producto y qué modalidad tienen más sentido para ti.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacto" className="btn-primary">Consulta sin compromiso</Link>
                <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para revisar qué seguro me encaja mejor.')} className="btn-whatsapp">Hablar por WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function MascotHelperSection() {
  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <div className="soft-card glass overflow-hidden border-white/60 shadow-2xl">
          <div className="grid gap-0 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[360px] bg-gradient-to-br from-[#81C784]/20 to-[#003366]/10 flex items-center justify-center p-12">
              <div className="relative w-full h-full max-w-[280px]">
                <Image src="/images/home/mascota-vpi.png" alt="Tortuga protectora — Mascota de Valentín Protección Integral" fill className="object-contain drop-shadow-2xl" />
              </div>
            </div>
            <div className="p-8 md:p-12 xl:p-16">
              <p className="kicker font-bold tracking-[0.3em]">Tu punto de apoyo</p>
              <h2 className="mt-4 section-title leading-tight">Orientación humana para decisiones importantes</h2>
              <p className="section-copy mt-6 text-xl">Hemos diseñado esta experiencia para que te sientas acompañado en cada paso. Sin tecnicismos, sin presiones y con una mirada experta sobre lo que de verdad importa.</p>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  'Ordenamos prioridades antes de comparar.',
                  'Aterrizamos coberturas a lenguaje claro.',
                  'Te señalamos qué conviene revisar de verdad.',
                  'Acompañamiento por WhatsApp o llamada.',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/40 bg-white/40 p-5 text-base font-bold text-[var(--blue-deep)] shadow-sm backdrop-blur">
                    <div className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link href="/como-te-ayudamos" className="btn-primary hover-lift px-8">Explorar cómo ayudamos</Link>
                <a href={buildWhatsAppHref('Hola, quiero una orientación para entender mejor qué seguro me conviene.')} className="btn-whatsapp animate-pulse-soft px-8 font-extrabold">Hablar con Rosa</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogPreviewSection() {
  const posts = [
    {
      title: 'Cómo elegir un seguro de SALUD sin mirar solo la cuota',
      copy: 'Tres claves para distinguir copago, hospitalización, reembolso y uso real antes de decidir.',
      href: '/blog',
      image: '/images/blog/blog-team.jpg',
    },
    {
      title: 'VIDA, ACCIDENTES y protección familiar: qué cambia de verdad',
      copy: 'Una lectura breve para no mezclar productos que responden a riesgos distintos.',
      href: '/blog',
      image: '/images/home/family-window.jpg',
    },
    {
      title: 'VIAJE y MASCOTAS: preguntas que conviene hacerte antes de contratar',
      copy: 'Anulación, límite médico, RC, veterinaria y extras explicados con una mirada más útil.',
      href: '/blog',
      image: '/images/products/viaje-city.jpg',
    },
  ];

  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <p className="kicker">Blog y contenido útil</p>
          <h2 className="mt-3 section-title">Guías breves para entender mejor antes de elegir</h2>
          <p className="section-copy mt-4">No todo tiene que resolverse en una llamada. Aquí también dejamos contenido práctico para ayudarte a comparar con más criterio.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="soft-card overflow-hidden">
              <div className="relative h-56">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-[var(--blue-deep)]">{post.title}</h3>
                <p className="mt-3 text-base leading-8 text-[var(--muted)]">{post.copy}</p>
                <Link href={post.href} className="btn-ghost mt-5">Ir al blog <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
