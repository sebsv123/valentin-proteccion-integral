/**
 * FUENTE ÚNICA DE VERDAD de identidad, contacto y datos profesionales de
 * Valentín Protección Integral.
 *
 * Reglas (no romper):
 * - VPI es una MARCA COMERCIAL, no una compañía aseguradora.
 * - Rosa y Sebastián son cofundadores al mismo nivel.
 * - La responsable legal/profesional publicada del sitio es Rosa Isabel Valentín González.
 * - Datos de Rosa (NIF y clave DGSFP) verificados: no mezclar con los de
 *   ningún otro miembro del equipo.
 * - El código DGSFP personal de Sebastián NO debe publicarse en ninguna parte.
 * - ASISA / ASISA VIDA y cualquier aseguradora son ENTIDADES TERCERAS.
 *
 * Los componentes deben leer de aquí en lugar de escribir estos datos a mano.
 */

const legalOwner = {
  fullName: 'Rosa Isabel Valentín González',
  displayName: 'Rosa Valentín',
  role: 'Agente de seguros registrada en la DGSFP · Responsable de la actividad',
  nif: '79234434D',
  dgsfpCode: 'C012479234434D',
  dgsfpRegistryUrl: 'https://rrpp.dgsfp.mineco.es/',
} as const;

const coFounders = [
  {
    fullName: 'Rosa Isabel Valentín González',
    displayName: 'Rosa Valentín',
    role: 'Cofundadora de VPI',
    insurerRelationship: 'Agente exclusiva de seguros de SegurCaixa Adeslas',
  },
  {
    fullName: 'Sebastián Sifontes Valentín',
    displayName: 'Sebastián Valentín',
    role: 'Cofundador de VPI',
    insurerRelationship: 'Agente exclusivo de seguros de ASISA',
  },
] as const;

export const siteConfig = {
  brand: {
    name: 'Valentín Protección Integral',
    shortName: 'VPI',
    // Naturaleza jurídica pública de la marca
    nature: 'Marca comercial de mediación de seguros',
    isInsurer: false,
    logo: '/brand/logo-vpi.webp',
    domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://valentinproteccionintegral.com',
  },

  /** Modelo corporativo: ambos fundadores tienen el mismo nivel. */
  coFounders,

  /** Disclosure legal del sitio; no implica jerarquía fundacional. */
  legalOwner,

  /** Compatibilidad para disclosures legales existentes; no usar como grafo corporativo. */
  responsiblePerson: legalOwner,

  /** Relaciones profesionales individuales; no atribuirlas a la marca. */
  professionalRelationships: coFounders.map(({ fullName, insurerRelationship }) => ({ fullName, insurerRelationship })),

  contact: {
    phone: '+34 603 448 765',
    phoneHref: '+34603448765',
    whatsappNumber: '34603448765',
    whatsappHref: 'https://wa.me/34603448765',
    email: 'contacto@valentinproteccionintegral.com',
    addressLocality: 'Boadilla del Monte',
    addressRegion: 'Comunidad de Madrid',
    addressCountry: 'ES',
    schedule: 'Atención en horario comercial; las solicitudes fuera de horario se atienden el siguiente día laborable.',
  },

  social: {
    instagram: 'https://www.instagram.com/segurosvalentin/',
    instagramHandle: '@segurosvalentin',
  },

  legalLinks: {
    privacidad: '/privacidad',
    cookies: '/cookies',
    avisoLegal: '/aviso-legal',
  },

  /**
   * Servicio de vivienda/alquiler (rama de extranjeros).
   * Alcance inicial: Madrid. Autoría prudente hasta verificación jurídica.
   */
  housingService: {
    scopeCity: 'Madrid',
    // Línea de autoría provisional aprobada.
    coordinatorLine:
      'Servicio de vivienda coordinado por Valentín Protección Integral junto a colaboradores especializados en perfiles internacionales.',
    // Nombre del colaborador: NO publicar hasta aprobación expresa.
    // Para activarlo: showPartner = true y partnerName = 'VIP Global Perú'.
    showPartner: false,
    partnerName: null as string | null,
    conditionsNote:
      'Las viviendas están sujetas a disponibilidad, condiciones del propietario, estudio del perfil y aceptación de la documentación aportada. Las características de cada alquiler y los servicios prestados se informarán antes de iniciar el proceso.',
  },

  /** Aseguradoras: SIEMPRE presentadas como entidades terceras. */
  insurers: {
    disclaimer:
      'Las aseguradoras (como ASISA o ASISA VIDA) son entidades terceras. VPI distribuye sus productos y te orienta, pero la aceptación del riesgo, las coberturas, las prestaciones y el pago de indemnizaciones corresponden a la aseguradora según la póliza.',
  },
} as const;

export type SiteConfig = typeof siteConfig;
