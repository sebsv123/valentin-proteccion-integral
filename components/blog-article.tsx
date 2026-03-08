"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPost, getRelatedPosts } from '@/lib/blog';
import { buildWhatsAppHref, site } from '@/lib/products';

export function BlogArticle({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug);

  return (
    <>
      {/* Hero */}
      <section className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Link href="/blog" className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-deep)]">
            <ArrowLeft className="h-4 w-4" /> Volver al blog
          </Link>
          <div className="mt-4 soft-card overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image src={post.image} alt={post.imageAlt} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,34,68,0.7))]" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime} lectura</span>
                </div>
                <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">{post.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[1fr_340px]">
            {/* Article body */}
            <div className="space-y-8">
              {post.sections.map((section, idx) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="soft-card p-7 md:p-9"
                >
                  <h2 className="font-heading text-3xl font-bold text-[var(--blue-deep)] md:text-4xl">{section.heading}</h2>
                  <div className="mt-5 space-y-4">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-base leading-8 text-[var(--muted)] md:text-lg">{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* CTA */}
              <div className="soft-card bg-[linear-gradient(135deg,rgba(0,34,68,0.96),rgba(0,51,102,0.9))] p-8 text-white md:p-10">
                <p className="kicker !text-white/70">¿Te ha resultado útil?</p>
                <h3 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">Podemos aterrizar esta información a tu caso concreto</h3>
                <p className="mt-4 max-w-2xl text-lg leading-9 text-white/80">Si quieres una orientación personalizada sobre lo que has leído, escríbenos por WhatsApp o solicita una consulta sin compromiso.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={buildWhatsAppHref(`Hola, vengo del artículo "${post.title}" y quiero una orientación.`)} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]">Hablar por WhatsApp</a>
                  <Link href="/contacto" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]">Ir a contacto</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Mascot tips */}
              <div className="soft-card overflow-hidden">
                <div className="relative h-48 bg-[linear-gradient(180deg,rgba(76,175,80,0.15),rgba(0,51,102,0.05))]">
                  <Image src="/images/home/mascota-vpi.png" alt="Mascota de ayuda VPI" fill className="object-contain p-4" />
                </div>
                <div className="p-5">
                  <p className="font-heading text-xl font-bold text-[var(--blue-deep)]">Consejos rápidos</p>
                  <div className="mt-4 space-y-3">
                    {post.tips.map((tip, idx) => (
                      <div key={idx} className="rounded-[18px] bg-[var(--bg)] px-4 py-3 text-sm leading-7 text-[var(--text)]">
                        💡 {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <div className="soft-card p-5">
                <p className="font-heading text-xl font-bold text-[var(--blue-deep)]">¿Prefieres resolverlo en persona?</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Puedes escribirnos por WhatsApp y te ayudamos a aterrizar cualquier información a tu caso concreto.</p>
                <div className="mt-4 grid gap-3">
                  <a href={buildWhatsAppHref('Hola, vengo del blog y quiero una orientación.')} className="btn-whatsapp w-full justify-center">WhatsApp</a>
                  <Link href="/contacto" className="btn-ghost w-full justify-center">Formulario</Link>
                </div>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="soft-card p-5">
                  <p className="font-heading text-xl font-bold text-[var(--blue-deep)]">Más artículos</p>
                  <div className="mt-4 space-y-4">
                    {related.map((relPost) => (
                      <Link key={relPost.slug} href={`/blog/${relPost.slug}`} className="group block">
                        <div className="rounded-[18px] border border-[var(--border)] bg-white p-4 transition-all hover:border-[var(--blue)] hover:shadow-sm">
                          <p className="font-heading text-lg font-semibold text-[var(--blue-deep)] group-hover:text-[var(--blue)]">{relPost.title}</p>
                          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{relPost.excerpt}</p>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--blue)]">Leer más <ArrowRight className="h-3.5 w-3.5" /></span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
