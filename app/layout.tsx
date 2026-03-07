import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import { site } from '@/lib/products';
import './globals.css';

const heading = Poppins({ subsets: ['latin'], variable: '--font-heading', weight: ['600', '700', '800'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600', '700'] });

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
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.description,
    image: `${site.domain}/brand/logo-vpi.jpeg`,
    telephone: site.phone,
    url: site.domain,
    sameAs: [site.instagram],
    areaServed: 'España',
    serviceType: 'Asesoramiento en seguros',
  };

  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable}`}>
        <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
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
