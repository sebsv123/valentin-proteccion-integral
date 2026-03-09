"use client";

import { useState } from 'react';
import { Check, ChevronRight, FileText, HelpCircle, Layers3, LifeBuoy, Lightbulb, MessageCircle, Scale } from 'lucide-react';
import { productCompare } from '@/lib/product-comparison';
import { buildWhatsAppHref } from '@/lib/products';

const icons = {
  modalidades: Layers3,
  comparador: Scale,
  consejos: Lightbulb,
  documentacion: FileText,
  preguntas: HelpCircle,
  asistencia: LifeBuoy,
  'tus preguntas': HelpCircle,
};

const tagColors: Record<string, string> = {
  'Más accesible': 'bg-[rgba(76,175,80,0.1)] text-[#2E7D32]',
  'Más completo': 'bg-[rgba(15,94,156,0.1)] text-[var(--blue)]',
  'Clave decisiva': 'bg-[rgba(242,140,40,0.12)] text-[#E65100]',
  'Más libertad': 'bg-[rgba(156,39,176,0.1)] text-[#7B1FA2]',
  'Más frecuente': 'bg-[rgba(15,94,156,0.1)] text-[var(--blue)]',
  'Muy solicitado': 'bg-[rgba(242,140,40,0.12)] text-[#E65100]',
  'Complementario': 'bg-[rgba(76,175,80,0.1)] text-[#2E7D32]',
  'Integrado': 'bg-[rgba(15,94,156,0.1)] text-[var(--blue)]',
  'Especializado': 'bg-[rgba(242,140,40,0.12)] text-[#E65100]',
  'Económico': 'bg-[rgba(76,175,80,0.1)] text-[#2E7D32]',
  'Cuidado': 'bg-[rgba(76,175,80,0.1)] text-[#2E7D32]',
  'Obligatorio': 'bg-[rgba(242,140,40,0.12)] text-[#E65100]',
  'Recomendado': 'bg-[rgba(15,94,156,0.1)] text-[var(--blue)]',
  'Personal': 'bg-[rgba(15,94,156,0.1)] text-[var(--blue)]',
  'Para familias': 'bg-[rgba(76,175,80,0.1)] text-[#2E7D32]',
  'Profesional': 'bg-[rgba(242,140,40,0.12)] text-[#E65100]',
  'Más habitual': 'bg-[rgba(15,94,156,0.1)] text-[var(--blue)]',
  'Estable': 'bg-[rgba(15,94,156,0.1)] text-[var(--blue)]',
  'Más económica al inicio': 'bg-[rgba(76,175,80,0.1)] text-[#2E7D32]',
  'Flexible': 'bg-[rgba(242,140,40,0.12)] text-[#E65100]',
  'Viajeros frecuentes': 'bg-[rgba(76,175,80,0.1)] text-[#2E7D32]',
};

export function ProductTabs({ slug }: { slug: string }) {
  const config = productCompare[slug];
  const [active, setActive] = useState(config?.tabs[0]?.id ?? '');

  if (!config) return null;

  const current = config.tabs.find((tab) => tab.id === active) ?? config.tabs[0];
  const hasTable = current.columns && current.rows;
  const hasCards = current.cards && current.cards.length > 0;
  const hasAdvice = current.advice && current.advice.length > 0;

  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <div className="soft-card overflow-hidden p-6 md:p-8 lg:p-10">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 border-b border-[var(--border)] pb-5">
            {config.tabs.map((tab) => {
              const Icon = icons[tab.id as keyof typeof icons] ?? Layers3;
              const selected = tab.id === current.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 md:text-base ${selected ? 'border-[var(--blue)] bg-[var(--blue)] text-white shadow-lg scale-[1.02]' : 'border-[var(--border)] bg-white text-[var(--blue-deep)] hover:border-[var(--blue)] hover:text-[var(--blue)] hover:shadow-md'}`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="mt-6">
            {/* Intro */}
            {current.intro && (
              <p className="mb-6 text-base leading-8 text-[var(--muted)] max-w-3xl">{current.intro}</p>
            )}

            {/* Table View */}
            {hasTable && (
              <div className="overflow-hidden rounded-[22px] border border-[var(--border)] bg-white">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[var(--blue-deep)] text-white">
                        <th className="px-5 py-4 font-heading text-sm font-semibold uppercase tracking-wider md:text-base">Característica</th>
                        {current.columns!.map((col) => (
                          <th key={col} className="px-5 py-4 font-heading text-sm font-semibold uppercase tracking-wider md:text-base text-center">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {current.rows!.map((row, idx) => (
                        <tr key={row.label} className={`transition-colors hover:bg-[rgba(15,94,156,0.04)] ${idx % 2 === 0 ? 'bg-white' : 'bg-[var(--bg)]'}`}>
                          <td className="px-5 py-4 text-sm font-semibold text-[var(--text)] md:text-base border-r border-[var(--border)]">{row.label}</td>
                          {row.values.map((value, valueIdx) => (
                            <td key={`${row.label}-${valueIdx}`} className="px-5 py-4 text-sm text-center md:text-base">
                              {value === 'Sí' ? (
                                <span className="inline-flex items-center gap-1.5 font-semibold text-[#2E7D32]"><Check className="h-4 w-4" /> Sí</span>
                              ) : value === 'No' ? (
                                <span className="text-[var(--muted)] font-medium">—</span>
                              ) : (
                                <span className="text-[var(--muted)] font-medium">{value}</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-5 py-3 bg-[var(--bg)] border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--muted)] italic">Tabla orientativa. Las coberturas exactas dependen de la compañía y la modalidad elegida.</p>
                </div>
              </div>
            )}

            {/* Cards View (Modalidades) */}
            {hasCards && (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {current.cards!.map((card) => (
                  <div key={card.title} className="group rounded-[22px] border border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[var(--blue)]/20 hover:-translate-y-0.5">
                    {card.tag && (
                      <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4 ${tagColors[card.tag] || 'bg-[var(--bg)] text-[var(--blue-deep)]'}`}>{card.tag}</span>
                    )}
                    <h3 className="font-heading text-xl font-bold text-[var(--blue-deep)] leading-tight">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Advice View (Consejos / Preguntas) */}
            {hasAdvice && (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {current.advice!.map((item, idx) => (
                  <div key={item.title} className="group rounded-[22px] border border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[var(--blue)]/20">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--blue-deep)] text-sm font-bold text-white shadow-md">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--blue-deep)] leading-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Legacy bullets (fallback) */}
            {!hasTable && !hasCards && !hasAdvice && current.bullets && (
              <div className="grid gap-4 md:grid-cols-2">
                {current.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 rounded-[20px] border border-[var(--border)] bg-white px-5 py-5 shadow-sm">
                    <ChevronRight className="h-5 w-5 shrink-0 text-[var(--blue)] mt-0.5" />
                    <p className="text-sm leading-7 text-[var(--text)] md:text-base">{bullet}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Contextual CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row items-start">
              <a href={buildWhatsAppHref(`Hola, quiero orientación sobre seguro de ${slug} (${current.label}).`)} className="btn-whatsapp">
                <MessageCircle className="h-4 w-4" /> Resolver por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
