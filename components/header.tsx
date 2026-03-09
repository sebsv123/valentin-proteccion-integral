"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Instagram, Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { buildWhatsAppHref, getSubpagesForProduct, mainNav, products, site } from '@/lib/products';

import MetallicPaint from './ui/metallic-paint';
import PillNav from './ui/pill-nav';
import { StaggeredMenu } from './ui/staggered-menu';
import IridescenceBackground from './ui/iridescence-background';

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <MetallicPaint className="relative h-[74px] w-[260px] max-w-[64vw] overflow-hidden rounded-[24px] border border-white/20 bg-white p-2 shadow-sm sm:w-[315px]">
        <Image src="/brand/logo-vpi.jpeg" alt={site.name} fill className="object-contain" priority />
      </MetallicPaint>
    </Link>
  );
}

export function Header() {
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const grouped = useMemo(() => products.map((product) => ({ ...product, children: getSubpagesForProduct(product.slug) })), []);

  const closeAll = () => {
    setMega(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'border-b border-white/10 bg-[#002244] text-white backdrop-blur-xl shadow-[0_14px_42px_rgba(0,0,0,0.3)]' : 'border-transparent bg-[#002244]/95 text-white backdrop-blur-md'}`}>
      <div className="container-shell">
        <div className="flex items-center justify-between gap-4 py-5 xl:gap-6 xl:py-6">
          <Brand />

          <nav className="hidden items-center gap-2 xl:flex">
            <div className="relative z-[60]">
              <button
                onClick={() => setMega((v) => !v)}
                className="group relative px-6 py-4"
                aria-expanded={mega}
                aria-controls="mega-menu"
              >
                <div className="flex items-center gap-2 font-semibold text-white/90 hover:text-white transition-colors">
                  Seguros <ChevronDown className={`h-4 w-4 transition ${mega ? 'rotate-180' : ''}`} />
                </div>
                <motion.div 
                  className="absolute bottom-2 left-6 right-6 h-[2px] bg-[var(--blue)]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </button>
              <AnimatePresence>
                {mega ? (
                  <motion.div
                    id="mega-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+12px)] w-[1180px] max-w-[calc(100vw-4rem)] rounded-[30px] border border-[var(--border)] bg-white/95 p-6 shadow-[0_24px_72px_rgba(18,59,104,0.14)] backdrop-blur-xl overflow-hidden"
                  >
                    <div className="relative z-10 grid gap-5 lg:grid-cols-[300px_1fr]">
                      <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(15,94,156,0.06),rgba(123,198,126,0.08))] p-5">
                        <p className="font-heading text-2xl font-semibold text-[var(--blue-deep)]">Te ayudamos a elegir con claridad</p>
                        <p className="mt-2 text-base leading-8 text-[var(--muted)]">
                          Accede al producto que te interesa y, cuando tenga sentido, profundiza por perfil o modalidad.
                        </p>
                        <div className="mt-5 grid gap-3">
                          <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.')} className="btn-whatsapp !w-full !justify-center">Consulta sin compromiso</a>
                          <a href={`tel:${site.phoneHref}`} className="btn-ghost !w-full !justify-center"><Phone className="h-4 w-4" /> {site.phone}</a>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {grouped.map((item) => (
                          <Link 
                            key={item.slug} 
                            href={`/seguros/${item.slug}`} 
                            className="group flex flex-col justify-between rounded-[24px] border border-[var(--border)] bg-white p-5 transition-all hover:border-[var(--blue)]/30 hover:shadow-lg hover:-translate-y-1"
                            onClick={closeAll}
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="font-heading text-lg font-bold tracking-tight text-[var(--blue-deep)] group-hover:text-[var(--blue)]">
                                  {item.label}
                                </span>
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--blue)] transition-colors group-hover:bg-[var(--blue)] group-hover:text-white">
                                  <ChevronDown className="h-4 w-4 -rotate-90" />
                                </div>
                              </div>
                              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                            </div>
                            
                            {item.children.length ? (
                              <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border)] pt-3">
                                {item.children.slice(0, 3).map((child) => (
                                  <span key={child.slug} className="rounded-lg bg-[var(--bg)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--blue)]">
                                    {child.label}
                                  </span>
                                ))}
                                {item.children.length > 3 && (
                                  <span className="text-[11px] font-bold text-[var(--blue)]">+{item.children.length - 3}</span>
                                )}
                              </div>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            <div className="flex h-[72px] items-center gap-2 -ml-2">
              <PillNav
                items={[
                  ...mainNav.slice(2).map(item => ({
                    link: item.href,
                    label: item.label,
                    href: item.href
                  }))
                ]}
                baseColor="#002244"
                pillColor="rgba(255,255,255,0.15)"
                pillTextColor="white"
                hoveredPillTextColor="white"
              />
            </div>
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3.5 text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 rounded-[18px] font-semibold transition-opacity shadow-md"><Instagram className="h-4 w-4" /> @segurosrosavalentin</a>
            <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.')} className="btn-whatsapp !px-6 !py-3.5 shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]">WhatsApp</a>
          </div>

          <button className="flex items-center gap-2 text-white/90 hover:text-white px-5 py-3.5 rounded-[18px] hover:bg-white/10 transition-colors font-semibold border border-white/20" onClick={() => document.querySelector<HTMLButtonElement>('.sm-toggle')?.click()} aria-label="Abrir menú">
            <Menu className="h-5 w-5" /> Menú
          </button>

        </div>
      </div>

      {mega ? <button className="fixed inset-0 z-40 hidden xl:block" aria-label="Cerrar menú" onClick={() => setMega(false)} /> : null}
      </header>
      
      {/* 
        Staggered Menu exists here globally OUTSIDE the header `<header>`. 
        This is crucial so its `.fixed` layout escapes the `backdrop-blur` containing block limitation in Safari/Chrome. 
      */}
      <StaggeredMenu
        isFixed={true}
        position="right"
        logoUrl="/brand/logo-vpi.jpeg"
        colors={['#002244', '#0F5E9C']}
        accentColor="#0F5E9C"
        items={[
          { label: 'Inicio', ariaLabel: 'Inicio', link: '/' },
          ...grouped.map(item => ({ label: item.label, ariaLabel: item.label, link: `/seguros/${item.slug}` })),
          ...mainNav.slice(2).map(item => ({ label: item.label, ariaLabel: item.label, link: item.href }))
        ]}
        socialItems={[
          { label: 'Instagram', link: site.instagram },
          { label: 'WhatsApp', link: buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.') }
        ]}
      />
    </>
  );
}
