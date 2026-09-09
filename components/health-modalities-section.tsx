import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Globe2,
  HeartHandshake,
  MessageCircleMore,
  Stethoscope,
  WalletCards,
} from 'lucide-react';
import styles from './health-modalities-section.module.css';
import { useLocale } from 'next-intl';

const modalities = [
  {
    eyebrow: 'AMBULATORIO',
    title: 'Acceso médico sin hospitalización',
    copy: 'Consultas, especialistas y pruebas diagnósticas sin hospitalización. Pensado para quien busca utilizar la medicina privada con una cuota más contenida.',
    action: 'Ver opción ambulatoria',
    href: '/contacto',
    icon: Stethoscope,
  },
  {
    eyebrow: 'SENIOR',
    title: 'Cobertura adaptada a partir de los 55 años',
    copy: 'Alternativas adaptadas a personas desde 55 años, cuyas condiciones y servicios deben revisarse según la edad y el perfil de cada asegurado.',
    action: 'Consultar opciones senior',
    href: '/seguros/salud/senior',
    icon: HeartHandshake,
  },
  {
    eyebrow: 'REEMBOLSO',
    title: 'Más libertad para elegir médico',
    copy: 'Utiliza el cuadro médico concertado y, según la póliza, acude también a profesionales externos recuperando una parte de la factura.',
    action: 'Entender el reembolso',
    href: '/seguros/salud/reembolso',
    icon: WalletCards,
  },
  {
    eyebrow: 'ESTUDIOS Y RESIDENCIA',
    title: 'Seguro médico para vivir en España',
    copy: 'Seguros específicos para estudios o residencia en España, con cobertura y documentación adaptadas al procedimiento correspondiente.',
    action: 'Ir a seguros para extranjeros',
    href: '/seguros/salud-extranjeros',
    icon: Globe2,
  },
] as const;

export function HealthModalitiesSection() {
  const en = useLocale() === 'en';
  const visibleModalities = en ? modalities.map((item, index) => ({ ...item, ...([
    { eyebrow: 'OUTPATIENT', title: 'Medical access without hospitalisation', copy: 'Consultations, specialists and diagnostic tests without hospitalisation. Designed for those seeking private medicine at a more contained monthly cost.', action: 'View outpatient option' },
    { eyebrow: 'SENIOR', title: 'Cover adapted from age 55', copy: 'Options adapted for people from age 55; conditions and services should be reviewed according to each policyholder’s age and profile.', action: 'Ask about senior options' },
    { eyebrow: 'REIMBURSEMENT', title: 'More freedom to choose your doctor', copy: 'Use the provider network and, depending on the policy, also see external professionals while recovering part of the bill.', action: 'Understand reimbursement' },
    { eyebrow: 'STUDIES AND RESIDENCE', title: 'Health insurance for living in Spain', copy: 'Specific insurance for studies or residence in Spain, with cover and documentation adapted to the relevant process.', action: 'Go to insurance for foreigners' },
  ][index]) })) : modalities;
  return (
    <section className={styles.section} aria-labelledby="health-modalities-title">
      <div className={styles.topography} aria-hidden="true">
        <svg viewBox="0 0 1440 880" preserveAspectRatio="none">
          <path d="M-80 680c244-118 394 86 646-38s379-97 579 37 268 85 465-44" />
          <path d="M-56 728c229-111 391 95 641-27s370-104 557 29 267 89 456-35" />
          <path d="M1196 365c119 44 142 135 58 211-78 71-40 165 69 198" />
        </svg>
      </div>
      <div className={`container-shell ${styles.shell}`}>
        <div className={styles.topRow}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{en ? 'HEALTH PLAN TYPES' : 'MODALIDADES DE SALUD'}</p>
            <h2 id="health-modalities-title">{en ? 'Health insurance plans do not all cover the same things' : 'No todos los seguros de salud cubren lo mismo'}</h2>
            <div className={styles.curve} aria-hidden="true"><svg viewBox="0 0 164 24"><path d="M2 8c30 0 39 13 78 13 34 0 45-8 69-8" /><circle cx="157" cy="13" r="3" /></svg></div>
            <p className={styles.introCopy}>{en ? 'The difference is not just the price. Hospitalisation, co-payments, provider networks, free choice and how you use the policy can all change.' : 'La diferencia no está solo en el precio. Cambian la hospitalización, los copagos, el cuadro médico, la libre elección y la forma en que utilizarás la póliza.'}</p>
          </div>

          <article className={styles.featuredPlan}>
            <div className={styles.featuredContent}>
              <p className={styles.featuredTag}>{en ? 'COMPREHENSIVE HEALTH' : 'SALUD COMPLETA'}</p>
              <h3>{en ? 'Complete cover for everyday care and hospitalisation' : 'Cobertura completa para el día a día y la hospitalización'}</h3>
              <p>{en ? 'Consultations, specialists, tests and hospitalisation within one policy. A complete option for those who want outpatient and hospital care together.' : 'Consultas, especialistas, pruebas y hospitalización dentro de una misma póliza. Una opción completa para quienes quieren reunir asistencia ambulatoria y hospitalización en una misma póliza.'}</p>
              <ul>
                {(en ? ['Hospitalisation included', 'With or without co-payments', 'For individuals and families'] : ['Hospitalización incluida', 'Con o sin copagos', 'Para particulares y familias']).map((item) => <li key={item}><span aria-hidden="true"><Check /></span>{item}</li>)}
              </ul>
              <Link href="/seguros/salud/completa" className={styles.primaryAction}>{en ? 'Explore comprehensive health cover' : 'Explorar salud completa'} <ArrowRight aria-hidden="true" /></Link>
            </div>
            <div className={styles.featuredImage}>
              <Image src="/images/premium/hero-family.png" alt={en ? 'Family walking together outdoors' : 'Familia caminando junta al aire libre'} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 42vw, 460px" className={styles.familyPhoto} />
            </div>
          </article>
        </div>

        <div className={styles.modalityGrid}>
          {visibleModalities.map(({ eyebrow, title, copy, action, href, icon: Icon }) => (
            <article className={styles.modalityCard} key={eyebrow}>
              <span className={styles.modalityIcon} aria-hidden="true"><Icon /></span>
              <p className={styles.modalityEyebrow}>{eyebrow}</p>
              <h3>{title}</h3>
              <p className={styles.modalityCopy}>{copy}</p>
              <Link href={en && href === '/seguros/salud-extranjeros' ? '/en/insurance/health/foreigners' : href} className={styles.textAction}>{action}<ArrowRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>

        <aside className={styles.guidance} aria-labelledby="health-guidance-title">
          <span className={styles.guidanceIcon} aria-hidden="true"><MessageCircleMore /></span>
          <div><h3 id="health-guidance-title">{en ? 'Not sure which one to choose?' : '¿No sabes cuál elegir?'}</h3><p>{en ? 'Tell us what you need and we will help you distinguish which options make sense for your situation and which you can rule out.' : 'Cuéntanos qué buscas y te ayudaremos a distinguir qué opciones tienen sentido para tu caso y cuáles puedes descartar.'}</p></div>
          <Link href={en ? '/en/contact' : '/contacto'} className={styles.guidanceAction}>{en ? 'Review my situation' : 'Revisar mi caso'} <ArrowRight aria-hidden="true" /></Link>
        </aside>
      </div>
    </section>
  );
}
