import Image from 'next/image';
import { ArrowRight, ClipboardCheck, FileSearch, Scale } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { AnswerFirstSection } from '@/components/answer-first-section';
import { buildWhatsAppHref } from '@/lib/products';
import { PeruHero } from './PeruHero';
import { PeruToSpain } from './PeruToSpain';
import { PeruToWorld } from './PeruToWorld';
import { PeruProcess } from './PeruProcess';
import type { PeruContent, PeruLocale } from './peru-content';
import styles from './peru.module.css';

const imageRoot = '/images/internacional/peru';
const complexIcons = [Scale, FileSearch, ClipboardCheck];

export function PeruPageView({ content, locale }: { content: PeruContent; locale: PeruLocale }) {
  const url = locale === 'en' ? 'https://valentinproteccionintegral.com/en/international/peru' : 'https://valentinproteccionintegral.com/internacional/peru';
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'WebPage', inLanguage: locale, name: content.metadata.jsonName, url,
    description: content.metadata.description, about: { '@type': 'Country', name: locale === 'en' ? 'Peru' : 'Perú' },
    provider: { '@type': 'Organization', name: 'Valentín Protección Integral', url: 'https://valentinproteccionintegral.com' },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: content.breadcrumbs.home, item: 'https://valentinproteccionintegral.com' }, { '@type': 'ListItem', position: 2, name: content.breadcrumbs.international, item: locale === 'en' ? 'https://valentinproteccionintegral.com/en/international' : 'https://valentinproteccionintegral.com/internacional' }, { '@type': 'ListItem', position: 3, name: content.breadcrumbs.peru, item: url }] },
  };
  const whatsappHref = buildWhatsAppHref(content.cta.whatsappMessage);
  return <div className={styles.route}>
    <Header />
    <main className={styles.page}>
      <PeruHero content={content.hero} />
      <section className={styles.editorialSection} aria-labelledby="editorial-title"><span className={styles.editorialGhost} aria-hidden="true">PERÚ</span><div className="container-shell"><div className={styles.editorialGrid}><div className={styles.editorialPhoto}><Image src={`${imageRoot}/peru-cusco.jpg`} alt="" fill sizes="(max-width: 1100px) 100vw, 58vw" /></div><div className={styles.editorialCopy}><p className={styles.eyebrow}>{content.editorial.eyebrow}</p><h2 id="editorial-title">{content.editorial.title[0]}<br /><em>{content.editorial.title[1]}</em></h2>{content.editorial.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className={styles.partnership}><div className={styles.partnershipFlow}><div className={styles.partnershipOrigin}><Image className={styles.partnershipVipLogo} src="/images/internacional/vip-global-peru-official.jpeg" alt={content.editorial.vipAlt} width={230} height={86} /><strong>{content.editorial.origin}</strong><span>{content.editorial.originNote}</span></div><div className={styles.partnershipConnector} aria-hidden="true"><i /></div><div className={styles.partnershipDestination}><div className={styles.vpiMedallion}><Image src="/brand/vpi-isotipo.png" alt="Isotipo de VPI" width={74} height={74} /></div><strong>{content.editorial.destination}</strong><span>{content.editorial.destinationNote}</span></div></div><p>{content.editorial.closing}</p></div></div></div></div></section>
      <PeruToSpain content={content.toSpain} />
      <AnswerFirstSection
        eyebrow={locale === 'en' ? 'Insurance for Spain' : 'Seguro para España'}
        title={locale === 'en' ? 'Preparing a move, study or residence process in Spain?' : '¿Preparas una llegada, estudios o residencia en España?'}
        answer={locale === 'en' ? 'VPI can help you review the insurance side of the process. Use the canonical foreigners health page for product distinctions and conditions instead of treating this country page as a separate insurance destination.' : 'VPI puede ayudarte a revisar la parte aseguradora del proceso. Consulta la página canónica de salud para extranjeros para ver las diferencias y condiciones de los productos, sin convertir esta página de país en otro destino asegurador.'}
        facts={locale === 'en' ? ['Students and Residents are different product situations.', 'The insurer issues the certificate and policy conditions apply.', 'The administration or consulate makes the final decision.'] : ['Students y Residents corresponden a situaciones de producto distintas.', 'La aseguradora emite el certificado y se aplican las condiciones de la póliza.', 'La administración o el consulado toma la decisión final.']}
        links={[{ label: locale === 'en' ? 'Review health insurance for foreigners' : 'Ver el seguro de salud para extranjeros', href: locale === 'en' ? '/en/insurance/health/foreigners' : '/seguros/salud-extranjeros' }]}
      />
      <PeruToWorld content={content.toWorld} />
      <PeruProcess content={content.process} />
      <section className={styles.worldSection} aria-labelledby="world-peru-title"><div className="container-shell"><div className={styles.worldGrid}><div className={styles.worldCopy}><p className={styles.eyebrow}><span className={styles.worldFlag} aria-hidden="true" /> {content.world.eyebrow}</p><h2 id="world-peru-title">{content.world.title[0]}<br /><em>{content.world.title[1]}</em></h2><p>{content.world.lead}</p><div className={styles.worldList}>{content.world.items.map((item, index) => <div className={styles.worldItem} key={item.title}><span className={styles.worldIndex}>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.title}</strong><span>{item.desc}</span></div></div>)}</div><p className={styles.worldNote}>{content.world.disclaimer}</p></div><div className={styles.worldPhoto}><Image src={`${imageRoot}/peru-profesional.jpg`} alt={content.world.imageAlt} fill sizes="(max-width: 1100px) 100vw, 52vw" /><span className={styles.worldPhotoLabel}>{content.world.photoLabel}</span></div></div></div></section>
      <section className={styles.complexSection} aria-labelledby="complex-title"><div className="container-shell"><p className={styles.eyebrow}>{content.complex.eyebrow}</p><h2 id="complex-title">{content.complex.title[0]}<br /><em>{content.complex.title[1]}</em></h2><p className={styles.complexIntro}>{content.complex.intro}</p><div className={styles.complexGrid}>{content.complex.items.map((item, index) => { const Icon = complexIcons[index]; return <div className={styles.complexItem} key={item.title}><div className={styles.complexIcon}><Icon aria-hidden /></div><h3>{item.title}</h3><p>{item.desc}</p></div>; })}</div></div></section>
      <section className={styles.culturalSection} aria-labelledby="cultural-title"><div className={styles.culturalImage}><Image src={`${imageRoot}/peru-machu-picchu.jpg`} alt={content.culture.imageAlt} fill sizes="100vw" /></div><div className={styles.culturalOverlay}><h2 id="cultural-title">{content.culture.title[0]}<br /><em>{content.culture.title[1]}</em></h2></div></section>
      <section id="contacto" className={styles.ctaSection} aria-labelledby="cta-title"><div className="container-shell"><div className={styles.ctaHeader}><p className={styles.eyebrow}>{content.cta.eyebrow}</p><h2 id="cta-title">{content.cta.title[0]} <em>{content.cta.title[1]}</em></h2><p>{content.cta.intro}</p></div><div className={styles.ctaPaths}><div className={styles.ctaPath}><span>{content.cta.fromLabel}</span><h3>{content.cta.fromTitle}</h3><p>{content.cta.fromDescription}</p><a href={whatsappHref} className={styles.primaryCta}>{locale === 'en' ? 'Explore this route' : 'Explorar esta ruta'} <ArrowRight aria-hidden="true" /></a></div><div className={styles.ctaPath}><span>{content.cta.toLabel}</span><h3>{content.cta.toTitle}</h3><p>{content.cta.toDescription}</p><a href={whatsappHref} className={styles.primaryCta}>{locale === 'en' ? 'Explore this route' : 'Explorar esta ruta'} <ArrowRight aria-hidden="true" /></a></div></div><div className={styles.ctaFooter}><div className={styles.ctaBrand}><Image src="/images/internacional/vip-global-peru-logo.png" alt={content.cta.logoAlt} width={110} height={48} /><span>VIP Global Perú × Valentín Protección Integral</span></div><div className={styles.ctaContact}><p>{content.cta.directQuestion}</p><a href={whatsappHref} className={styles.ctaGhost}><WhatsAppIcon aria-hidden="true" /> {content.cta.whatsapp}</a></div></div></div></section>
    </main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
