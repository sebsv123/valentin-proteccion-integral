import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { CasesAndForm, CoverageHighlights, ProductCTASection, ProductDecisionGrid, ProductFaqSection, ProductHero, RelatedProducts } from '@/components/product-sections';
import { ProductTabs } from '@/components/product-tabs';
import { getProduct, products, site } from '@/lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  const seoTitle = `${product.name} en Madrid · Comparar y Elegir | ${site.name}`;
  const seoDesc = `${product.heroCopy} Asesoramiento personalizado en ${product.label} en Madrid y Boadilla del Monte. Orientación sin compromiso.`;
  return {
    title: seoTitle,
    description: seoDesc,
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      images: [{ url: `${site.domain}${product.heroImage}`, alt: product.heroAlt }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Seguros', href: '/seguros' }, { label: product.label }]} />
        </div>
        <ProductHero product={product} />
        <ProductTabs slug={product.slug} />
        <CoverageHighlights product={product} />
        <ProductDecisionGrid product={product} />
        <CasesAndForm product={product} />
        <ProductFaqSection product={product} />
        <ProductCTASection title={`¿Quieres que te ayudemos con ${product.label}?`} text={`Te ayudamos a entender, comparar y elegir mejor, con una orientación humana y útil antes de contratar.`} message={product.whatsappMessage} />
        <RelatedProducts product={product} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
