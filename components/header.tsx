"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Instagram, Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { buildWhatsAppHref, getSubpagesForProduct, mainNav, products, site } from '@/lib/products';

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-[74px] w-[260px] max-w-[64vw] overflow-hidden rounded-[24px] border border-[var(--border)] bg-white p-2 shadow-sm sm:w-[315px]">
        <Image src="/brand/logo-vpi.jpeg" alt={site.name} fill className="object-contain" priority />
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? 'border-[var(--border)] bg-[rgba(248,250,252,0.94)] backdrop-blur-xl shadow-[0_14px_42px_rgba(18,59,104,0.08)]' : 'border-transparent bg-[rgba(248,250,252,0.86)] backdrop-blur-md'}`}>
      <div className="container-shell">
        <div className="flex items-center justify-between gap-4 py-5 xl:gap-6 xl:py-6">
          <Brand />

          <nav className="hidden items-center gap-2 xl:flex">
            <div className="relative z-[60]">
              <button
                onClick={() => setMega((v) => !v)}
                className="nav-link inline-flex items-center gap-2 rounded-full px-6 py-4 hover:bg-white"
                aria-expanded={mega}
                aria-controls="mega-menu"
              >
                Seguros <ChevronDown className={`h-4 w-4 transition ${mega ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {mega ? (
                  <motion.div
                    id="mega-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 top-[calc(100%+12px)] w-[1180px] max-w-[calc(100vw-4rem)] rounded-[30px] border border-[var(--border)] bg-white p-6 shadow-[0_24px_72px_rgba(18,59,104,0.14)]"
                  >
                    <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
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
                          <div key={item.slug} className="rounded-[24px] border border-[var(--border)] bg-white p-4">
                            <Link href={`/seguros/${item.slug}`} className="font-heading text-xl font-semibold tracking-wide text-[var(--text)] hover:text-[var(--blue)]" onClick={closeAll}>
                              {item.label}
                            </Link>
                            <p className="mt-1 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                            {item.children.length ? (
                              <div className="mt-3 space-y-2 border-t border-[var(--border)] pt-3">
                                {item.children.map((child) => (
                                  <Link key={child.slug} href={`/seguros/${item.slug}/${child.slug}`} className="block text-sm font-medium tracking-wide text-[var(--blue-deep)] hover:text-[var(--blue)]" onClick={closeAll}>
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
            {mainNav.slice(2).map((item) => (
              <Link key={item.href} href={item.href} className="nav-link rounded-full px-6 py-4 hover:bg-white">{item.label}</Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost !px-5 !py-4"><Instagram className="h-4 w-4" /> @segurosrosavalentin</a>
            <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.')} className="btn-whatsapp !px-6 !py-4">WhatsApp</a>
          </div>

          <button className="btn-ghost xl:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú" aria-expanded={open}>
            <Menu className="h-5 w-5" /> Menú
          </button>
        </div>
      </div>

      {mega ? <button className="fixed inset-0 z-40 hidden xl:block" aria-label="Cerrar menú" onClick={() => setMega(false)} /> : null}

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-[rgba(18,59,104,0.34)] p-4">
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="ml-auto flex h-full w-full max-w-md flex-col rounded-[30px] bg-white p-5 shadow-2xl">
              <div className="flex items-center justify-between gap-3 border-b pb-4">
                <div className="scale-75 origin-left"><Brand /></div>
                <button className="btn-ghost !px-3 !py-3 hover:bg-[var(--bg)]" onClick={() => setOpen(false)} aria-label="Cerrar menú"><X className="h-6 w-6" /></button>
              </div>
              <div className="mt-6 space-y-3 overflow-y-auto pb-6">
                <details className="soft-card p-4" open>
                  <summary className="cursor-pointer list-none font-heading text-lg font-semibold text-[var(--blue-deep)]">Seguros</summary>
                <div className="mt-3 grid gap-3">
                  {grouped.map((item) => (
                    <details key={item.slug} className="rounded-[18px] bg-[var(--bg)] px-4 py-3">
                      <summary className="cursor-pointer list-none font-semibold tracking-wide text-[var(--text)]">
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          <span className="text-[var(--blue)] text-xs font-bold underline decoration-dotted underline-offset-4" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href=`/seguros/${item.slug}`; closeAll(); }}>Ir a sección</span>
                        </div>
                      </summary>
                      <div className="mt-2 space-y-2 border-t border-black/5 pt-2">
                        <Link href={`/seguros/${item.slug}`} onClick={closeAll} className="block text-sm font-bold text-[var(--blue-deep)]">Ver {item.label} (General)</Link>
                        {item.children.map((child) => (
                          <Link key={child.slug} href={`/seguros/${item.slug}/${child.slug}`} onClick={closeAll} className="block text-sm text-[var(--muted)] hover:text-[var(--blue)]">{child.label}</Link>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
                </details>
                {mainNav.slice(2).map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeAll} className="soft-card block px-5 py-5 font-heading text-lg font-semibold text-[var(--blue-deep)]">{item.label}</Link>
                ))}
                <a href={site.instagram} target="_blank" rel="noreferrer" className="soft-card block px-5 py-5 font-heading text-lg font-semibold text-[var(--blue-deep)]">Instagram · @segurosrosavalentin</a>
              </div>
              <div className="mt-auto grid gap-3 pt-4">
                <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.')} className="btn-whatsapp">Consulta sin compromiso</a>
                <a href={`tel:${site.phoneHref}`} className="btn-secondary">Llamar al {site.phone}</a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
