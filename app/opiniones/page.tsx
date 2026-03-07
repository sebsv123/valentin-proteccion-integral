import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';

export const metadata: Metadata = {
  title: 'Opiniones | Valentín Protección Integral',
  description: 'Reseñas y señales de confianza con un diseño más humano y creíble.',
};

export default function OpinionesPage() {
  return (
    <>
      <Header />
      <main className="pt-6 md:pt-8">
        <div className="container-shell"><Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Opiniones' }]} /></div>
        <TestimonialsCarousel />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
