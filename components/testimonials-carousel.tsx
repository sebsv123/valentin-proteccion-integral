"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ExternalLink, MapPin, Quote, Star, Shield } from 'lucide-react';
import { testimonials, site } from '@/lib/products';
import ScrollReveal from './ui/scroll-reveal';

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" />
      ))}
    </div>
  );
}

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section id="testimonios" className="section-pad">
      <div className="container-shell">
        {/* Header with stats */}
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="kicker">Opiniones verificadas</p>
              <h2 className="mt-3 section-title">La confianza se construye con cada conversación</h2>
              <p className="section-copy mt-4">Personas reales que han confiado en Rosa Valentín para orientarse, comparar y elegir con más claridad. Sin presión, sin prisas.</p>
            </div>
            <div className="flex items-center gap-6">
              {/* Aggregated review stats */}
              <div className="hidden md:flex items-center gap-4 rounded-[24px] border border-[var(--border)] bg-white px-6 py-4 shadow-sm">
                <div className="flex flex-col items-center">
                  <span className="font-heading text-3xl font-extrabold text-[var(--blue-deep)]">4.9</span>
                  <StarRating />
                </div>
                <div className="h-10 w-px bg-[var(--border)]" />
                <div className="text-sm">
                  <p className="font-bold text-[var(--blue-deep)]">{testimonials.length} opiniones</p>
                  <p className="text-[var(--muted)]">Clientes verificados</p>
                </div>
              </div>
              {/* Navigation */}
              <div className="flex gap-2">
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--blue-deep)] shadow-sm transition-all hover:bg-[var(--blue-deep)] hover:text-white hover:shadow-lg" onClick={() => emblaApi?.scrollPrev()} aria-label="anterior">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--blue-deep)] shadow-sm transition-all hover:bg-[var(--blue-deep)] hover:text-white hover:shadow-lg" onClick={() => emblaApi?.scrollNext()} aria-label="siguiente">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((item, index) => (
                <div key={`${item.name}-${index}`} className="min-w-0 shrink-0 basis-[88%] md:basis-[46%] xl:basis-[31%]">
                  <article className="group h-full rounded-[28px] border border-[var(--border)] bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[var(--blue)]/20 hover:-translate-y-1">
                    {/* Header */}
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)] text-lg font-bold text-white shadow-md">{item.avatar}</div>
                          <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#4CAF50] text-white shadow-sm">
                            <Shield className="h-3 w-3" />
                          </div>
                        </div>
                        <div>
                          <p className="font-heading text-lg font-bold text-[var(--blue-deep)]">{item.name}</p>
                          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                      <Quote className="h-8 w-8 shrink-0 text-[var(--orange)]/30 group-hover:text-[var(--orange)]/60 transition-colors" />
                    </div>

                    {/* Stars */}
                    <div className="mb-4">
                      <StarRating />
                    </div>

                    {/* Quote */}
                    <p className="text-base leading-8 text-[var(--muted)] italic">&ldquo;{item.quote}&rdquo;</p>

                    {/* Footer */}
                    <div className="mt-5 flex items-center gap-2 pt-4 border-t border-[var(--border)]">
                      <Shield className="h-4 w-4 text-[#4CAF50]" />
                      <span className="text-xs font-semibold text-[#4CAF50] uppercase tracking-widest">Opinión verificada</span>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 rounded-[28px] border border-[var(--border)] bg-gradient-to-r from-white to-[rgba(15,94,156,0.03)] p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--blue-deep)] shadow-lg">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-[var(--blue-deep)]">Valentín Protección Integral</p>
                  <p className="text-sm text-[var(--muted)]">Boadilla del Monte, Madrid · Asesoría de seguros</p>
                  <div className="mt-1 flex items-center gap-2">
                    <StarRating />
                    <span className="text-sm font-semibold text-[var(--blue-deep)]">4.9</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent('Hola, quiero una consulta sin compromiso.')}`} className="btn-whatsapp !px-6 !py-3 text-sm">Contactar</a>
                <a href="/opiniones" className="btn-ghost !px-6 !py-3 text-sm">
                  Ver todas las opiniones <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
