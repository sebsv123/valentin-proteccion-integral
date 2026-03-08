import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { site, buildWhatsAppHref } from '@/lib/products';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description: 'Guías breves y contenido útil para entender mejor seguros de salud, vida, mascotas y viaje en España.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-pad pt-6 md:pt-10">
          <div className="container-shell">
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog' }]} />
            <div className="mt-6 soft-card overflow-hidden p-7 md:p-10">
              <p className="kicker">Blog</p>
              <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight text-[var(--blue-deep)] md:text-6xl">Contenido útil para decidir con más criterio</h1>
              <p className="mt-4 max-w-3xl text-lg leading-9 text-[var(--muted)]">Aquí reunimos guías breves, consejos y preguntas que ayudan a entender mejor qué conviene revisar antes de contratar. Sin ruido, sin promesas grandilocuentes y con un lenguaje más claro.</p>
            </div>
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-shell grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="soft-card overflow-hidden group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-60 overflow-hidden">
                    <Image src={post.image} alt={post.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,34,68,0.5))]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex items-center gap-3 text-xs text-white/80">
                        <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-2xl font-semibold text-[var(--blue-deep)] group-hover:text-[var(--blue)] transition-colors">{post.title}</h2>
                    <p className="mt-3 text-base leading-8 text-[var(--muted)]">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]">
                      Leer artículo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(0,34,68,0.96),rgba(0,51,102,0.9))] p-8 text-white md:p-10">
              <p className="kicker !text-white/70">¿Prefieres resolverlo con una conversación?</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Podemos pasar de la guía a tu caso concreto</h2>
              <p className="mt-4 max-w-3xl text-lg leading-9 text-white/80">Si quieres aterrizar lo que has leído a tu situación real, puedes escribirnos por WhatsApp o pedir orientación sin compromiso.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={buildWhatsAppHref('Hola, vengo del blog y quiero una orientación sobre seguros.')} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]">Hablar por WhatsApp</a>
                <Link href="/contacto" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]">Ir a contacto</Link>
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
