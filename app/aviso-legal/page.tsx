import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';

export default function StaticLegalPage() {
  return (
    <>
      <Header />
      <main className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Legal' }]} />
          <div className="soft-card p-8 md:p-12">
            <p className="kicker">Legal</p>
            <h1 className="mt-3 section-title">Contenido legal provisional</h1>
            <p className="section-copy mt-4">Esta página está preparada como placeholder limpio para privacidad, cookies o aviso legal. Antes de publicar conviene sustituirla por el texto jurídico definitivo.</p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
