import Link from 'next/link';

type AnswerFirstSectionProps = {
  eyebrow?: string;
  title: string;
  answer: string;
  facts: string[];
  links?: { label: string; href: string }[];
};

export function AnswerFirstSection({ eyebrow = 'Respuesta rápida', title, answer, facts, links = [] }: AnswerFirstSectionProps) {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-10 md:py-14" aria-labelledby="answer-first-title">
      <div className="container-shell">
        <div className="max-w-4xl">
          <p className="kicker">{eyebrow}</p>
          <h2 id="answer-first-title" className="mt-2 text-2xl font-bold tracking-tight text-[var(--blue-deep)] md:text-3xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{answer}</p>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {facts.map((fact) => <li key={fact} className="rounded-lg bg-white px-4 py-3 shadow-sm">{fact}</li>)}
          </ul>
          {links.length > 0 && (
            <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold" aria-label="Páginas relacionadas">
              {links.map((link) => <Link key={link.href} href={link.href} className="text-[var(--blue)] underline decoration-[var(--blue)]/30 underline-offset-4">{link.label} →</Link>)}
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
