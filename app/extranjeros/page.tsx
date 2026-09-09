import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, MessageCircle, ShieldCheck } from 'lucide-react';
import { FAQAccordion } from '@/components/faq-accordion';
import { Footer } from '@/components/footer';
import { IberiaJourneySection } from '@/components/extranjeros/iberia-journey-section';
import { LatamGlobeOverlay } from '@/components/extranjeros/latam-globe-overlay';
import SpainArrivalGlobe from '@/components/extranjeros/spain-arrival-globe';
import { ForeignersPartnerForm } from '@/components/foreigners-partner-form';
import { ForeignersPartnerTracking } from '@/components/foreigners-partner-tracking';
import { ForeignersTrackedLink } from '@/components/foreigners-tracked-link';
import { AnswerFirstSection } from '@/components/answer-first-section';
import { GoogleReviewsCarousel } from '@/components/google-reviews-carousel';
import { Header } from '@/components/header';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { googleReviews, googleReviewsSummary } from '@/lib/google-reviews';
import { buildWhatsAppHref, site } from '@/lib/products';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import styles from './extranjeros-hero.module.css';
import { foreignersContent } from './foreigners-content';

const personalWhatsApp = buildWhatsAppHref('Hola, necesito orientación sobre un seguro médico para mi trámite en España.');
const partnerWhatsApp = buildWhatsAppHref('Hola, trabajo con estudiantes o clientes extranjeros y me gustaría consultar una posible colaboración.');
const partnerConsultWhatsApp = buildWhatsAppHref('Hola, quiero consultar un caso antes de realizar una derivación.');

const situationProfiles = [
  {
    title: 'Vengo a estudiar',
    copy: 'Para visado de estudios, estancias largas o formación en España.',
    image: '/images/premium/travel.png',
    href: buildWhatsAppHref('Hola, vengo a estudiar a España y quiero revisar qué seguro médico necesito.'),
    action: 'whatsapp_click',
    label: 'profile_studies',
  },
  {
    title: 'Voy a residir en España',
    copy: 'Para residencia, renovación o llegada familiar con requisitos sanitarios.',
    image: '/images/products/proteccion-juridica.png',
    href: buildWhatsAppHref('Hola, voy a residir en España y quiero revisar el seguro médico para mi trámite.'),
    action: 'whatsapp_click',
    label: 'profile_residence',
  },
  {
    title: 'Necesito ayudar a un alumno o cliente',
    copy: 'Para academias, asesorías, gestorías y profesionales que acompañan expedientes.',
    image: '/images/home/handshake-real.jpg',
    href: '#colaboradores',
    action: 'cta_click',
    label: 'profile_partner',
  },
  {
    title: 'No sé qué seguro necesito',
    copy: 'Para ordenar el caso antes de comparar opciones o contratar.',
    image: '/images/products/health-medical-care.png',
    href: buildWhatsAppHref('Hola, no sé qué seguro médico necesito para extranjería y quiero orientación.'),
    action: 'whatsapp_click',
    label: 'profile_unsure',
  },
] as const;

const reviewItems = [
  'Modalidades sin copagos cuando el producto y el trámite lo requieren.',
  'Certificado o documentación del producto tras la emisión.',
  'Cobertura sanitaria privada y ámbito territorial.',
  'Fechas y emisión revisadas según la aseguradora.',
];

const processSteps = [
  {
    title: 'Cuéntanos el trámite',
    copy: 'Nos indicas si se trata de estudios, residencia, renovación, familia o una derivación profesional.',
  },
  {
    title: 'Revisamos requisitos',
    copy: 'Ordenamos qué conviene comprobar antes de contratar y evitamos pedir documentación sensible en el primer contacto.',
  },
  {
    title: 'Recibes una orientación clara',
    copy: 'Te explicamos la opción aseguradora y los siguientes pasos con lenguaje directo y seguimiento.',
  },
];

const professionalSteps = [
  {
    number: '01',
    title: 'Compartes el caso',
    copy: 'Solo necesitamos los datos mínimos y la autorización de contacto.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Atendemos al cliente',
    copy: 'Le explicamos la opción aseguradora y la documentación necesaria.',
    icon: MessageCircle,
  },
  {
    number: '03',
    title: 'Te mantenemos informado',
    copy: 'Puedes conocer el avance sin asumir la gestión aseguradora.',
    icon: CheckCircle2,
  },
] as const;

