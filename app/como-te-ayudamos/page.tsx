import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { AgentTrustBlock, ComparisonCardsSection, TrustBadgesSection } from '@/components/home-sections';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Cómo te ayudamos | Valentín Protección Integral',
  description: 'Conoce la forma de trabajo, el acompañamiento y la lógica de orientación de Valentín Protección Integral.',
};

export default function ComoTeAyudamosPage() {
  return (
    <>
      <Header />
      <main className="pt-6 md:pt-8">
        <div className="container-shell"><Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Cómo te ayudamos' }]} /></div>

        <section className="section-pad pt-5 md:pt-8">
          <div className="container-shell">
            <div className="soft-card overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="p-7 md:p-10 lg:p-12">
                  <p className="kicker">Cómo te ayudamos</p>
                  <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight text-[var(--blue-deep)] md:text-6xl">Una orientación clara antes de contratar</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)] md:text-xl">Escuchamos tu situación, comparamos contigo y aterrizamos coberturas con un lenguaje que se entiende. La idea es ayudarte a elegir con más tranquilidad, no llenarte de ruido.</p>
                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {[
                      'Escuchamos qué quieres proteger y en qué momento estás.',
                      'Comparamos opciones con una explicación que se entiende.',
                      'Traducimos coberturas, matices y diferencias a lenguaje claro.',
                      'Seguimos a tu lado también después de contratar.',
                    ].map((line) => (
                      <div key={line} className="rounded-[22px] bg-[var(--bg)] px-5 py-4 text-base leading-7 text-[var(--text)]">{line}</div>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href="/contacto" className="btn-primary">Solicitar orientación</Link>
                    <a href={buildWhatsAppHref('Hola, quiero orientación sobre un seguro y entender mejor mis opciones.')} className="btn-whatsapp">Hablar por WhatsApp</a>
                  </div>
                </div>
                <div className="relative min-h-[360px]">
                  <Image src="/images/home/meeting-real.jpg" alt="Reunión de asesoramiento cercana y profesional" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,104,0.08),rgba(18,59,104,0.2))]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBadgesSection />
        <AgentTrustBlock />
        <ComparisonCardsSection />

        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card overflow-hidden">
              <div className="grid gap-0 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[340px]">
                  <Image src="/images/agent/rosa-valentin.jpg" alt={site.advisorName} fill className="object-cover object-top" />
                </div>
                <div className="p-7 md:p-10">
                  <p className="kicker">Tu asesora personal</p>
                  <h2 className="mt-3 section-title">Más de 10 años acompañando decisiones importantes</h2>
                  <p className="section-copy mt-4">Rosa Valentín combina cercanía, experiencia y comparativa real entre opciones. Si quieres resolver una duda rápida o empezar con más calma, puedes hacerlo por el canal que te resulte más cómodo.</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost">Instagram · @segurosrosavalentin</a>
                    <Link href="/contacto" className="btn-secondary">Consulta sin compromiso</Link>
                  </div>
                </div>
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
