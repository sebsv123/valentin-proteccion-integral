import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { getSubpagesForProduct, products } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Seguros | Hub de productos | Valentín Protección Integral',
  description: 'Accede a salud, vida, mascotas, dental, accidentes, hospitalización, decesos y viaje con una estructura clara y CTAs útiles.',
};

export default function SegurosHubPage() {
  return (
    <>
      <Header />
      <main className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Seguros' }]} />
          <div className="mb-10 max-w-3xl">
            <p className="kicker">Nuestros seguros</p>
            <h1 className="mt-3 section-title">Encuentra el producto que mejor encaje con lo que quieres proteger</h1>
            <p className="section-copy mt-4">Cada producto tiene su propia página con ventajas, preguntas frecuentes y formas reales de pedir orientación.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const children = getSubpagesForProduct(product.slug);
              return (
                <article key={product.slug} className="soft-card overflow-hidden">
                  <div className="relative h-64">
                    <Image src={product.cardImage} alt={product.cardAlt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,59,104,0.65)] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="kicker !text-white/80">{product.label}</p>
                      <h2 className="mt-2 font-heading text-3xl font-bold">{product.label}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-base leading-8 text-[var(--muted)]">{product.summary}</p>
                    {children.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {children.map((child) => (
                          <Link key={child.slug} href={`/seguros/${product.slug}/${child.slug}`} className="rounded-full bg-[var(--bg)] px-3 py-2 text-sm font-medium text-[var(--blue-deep)]">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link href={`/seguros/${product.slug}`} className="btn-secondary w-full justify-center">Ver información</Link>
                      <Link href="/contacto" className="btn-ghost w-full justify-center">Solicitar orientación</Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
