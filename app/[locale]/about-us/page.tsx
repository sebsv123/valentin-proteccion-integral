import type { Metadata } from 'next';
import { LocalizedCorporatePage } from '@/components/localized-info-pages';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'About Us | Valentín Protección Integral', description: 'Meet VPI co-founders Rosa Isabel Valentín González and Sebastián Sifontes Valentín.', alternates: { canonical: 'https://valentinproteccionintegral.com/en/about-us', languages: { es: 'https://valentinproteccionintegral.com/sobre-nosotros', en: 'https://valentinproteccionintegral.com/en/about-us', 'x-default': 'https://valentinproteccionintegral.com/sobre-nosotros' } }, openGraph: { title: 'About Us | Valentín Protección Integral', description: 'Rosa and Sebastián are co-founders of VPI, with individual exclusive-agent relationships with SegurCaixa Adeslas and ASISA.', url: 'https://valentinproteccionintegral.com/en/about-us', locale: 'en_GB', type: 'website' } };
export default function Page() { return <LocalizedCorporatePage page="about-us" locale="en" />; }
