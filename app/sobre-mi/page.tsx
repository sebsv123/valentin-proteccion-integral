import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site } from '@/lib/products';

export const metadata: Metadata = {
  title: `Sobre mí | ${site.name}`,
  description: 'Conoce a Rosa Valentín y la forma de acompañarte antes de contratar un seguro.',
};

export default function SobreMiPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-pad pt-6 md:pt-10">
          <div className="container-shell">
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Sobre mí' }]} />
            <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="soft-card overflow-hidden">
                <div className="relative min-h-[420px]">
                  <Image src="/images/agent/rosa-valentin.jpg" alt="Rosa Valentín, asesora personal en seguros" fill className="object-cover object-top" />
                </div>
              </div>
              <div className="soft-card p-7 md:p-10">
                <p className="kicker">Sobre mí</p>
                <h1 className="mt-3 font-heading text-5xl font-bold tracking-tight text-[var(--blue-deep)] md:text-6xl">Rosa Valentín, una orientación cercana y profesional antes de contratar</h1>
                <p className="mt-4 text-lg leading-9 text-[var(--muted)]">Valentín Protección Integral nace con una idea sencilla: ayudar a familias y particulares a entender mejor lo que están contratando. No se trata de empujar un producto, sino de comparar con criterio y acompañar cada decisión con más contexto.</p>
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {[
                    'Más de 10 años asesorando con cercanía.',
                    'Comparativa entre compañías con una lectura clara.',
                    'Acompañamiento antes y después de contratar.',
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] bg-[var(--bg)] px-4 py-4 text-sm leading-7 text-[var(--text)] md:text-base">{item}</div>
                  ))}
                </div>
                <div className="mt-6 rounded-[24px] border border-[var(--border)] bg-white px-5 py-5 text-base leading-8 text-[var(--muted)]">
                  La prioridad es ayudarte a separar lo importante de lo accesorio, revisar qué cambia según modalidad y orientarte para que contrates con más tranquilidad y menos dudas.
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={buildWhatsAppHref('Hola Rosa, quiero hablar contigo sobre un seguro.')} className="btn-whatsapp">Hablar por WhatsApp</a>
                  <Link href="/contacto" className="btn-secondary">Ir a contacto</Link>
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
