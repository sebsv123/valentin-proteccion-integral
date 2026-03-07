import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { ProductCTASection, ProductDecisionGrid, ProductFaqSection, RelatedProducts, SubpageHero } from '@/components/product-sections';
import { getProduct, getProductSubpage, site, subpages } from '@/lib/products';

export function generateStaticParams() {
  return subpages.map((subpage) => ({ slug: subpage.parent, subslug: subpage.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; subslug: string }> }): Promise<Metadata> {
  const { slug, subslug } = await params;
  const subpage = getProductSubpage(slug, subslug);
  if (!subpage) return {};
  return {
    title: `${subpage.title} | ${site.name}`,
    description: subpage.summary,
    openGraph: {
      title: `${subpage.title} | ${site.name}`,
      description: subpage.summary,
      images: [{ url: `${site.domain}${subpage.heroImage}`, alt: subpage.heroAlt }],
    },
  };
}

export default async function ProductSubpagePage({ params }: { params: Promise<{ slug: string; subslug: string }> }) {
  const { slug, subslug } = await params;
  const product = getProduct(slug);
  const subpage = getProductSubpage(slug, subslug);
  if (!product || !subpage) notFound();

  const faqProduct = { ...product, faqs: subpage.faqs };

  return (
    <>
      <Header />
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Seguros', href: '/seguros' }, { label: product.label, href: `/seguros/${product.slug}` }, { label: subpage.label }]} />
        </div>
        <SubpageHero subpage={subpage} />
        <ProductDecisionGrid product={product} />
        <ProductFaqSection product={faqProduct} />
        <ProductCTASection title={`¿Quieres que revisemos ${product.label} con más calma?`} text="Si este perfil o modalidad encaja contigo, te ayudamos a aterrizar matices, resolver dudas y decidir con más tranquilidad." message={subpage.whatsappMessage} />
        <RelatedProducts product={product} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
