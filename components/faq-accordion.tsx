"use client";

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, CircleHelp, MessageCircle } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';

export function FAQAccordion({ items, contextualLinks = false }: { items: { q: string; a: string }[]; contextualLinks?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.q} className="soft-card overflow-hidden">
            <button onClick={() => setOpen(active ? null : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6">
              <div className="flex items-start gap-4">
                <span className={`mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full ${active ? 'bg-[rgba(79,175,78,0.14)] text-[var(--green)]' : 'bg-[rgba(15,94,156,0.08)] text-[var(--blue)]'}`}>
                  <CircleHelp className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold text-[var(--text)] md:text-xl">{item.q}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">Haz clic para ver una explicación más clara y práctica.</p>
                </div>
              </div>
              <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--blue)] transition ${active ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {active ? (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="border-t border-[var(--border)] px-6 pb-6 pt-1 md:px-8 md:pb-8">
                    <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(238,242,247,0.72))] p-5 text-base leading-8 text-[var(--muted)]">
                      <p>{item.a}</p>
                    </div>
                    {contextualLinks ? (
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a href={buildWhatsAppHref(`Hola, tengo una duda sobre: ${item.q}`)} className="btn-whatsapp !px-4 !py-3 text-sm"><MessageCircle className="h-4 w-4" /> Hablar por WhatsApp</a>
                        <Link href="/contacto" className="btn-ghost !px-4 !py-3 text-sm">Pedir orientación</Link>
                        <Link href="/seguros/salud" className="btn-ghost !px-4 !py-3 text-sm">Ver SALUD</Link>
                        <Link href="/seguros/vida" className="btn-ghost !px-4 !py-3 text-sm">Ver VIDA</Link>
                        <Link href="/seguros/mascotas" className="btn-ghost !px-4 !py-3 text-sm">Ver MASCOTAS</Link>
                        <Link href="/seguros/viaje" className="btn-ghost !px-4 !py-3 text-sm">Ver VIAJE</Link>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
