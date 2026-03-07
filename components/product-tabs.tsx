"use client";

import { useState } from 'react';
import { Check, FileText, HelpCircle, Layers3, LifeBuoy, Scale } from 'lucide-react';
import { productCompare } from '@/lib/product-comparison';

const icons = {
  modalidades: Layers3,
  comparador: Scale,
  consejos: FileText,
  documentacion: FileText,
  preguntas: HelpCircle,
  asistencia: LifeBuoy,
  'tus preguntas': HelpCircle,
};

export function ProductTabs({ slug }: { slug: string }) {
  const config = productCompare[slug];
  const [active, setActive] = useState(config?.tabs[0]?.id ?? '');

  if (!config) return null;

  const current = config.tabs.find((tab) => tab.id === active) ?? config.tabs[0];

  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <div className="soft-card overflow-hidden p-6 md:p-8">
          <div className="flex flex-wrap gap-3 border-b border-[var(--border)] pb-5">
            {config.tabs.map((tab) => {
              const Icon = icons[tab.id as keyof typeof icons] ?? Layers3;
              const selected = tab.id === current.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold tracking-wide transition md:text-base ${selected ? 'border-[var(--blue)] bg-[var(--blue)] text-white shadow-sm' : 'border-[var(--border)] bg-white text-[var(--blue-deep)] hover:border-[var(--blue)] hover:text-[var(--blue)]'}`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="kicker">Comparativa orientativa</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">
                {current.label} de {slug.toUpperCase()}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                Este bloque sirve para entender mejor diferencias entre modalidades, ordenar prioridades y hacer una primera lectura más clara antes de pedir orientación.
              </p>
              {current.bullets ? (
                <div className="mt-5 space-y-3">
                  {current.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-[20px] border border-[var(--border)] bg-[var(--bg)] px-4 py-4 text-sm leading-7 text-[var(--text)] md:text-base">
                      {bullet}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="overflow-hidden rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(15,94,156,0.05),rgba(248,250,252,0.98))]">
              {current.columns && current.rows ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[rgba(15,94,156,0.09)] text-[var(--blue-deep)]">
                        <th className="px-4 py-4 font-heading text-lg font-semibold">Característica</th>
                        {current.columns.map((col) => (
                          <th key={col} className="px-4 py-4 font-heading text-lg font-semibold">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {current.rows.map((row, idx) => (
                        <tr key={row.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-[rgba(248,250,252,0.94)]'}>
                          <td className="px-4 py-4 text-sm font-semibold text-[var(--text)] md:text-base">{row.label}</td>
                          {row.values.map((value, valueIdx) => (
                            <td key={`${row.label}-${valueIdx}`} className="px-4 py-4 text-sm text-[var(--muted)] md:text-base">
                              {value === true ? <span className="inline-flex items-center gap-2 font-semibold text-[var(--green)]"><Check className="h-4 w-4" /> Sí</span> : value === false ? 'No' : value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-6 text-base leading-8 text-[var(--muted)]">
                  Este bloque se usa para consejos y asistencia, manteniendo una lectura breve y útil.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
