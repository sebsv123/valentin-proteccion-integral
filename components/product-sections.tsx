import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgePercent, Check, CircleHelp, ClipboardList, HeartHandshake, Phone, ShieldAlert, ShieldCheck, Users } from 'lucide-react';
import RevealLight from './ui/reveal-light';
import { buildWhatsAppHref, getRelatedProducts, getSubpagesForProduct, site } from '@/lib/products';
import { getLocalizedProduct, localizedProductPath, localizedSubpagePath } from '@/lib/product-locales';
import type { Product, ProductSubpage } from '@/lib/products';
import { LeadForm } from './lead-form';
import { FAQAccordion } from './faq-accordion';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import { EditorialProductHero } from './editorial-product-hero';
import { useLocale } from 'next-intl';

export function ProductHero({ product, locale }: { product: Product; locale?: 'es'|'en' }) {
  const en = locale ? locale === 'en' : useLocale() === 'en';
  if (product.slug === 'salud') return <EditorialProductHero product={product} />;
  const subpages = getSubpagesForProduct(product.slug);
  const advisor = product.customAdvisor || {
    name: site.advisorName[en ? 'en' : 'es'],
    whatsappNumber: site.whatsappNumber,
    phoneHref: site.phoneHref
  };

  return (
    <section className="section-pad pt-6 md:pt-10 bg-white-pure relative overflow-hidden">
      <div className="container-shell">
        <RevealLight>
          <div className="soft-card glass overflow-hidden border-white/40 shadow-2xl bg-premium-glow">
            <div className="grid items-stretch gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-12 lg:p-16">
                <p className="kicker font-bold tracking-[0.3em]">{product.eyebrow}</p>
                <h1 id="product-h1" className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-gradient md:text-6xl lg:text-7xl leading-[1.1]">{product.h1}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">{product.heroCopy}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href={en ? '/en/contact' : '/contacto'} className="btn-primary hover-lift px-10">{en ? 'Ask for guidance' : 'Solicitar orientación'}</Link>
                  <a href={`https://wa.me/${advisor.whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`} className="btn-whatsapp animate-pulse-soft px-10"><WhatsAppIcon className="h-5 w-5" /> {en ? 'Talk to' : 'Hablar con'} {advisor.name}</a>
                </div>
                {subpages.length ? (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {subpages.map((sub) => (
                      <Link key={sub.slug} href={localizedSubpagePath(product.slug, sub.slug, en ? 'en' : 'es')} className="rounded-full border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold tracking-wide text-[var(--blue-deep)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-all hover:shadow-md">
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
         </RevealLight>
      </div>
    </section>
  );
}

export function CoverageHighlights({ product, locale }: { product: Product; locale?: 'es'|'en' }) {
  const isNegocio = product.slug === 'negocio';
  const en = locale ? locale === 'en' : useLocale() === 'en';
  
  return (
     <section id="coberturas" aria-labelledby="coverage-title" className="section-pad bg-alternate">
      <div className="container-shell grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
        <RevealLight direction="right">
          <div>
            <p className="kicker">{en ? 'Featured cover' : 'Coberturas destacadas'}</p>
            <h2 id="coverage-title" className="mt-3 section-title">{en ? `What matters about ${product.label}, explained clearly` : `Lo importante de ${product.label}, explicado con más orden`}</h2>
            <p className="section-copy mt-4">{en ? 'A short summary of what usually shapes the decision, what varies and what is worth checking before arranging cover.' : 'Aquí resumimos los puntos que más suelen condicionar la decisión: qué se valora, qué cambia entre modalidades y qué preguntas merece la pena hacerse antes de contratar.'}</p>
            {isNegocio && (
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                Un seguro de negocio bien diseñado protege tanto el continente (local, instalaciones, mobiliario) como el contenido (stock, equipos, mercancía) y la responsabilidad frente a terceros. Las coberturas más habituales en un multirriesgo de comercio o pyme incluyen:
              </p>
            )}
          </div>
         </RevealLight>
         <div className="grid gap-6 md:grid-cols-2">
          {product.highlights.map((item, idx) => (
            <RevealLight key={idx} delay={idx * 0.1}>
              <div className="group soft-card glass p-8 hover-lift border-white/40 transition-all duration-300 hover:border-[var(--blue)]/20">
                <div className="mb-6 inline-flex rounded-2xl bg-[#4CAF50]/10 p-4 text-[#4CAF50] shadow-sm group-hover:bg-[#4CAF50]/20 transition-colors">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="text-lg leading-relaxed text-[var(--text)] font-medium">{typeof item === 'string' ? item : item.title}</p>
                {idx === 0 && (
                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--green)]" />
                )}
              </div>
             </RevealLight>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductDecisionGrid({ product, locale }: { product: Product; locale?: 'es'|'en' }) {
  const en = locale ? locale === 'en' : useLocale() === 'en';
  const blocks = [
    {
      title: en ? 'What it usually includes' : 'Qué suele incluir',
      items: product.whatIncludes,
      icon: ClipboardList,
      tint: 'bg-[rgba(15,94,156,0.06)]',
      accent: 'border-l-[var(--blue)]',
    },
    {
      title: en ? 'What does not always come the same way' : 'Qué no siempre viene igual',
      items: product.whatVaries,
      icon: ShieldAlert,
      tint: 'bg-[rgba(242,140,40,0.08)]',
      accent: 'border-l-[var(--orange)]',
    },
    {
      title: en ? 'What to review before arranging cover' : 'Qué conviene revisar antes de contratar',
      items: product.whatReview,
      icon: CircleHelp,
      tint: 'bg-[rgba(123,198,126,0.12)]',
      accent: 'border-l-[var(--green)]',
    },
  ];

  return (
     <section className="section-pad pt-0">
      <div className="container-shell">
        <RevealLight>
          <div className="mb-8 max-w-3xl">
            <p className="kicker">{en ? 'What is worth knowing' : 'Lo que conviene tener claro'}</p>
            <h2 className="mt-3 section-title">{en ? `A short guide to understand ${product.label}` : `Una lectura breve para entender mejor ${product.label}`}</h2>
            <p className="section-copy mt-4">{en ? 'This section summarises what is usually included, what may vary by plan and what is worth checking before deciding.' : 'Este bloque resume qué suele incluir, qué puede cambiar según modalidad y qué merece la pena revisar antes de decidir. Sirve para orientar sin saturarte.'}</p>
          </div>
         </RevealLight>
         <div className="grid gap-5 xl:grid-cols-3">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <RevealLight key={block.title} delay={idx * 0.1}>
                <article className="soft-card glass p-8 md:p-10 h-full hover-lift border-white/40 transition-all duration-300">
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
               </RevealLight>
            );
          })}
         </div>
        <RevealLight delay={0.4}>
          <div className="mt-6 rounded-[26px] border border-[var(--border)] bg-white px-6 py-5 text-sm leading-7 text-[var(--muted)] md:text-base">
            {product.disclaimer}
          </div>
         </RevealLight>
      </div>
    </section>
  );
}

export function CasesAndForm({ product, defaultProduct, locale }: { product: Product; defaultProduct?: string; locale?: 'es'|'en' }) {
  const en = locale ? locale === 'en' : useLocale() === 'en';
  return (
     <section id="contacto-producto" aria-labelledby="contact-product-title" className="section-pad bg-alternate">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <RevealLight direction="left">
            <div>
              <p className="kicker">{en ? 'Let us make it practical' : 'Aterrizamos tu caso'}</p>
              <h2 id="contact-product-title" className="mt-3 section-title">{en ? `We can answer your questions about ${product.label} now` : `Podemos resolver tus dudas sobre ${product.label} ahora mismo`}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">{en ? 'These profiles help you quickly see whether this option fits or whether another plan is worth considering.' : 'No todo el mundo necesita leer el producto igual. Estos perfiles te ayudan a ver más rápido si esta opción va contigo o si conviene mirar otra modalidad.'}</p>
               <div className="mt-6 grid gap-3 md:grid-cols-2">
                {product.cases.map((item, idx) => (
                  <RevealLight 
                    key={item} 
                    delay={idx * 0.05}
                    className="flex items-center gap-3 rounded-[22px] bg-[var(--bg)] px-4 py-4 text-base font-medium tracking-wide text-[var(--text)] border border-transparent hover:border-[var(--blue)]/20 transition-all"
                  >
                    <Users className="h-4 w-4 shrink-0 text-[var(--blue)]" />
                    {item}
                  </RevealLight>
                ))}
              </div>
              <div className="mt-6 rounded-[24px] border border-[var(--border)] bg-white p-5 text-base leading-8 text-[var(--muted)]">Si tu situación no encaja exactamente en estos perfiles, no pasa nada. La orientación sirve precisamente para aterrizar lo que cambia según edad, uso, modalidad y necesidades concretas.</div>
            </div>
           </RevealLight>
          <RevealLight direction="right">
            <LeadForm defaultProduct={defaultProduct || product.slug} compact />
           </RevealLight>
        </div>
      </div>
    </section>
  );
}

export function ProductFaqSection({ product, locale: explicitLocale }: { product: Product; locale?: 'es'|'en' }) {
  const locale = useLocale();
  const en = explicitLocale ? explicitLocale === 'en' : locale === 'en';
  return (
    <section id="faqs-producto" aria-labelledby="faq-product-title" className="section-pad bg-white-pure">
      <div className="container-shell grid gap-8 xl:grid-cols-[0.84fr_1.16fr] items-start">
        <RevealLight direction="right">
          <div>
            <p className="kicker">{en ? 'Frequently asked questions' : 'Preguntas frecuentes'}</p>
            <h2 id="faq-product-title" className="mt-3 section-title">{en ? `What people ask most about ${product.label}` : `Lo que más se suele preguntar sobre ${product.label}`}</h2>
            <p className="section-copy mt-4">{en ? 'We have collected questions that often come up before arranging this type of insurance, so you can decide with context.' : 'Hemos recogido preguntas que suelen aparecer antes de contratar este tipo de seguro. La idea es ayudarte a decidir mejor, no llenarte de texto sin contexto.'}</p>
          </div>
         </RevealLight>
        <RevealLight direction="left">
          <FAQAccordion items={product.faqs} contextualLinks locale={locale as 'es' | 'en'} />
         </RevealLight>
      </div>
    </section>
  );
}

export function SubpageHero({ subpage }: { subpage: ProductSubpage }) {
  const en = useLocale() === 'en';
  return (
    <section className="section-pad pt-6 md:pt-10 bg-white-pure relative overflow-hidden">
      <div className="container-shell">
        <RevealLight>
          <div className="soft-card overflow-hidden border border-[var(--border)] shadow-xl">
            <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_1fr]">
              <div className="p-7 md:p-10 lg:p-12">
                <p className="kicker">{subpage.eyebrow}</p>
                <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight text-[var(--blue-deep)] md:text-6xl">{subpage.h1}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)] md:text-xl">{subpage.summary}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href={en ? '/en/contact' : '/contacto'} className="btn-primary">{en ? 'Ask for guidance' : 'Solicitar orientación'}</Link>
                  <a href={buildWhatsAppHref(subpage.whatsappMessage)} className="btn-whatsapp"><WhatsAppIcon className="h-4 w-4" /> {en ? 'No-obligation enquiry' : 'Consulta sin compromiso'}</a>
                </div>
                <div className="mt-7 grid gap-3">
                  {subpage.bullets.map((item, idx) => (
                    <RevealLight 
                      key={item} 
                      delay={idx * 0.1}
                      className="flex items-start gap-3 rounded-[22px] bg-[var(--bg)] px-4 py-4 text-base font-semibold text-[var(--text)] border border-transparent hover:border-[var(--blue)]/10 transition-all"
                    >
                      <Check className="h-5 w-5 mt-0.5 shrink-0 text-[#4CAF50]" />
                      <span>{item}</span>
                    </RevealLight>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[340px]">
                <Image
                  src={subpage.heroImage}
                  alt={`Imagen representativa de ${subpage.h1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </div>
          </div>
         </RevealLight>
      </div>
    </section>
  );
}

export function RelatedProducts({ product, healthVariant = false, locale }: { product: Product; healthVariant?: boolean; locale?: 'es'|'en' }) {
  const en = locale ? locale === 'en' : useLocale() === 'en';
  const related = getRelatedProducts(product.related).map((item) => en ? getLocalizedProduct(item, 'en') : item);
  return (
    <section id="aspectos-clave" aria-labelledby="decision-title" className="section-pad bg-white-pure overflow-hidden">
      <div className="container-shell">
        <RevealLight>
          <div className="mb-12 max-w-3xl">
            <p className="kicker">{healthVariant ? (en ? 'Other ways we can help' : 'Otras formas de protegerte') : 'Decide con criterio'}</p>
            <h2 id="decision-title" className="mt-3 section-title">{healthVariant ? (en ? 'We can also help with other protection needs' : 'También podemos ayudarte con otras necesidades de protección') : `Cuestiones clave para comparar ${product.label} sin perderte en la letra pequeña`}</h2>
          </div>
         </RevealLight>
        <div className="grid gap-8 lg:grid-cols-3">
          {related.map((item, idx) => (
            <RevealLight key={item.slug} delay={idx * 0.1}>
              <article className="soft-card card-shine overflow-hidden h-full flex flex-col hover-lift border-white/20 shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={item.cardImage}
                    alt={item.cardAlt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,34,68,0.7)] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="kicker !text-white/70 font-bold tracking-widest">{en && healthVariant ? ({ dental: 'HEALTHY SMILE', decesos: 'FAMILY PLANNING', vida: 'FAMILY PROTECTION' } as Record<string, string>)[item.slug] ?? item.eyebrow : item.eyebrow}</p>
                    <h3 className="mt-2 font-heading text-4xl font-bold tracking-tight">{en && healthVariant ? ({ dental: 'Dental', decesos: 'Funeral', vida: 'Life' } as Record<string, string>)[item.slug] ?? item.label : item.label}</h3>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                    <p className="text-base leading-relaxed text-[var(--muted)] flex-grow">{en && healthVariant ? ({ dental: 'A clearer way to review check-ups, emergencies, specialist care and included services without reducing everything to one cleaning or one occasional visit.', decesos: 'Complete funeral service, family support, administrative arrangements and additional cover adapted to each family.', vida: 'Life protection explained clearly so your family can have financial support when it matters.' } as Record<string, string>)[item.slug] ?? item.summary : item.summary}</p>
                  <div className="mt-8 flex flex-col gap-3">
                    <Link href={localizedProductPath(item.slug, en ? 'en' : 'es')} className="btn-secondary w-full justify-center shadow-lg">{en ? `View ${item.name.toLowerCase()}` : `Ver seguro de ${item.name}`} <ArrowRight className="h-4 w-4" /></Link>
                    <a href={buildWhatsAppHref(item.whatsappMessage)} className="btn-ghost w-full justify-center border-white/40 bg-white/40 backdrop-blur"><WhatsAppIcon className="h-4 w-4" /> {en && healthVariant ? 'Quick enquiry' : 'Consulta rápida'}</a>
                  </div>
                </div>
              </article>
             </RevealLight>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCTASection({ product, title, text, message, locale }: { product: Product; title: string; text: string; message: string; locale?: 'es'|'en' }) {
  const en = locale ? locale === 'en' : useLocale() === 'en';
  const advisor = product.customAdvisor || {
    name: site.advisorName[en ? 'en' : 'es'],
    whatsappNumber: site.whatsappNumber,
    phoneHref: site.phoneHref,
    phone: site.phone
  };

  return (
    <>
      {/* GARANTÍA DE PRECIO */}
      <section className="py-10 sm:py-14 bg-[var(--bg-soft)] border-y border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-white border border-[var(--border)] shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
              <BadgePercent className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-lg sm:text-xl font-bold text-[var(--blue-deep)]">
                {en ? 'The same insurance. A better price. Guaranteed.' : 'El mismo seguro. Mejor precio. Garantizado.'}
              </p>
              <p className="text-sm sm:text-base text-[var(--muted)] mt-1">
                {en ? 'Bring us your bank or broker quote and we will review it with you across the plans we can distribute, so you can assess which option fits your case best.' : 'Tráenos el precio de tu banco o gestoría y lo revisamos contigo entre las modalidades que podemos distribuir, para que valores la opción que mejor se ajusta a tu caso.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA PRINCIPAL */}
      <section className="section-pad bg-white-pure">
        <div className="container-shell">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Content side */}
            <div className="bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 md:p-10 lg:p-12 text-white">
              <p className="kicker !text-white/60">{en ? 'Your next step' : 'Tu siguiente paso'}</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
              <p className="mt-4 max-w-xl text-lg leading-9 text-white/80">{text}</p>

              {/* 3-step mini process */}
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { step: '01', label: en ? 'Tell us' : 'Cuéntanos', desc: en ? 'Your situation and what you want to protect' : 'Tu situación y qué quieres proteger' },
                  { step: '02', label: en ? 'We assess' : 'Analizamos', desc: en ? 'Real options with a clear explanation' : 'Opciones reales con explicación clara' },
                  { step: '03', label: en ? 'You decide' : 'Decides tú', desc: en ? 'No pressure, with the full context' : 'Sin presión, con todo el contexto' },
                ].map((item) => (
                  <div key={item.step} className="rounded-[20px] bg-white/10 p-5 backdrop-blur">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-extrabold">{item.step}</span>
                    <p className="mt-3 font-heading text-lg font-bold">{item.label}</p>
                    <p className="mt-1 text-sm leading-6 text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/${advisor.whatsappNumber}?text=${encodeURIComponent(message)}`} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"><WhatsAppIcon className="h-5 w-5" /> {en ? 'Talk to' : 'Hablar con'} {advisor.name}</a>
                <Link href={en ? '/en/contact' : '/contacto'} className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]">{en ? 'Ask for guidance' : 'Solicitar orientación'}</Link>
              </div>
            </div>

            {/* Trust side */}
            <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-br from-[rgba(15,94,156,0.03)] to-[rgba(123,198,126,0.05)]">
              <div className="flex flex-col gap-6 h-full justify-center">
                <div className="flex items-center gap-4 rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--blue-deep)] text-white"><Users className="h-5 w-5" /></div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{product.slug === 'vida' ? '900+' : '1.200+'}</p>
                    <p className="text-sm text-[var(--muted)]">{product.slug === 'vida' ? (en ? 'Clients protected by Sebastián' : 'Clientes protegidos por Sebastián') : (en ? 'Families supported by Rosa' : 'Familias atendidas por Rosa')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-white"><ShieldCheck className="h-5 w-5" /></div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">+10 años</p>
                    <p className="text-sm text-[var(--muted)]">{en ? 'Experience and continuous training' : 'Experiencia y formación continua'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--orange)] text-white"><HeartHandshake className="h-5 w-5" /></div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">100%</p>
                    <p className="text-sm text-[var(--muted)]">{en ? 'No-obligation guidance' : 'Orientación sin compromiso'}</p>
                  </div>
                </div>
                <a href={`tel:${advisor.phoneHref}`} className="btn-ghost w-full justify-center mt-2"><Phone className="h-4 w-4" /> {en ? 'Call' : 'Llamar al'} {advisor.phone || site.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