const professionalBenefits = [
  {
    title: 'Tú conservas la relación con el cliente',
    copy: 'Seguimos el caso sin interferir en tu acompañamiento profesional.',
    icon: CheckCircle2,
  },
  {
    title: 'Nosotros gestionamos la parte aseguradora',
    copy: 'Orientamos, contratamos y resolvemos las dudas relacionadas con el seguro.',
    icon: ShieldCheck,
  },
] as const;

const faqItems = [
  {
    q: '¿La póliza sirve para los trámites de estudios o residencia en España?',
    a: 'Depende del producto. Algunas modalidades pueden incluir cobertura médica sin copagos ni periodos de carencia cuando esas condiciones constan en la póliza o certificado. La documentación se incorpora al expediente una vez emitida por la aseguradora.',
  },
  {
    q: '¿Puedo contratarla solo con mi pasaporte?',
    a: 'Sí. Podemos tramitar la póliza con el pasaporte, aunque todavía no dispongas de NIE o TIE.',
  },
  {
    q: '¿Qué documentación recibiré para presentar en mi trámite?',
    a: 'Una vez emitida la póliza, recibirás el certificado del seguro y la documentación correspondiente para que puedas incorporarla a tu expediente.',
  },
  {
    q: '¿La póliza tiene copagos o periodos de carencia?',
    a: 'Depende del producto. La opción que utilizamos para estos trámites puede contratarse sin copagos ni periodos de carencia cuando esas condiciones constan en la póliza o certificado.',
  },
  {
    q: '¿Puedo contratar el seguro antes de viajar a España?',
    a: 'Sí. La contratación puede realizarse antes del viaje, de manera que puedas disponer de la póliza y de la documentación necesaria para avanzar con el trámite.',
  },
  {
    q: '¿Me ayudáis a elegir la opción adecuada para mi caso?',
    a: 'Sí. Revisamos contigo si se trata de estudios, residencia, renovación o llegada familiar y te explicamos la opción aseguradora que puede encajar con tu situación.',
  },
];

const englishSituationProfiles = [
  { title: 'I am coming to study', copy: 'For study visas, longer stays or training in Spain.', image: '/images/premium/travel.png', href: buildWhatsAppHref('Hello, I am coming to study in Spain and need to review the health insurance requirements.'), action: 'whatsapp_click', label: 'profile_studies' },
  { title: 'I am moving to Spain', copy: 'For residence, renewals or family arrivals with health requirements.', image: '/images/products/proteccion-juridica.png', href: buildWhatsAppHref('Hello, I am moving to Spain and need to review the health insurance for my process.'), action: 'whatsapp_click', label: 'profile_residence' },
  { title: 'I need to help a student or client', copy: 'For academies, advisers, agencies and professionals supporting applications.', image: '/images/home/handshake-real.jpg', href: '#colaboradores', action: 'cta_click', label: 'profile_partner' },
  { title: 'I do not know which insurance I need', copy: 'To organise your case before comparing options or arranging cover.', image: '/images/products/health-medical-care.png', href: buildWhatsAppHref('Hello, I do not know which health insurance I need for immigration and would like guidance.'), action: 'whatsapp_click', label: 'profile_unsure' },
] as const;

