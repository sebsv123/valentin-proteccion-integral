import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, CircleHelp, ClipboardList, HeartHandshake, MessageCircle, Phone, ShieldAlert, ShieldCheck, Users } from 'lucide-react';
import type { Product, ProductSubpage } from '@/lib/products';
import { buildWhatsAppHref, getRelatedProducts, getSubpagesForProduct, site } from '@/lib/products';
import { FAQAccordion } from './faq-accordion';
import { LeadForm } from './lead-form';

export function ProductHero({ product }: { product: Product }) {
  const subpages = getSubpagesForProduct(product.slug);
  return (
    <section className="section-pad pt-6 md:pt-10">
      <div className="container-shell">
        <div className="soft-card glass overflow-hidden border-white/40 shadow-2xl">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="kicker font-bold tracking-[0.3em]">{product.eyebrow}</p>
              <h1 className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-gradient md:text-6xl lg:text-7xl leading-[1.1]">{product.heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">{product.heroCopy}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contacto" className="btn-primary hover-lift px-10"><MessageCircle className="h-5 w-5" /> Solicitar orientación</Link>
                <a href={buildWhatsAppHref(product.whatsappMessage)} className="btn-whatsapp animate-pulse-soft px-10"><MessageCircle className="h-5 w-5" /> Hablar por WhatsApp</a>
              </div>
              {subpages.length ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  {subpages.map((sub) => (
                    <Link key={sub.slug} href={`/seguros/${product.slug}/${sub.slug}`} className="rounded-full border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold tracking-wide text-[var(--blue-deep)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-all hover:shadow-md">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : null}
              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {product.benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[22px] bg-[var(--bg)] px-4 py-4 text-base leading-7 text-[var(--text)]">
                    <Check className="h-5 w-5 mt-0.5 shrink-0 text-[#4CAF50]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[360px] lg:min-h-full">
              <Image src={product.heroImage} alt={product.heroAlt} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,59,104,0.12)] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoverageHighlights({ product }: { product: Product }) {
  return (
    <section className="section-pad">
      <div className="container-shell grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="kicker">Coberturas destacadas</p>
          <h2 className="mt-3 section-title">Lo importante de {product.label}, explicado con más orden</h2>
          <p className="section-copy mt-4">Aquí resumimos los puntos que más suelen condicionar la decisión: qué se valora, qué cambia entre modalidades y qué preguntas merece la pena hacerse antes de contratar.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {product.highlights.map((item, idx) => (
            <div key={item} className="group soft-card glass p-8 hover-lift border-white/40 transition-all duration-300 hover:border-[var(--blue)]/20">
              <div className="mb-6 inline-flex rounded-2xl bg-[#4CAF50]/10 p-4 text-[#4CAF50] shadow-sm group-hover:bg-[#4CAF50]/20 transition-colors">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-lg leading-relaxed text-[var(--text)] font-medium">{item}</p>
              {idx === 0 && (
                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--green)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductDecisionGrid({ product }: { product: Product }) {
  const blocks = [
    {
      title: 'Qué suele incluir',
      items: product.whatIncludes,
      icon: ClipboardList,
      tint: 'bg-[rgba(15,94,156,0.06)]',
      accent: 'border-l-[var(--blue)]',
    },
    {
      title: 'Qué no siempre viene igual',
      items: product.whatVaries,
      icon: ShieldAlert,
      tint: 'bg-[rgba(242,140,40,0.08)]',
      accent: 'border-l-[var(--orange)]',
    },
    {
      title: 'Qué conviene revisar antes de contratar',
      items: product.whatReview,
      icon: CircleHelp,
      tint: 'bg-[rgba(123,198,126,0.12)]',
      accent: 'border-l-[var(--green)]',
    },
  ];

  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <p className="kicker">Lo que conviene tener claro</p>
          <h2 className="mt-3 section-title">Una lectura breve para entender mejor {product.label}</h2>
          <p className="section-copy mt-4">Este bloque resume qué suele incluir, qué puede cambiar según modalidad y qué merece la pena revisar antes de decidir. Sirve para orientar sin saturarte.</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <article key={block.title} className="soft-card glass p-8 md:p-10 hover-lift border-white/40 transition-all duration-300">
                <div className={`mb-6 inline-flex rounded-2xl p-4 text-[var(--blue-deep)] shadow-sm ${block.tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-[var(--blue-deep)] leading-tight">{block.title}</h3>
                <div className="mt-8 space-y-4">
                  {block.items.map((item) => (
                    <div key={item} className={`rounded-2xl border border-white/60 bg-white/60 px-5 py-5 text-sm leading-relaxed text-[var(--text)] md:text-base font-semibold shadow-sm backdrop-blur border-l-4 ${block.accent}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-6 rounded-[26px] border border-[var(--border)] bg-white px-6 py-5 text-sm leading-7 text-[var(--muted)] md:text-base">
          {product.disclaimer}
        </div>
      </div>
    </section>
  );
}

export function CasesAndForm({ product }: { product: Product }) {
  return (
    <section className="section-pad bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(238,242,247,0.92))]">
      <div className="container-shell grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="soft-card p-7 md:p-10">
          <p className="kicker">Perfiles y casos de uso</p>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">Cuándo suele encajar mejor</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">No todo el mundo necesita leer el producto igual. Estos perfiles te ayudan a ver más rápido si esta opción va contigo o si conviene mirar otra modalidad.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {product.cases.map((item) => <div key={item} className="flex items-center gap-3 rounded-[22px] bg-[var(--bg)] px-4 py-4 text-base font-medium tracking-wide text-[var(--text)]"><Users className="h-4 w-4 shrink-0 text-[var(--blue)]" />{item}</div>)}
          </div>
          <div className="mt-6 rounded-[24px] border border-[var(--border)] bg-white p-5 text-base leading-8 text-[var(--muted)]">Si tu situación no encaja exactamente en estos perfiles, no pasa nada. La orientación sirve precisamente para aterrizar lo que cambia según edad, uso, modalidad y necesidades concretas.</div>
        </div>
        <LeadForm defaultProduct={product.slug} compact />
      </div>
    </section>
  );
}

export function ProductFaqSection({ product }: { product: Product }) {
  return (
    <section className="section-pad" id="faqs-producto">
      <div className="container-shell grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="kicker">Preguntas frecuentes de {product.label}</p>
          <h2 className="mt-3 section-title">Dudas reales para decidir con más tranquilidad</h2>
          <p className="section-copy mt-4">Hemos recogido preguntas que suelen aparecer antes de contratar este tipo de seguro. La idea es ayudarte a decidir mejor, no llenarte de texto sin contexto.</p>
        </div>
        <FAQAccordion items={product.faqs} contextualLinks />
      </div>
    </section>
  );
}

export function SubpageHero({ subpage }: { subpage: ProductSubpage }) {
  return (
    <section className="section-pad pt-6 md:pt-10">
      <div className="container-shell">
        <div className="soft-card overflow-hidden">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_1fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <p className="kicker">{subpage.eyebrow}</p>
              <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight text-[var(--blue-deep)] md:text-6xl">{subpage.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)] md:text-xl">{subpage.summary}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacto" className="btn-primary">Solicitar orientación</Link>
                <a href={buildWhatsAppHref(subpage.whatsappMessage)} className="btn-whatsapp"><MessageCircle className="h-4 w-4" /> Consulta sin compromiso</a>
              </div>
              <div className="mt-7 grid gap-3">
                {subpage.bullets.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[22px] bg-[var(--bg)] px-4 py-4 text-base leading-7 text-[var(--text)]">
                    <Check className="h-5 w-5 mt-0.5 shrink-0 text-[#4CAF50]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[340px]">
              <Image src={subpage.heroImage} alt={subpage.heroAlt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RelatedProducts({ product }: { product: Product }) {
  const related = getRelatedProducts(product.related);
  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <p className="kicker">Otros seguros relacionados</p>
          <h2 className="mt-3 section-title">Si quieres comparar otras opciones, aquí tienes un siguiente paso lógico</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {related.map((item) => (
            <article key={item.slug} className="soft-card card-shine overflow-hidden hover-lift border-white/20 shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src={item.cardImage} alt={item.cardAlt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,34,68,0.7)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="kicker !text-white/70 font-bold tracking-widest">{item.eyebrow}</p>
                  <h3 className="mt-2 font-heading text-4xl font-bold tracking-tight">{item.label}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-base leading-relaxed text-[var(--muted)]">{item.summary}</p>
                <div className="mt-8 flex flex-col gap-3">
                  <Link href={`/seguros/${item.slug}`} className="btn-secondary w-full justify-center shadow-lg">Ver más información <ArrowRight className="h-4 w-4" /></Link>
                  <a href={buildWhatsAppHref(item.whatsappMessage)} className="btn-ghost w-full justify-center border-white/40 bg-white/40 backdrop-blur">Consulta rápida</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCTASection({ title, text, message }: { title: string; text: string; message: string }) {
  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <div className="soft-card overflow-hidden shadow-xl">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Content side */}
            <div className="bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 md:p-10 lg:p-12 text-white">
              <p className="kicker !text-white/60">Tu siguiente paso</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
              <p className="mt-4 max-w-xl text-lg leading-9 text-white/80">{text}</p>

              {/* 3-step mini process */}
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { step: '01', label: 'Cuéntanos', desc: 'Tu situación y qué quieres proteger' },
                  { step: '02', label: 'Comparamos', desc: 'Opciones reales con explicación clara' },
                  { step: '03', label: 'Decides tú', desc: 'Sin presión, con todo el contexto' },
                ].map((item) => (
                  <div key={item.step} className="rounded-[20px] bg-white/10 p-5 backdrop-blur">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-extrabold">{item.step}</span>
                    <p className="mt-3 font-heading text-lg font-bold">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={buildWhatsAppHref(message)} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"><MessageCircle className="h-5 w-5" /> Hablar por WhatsApp</a>
                <Link href="/contacto" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]">Solicitar orientación</Link>
              </div>
            </div>

            {/* Trust side */}
            <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-br from-[rgba(15,94,156,0.03)] to-[rgba(123,198,126,0.05)]">
              <div className="flex flex-col gap-6 h-full justify-center">
                <div className="flex items-center gap-4 rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--blue-deep)] text-white"><Users className="h-5 w-5" /></div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">1.200+</p>
                    <p className="text-sm text-[var(--muted)]">Familias atendidas con cercanía</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-white"><ShieldCheck className="h-5 w-5" /></div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">+10 años</p>
                    <p className="text-sm text-[var(--muted)]">Experiencia y formación continua</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--orange)] text-white"><HeartHandshake className="h-5 w-5" /></div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">100%</p>
                    <p className="text-sm text-[var(--muted)]">Orientación sin compromiso</p>
                  </div>
                </div>
                <a href={`tel:${site.phoneHref}`} className="btn-ghost w-full justify-center mt-2"><Phone className="h-4 w-4" /> Llamar al {site.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
