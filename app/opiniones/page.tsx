import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Instagram, MapPin, MessageCircle, Shield, Star, Users } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { site, buildWhatsAppHref, testimonials } from '@/lib/products';

export const metadata: Metadata = {
  title: `Opiniones de Clientes · Seguros en Madrid | ${site.name}`,
  description: 'Reseñas verificadas de personas reales que han confiado en Rosa Valentín para orientarse y elegir su seguro con más claridad. Boadilla del Monte, Madrid.',
};

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" />
      ))}
    </div>
  );
}

export default function OpinionesPage() {
  return (
    <>
      <Header />
      <main className="pt-6 md:pt-8">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Opiniones' }]} />
        </div>

        {/* Hero */}
        <section className="section-pad pb-0">
          <div className="container-shell">
            <div className="soft-card glass overflow-hidden border-white/40 p-8 md:p-12 shadow-xl bg-premium-glow">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <p className="kicker font-bold tracking-[0.3em]">Confianza y opiniones</p>
                  <h1 className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-gradient md:text-6xl leading-[1.05]">
                    Lo que dicen quienes ya han confiado en nosotros
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)]">
                    La mejor señal de un buen asesoramiento no es lo que decimos nosotros, sino cómo lo viven las personas que han confiado en nuestra orientación para proteger a su familia.
                  </p>
                  
                  {/* Trust Summary Bar - Filling the gap */}
                  <div className="mt-10 flex flex-wrap gap-6 items-center border-t border-black/5 pt-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--green)]/10 text-[var(--green)]">
                        <Shield className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-[var(--blue-deep)]">100% Verificado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--blue)]/10 text-[var(--blue)]">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-[var(--blue-deep)]">+1.2k Familias</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center lg:items-end">
                  <div className="rounded-[30px] border border-[var(--border)] bg-white px-8 py-8 text-center shadow-lg transition-transform hover:scale-[1.02] duration-300">
                    <p className="font-heading text-6xl font-extrabold text-[var(--blue-deep)]">4.9<span className="text-2xl text-[var(--muted)]">/5</span></p>
                    <div className="my-3"><StarRating /></div>
                    <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-[0.2em]">Valoración media</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">Basada en reseñas reales</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={buildWhatsAppHref('Hola Rosa, he leído las opiniones y me gustaría hablar contigo.')} className="btn-whatsapp !px-6"><MessageCircle className="h-4 w-4" /> Hablar ahora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All testimonials grid */}
        <section className="section-pad bg-alternate">
          <div className="container-shell">
            <div className="mb-8 max-w-3xl">
              <p className="kicker">Todas las opiniones</p>
              <h2 className="mt-3 section-title">Experiencias de personas reales</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item, index) => (
                <article key={`${item.name}-${index}`} className="group soft-card p-7 transition-all duration-300 hover:shadow-xl hover:border-[var(--blue)]/20 hover:-translate-y-1">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)] text-lg font-bold text-white shadow-md">{item.avatar}</div>
                        <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#4CAF50] text-white shadow-sm">
                          <Shield className="h-3 w-3" />
                        </div>
                      </div>
                      <div>
                        <p className="font-heading text-lg font-bold text-[var(--blue-deep)]">{item.name}</p>
                        <div className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4"><StarRating /></div>
                  <p className="text-base leading-8 text-[var(--muted)] italic">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-2 pt-4 border-t border-[var(--border)]">
                    <Shield className="h-4 w-4 text-[#4CAF50]" />
                    <span className="text-xs font-semibold text-[#4CAF50] uppercase tracking-widest">Opinión verificada</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Google Reviews prep */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="rounded-[28px] border border-[var(--border)] bg-gradient-to-r from-white to-[rgba(15,94,156,0.03)] p-7 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--blue-deep)] shadow-lg">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold text-[var(--blue-deep)]">{site.name}</p>
                    <p className="text-sm text-[var(--muted)]">Boadilla del Monte, Madrid · Asesoría de seguros</p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <StarRating />
                      <span className="text-sm font-bold text-[var(--blue-deep)]">4.9</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={buildWhatsAppHref('Hola, quiero dejar mi opinión sobre mi experiencia.')} className="btn-primary !px-6">Dejar una opinión</a>
                  <Link href="/contacto" className="btn-ghost !px-6">
                    Contactar <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram social proof */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card overflow-hidden shadow-lg">
              <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="mb-5 flex items-center gap-3">
                    <Instagram className="h-6 w-6 text-[var(--blue)]" />
                    <p className="kicker !m-0">Síguenos en Instagram</p>
                  </div>
                  <h2 className="font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">Consejos, novedades y experiencias en @segurosrosavalentin</h2>
                  <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                    Contenido útil sobre seguros, consejos prácticos y un canal más cercano para estar al día. Sin presión, con información que de verdad ayuda a decidir.
                  </p>
                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {['Consejos para elegir mejor', 'Novedades del sector', 'Experiencias de clientes', 'Contenido educativo'].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-[var(--bg)] px-4 py-3.5 text-sm font-semibold text-[var(--blue-deep)] border border-[var(--border)]">
                        <div className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-7">
                    <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-secondary"><Instagram className="h-4 w-4" /> Seguir en Instagram</a>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[rgba(15,94,156,0.06)] to-[rgba(123,198,126,0.08)] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="grid gap-4 grid-cols-2">
                    {[
                      { value: '+1.200', label: 'Familias orientadas' },
                      { value: '8', label: 'Ramos de seguro' },
                      { value: '+10', label: 'Años de experiencia' },
                      { value: '100%', label: 'Sin compromiso' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-[22px] bg-white border border-[var(--border)] p-5 text-center shadow-sm">
                        <p className="font-heading text-2xl font-extrabold text-[var(--blue-deep)]">{stat.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 text-white md:p-10 text-center">
              <p className="kicker !text-white/70">¿Quieres formar parte?</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Tu experiencia también cuenta</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-9 text-white/80">
                Si ya has trabajado con nosotros y te has sentido bien orientado, nos encantará saber tu opinión. Tu comentario ayuda a otras personas a decidir con más confianza.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row justify-center">
                <a href={buildWhatsAppHref('Hola, quiero compartir mi experiencia como cliente.')} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"><MessageCircle className="h-4 w-4" /> Compartir mi experiencia</a>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]"><Instagram className="h-4 w-4" /> Seguir en Instagram</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
