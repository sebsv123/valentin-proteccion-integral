import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Script from 'next/script';
import { SocialProof } from '@/components/social-proof';
import { site } from '@/lib/products';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', weight: ['600', '700', '800'] });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600', '700'] });

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    url: site.domain,
    siteName: site.name,
    images: [{ url: '/brand/logo-vpi.jpeg', width: 740, height: 184, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/brand/logo-vpi.jpeg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['InsuranceAgency', 'LocalBusiness'],
    name: site.name,
    description: site.description,
    image: `${site.domain}/brand/logo-vpi.jpeg`,
    telephone: site.phone,
    url: site.domain,
    sameAs: [site.instagram],
    areaServed: ['Madrid', 'Boadilla del Monte', 'Comunidad de Madrid', 'España'],
    serviceType: 'Asesoramiento y mediación en seguros',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boadilla del Monte',
      addressRegion: 'Comunidad de Madrid',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.407,
      longitude: -3.892,
    },
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  };

  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${playfair.variable} antialiased font-sans`}>
        <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <SocialProof />
        {clarityId ? (
          <Script id="clarity" strategy="afterInteractive">{`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}</Script>
        ) : null}
      </body>
    </html>
  );
}
