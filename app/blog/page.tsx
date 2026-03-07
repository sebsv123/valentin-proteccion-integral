import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { site, buildWhatsAppHref } from '@/lib/products';

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description: 'Guías breves y contenido útil para entender mejor seguros de salud, vida, mascotas y viaje en España.',
};

const posts = [
  {
    title: 'Cómo ordenar un seguro de SALUD antes de comparar',
    excerpt: 'Copago, hospitalización, reembolso y uso real explicados con una mirada práctica y más clara.',
    image: '/images/blog/blog-team.jpg',
  },
  {
    title: 'VIDA, hipoteca e incapacidad: qué conviene separar bien',
    excerpt: 'Una guía breve para no mezclar necesidades distintas dentro de la protección personal.',
    image: '/images/home/family-window.jpg',
  },
  {
    title: 'VIAJE y MASCOTAS: preguntas útiles antes de contratar',
    excerpt: 'Límite médico, anulación, responsabilidad civil y veterinaria vistos sin lenguaje frío.',
    image: '/images/products/viaje-city.jpg',
  },
];

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
            {posts.map((post) => (
              <article key={post.title} className="soft-card overflow-hidden">
                <div className="relative h-60">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-3xl font-semibold text-[var(--blue-deep)]">{post.title}</h2>
                  <p className="mt-3 text-base leading-8 text-[var(--muted)]">{post.excerpt}</p>
                  <div className="mt-5 rounded-[20px] bg-[var(--bg)] px-4 py-4 text-sm leading-7 text-[var(--text)]">Muy pronto iremos ampliando este espacio con más guías prácticas y contenido útil para filtrar mejor cada decisión.</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 text-white md:p-10">
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
