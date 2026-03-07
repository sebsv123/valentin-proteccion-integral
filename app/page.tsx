import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { AgentTrustBlock, BlogPreviewSection, ComparisonCardsSection, FinalCTASection, GeneralFaqSection, HeroLeadSection, MascotHelperSection, ProductCategoryGrid, TrustBadgesSection } from '@/components/home-sections';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroLeadSection />
        <TrustBadgesSection />
        <ProductCategoryGrid />
        <ComparisonCardsSection />
        <MascotHelperSection />
        <AgentTrustBlock />
        <BlogPreviewSection />
        <GeneralFaqSection />
        <TestimonialsCarousel />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
