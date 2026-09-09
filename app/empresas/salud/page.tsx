import type { Metadata } from 'next';
import Script from 'next/script';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { BusinessHealthHero } from '@/components/business-health-hero';
import { BusinessHealthDualValueSection } from '@/components/business-health-dual-value-section';
import { BusinessHealthImplementationSection } from '@/components/business-health-implementation-section';
import { BusinessHealthTaxSection } from '@/components/business-health-tax-section';
import { BusinessHealthCoverageLevelsSection } from '@/components/business-health-coverage-levels-section';
import { BusinessHealthInternationalSection } from '@/components/business-health-international-section';
import { BusinessHealthServicesSection } from '@/components/business-health-services-section';
import { BusinessHealthCostSection } from '@/components/business-health-cost-section';
import { BusinessHealthCompanyProfilesSection } from '@/components/business-health-company-profiles-section';
import { BusinessHealthProcessSection } from '@/components/business-health-process-section';
import { BusinessHealthLeadFormSection } from '@/components/business-health-lead-form-section';
import { BusinessHealthFaqSection } from '@/components/business-health-faq-section';
import { BusinessHealthFinalCta } from '@/components/business-health-final-cta';
import { site } from '@/lib/products';
import pageStyles from './business-health-page.module.css';
import { AnswerFirstSection } from '@/components/answer-first-section';

const businessFaq = [
  ['¿Cuál es el número mínimo de asegurados?', 'Existen opciones que pueden estudiarse desde dos asegurados. La composición admitida y las condiciones dependen de la modalidad y de cómo se configure el colectivo.'],
  ['¿Puede contratarlo un autónomo?', 'Puede estudiarse para autónomos con empleados o estructuras profesionales pequeñas. Antes de preparar la propuesta debemos revisar quién formará parte del colectivo y qué modalidad admite esa composición.'],
  ['¿Se pueden incluir familiares?', 'Determinadas modalidades pueden permitir la incorporación de familiares, siempre que la contratación y la composición del colectivo lo contemplen. Conviene revisarlo antes de solicitar las altas.'],
  ['¿Qué diferencia hay entre beneficio social y retribución flexible?', 'En el beneficio social la empresa asume total o parcialmente el coste. En la retribución flexible el trabajador destina voluntariamente una parte de su salario bruto al seguro. También puede estudiarse una aportación compartida cuando la solución lo permita.'],
  ['¿Todas las modalidades incluyen hospitalización?', 'No. Las opciones ambulatorias se centran en consultas, especialistas y pruebas. Para incluir hospitalización y cirugía es necesario elegir una modalidad completa.'],
  ['¿Qué información hace falta para preparar una propuesta?', 'Normalmente necesitamos el número aproximado de personas, sus rangos de edad, la provincia, el nivel de cobertura, la fecha prevista y la forma en que la empresa quiere asumir el coste.'],
  ['¿Pueden incorporarse nuevas personas más adelante?', 'Las altas posteriores pueden gestionarse según las condiciones de la póliza, las fechas de incorporación y los requisitos aplicables a cada persona. Revisamos el procedimiento con la empresa antes de implantar la solución.'],
] as const;

const jsonLd = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Service', name: 'Seguro de salud para empresas y autónomos', provider: { '@type': 'Organization', name: site.name }, areaServed: 'España', serviceType: 'Orientación y contratación de seguros de salud para empresas y autónomos', url: `${site.domain}/empresas/salud` },
  { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: site.domain }, { '@type': 'ListItem', position: 2, name: 'Empresas' }, { '@type': 'ListItem', position: 3, name: 'Salud', item: `${site.domain}/empresas/salud` }] },
  { '@type': 'FAQPage', mainEntity: businessFaq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
] };

export const metadata: Metadata = {
  title: 'Seguro de salud para empresas y autónomos | Valentín Protección Integral',
  description: 'Valora opciones de seguro de salud para empresas desde dos asegurados, con opciones ambulatorias, hospitalización, reembolso y ventajas fiscales según contratación.',
  alternates: { canonical: `${site.domain}/empresas/salud` },
  robots: { index: true, follow: true },
  openGraph: { title: 'Seguro de salud para empresas y autónomos', description: 'Coberturas para pequeños equipos y empresas, con hospitalización, reembolso, asistencia en viajes y distintas formas de asumir el coste.', url: `${site.domain}/empresas/salud`, type: 'website', images: [{ url: `${site.domain}/brand/logo-vpi.jpeg`, alt: site.name }] },
  twitter: { card: 'summary_large_image', title: 'Seguro de salud para empresas y autónomos', description: 'Coberturas para pequeños equipos y empresas, explicadas con claridad.', images: [`${site.domain}/brand/logo-vpi.jpeg`] },
};

export default function BusinessHealthPage() {
  return <>
    <Header />
    <Script id="business-health-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main className={pageStyles.page}>
      <div className="container-shell pt-6 md:pt-8"><Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Empresas', href: '/empresas' }, { label: 'Salud' }]} /></div>
      <AnswerFirstSection
        eyebrow="Respuesta rápida"
        title="La salud de empresa depende del colectivo y de la modalidad"
        answer="Pueden estudiarse opciones desde dos asegurados, pero la composición admitida, la hospitalización, el reembolso y la forma de asumir el coste dependen de la modalidad y de la propuesta concreta."
        facts={['Las opciones ambulatorias no equivalen a las modalidades con hospitalización.', 'Pueden incorporarse familiares sólo cuando la modalidad lo contempla.', 'Para preparar una propuesta hacen falta personas, edades, provincia, cobertura y fecha.', 'La fiscalidad depende de la contratación y de la situación de la empresa o trabajador.']}
        links={[{ label: 'Volver al hub de empresas', href: '/empresas' }, { label: 'Ver ciberprotección', href: '/empresas/ciberseguridad' }]}
      />
      <BusinessHealthHero />
      <BusinessHealthDualValueSection />
      <BusinessHealthImplementationSection />
      <BusinessHealthTaxSection />
      <BusinessHealthCoverageLevelsSection />
      <BusinessHealthInternationalSection />
      <BusinessHealthServicesSection />
      <BusinessHealthCostSection />
      <BusinessHealthCompanyProfilesSection />
      <BusinessHealthProcessSection />
      <BusinessHealthLeadFormSection />
      <BusinessHealthFaqSection />
      <BusinessHealthFinalCta />
    </main>
    <Footer />
  </>;
}