export const metadata: Metadata = {
  title: 'Seguro médico para extranjeros en España | Valentín Protección Integral',
  description: 'Seguro médico para estudios, visado, residencia o renovación en España. Orientación personalizada, contratación con pasaporte y documentación para el trámite.',
  alternates: { canonical: `${site.domain}/extranjeros`, languages: { es: `${site.domain}/extranjeros`, en: `${site.domain}/en/foreigners`, 'x-default': `${site.domain}/extranjeros` } },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Seguro médico para extranjeros en España | Valentín Protección Integral',
    description: 'Seguro médico para estudios, visado, residencia o renovación en España. Orientación personalizada, contratación con pasaporte y documentación para el trámite.',
    url: `${site.domain}/extranjeros`,
    type: 'website',
    siteName: site.name,
    images: [{ url: '/images/products/salud-extranjeros.png', width: 1200, height: 800, alt: 'Seguro médico para extranjeros en España' }],
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Seguro médico para extranjeros en España',
  url: `${site.domain}/extranjeros`,
  description: metadata.description,
  isPartOf: {
    '@type': 'WebSite',
    name: site.name,
    url: site.domain,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: site.domain,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Extranjeros',
      item: `${site.domain}/extranjeros`,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export function ExtranjerosPageView({ locale = 'es' }: { locale?: 'es' | 'en' } = {}) {
  const en = locale === 'en';
  const personalHref = buildWhatsAppHref(en ? 'Hello, I need guidance about health insurance for my process in Spain.' : 'Hola, necesito orientación sobre un seguro médico para mi trámite en España.');
  const visibleProfiles = en ? englishSituationProfiles : situationProfiles;
  const visibleFaq = foreignersContent[locale].faq;
  const localizedWebPageSchema = en ? { ...webPageSchema, inLanguage: 'en', name: 'Health insurance for foreigners in Spain', url: `${site.domain}/en/foreigners`, description: 'Health insurance guidance for studies, visas, residence and renewals in Spain.' } : { ...webPageSchema, inLanguage: 'es' };
  const localizedBreadcrumbSchema = en ? { ...breadcrumbSchema, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site.domain}/en` }, { '@type': 'ListItem', position: 2, name: 'Foreigners', item: `${site.domain}/en/foreigners` }] } : breadcrumbSchema;
  const localizedFaqSchema = { ...faqSchema, inLanguage: locale, mainEntity: visibleFaq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  return (
    <>
      <Header />
      <ForeignersPartnerTracking />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localizedWebPageSchema, localizedBreadcrumbSchema, localizedFaqSchema]) }}
      />
      <main className="overflow-x-clip">
        <section className={`${styles.hero} section-pad pt-6 md:pt-10`} data-foreigners-section="hero">
          <div className={styles.heroBackdrop} aria-hidden="true">
            <div className={styles.copyGlow} aria-hidden="true" />
            <div className={styles.globeGlow} aria-hidden="true" />
            <div className={styles.meshWash} aria-hidden="true" />
            <div className={styles.dotField} aria-hidden="true" />
            <div className={styles.routeWhisper} aria-hidden="true">
              <svg viewBox="0 0 1440 760" preserveAspectRatio="none">
                <path d="M-80 650 C280 470 480 690 790 530 C1040 400 1210 420 1510 210" />
                <path d="M120 780 C400 540 610 620 890 440 C1100 300 1270 340 1490 150" />
                <path d="M-90 270 C230 160 490 250 720 170" />
              </svg>
            </div>
          </div>
          <div className={`${styles.heroContent} container-shell`}>
            <div className="hero-grid items-center">
              <div className={styles.heroCopy}>
                <p className={`${styles.eyebrow} kicker`}>{en ? 'HEALTH INSURANCE · IMMIGRATION' : 'SEGUROS DE SALUD · EXTRANJERÍA'}</p>
                <h1 className="font-heading text-5xl font-extrabold leading-[1.02] tracking-tight text-[var(--blue-deep)] md:text-7xl">
                  <span className={styles.mobileTitleLine}>{en ? 'Your health insurance' : 'Tu seguro médico'}</span>{' '}
                  <span className={styles.mobileTitleLine}>{en ? 'to study or' : 'para estudiar o'}</span>{' '}
                  <span className={styles.mobileTitleLine}>{en ? 'live in Spain' : 'residir en España'}</span>
                </h1>
                <p className="section-copy text-lg">
                  {en ? 'We review visa requirements, cover and documentation with you, so you can move forward clearly from the first step.' : 'Revisamos contigo los requisitos del visado, la cobertura y la documentación, para que avances con claridad desde el primer paso.'}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <ForeignersTrackedLink
                    href={en ? '/en/foreigners/rentals' : '/extranjeros/alquileres'}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--blue-deep)]/10 bg-white px-5 py-3 text-sm font-bold text-[var(--blue-deep)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--green)]/50 hover:shadow-md"
                    action="cta_click"
                    label="hero_alquileres"
                  >
                    {en ? 'Explore rentals' : 'Explorar alquileres'} <ArrowRight className="h-4 w-4" />
                  </ForeignersTrackedLink>
                  <ForeignersTrackedLink
                    href={personalHref}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--blue)] underline decoration-[var(--blue)]/25 underline-offset-4"
                    action="whatsapp_click"
                    label="hero_whatsapp_secondary"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </ForeignersTrackedLink>
                </div>
                <div className={styles.journeyGrid}>
                  <article className={`${styles.journeyCard} ${styles.primaryJourney}`}>
                    <p className={styles.cardEyebrow}>{en ? 'INDIVIDUALS' : 'PARTICULARES'}</p>
                    <h2>{en ? 'I need my insurance' : 'Necesito mi seguro'}</h2>
                    <p>{en ? 'We guide you through studies, residence, renewals or family arrival.' : 'Te orientamos para estudios, residencia, renovación o llegada familiar.'}</p>
                    <div className={styles.chipRow} aria-label={en ? 'Individual profiles' : 'Perfiles particulares'}>
                      {(en ? ['Studies', 'Residence', 'Renewal', 'Family'] : ['Estudios', 'Residencia', 'Renovación', 'Familia']).map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                    <ForeignersTrackedLink
                      href="#elige"
                      className={styles.primaryCardCta}
                      action="cta_click"
                      label="hero_particulares"
                    >
                      {en ? 'Review my situation' : 'Revisar mi situación'} <ArrowRight className="h-4 w-4" />
                    </ForeignersTrackedLink>
                  </article>
                  <article className={`${styles.journeyCard} ${styles.partnerJourney}`}>
                    <p className={styles.cardEyebrow}>{en ? 'ACADEMIES AND ADVISERS' : 'ACADEMIAS Y ASESORÍAS'}</p>
                    <h2>{en ? 'I want to partner' : 'Quiero colaborar'}</h2>
                    <p>{en ? 'We support your students or clients and manage the insurance side from Spain.' : 'Atendemos a tus estudiantes o clientes y gestionamos la parte aseguradora desde España.'}</p>
                    <div className={styles.chipRow} aria-label={en ? 'Professional profiles' : 'Perfiles profesionales'}>
                      {(en ? ['Referrals', 'Students', 'Immigration', 'Follow-up'] : ['Derivaciones', 'Estudiantes', 'Extranjería', 'Seguimiento']).map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                    <ForeignersTrackedLink
                      href="#colaboradores"
                      className={styles.partnerCardCta}
                      action="cta_click"
                      label="hero_colaboradores"
                    >
                      {en ? 'See how it works' : 'Ver colaboración'} <ArrowRight className="h-4 w-4" />
                    </ForeignersTrackedLink>
                  </article>
                </div>
                <div className={styles.trustBand} aria-label={en ? 'Trust signals' : 'Señales de confianza'}>
                  <span>{en ? '+10 years of experience' : '+10 años de experiencia'}</span>
                  <span>{en ? '+1,200 families protected' : '+1.200 familias protegidas'}</span>
                  <span>{en ? '62+ verified Google reviews' : '62+ opiniones verificadas en Google'}</span>
                </div>
              </div>
              <div className={`${styles.globeStage} relative min-h-[430px] lg:-mr-4 xl:mr-3`}>
                <SpainArrivalGlobe />
                <LatamGlobeOverlay />
              </div>
            </div>
          </div>
        </section>

        <AnswerFirstSection
          eyebrow={en ? 'Quick answer' : 'Respuesta rápida'}
          title={en ? 'The product page owns the insurance decision' : 'La página de producto concentra la decisión aseguradora'}
          answer={en ? 'The foreigners hub helps you identify whether your case is studies, residence, renewal or family arrival. The canonical health page explains the product-specific copay, waiting-period, duration and certificate conditions.' : 'Este hub te ayuda a identificar si tu caso es de estudios, residencia, renovación o llegada familiar. La página canónica de salud explica las condiciones de copagos, carencias, duración y certificado según cada producto.'}
          facts={en ? ['Students and Residents are distinct ASISA products.', 'Residents Premium has different waiting-period conditions.', 'The administration or consulate makes the final decision on the procedure.', 'The insurer and policy determine the certificate and contractual conditions.'] : ['Students y Residents son productos ASISA distintos.', 'Residents Premium tiene condiciones de carencia diferentes.', 'La administración o el consulado toman la decisión final del trámite.', 'La aseguradora y la póliza determinan el certificado y las condiciones contractuales.']}
          links={en ? [{ label: 'Open the canonical health page', href: '/en/insurance/health/foreigners' }, { label: 'Review the health hub', href: '/en/insurance/health' }] : [{ label: 'Ver el seguro de salud para extranjeros', href: '/seguros/salud-extranjeros' }, { label: 'Ver el hub de salud', href: '/seguros/salud' }]}
        />

        <section id="elige" className={`${styles.mobileSection} section-pad scroll-mt-[104px] bg-white md:scroll-mt-[120px]`} data-foreigners-section="selector">
          <div className="container-shell">
            <div className="mb-8 max-w-3xl">
              <p className="kicker">{en ? 'CHOOSE YOUR SITUATION' : 'Elige tu situación'}</p>
              <h2 className="mt-3 section-title">{en ? 'We start with the type of process' : 'Empezamos por el tipo de trámite'}</h2>
              <p className="section-copy mt-4">{en ? 'Choose the profile closest to your case to start your enquiry through the right channel.' : 'Selecciona el perfil más parecido a tu caso para iniciar la consulta por el canal adecuado.'}</p>
            </div>
            <div className={`${styles.profileGrid} grid gap-5 md:grid-cols-2 xl:grid-cols-4`}>
              {visibleProfiles.map((item) => (
                <ForeignersTrackedLink
                  key={item.title}
                  href={item.href}
                  action={item.action}
                  label={item.label}
                  className={`${styles.profileCard} group overflow-hidden rounded-[28px] border border-[var(--border)] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <span className={`${styles.profileImage} relative block aspect-[4/3] overflow-hidden`}>
                    <Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
                  </span>
                  <span className={`${styles.profileBody} block p-5`}>
                    <span className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{item.title}</span>
                    <span className="mt-3 block text-base leading-7 text-slate-700">{item.copy}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--blue)]">
                      {item.action === 'whatsapp_click' ? <WhatsAppIcon className="h-4 w-4" /> : null}
                      {en ? 'Send an enquiry' : 'Enviar una consulta'} <ArrowRight className="h-4 w-4" />
                    </span>
                  </span>
                </ForeignersTrackedLink>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20" data-foreigners-section="alquileres">
          <div className="container-shell">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-stretch lg:gap-8 xl:gap-10">
              <div className="relative min-h-[360px] overflow-hidden rounded-[8px] sm:min-h-[440px] lg:min-h-[560px]">
                <Image
                  src="/images/alquileres/interior-calido-ventanales.webp"
                  alt={en ? 'Warm interior with large windows and natural light' : 'Interior cálido con grandes ventanales y luz natural'}
                  fill
                  className="object-cover object-[50%_35%]"
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--blue-deep)]/76 via-[var(--blue-deep)]/28 to-transparent" />
                <div className="absolute bottom-6 left-6 max-w-sm border border-[#D7C3AA]/35 bg-[#041F3A] p-4 text-white shadow-[0_18px_48px_-32px_rgba(0,0,0,0.85)] sm:bottom-8 sm:left-8 sm:p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#D7C3AA]">{en ? 'Beyond insurance' : 'Además del seguro'}</p>
                  <p className="mt-3 font-heading text-3xl font-bold leading-tight text-[#FFF8EC] sm:text-4xl">
                    {en ? 'We can also help you find a rental in Madrid.' : 'También te ayudamos con alquiler en Madrid.'}
                  </p>
                </div>
              </div>
              <div className="rounded-[8px] border border-[#D7C3AA]/60 bg-[#F7F3EA] p-7 text-[var(--blue-deep)] shadow-[0_18px_48px_-40px_rgba(0,0,0,0.28)] sm:p-9 lg:min-h-[560px] lg:p-10">
                <p className="kicker">{en ? 'Housing in Madrid' : 'Vivienda en Madrid'}</p>
                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {en ? 'Madrid rentals for international students, professionals and families' : 'Alquileres en Madrid para estudiantes, profesionales y familias internacionales'}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-8 text-slate-600">
                  {en ? 'We support you with the search, viewings, paperwork and signing process, even before you arrive in Spain.' : <>Te acompañamos en la búsqueda, las visitas, la documentación y el proceso de firma, incluso antes de llegar a España.</>}
                </p>
                <div className="mt-8 flex flex-col items-start gap-4">
                  <ForeignersTrackedLink
                    href={en ? '/en/foreigners/rentals' : '/extranjeros/alquileres'}
                    action="cta_click"
                    label="alquileres_discovery_cta"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[var(--green)] px-6 py-3.5 font-semibold text-[var(--blue-deep)] transition-all hover:brightness-105 sm:w-auto"
                  >
                    {en ? 'Explore rentals' : 'Explorar alquileres'} <ArrowRight className="h-4 w-4" />
                  </ForeignersTrackedLink>
                  <ForeignersTrackedLink
                    href={buildWhatsAppHref(en ? 'Hello, I would like to discuss my housing case in Madrid.' : 'Hola, quiero consultar mi caso de vivienda en Madrid.')}
                    action="whatsapp_click"
                    label="alquileres_discovery_whatsapp"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--blue-deep)]/70 underline decoration-[var(--blue-deep)]/20 underline-offset-4 transition hover:text-[var(--green)]"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" /> {en ? 'Discuss my case on WhatsApp' : 'Consultar mi caso por WhatsApp'}
                  </ForeignersTrackedLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.mobileSection} section-pad bg-[var(--bg)]`} data-foreigners-section="documentacion">
          <div className="container-shell">
            <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className={`${styles.mobileEditorialImage} relative min-h-[360px] overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-sm md:min-h-[520px]`}>
                <Image
                  src="/images/home/meeting-real.jpg"
                  alt={en ? 'Documents for reviewing an immigration process' : 'Documentación para revisar un trámite de extranjería'}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <p className="kicker">{en ? 'Visa · documentation · residence' : 'Visado · documentación · residencia'}</p>
                <h2 className="mt-3 section-title">{en ? 'The insurance side of your application, explained clearly' : 'La parte aseguradora del expediente, explicada con claridad'}</h2>
                <p className="section-copy mt-4">
                  {en ? 'We review which type of insurance may fit the process you describe and which insurance documents you should have ready before moving forward.' : 'Revisamos qué tipo de seguro puede encajar con el trámite comunicado y qué documentación comercial conviene tener localizada antes de avanzar.'}
                </p>
                <div className="mt-7 grid gap-3">
                  {(en ? ['Study or training stays.', 'Residence, renewal or family arrival.', 'Referrals from advisers and organisations.'] : ['Estancias por estudios o formación.', 'Residencia, renovación o llegada familiar.', 'Derivaciones desde asesorías y entidades.']).map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--blue-deep)]">
                      <FileText className="h-4 w-4 text-[var(--blue)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.mobileSection} section-pad bg-white`} data-foreigners-section="requisitos">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="kicker">{en ? 'PRACTICAL GUIDANCE' : 'Criterio práctico'}</p>
                <h2 className="mt-3 section-title">{en ? 'What we review before you buy' : 'Qué revisamos antes de contratar'}</h2>
                <p className="section-copy mt-4">
                  {en ? 'Every application may have its own details. We organise the conversation around the process, timing, applicant profile and product conditions.' : 'Cada expediente puede requerir matices. Por eso ordenamos la conversación alrededor del trámite, el plazo, el perfil del solicitante y las condiciones del producto.'}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {foreignersContent[locale].reviewItems.map((item) => (
                  <div key={item} className={`${styles.mobileReviewItem} soft-card rounded-[24px] p-5 shadow-sm`}>
                    <CheckCircle2 className="h-6 w-6 text-[var(--green)]" />
                    <p className="mt-3 font-semibold leading-7 text-[var(--blue-deep)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <IberiaJourneySection contactHref={personalHref} />

        <section className={`${styles.mobileSection} section-pad bg-[var(--bg)]`} data-foreigners-section="proceso">
          <div className="container-shell">
            <div className="mb-8 max-w-3xl">
              <p className="kicker">{en ? 'HOW IT WORKS' : 'Cómo funciona'}</p>
              <h2 className="mt-3 section-title">{en ? 'A simple process, without asking for sensitive documents at the start' : 'Un recorrido simple, sin pedir documentos sensibles al inicio'}</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {(en ? foreignersContent.en.process : processSteps).map((step, index) => (
                <article key={step.title} className={`${styles.mobileProcessCard} soft-card p-6`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--blue-deep)] font-heading text-lg font-bold text-white">{index + 1}</div>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-[var(--blue-deep)]">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className={`${styles.mobileSection} section-pad bg-white`} data-foreigners-section="opiniones">
          <div className="container-shell">
            <div className={`${styles.mobileReviewsHeading} mb-12 text-center`}>
              <h2 className="mx-auto mt-4 max-w-3xl section-title">{en ? 'Client reviews about insurance for foreigners' : 'Opiniones de clientes sobre seguros para extranjeros'}</h2>
            </div>
            <GoogleReviewsCarousel
              reviews={googleReviews}
              rating={googleReviewsSummary.rating}
              user_ratings_total={googleReviewsSummary.user_ratings_total}
              allReviewsUrl={googleReviewsSummary.allReviewsUrl}
              locale={locale}
            />
          </div>
        </section>

        <section id="colaboradores" className={`${styles.mobileProfessionalSection} scroll-mt-[104px] py-12 md:scroll-mt-[120px] md:py-16`} data-foreigners-section="colaboradores">
          <div className="container-shell">
            <div className="mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-[34px] border border-[var(--border)] bg-white shadow-[0_24px_70px_rgba(18,59,104,0.12)] lg:grid lg:grid-cols-[0.42fr_0.58fr]">
                <div className={`${styles.mobileProfessionalIntro} bg-[var(--blue-deep)] p-6 text-white md:p-8 lg:p-10`}>
                  <p className="kicker !text-white/70">{en ? 'PROFESSIONAL CHANNEL' : 'CANAL PROFESIONAL'}</p>
                  <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{en ? 'Referrals for lawyers, agencies, academies and organisations' : 'Derivaciones para abogados, gestorías, academias y entidades'}</h2>
                  <p className="mt-5 text-base leading-8 text-white/78">
                    {en ? 'If you support immigration applications, you can refer the insurance side to us with the client’s authorisation. We guide them and keep you informed of progress.' : 'Si acompañas expedientes de extranjería, puedes derivarnos la parte aseguradora con autorización del cliente. Nosotros nos ocupamos de orientarle y mantenerte informado del avance.'}
                  </p>
                  <div className="mt-8 grid gap-5">
                    {(en ? foreignersContent.en.professionalBenefits.map((item, index) => ({ ...item, icon: professionalBenefits[index].icon })) : professionalBenefits).map((benefit) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <div key={benefit.title} className="flex gap-3">
                          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                            <BenefitIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="font-heading text-lg font-bold leading-tight text-white">{benefit.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-white/70">{benefit.copy}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={`${styles.mobileProfessionalFlow} bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] p-6 md:p-8 lg:p-10`}>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--blue)]">{en ? 'How the referral works' : 'Así funciona la derivación'}</p>
                  <div className="relative mt-7 grid gap-6 md:grid-cols-3 md:gap-5">
                    <span className="absolute left-[11px] top-4 hidden h-px w-[calc(100%-22px)] bg-gradient-to-r from-[var(--blue-deep)]/18 via-[var(--blue)]/22 to-[var(--blue-deep)]/12 md:block" aria-hidden="true" />
                    {(en ? foreignersContent.en.professionalSteps.map((item, index) => ({ ...item, icon: professionalSteps[index].icon })) : professionalSteps).map((step) => {
                      const StepIcon = step.icon;
                      return (
                        <article key={step.number} className="relative grid grid-cols-[2.7rem_1fr] gap-3 md:block">
                          <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--blue)]/15 bg-white font-heading text-sm font-black text-[var(--blue-deep)] shadow-sm">
                            {step.number}
                          </div>
                          <div>
                            <div className="hidden h-9 w-9 items-center justify-center rounded-2xl bg-[var(--bg)] text-[var(--blue)] md:mb-4 md:flex">
                              <StepIcon className="h-4 w-4" aria-hidden="true" />
                            </div>
                            <h3 className="font-heading text-lg font-bold leading-tight text-[var(--blue-deep)]">{step.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-700">{step.copy}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                  <div className="mt-8 border-t border-[var(--border)] pt-6 md:flex md:items-center md:justify-between md:gap-6">
                    <p className="max-w-md text-sm font-semibold leading-6 text-slate-700">{en ? 'You can send us a case now or speak to us before referring it.' : 'Puedes enviarnos un caso ahora o consultarnos antes de derivarlo.'}</p>
                    <div className={`${styles.mobileButtonStack} mt-5 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0`}>
                      <ForeignersTrackedLink
                        href="#derivar-consulta"
                        className="btn-secondary"
                        action="cta_click"
                        label="b2b_to_form"
                      >
                        {en ? 'Refer a case' : 'Derivar un caso'}
                      </ForeignersTrackedLink>
	                      <ForeignersTrackedLink
	                        href={partnerConsultWhatsApp}
	                        className="btn-whatsapp"
	                        action="whatsapp_click"
	                        label="professional_collaboration"
                      >
                        <WhatsAppIcon className="h-4 w-4" /> {en ? 'Ask us first' : 'Consultar antes'}
                      </ForeignersTrackedLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.mobileLegalNotice} pb-12 pt-2 md:pb-16 md:pt-4`} data-foreigners-section="legal_notice">
          <div className="container-shell">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-[28px] border border-blue-100 bg-blue-50/70 p-7 text-left shadow-sm md:flex-row md:items-start md:gap-5 md:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--blue)] shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--blue-deep)]">{en ? 'We handle the insurance side exclusively' : 'Nos ocupamos exclusivamente de la parte aseguradora'}</h2>
                <p className="mt-2 max-w-3xl text-base leading-8 text-slate-700">
                  {en ? 'We are not a public body and do not replace immigration legal advice. We guide you on arranging insurance and on the insurance documentation worth reviewing for the situation described.' : 'No somos un organismo público ni sustituimos el asesoramiento jurídico de extranjería. Orientamos sobre la contratación del seguro y la documentación aseguradora que conviene revisar según la situación comunicada.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="derivar" className={`${styles.mobileFormSection} scroll-mt-[104px] pb-16 pt-2 md:scroll-mt-[120px] md:pb-20 md:pt-4`} data-foreigners-section="formulario">
          <div className="container-shell">
            <div
              id="derivar-consulta"
              className="mx-auto max-w-6xl"
              style={{ scrollMarginTop: 'calc(var(--header-height, 88px) + 32px)' }}
            >
              <div className="overflow-hidden rounded-[34px] border border-[var(--border)] bg-white shadow-[0_24px_70px_rgba(18,59,104,0.1)] lg:grid lg:grid-cols-[0.38fr_0.62fr]">
                <div className={`${styles.mobileFormIntro} bg-[linear-gradient(180deg,#eef7fb_0%,#f8fcfd_100%)] p-6 md:p-8 lg:p-10`}>
                  <p className="kicker">{en ? 'SECURE REFERRAL' : 'DERIVACIÓN SEGURA'}</p>
                  <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[var(--blue-deep)] md:text-4xl">{en ? 'Refer an enquiry' : 'Derivar una consulta'}</h2>
                  <p className="mt-5 text-base leading-8 text-slate-700">{en ? 'Share only the minimum details needed. We do not need sensitive documents at this first contact.' : 'Comparte únicamente los datos mínimos necesarios. No necesitamos documentación sensible en este primer contacto.'}</p>
                  <div className="mt-8 grid gap-3">
                    {(en ? ['Minimum details only', 'No sensitive documents', 'Contact with authorisation'] : ['Solo datos mínimos', 'Sin documentos sensibles', 'Contacto con autorización']).map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-bold text-[var(--blue-deep)]">
                        <CheckCircle2 className="h-4 w-4 text-[var(--green)]" aria-hidden="true" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 rounded-[20px] border border-white/70 bg-white/65 p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm">{en ? 'We will contact the client using the authorised details.' : 'Nos pondremos en contacto con el cliente utilizando los datos autorizados.'}</p>
                </div>
                <div className={`${styles.mobileFormBody} p-5 md:p-8 lg:p-10`}>
                  <ForeignersPartnerForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.mobileSection} section-pad bg-white`} data-foreigners-section="faq">
          <div className="container-shell grid gap-8 xl:grid-cols-[0.84fr_1.16fr]">
            <div>
                  <p className="kicker">{en ? 'WE ANSWER YOUR QUESTIONS' : 'RESOLVEMOS TUS DUDAS'}</p>
              <h2 className="mt-3 section-title">{en ? 'Questions before you move forward?' : '¿Tienes preguntas antes de avanzar?'}</h2>
              <p className="section-copy mt-4">
                {en ? 'Here we answer common questions about the policy, documentation and processes in Spain. If you prefer, we can also guide you personally.' : 'Aquí respondemos a las dudas más habituales sobre la póliza, la documentación y los trámites en España. Si lo prefieres, también podemos orientarte personalmente.'}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
                <a href={personalHref} className="btn-whatsapp sm:w-auto xl:w-fit">
                  <WhatsAppIcon className="h-4 w-4" /> {en ? 'Talk on WhatsApp' : 'Hablar por WhatsApp'}
                </a>
                <Link href={en ? '/en/contact' : '/contacto'} className="btn-secondary sm:w-auto xl:w-fit">{en ? 'Ask for guidance' : 'Pedir orientación'}</Link>
              </div>
            </div>
            <div className={styles.mobileFaq}>
              <FAQAccordion items={visibleFaq} locale={locale} />
            </div>
          </div>
        </section>

        <section className={`${styles.mobileClosingSection} section-pad pt-0`} data-foreigners-section="cierre">
          <div className="container-shell">
            <div className={`${styles.mobileClosingCard} rounded-[30px] bg-[var(--blue-deep)] p-8 text-white md:p-10`}>
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-3xl">
                  <p className="kicker !text-white/70">{en ? 'NEXT STEP' : 'Siguiente paso'}</p>
                  <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">{en ? 'Review your case without turning the process into a maze' : 'Revisa tu caso sin convertir el trámite en un laberinto'}</h2>
                  <p className="mt-4 text-lg leading-9 text-white/80">{en ? 'Individuals and professionals can start with only the minimum information needed.' : 'Particulares y profesionales pueden iniciar la consulta con la información mínima necesaria.'}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
                  <ForeignersTrackedLink href={personalHref} className="btn-whatsapp" action="whatsapp_click" label="final_cta">
                    <WhatsAppIcon className="h-4 w-4" /> {en ? 'Review my situation' : 'Revisar mi situación'}
                  </ForeignersTrackedLink>
	                  <ForeignersTrackedLink href="#derivar-consulta" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]" action="cta_click" label="final_to_form">
	                    {en ? 'Refer a case' : 'Derivar un caso'}
	                  </ForeignersTrackedLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp mobileVariant="floating" mobileAvoidSelector={'#derivar-consulta, [data-foreigners-section="cierre"]'} />
    </>
  );
}

export default function ExtranjerosPage() { return <ExtranjerosPageView locale="es" />; }
