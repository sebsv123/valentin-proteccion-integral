const brandId = 'https://valentinproteccionintegral.com/#organization';

export default function SchemaPersons({ locale = 'es' }: { locale?: string }) {
  const isEnglish = locale === 'en';
  const rosaId = 'https://valentinproteccionintegral.com/sobre-nosotros#rosa-valentin';
  const sebastianId = 'https://valentinproteccionintegral.com/sobre-nosotros#sebastian-valentin';
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'InsuranceAgency',
        '@id': brandId,
        name: 'Valentín Protección Integral',
        description: isEnglish
          ? 'Commercial insurance mediation brand and project, not an insurer or an independent brokerage.'
          : 'Marca comercial y proyecto de mediación de seguros; no es una aseguradora ni una correduría independiente.',
        founder: [{ '@id': rosaId }, { '@id': sebastianId }],
      },
      {
        '@type': 'Person',
        '@id': rosaId,
        inLanguage: locale,
        name: 'Rosa Isabel Valentín González',
        alternateName: 'Rosa Valentín',
        jobTitle: isEnglish ? 'Co-founder of VPI and exclusive insurance agent for SegurCaixa Adeslas' : 'Cofundadora de VPI y agente exclusiva de seguros de SegurCaixa Adeslas',
        description: isEnglish ? 'Co-founder of Valentín Protección Integral and individual exclusive insurance agent for SegurCaixa Adeslas. The website legal disclosure identifies Rosa as responsible for the published activity.' : 'Cofundadora de Valentín Protección Integral y agente exclusiva individual de seguros de SegurCaixa Adeslas. El disclosure legal del sitio identifica a Rosa como responsable de la actividad publicada.',
        url: 'https://valentinproteccionintegral.com/sobre-nosotros',
        image: 'https://valentinproteccionintegral.com/og-image.webp',
        telephone: '+34 603 448 765',
        email: 'contacto@valentinproteccionintegral.com',
        affiliation: { '@id': brandId },
        sameAs: ['https://www.instagram.com/segurosvalentin/', 'https://wa.me/34603448765', 'https://www.linkedin.com/in/rosa-isabel-valentin-gonzalez-3a0b16141/'],
        knowsAbout: isEnglish ? ['Health insurance', 'Pet insurance', 'Dental insurance', 'Travel insurance', 'Accident insurance', 'Funeral insurance', 'Business insurance'] : ['Seguros de salud', 'Seguros para mascotas', 'Seguros dentales', 'Seguros de viaje', 'Seguros de accidentes', 'Seguros de decesos', 'Seguros para negocios y pymes'],
      },
      {
        '@type': 'Person',
        '@id': sebastianId,
        inLanguage: locale,
        name: 'Sebastián Sifontes Valentín',
        alternateName: 'Sebastián Valentín',
        jobTitle: isEnglish ? 'Co-founder of VPI and exclusive insurance agent for ASISA' : 'Cofundador de VPI y agente exclusivo de seguros de ASISA',
        description: isEnglish ? 'Co-founder of Valentín Protección Integral and individual exclusive insurance agent for ASISA, with expertise in life, health and accident insurance.' : 'Cofundador de Valentín Protección Integral y agente exclusivo individual de seguros de ASISA, especializado en seguros de vida, salud y accidentes.',
        url: 'https://valentinproteccionintegral.com/sobre-nosotros',
        affiliation: { '@id': brandId },
        sameAs: ['https://www.linkedin.com/in/sebastian-sifontes-valentin-752665187'],
        alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'Universidad Complutense de Madrid', url: 'https://www.ucm.es' }, { '@type': 'CollegeOrUniversity', name: 'Freie Universität Berlin', url: 'https://www.fu-berlin.de' }],
        hasCredential: [{ '@type': 'EducationalOccupationalCredential', name: 'Doble Grado en Gestión y Administración Pública – Economía', credentialCategory: 'degree', recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Universidad Complutense de Madrid' } }, { '@type': 'EducationalOccupationalCredential', name: 'Máster en Big Data, Data Science e Inteligencia Artificial', credentialCategory: 'postgraduate', recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Universidad Complutense de Madrid' } }],
        knowsAbout: isEnglish ? ['Life insurance', 'Health insurance', 'Personal accident insurance', 'Economic data analysis'] : ['Seguros de vida', 'Seguros de salud', 'Seguros de accidentes personales', 'Economía y análisis de datos'],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
