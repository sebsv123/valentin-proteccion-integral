"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/products';

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section id="testimonios" className="section-pad">
      <div className="container-shell">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="kicker">Opiniones</p>
            <h2 className="mt-3 section-title">Personas reales, comentarios creíbles y una sensación más humana</h2>
            <p className="section-copy mt-4">La confianza no se construye con frases grandilocuentes. Se construye con claridad, seguimiento y una experiencia que el cliente nota.</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-ghost !px-4 !py-3" onClick={() => emblaApi?.scrollPrev()} aria-label="anterior"><ChevronLeft className="h-5 w-5" /></button>
            <button className="btn-ghost !px-4 !py-3" onClick={() => emblaApi?.scrollNext()} aria-label="siguiente"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((item, index) => (
              <div key={`${item.name}-${index}`} className="min-w-0 shrink-0 basis-[90%] md:basis-[48%] xl:basis-[31%]">
                <article className="soft-card h-full p-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--blue)] text-base font-bold text-white shadow-sm">{item.avatar}</div>
                      <div>
                        <p className="font-heading text-lg font-semibold text-[var(--text)]">{item.name}</p>
                        <p className="text-sm text-[var(--muted)]">Cliente · {item.location}</p>
                      </div>
                    </div>
                    <Quote className="h-5 w-5 shrink-0 text-[var(--orange)]" />
                  </div>
                  <div className="mb-4 flex gap-1 text-[var(--orange)]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-base leading-8 text-[var(--muted)]">“{item.quote}”</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
