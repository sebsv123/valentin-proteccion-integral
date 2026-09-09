import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { AnswerFirstSection } from '@/components/answer-first-section';
import { buildWhatsAppHref } from '@/lib/products';
import { IndiaRoadmap } from './IndiaRoadmap';
import { IndiaHandoff } from './IndiaHandoff';
import { IndiaStudyEssentials } from './IndiaStudyEssentials';
import { indiaContent, getIndiaMetadata, type IndiaContent, type IndiaLocale } from './india-content';
import styles from './india.module.css';

const baseUrl = 'https://valentinproteccionintegral.com';
const imageRoot = '/images/internacional/india';

export const metadata: Metadata = getIndiaMetadata('es'); /* kept as the Spanish route default */
/*
export const legacyMetadata: Metadata = {
  title: 'Estudiar en España desde India | Aara Consultancy × VPI',
  description: 'Información y acompañamiento para estudiantes de India que quieren estudiar en España, con Aara Consultancy y VPI.',
  alternates: { canonical: `${baseUrl}/internacional/india` },
  openGraph: {
    title: 'Estudiar en España desde India | Aara Consultancy × VPI',
    description: 'Aara te acompaña desde India en la elección académica, la solicitud y el visado. VPI completa el recorrido desde España con el seguro médico y la llegada.',
    url: `${baseUrl}/internacional/india`,
    type: 'article',
    images: [{ url: `${imageRoot}/india-hero-estudiantes.jpg`, width: 1600, height: 1067, alt: 'Estudiantes consultando material académico en una biblioteca en India' }],
  },
  twitter: { card: 'summary_large_image', title: 'Estudiar en España desde India | Aara Consultancy × VPI', description: 'Aara Consultancy y VPI: un mismo proceso, dos equipos especializados.', images: [`${imageRoot}/india-hero-estudiantes.jpg`] },
}; */

function Eyebrow({ children, withFlag = false }: { children: React.ReactNode; withFlag?: boolean }) {
  return (
    <p className={styles.eyebrow}>
      {withFlag ? <i className={styles.flagMark} aria-hidden="true" /> : null}
      {children}
    </p>
  );
}

const aaraSteps = [
  ['01', 'CONSULT', 'Orientación inicial y perfil académico.'],
  ['02', 'CHOOSE', 'Universidades, programas y estrategia.'],
  ['03', 'APPLY', 'Aplicación, documentación, tests y SOP/LOR.'],
  ['04', 'PREPARE', 'Visado, financiación y preparación previa al viaje.'],
];

