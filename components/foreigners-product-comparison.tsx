import Link from 'next/link';

type ForeignersProductComparisonProps = { locale: 'es' | 'en' };

const products = {
  es: [
    { name: 'ASISA Health Students', forWho: 'Visado de estudiante y estancias de estudios.', copay: 'Sin copagos', waiting: 'Sin carencias', term: 'De 2 meses a 1 año; producto inicial no renovable.' },
    { name: 'ASISA Health Residents', forWho: 'Residencia, NIE o visado de larga estancia.', copay: 'Sin copagos', waiting: 'Sin carencias', term: 'Un año; condiciones de renovación según producto.' },
    { name: 'ASISA Health Premium', forWho: 'Situaciones de visado o residencia que requieren otra modalidad.', copay: 'Sin copagos', waiting: 'Sin carencias', term: 'De 2 meses a 1 año; producto inicial no renovable.' },
    { name: 'ASISA Health Residents Premium', forWho: 'Personas que ya tienen residencia o visado y necesitan esta modalidad.', copay: 'Sin copagos', waiting: 'Con carencias', term: 'Un año; renovación automática según las condiciones aplicables.' },
  ],
  en: [
    { name: 'ASISA Health Students', forWho: 'Student visas and study stays.', copay: 'No co-payments', waiting: 'No waiting periods', term: '2 months to 1 year; initial product is non-renewable.' },
    { name: 'ASISA Health Residents', forWho: 'Residence, NIE or long-stay visa situations.', copay: 'No co-payments', waiting: 'No waiting periods', term: 'One year; renewal conditions depend on the product.' },
    { name: 'ASISA Health Premium', forWho: 'Visa or residence situations requiring another plan.', copay: 'No co-payments', waiting: 'No waiting periods', term: '2 months to 1 year; initial product is non-renewable.' },
    { name: 'ASISA Health Residents Premium', forWho: 'People who already have residence or a visa and need this plan.', copay: 'No co-payments', waiting: 'Waiting periods apply', term: 'One year; automatic renewal subject to the applicable conditions.' },
  ],
} as const;

export function ForeignersProductComparison({ locale }: ForeignersProductComparisonProps) {
  const en = locale === 'en';
  const copy = en ? {
    eyebrow: 'Decision guide',
    title: 'Which ASISA plan may fit your process?',
    intro: 'These are product-level distinctions from the ASISA 2026 manual. They are not an automatic eligibility or immigration decision: we review your process and the selected policy conditions before arranging cover.',
    forWho: 'Designed for',
    copay: 'Co-payments',
    waiting: 'Waiting periods',
    term: 'Duration and renewal',
    note: 'The insurer issues the certificate. Travel assistance, repatriation, refund conditions and advance contracting depend on the named product and policy.',
    decision: 'A simple starting point',
    steps: ['Student visa or study context → start with Students.', 'Residence, NIE or long-stay context → review Residents and its conditions.', 'Need a broader or different structure → ask about the Premium options.', 'Before buying, confirm dates, certificate and conditions for your process.'],
    cta: 'Ask which plan fits my process',
    contact: '/en/contact',
  } : {
    eyebrow: 'Guía de decisión',
    title: '¿Qué modalidad ASISA puede encajar con tu trámite?',
    intro: 'Estas son diferencias de producto tomadas del manual ASISA 2026. No sustituyen la decisión migratoria ni determinan automáticamente la elegibilidad: revisamos tu trámite y las condiciones de la póliza antes de contratar.',
    forWho: 'Pensado para',
    copay: 'Copagos',
    waiting: 'Carencias',
    term: 'Duración y renovación',
    note: 'La aseguradora emite el certificado. La asistencia, repatriación, devolución y contratación anticipada dependen del producto y de la póliza concreta.',
    decision: 'Un punto de partida sencillo',
    steps: ['Visado de estudiante o estudios → empieza revisando Students.', 'Residencia, NIE o larga estancia → revisa Residents y sus condiciones.', 'Necesitas otra estructura → pregunta por las modalidades Premium.', 'Antes de contratar, confirma fechas, certificado y condiciones del trámite.'],
    cta: 'Preguntar qué modalidad encaja',
    contact: '/contacto',
  };

  return (
    <section className="border-y border-slate-200 bg-white py-12 md:py-16" aria-labelledby="foreigners-product-comparison-title">
      <div className="container-shell">
        <p className="kicker">{copy.eyebrow}</p>
        <h2 id="foreigners-product-comparison-title" className="mt-2 max-w-4xl text-2xl font-bold tracking-tight text-[var(--blue-deep)] md:text-3xl">{copy.title}</h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">{copy.intro}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products[locale].map((product) => (
            <article key={product.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold leading-snug text-[var(--blue-deep)]">{product.name}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <div><dt className="font-semibold text-slate-900">{copy.forWho}</dt><dd>{product.forWho}</dd></div>
                <div><dt className="font-semibold text-slate-900">{copy.copay}</dt><dd>{product.copay}</dd></div>
                <div><dt className="font-semibold text-slate-900">{copy.waiting}</dt><dd>{product.waiting}</dd></div>
                <div><dt className="font-semibold text-slate-900">{copy.term}</dt><dd>{product.term}</dd></div>
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-6 text-slate-600">{copy.note}</p>
        <div className="mt-10 rounded-2xl bg-slate-900 p-6 text-white md:p-8">
          <h3 className="text-xl font-bold">{copy.decision}</h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-200 md:grid-cols-2">
            {copy.steps.map((step) => <li key={step} className="rounded-xl border border-white/10 px-4 py-3">{step}</li>)}
          </ul>
          <Link href={copy.contact} className="mt-6 inline-flex rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400">{copy.cta} →</Link>
        </div>
      </div>
    </section>
  );
}
