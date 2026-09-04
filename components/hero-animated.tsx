"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, products, site } from '@/lib/products';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import CountUp from './ui/count-up';
import { HeroImage } from './hero-image';
import { Phone, BadgePercent } from 'lucide-react';
import { WhatsAppLink } from '@/components/whatsapp-link';
import { useLocale } from 'next-intl';
import { getHomeContent } from './home-content';

// CSS Animation wrapper for zero-JS animations
function CSSReveal({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) {
  return (
    <div 
      className={className}
      style={{
        animationName: 'hero-fade-in-up',
        animationDuration: '0.8s',
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
}

export function HeroLeadSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640

  return (
    <section ref={heroRef} id="hero" aria-labelledby="hero-title" className="section-pad pt-4 md:pt-8 overflow-hidden bg-white-pure relative">
      <div className="container-shell hero-grid items-stretch gap-8">
        <div className="soft-card glass relative overflow-hidden p-8 md:p-12 xl:p-16 border-white/40 shadow-2xl bg-premium-glow">
          {/* IMAGEN — Estática, pinta inmediato sin esperar hidratación */}
          <div className="absolute inset-0 overflow-hidden" style={{ willChange: 'transform' }}>
            {/* HeroImage estático para LCP óptimo */}
            <div className="absolute inset-0 scale-110">
              <HeroImage />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.94)_0%,rgba(248,250,252,0.88)_42%,rgba(248,250,252,0.68)_70%,rgba(248,250,252,0.18)_100%)]" />
            {/* Parallax overlay solo desktop — único uso de framer-motion en hero */}
            {!isMobile && (
              <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 pointer-events-none"
                initial={false}
              />
            )}
          </div>
          {/* CONTENIDO — CSS animations, cero TBT */}
          <div className="relative z-10 max-w-3xl">
            {/* KICKER — pequeño, arriba */}
            <CSSReveal delay={0}>
              <p className="kicker text-[var(--blue)] font-bold tracking-[0.3em] text-xs sm:text-sm uppercase">
                Asesores de Seguros en Madrid · Sin Letra Pequeña
              </p>
            </CSSReveal>

            {/* H1 — protagonista visual */}
            <CSSReveal delay={0.1}>
              <h1 
                id="hero-title"
                className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient leading-[1.1]"
              >
                Protección real. Sin letra pequeña.
              </h1>
            </CSSReveal>

            {/* Badges de confianza */}
            <CSSReveal delay={0.2}>
              <div className="flex items-center gap-3 mt-3 mb-6 flex-wrap">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)]">
                  <span className="text-green-500">✓</span> +10 años de experiencia
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--muted)]/40" />
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)]">
                  <span className="text-green-500">✓</span> Familias protegidas
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--muted)]/40 hidden sm:block" />
                <span className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)]">
                  <span className="text-green-500">✓</span> Orientación de seguros con registro oficial
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--muted)]/40 hidden sm:block" />
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)]">
                  <BadgePercent className="h-4 w-4 text-green-500" /> Precio garantizado
                </span>
              </div>
            </CSSReveal>

            {/* Ramos como subtítulo */}
            <CSSReveal delay={0.3}>
              <p className="text-base sm:text-lg text-[var(--muted)] leading-7 max-w-2xl">
                Protegemos a familias y particulares con asesoría clara, sin letra pequeña y sin compromiso.
              </p>
            </CSSReveal>

            {/* CTAs */}
            <CSSReveal delay={0.4}>
              <div className="mt-6 flex flex-col gap-3">
                <WhatsAppLink
                  href="https://wa.me/34603448765?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20sobre%20seguros."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 text-lg font-bold shadow-xl shadow-green-500/20 transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-6 w-6 flex-none" />
                  Hablar con un asesor — Consulta gratuita
                </WhatsAppLink>
                <a
                  href="tel:+34603448765"
                  className="flex items-center justify-center gap-1.5 text-center text-sm text-[var(--muted)] hover:text-[var(--blue)] transition-colors font-medium"
                >
                  <Phone className="h-3.5 w-3.5" />
                  O llámanos al 603 44 87 65
                </a>
              </div>
            </CSSReveal>

            {/* 3 mini-cards de confianza */}
            <CSSReveal delay={0.55}>
              <div className="mt-6 hidden sm:grid gap-3 md:grid-cols-3">
                {[
                  ['Te ayudamos a decidir', 'Analizamos según tu perfil y te explicamos la letra pequeña sin prisas ni presión.'],
                  ['Experiencia a tu servicio', 'No somos un portal automático. Hay un equipo experto detrás de cada recomendación.'],
                  ['Consulta sin coste', 'Empieza por llamada, WhatsApp o formulario corto para resolver tus primeras dudas.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[22px] bg-white/92 p-4 shadow-sm backdrop-blur">
                    <p className="font-heading text-sm font-semibold text-[var(--blue-deep)]">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{copy}</p>
                  </div>
                ))}
              </div>
            </CSSReveal>

            {/* Pills de ramos */}
            <CSSReveal delay={0.65}>
              <div className="mt-8 hidden sm:flex flex-wrap gap-3 text-sm font-bold text-[var(--blue-deep)]">
                {products.map((product) => (
                  <Link key={product.slug} href={`/seguros/${product.slug}`} className="glass rounded-full border border-white/60 bg-white/40 px-5 py-3 tracking-wider hover:bg-white hover:text-[var(--blue)] hover:border-[var(--blue)] transition-all">
                    {product.label}
                  </Link>
                ))}
              </div>
            </CSSReveal>
          </div>
        </div>
        {/* Lead Form — CSS animation */}
        <div 
          id="lead-form"
          style={{
            animationName: 'hero-fade-in-right',
            animationDuration: '0.42s',
            animationDelay: '0.05s',
            animationFillMode: 'forwards',
            animationTimingFunction: 'ease-out',
            opacity: 0,
          }}
        >
          <LeadForm defaultProduct="salud" compact />
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  const locale = useLocale() as 'es' | 'en';
  const content = getHomeContent(locale).stats;
  const stats = [
    { label: content.labels[0], value: 10, suffix: '+' },
    { label: content.labels[1], value: 1200, suffix: '+' },
    { label: content.labels[2], value: 100, suffix: '%' },
  ];

  return (
    <section id="stats" aria-label={content.aria} className="bg-[var(--blue-deep)] py-12 md:py-16 overflow-hidden">
      <div className="container-shell">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#81C784] mb-2">
                <CountUp to={stat.value} suffix={stat.suffix} delay={index * 0.15} />
              </div>
              <div className="text-white/70 text-sm md:text-base font-semibold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 lg:col-span-2 flex justify-center"
          >
            <Image
              src="/images/rosa_y_sebastian.jpeg"
              alt={content.imageAlt}
              width={400}
              height={300}
              sizes="(max-width: 640px) 80vw, 200px"
              className="rounded-lg shadow-xl object-cover object-[center_20%]"
              style={{ aspectRatio: '4/3', maxHeight: '200px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
