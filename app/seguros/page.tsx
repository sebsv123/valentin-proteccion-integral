import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MessageCircle, Phone } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, getSubpagesForProduct, products, site } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Seguros | Hub de productos | Valentín Protección Integral',
  description: 'Accede a salud, vida, mascotas, dental, accidentes, decesos y viaje con una estructura clara y orientación personalizada.',
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

          {/* Rosa Trust Block — Conversión y cercanía */}
          <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#002244] to-[#0F5E9C] p-8 md:p-12 text-white overflow-hidden">
            <div className="grid gap-8 md:grid-cols-[280px_1fr] items-center">
              <div className="relative mx-auto md:mx-0 h-[320px] w-[260px] rounded-[24px] overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image src="/images/agent/rosa-oficina.jpg" alt="Rosa Valentín — Asesora de seguros" fill className="object-cover object-top" />
              </div>
              <div className="space-y-5">
                <p className="font-heading text-lg font-semibold text-white/70 uppercase tracking-widest">Tu asesora de confianza</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
                  Más de 10 años comparando por ti para que elijas con total seguridad
                </h2>
                <p className="text-lg leading-8 text-white/80 max-w-2xl">
                  Soy Rosa Valentín. Te acompaño personalmente en todo el proceso: escucho lo que necesitas, comparo las mejores opciones del mercado y te explico cada detalle con claridad. Sin presiones, sin letra pequeña, sin sorpresas.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <a href={buildWhatsAppHref('Hola Rosa, quiero una orientación personalizada sobre seguros.')} className="btn-whatsapp !text-base !px-8 !py-4 shadow-xl"><MessageCircle className="h-5 w-5" /> Hablar con Rosa</a>
                  <a href={`tel:${site.phoneHref}`} className="inline-flex items-center gap-2 rounded-[16px] border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"><Phone className="h-4 w-4" /> {site.phone}</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
