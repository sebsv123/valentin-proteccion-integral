import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Footer } from '@/components/footer';
import { ForeignersPartnerForm } from '@/components/foreigners-partner-form';
import { ForeignersPartnerTracking } from '@/components/foreigners-partner-tracking';
import { ForeignersTrackedLink } from '@/components/foreigners-tracked-link';
import { Header } from '@/components/header';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site } from '@/lib/products';

const dgsfpUrl = 'https://rrpp.dgsfp.mineco.es/Mediador';
const partnerWhatsApp = buildWhatsAppHref('Hola, soy profesional y quiero derivar un cliente para seguro médico de extranjería.');
const partnerEmail = `mailto:info@valentinproteccionintegral.com?subject=${encodeURIComponent('Derivación profesional extranjería')}`;

export const metadata: Metadata = {
  title: `Seguro médico para extranjeros y colaboradores | ${site.name}`,
  description: 'Orientación para seguros médicos de extranjería y canal profesional para abogados, gestorías, academias y entidades que derivan clientes.',
  alternates: { canonical: '/extranjeros' },
  openGraph: {
    title: `Seguro médico para extranjeros | ${site.name}`,
    description: 'Seguro médico para trámites de extranjería y formulario profesional de derivación con autorización del cliente.',
    url: '/extranjeros',
    type: 'website',
    images: [{ url: '/images/products/salud-extranjeros.png', width: 1200, height: 800, alt: 'Seguro médico para extranjeros en España' }],
  },
};

export default function ExtranjerosPage() {
  return (
    <>
      <Header />
      <ForeignersPartnerTracking />
      <main>
        <section className="section-pad pt-6 md:pt-10" data-foreigners-section="hero">
          <div className="container-shell">
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Extranjeros' }]} />
            <div className="hero-grid items-center">
              <div className="space-y-7">
                <p className="kicker">Salud · Extranjería</p>
                <h1 className="font-heading text-5xl font-extrabold leading-[1.02] tracking-tight text-[var(--blue-deep)] md:text-7xl">
                  Seguro médico para extranjeros en España
                </h1>
                <p className="section-copy text-lg">
                  Te ayudamos a revisar opciones de seguro médico privado para trámites de visado, residencia o renovación, con una explicación clara de requisitos, cobertura y documentación comercial.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ForeignersTrackedLink
                    href={partnerWhatsApp}
                    className="btn-whatsapp"
                    action="whatsapp_click"
                    label="hero"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp
                  </ForeignersTrackedLink>
                  <ForeignersTrackedLink
                    href="#colaboradores"
                    className="btn-secondary"
                    action="cta_click"
                    label="hero_colaboradores"
                  >
                    Soy profesional <ArrowRight className="h-5 w-5" />
                  </ForeignersTrackedLink>
                </div>
                <ForeignersTrackedLink
                  href={dgsfpUrl}
                  className="inline-flex font-semibold text-[var(--blue)] underline underline-offset-4"
                  action="dgsfp_click"
                  label="hero"
                  external
                >
                  Consultar en el registro público de la DGSFP
                </ForeignersTrackedLink>
              </div>
              <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-xl">
                <Image src="/images/products/salud-extranjeros.png" alt="Persona revisando un seguro médico para extranjería" fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white" data-foreigners-section="requisitos">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="kicker">Criterio práctico</p>
                <h2 className="mt-3 section-title">Qué revisamos antes de recomendar una opción</h2>
                <p className="section-copy mt-4">
                  Cada expediente puede requerir matices. Por eso ordenamos la conversación alrededor del trámite, el plazo, el perfil del solicitante y las condiciones del producto.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Modalidad sin copagos cuando el trámite lo exige.',
                  'Certificado o documentación comercial disponible.',
                  'Cobertura sanitaria privada y ámbito territorial.',
                  'Plazos de contratación compatibles con la cita.',
                ].map((item) => (
                  <div key={item} className="soft-card rounded-[24px] p-5 shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-[var(--green)]" />
                    <p className="mt-3 font-semibold leading-7 text-[var(--blue-deep)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="colaboradores" className="section-pad scroll-mt-28" data-foreigners-section="colaboradores">
          <div className="container-shell">
            <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <div>
                  <p className="kicker">Canal profesional</p>
                  <h2 className="mt-3 section-title">Derivaciones para abogados, gestorías, academias y entidades</h2>
                  <p className="section-copy mt-4">
                    Si acompañas expedientes de extranjería, puedes derivar el caso con autorización expresa del cliente. No necesitamos documentos sensibles en este primer contacto.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ForeignersTrackedLink
                    href={partnerWhatsApp}
                    className="btn-whatsapp justify-center"
                    action="whatsapp_click"
                    label="b2b_block"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </ForeignersTrackedLink>
                  <ForeignersTrackedLink
                    href={partnerEmail}
                    className="btn-ghost justify-center"
                    action="email_click"
                    label="b2b_block"
                  >
                    <Mail className="h-4 w-4" /> Email profesional
                  </ForeignersTrackedLink>
                </div>
                <div className="soft-card rounded-[24px] p-5">
                  <BriefcaseBusiness className="h-7 w-7 text-[var(--blue)]" />
                  <p className="mt-3 text-base leading-8 text-[var(--muted)]">
                    Evento analítico usado: <strong>foreigners_partner</strong>. Solo enviamos acciones constantes y etiquetas no personales, nunca nombres, correos, teléfonos ni datos del cliente.
                  </p>
                </div>
              </div>
              <div className="soft-card p-6 md:p-8">
                <div className="mb-6 flex items-start gap-3">
                  <div className="rounded-2xl bg-[var(--bg)] p-3 text-[var(--blue)]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-[var(--blue-deep)]">Formulario profesional</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Campos mínimos para iniciar el contacto autorizado.</p>
                  </div>
                </div>
                <ForeignersPartnerForm />
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