export function IndiaPageView({ content: c, locale }: { content: IndiaContent; locale: IndiaLocale }) {
  const whatsappHref = buildWhatsAppHref(c.cta.whatsapp);
  const titleParts = locale === 'en' ? c.hero.title.split(' to Spain ') : c.hero.title.split(' a España ');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: c.metadata.title,
    url: locale === 'en' ? `${baseUrl}/en/international/india` : `${baseUrl}/internacional/india`,
    description: c.metadata.description,
    about: { '@type': 'Country', name: 'India' },
    provider: { '@type': 'Organization', name: 'Valentín Protección Integral', url: baseUrl },
  };

  return (
    <div className={styles.route}>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="india-title">
          <div className="container-shell">
            <div className={styles.heroBreadcrumb}>
              <Breadcrumbs items={[{ label: c.breadcrumb.home, href: locale === 'en' ? '/en' : '/' }, { label: c.breadcrumb.international, href: locale === 'en' ? '/en/international' : '/internacional' }, { label: c.breadcrumb.country }]} />
            </div>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <Eyebrow withFlag>{c.hero.eyebrow}</Eyebrow>
                <h1 id="india-title">{titleParts[0]} <em>{locale === 'en' ? 'to Spain' : 'a España'}</em><br />{titleParts[1]}</h1>
                <p className={styles.heroCopy}>{c.hero.copy}</p>
                <div className={styles.heroActions}>
                  <a href="#contacto" className={styles.primaryCta}>{c.hero.primary} <ArrowRight aria-hidden="true" /></a>
                  <a href={whatsappHref} className={styles.secondaryCta}><WhatsAppIcon aria-hidden="true" /> {c.hero.secondary}</a>
                </div>
              </div>
              <div className={styles.heroMedia}>
                <div className={styles.heroMediaFrame} aria-hidden="true" />
                <div className={styles.heroPhoto}>
                  <Image src={`${imageRoot}/india-hero-estudiantes.jpg`} alt={c.hero.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 40vw" />
                </div>
                <div className={styles.heroFloatCard}>
                  <strong>{c.hero.floatSub}</strong>
                  <span>{c.hero.float}</span>
                  <div className={styles.heroRoute}><em>IN</em><i aria-hidden="true" /><em>ES</em></div>
                </div>
              </div>
              <p className={styles.trustCues}>{c.hero.trust.map((x,i)=><span key={x}>{i>0&&<i aria-hidden="true">·</i>}{x}</span>)}</p>
              <div className={styles.partnerSignature}>
                <Image src="/images/internacional/aara-logo-white-bg.jpg" alt="Logo de Aara Consultancy" width={92} height={40} className={styles.partnerSignatureLogo} />
                <i aria-hidden="true">×</i>
                <span>Valentín Protección Integral</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.indiaSection} aria-labelledby="india-origin-title">
          <span className={styles.indiaGhost} aria-hidden="true">INDIA</span>
          <div className="container-shell">
            <div className={styles.indiaGrid}>
              <div className={styles.indiaPhoto}>
                <Image src={`${imageRoot}/india-hawa-mahal.jpg`} alt={c.origin.imageAlt} fill sizes="(max-width: 900px) 100vw, 58vw" />
              </div>
              <div className={styles.indiaCopy}>
                <Eyebrow>{c.origin.eyebrow}</Eyebrow>
                <h2 id="india-origin-title">{c.origin.title[0]}<br /><em>{c.origin.title[1]}</em></h2>
                <p>{c.origin.copy}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.aaraSection} aria-labelledby="aara-title">
          <div className="container-shell">
            <div className={styles.aaraIntro}>
              <div>
                <Eyebrow>{c.aara.eyebrow}</Eyebrow>
                <h2 id="aara-title">{c.aara.title[0]}<br /><em>{c.aara.title[1]}</em></h2>
              </div>
              <div className={styles.aaraLogoCard}>
                <Image src="/images/internacional/aara-logo-white-bg.jpg" alt="Logo de Aara Consultancy" width={220} height={98} />
              </div>
            </div>
            <p className={styles.aaraCopy}>{c.aara.copy}</p>
            <div className={styles.aaraSteps}>
              {c.aara.steps.map(({number, label, desc}) => (
                <div className={styles.aaraStep} key={number}>
                  <span>{number}</span>
                  <h3>{label}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndiaStudyEssentials content={c.essentials} />

        <section className={styles.spainSection} aria-labelledby="spain-title">
          <div className="container-shell">
            <div className={styles.spainGrid}>
              <div className={styles.spainCopy}>
                <Eyebrow>{c.spain.eyebrow}</Eyebrow>
                <h2 id="spain-title">{c.spain.title[0]}<br /><em>{c.spain.title[1]}</em></h2>
                <p>{c.spain.copy}</p>
                <p className={styles.spainSecondary}>{c.spain.secondary}</p>
              </div>
              <div className={styles.spainPhoto}>
                <Image src={`${imageRoot}/india-espana-barcelona.jpg`} alt={c.spain.imageAlt} fill sizes="(max-width: 900px) 100vw, 52vw" />
              </div>
            </div>
          </div>
        </section>

        <IndiaHandoff content={c.handoff} />

        <AnswerFirstSection
          eyebrow={locale === 'en' ? 'Insurance for Spain' : 'Seguro para España'}
          title={locale === 'en' ? 'If you are preparing a student move to Spain' : 'Si estás preparando tu llegada como estudiante a España'}
          answer={locale === 'en' ? 'VPI can help you review the insurance side of the process. The canonical foreigners health page explains the difference between student and residence plans, including product-specific conditions.' : 'VPI puede ayudarte a revisar la parte aseguradora del proceso. La página canónica de salud para extranjeros explica la diferencia entre las modalidades para estudiantes y residencia, con sus condiciones específicas.'}
          facts={locale === 'en' ? ['Insurance conditions depend on the named product and policy.', 'The insurer issues the certificate for the application.', 'The administration or consulate makes the final decision.'] : ['Las condiciones dependen del producto y de la póliza concreta.', 'La aseguradora emite el certificado para el expediente.', 'La administración o el consulado toma la decisión final.']}
          links={[{ label: locale === 'en' ? 'Review health insurance for foreigners' : 'Ver el seguro de salud para extranjeros', href: locale === 'en' ? '/en/insurance/health/foreigners' : '/seguros/salud-extranjeros' }]}
        />

        <section className={styles.culturalSection} aria-labelledby="cultural-title">
          <div className={styles.culturalImage}>
            <Image src={`${imageRoot}/india-holi.jpg`} alt={c.cultural.imageAlt} fill sizes="100vw" />
          </div>
          <div className={styles.culturalOverlay}>
            <h2 id="cultural-title">{c.cultural.title[0]}<br /><em>{c.cultural.title[1]}</em></h2>
            <p>{c.cultural.copy}</p>
          </div>
        </section>

        <IndiaRoadmap content={c.roadmap} />

        <section id="contacto" className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaImage}>
            <Image src={`${imageRoot}/india-cta-madrid.jpg`} alt={c.cta.imageAlt} fill sizes="100vw" />
          </div>
          <div className={styles.ctaOverlay}>
            <div className="container-shell">
              <Eyebrow>{c.cta.eyebrow}</Eyebrow>
              <h2 id="cta-title">{c.cta.title[0]}<br /><em>{c.cta.title[1]}</em></h2>
              <p>{c.cta.copy}</p>
              <div className={styles.ctaActions}>
                <a href={locale === 'en' ? '/en/contact' : '/contacto'} className={styles.primaryCta}>{c.cta.primary} <ArrowRight aria-hidden="true" /></a>
                <a href={whatsappHref} className={styles.ctaGhost}><WhatsAppIcon aria-hidden="true" /> {c.cta.secondary}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

export default function IndiaPage() { return <IndiaPageView content={indiaContent.es} locale="es" />; }
