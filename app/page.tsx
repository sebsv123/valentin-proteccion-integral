import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { AgentTrustBlock, BlogPreviewSection, ComparisonCardsSection, FinalCTASection, GeneralFaqSection, HeroLeadSection, MascotHelperSection, ProductCategoryGrid, StatsSection, TrustBadgesSection } from '@/components/home-sections';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
// Premium Overhaul Trigger: v1.0.1
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroLeadSection />
        <StatsSection />
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
