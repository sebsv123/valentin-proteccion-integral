import { MetadataRoute } from 'next';
import { getBlogSitemapEntries, getPublishedEnglishPosts } from '@/lib/blog-catalog';
import { subpages } from '@/lib/products';
import { localizedSubpagePath } from '@/lib/product-locales';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://valentinproteccionintegral.com';
  const now = new Date().toISOString();
  return [
    // PILAR — Home
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/en`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: { es: base, en: `${base}/en`, 'x-default': base } } },

    // PRODUCTOS (alta intención de compra) — añadidos vida, mascotas, viaje, senior
    { url: `${base}/seguros`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-individual`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-dental`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-senior`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/dental`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/mascotas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/viaje`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/seguros/accidentes-decesos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    // /seguros/accidentes omitida: redirige a /seguros/accidentes-decesos (301)
    { url: `${base}/seguros/decesos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/en/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: { languages: { es: `${base}/contacto`, en: `${base}/en/contact`, 'x-default': `${base}/contacto` } } },
    { url: `${base}/extranjeros`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/en/foreigners`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/extranjeros`, en: `${base}/en/foreigners`, 'x-default': `${base}/extranjeros` } } },
    { url: `${base}/en/insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: { es: `${base}/seguros`, en: `${base}/en/insurance`, 'x-default': `${base}/seguros` } } },
    { url: `${base}/seguros/salud`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/en/insurance/health`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: { es: `${base}/seguros/salud`, en: `${base}/en/insurance/health`, 'x-default': `${base}/seguros/salud` } } },
    { url: `${base}/seguros/salud-extranjeros`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/en/insurance/health/foreigners`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/salud-extranjeros`, en: `${base}/en/insurance/health/foreigners`, 'x-default': `${base}/seguros/salud-extranjeros` } } },
    { url: `${base}/en/how-we-help`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: { languages: { es: `${base}/como-te-ayudamos`, en: `${base}/en/how-we-help`, 'x-default': `${base}/como-te-ayudamos` } } },
    { url: `${base}/en/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: { languages: { es: `${base}/sobre-nosotros`, en: `${base}/en/about-us`, 'x-default': `${base}/sobre-nosotros` } } },
    { url: `${base}/en/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.6, alternates: { languages: { es: `${base}/opiniones`, en: `${base}/en/reviews`, 'x-default': `${base}/opiniones` } } },
    { url: `${base}/en/business`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/empresas`, en: `${base}/en/business`, 'x-default': `${base}/empresas` } } },
    { url: `${base}/en/business/health-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/empresas/salud`, en: `${base}/en/business/health-insurance`, 'x-default': `${base}/empresas/salud` } } },
    { url: `${base}/en/business/cybersecurity`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/empresas/ciberseguridad`, en: `${base}/en/business/cybersecurity`, 'x-default': `${base}/empresas/ciberseguridad` } } },
    { url: `${base}/en/for/self-employed`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: { languages: { es: `${base}/autonomos`, en: `${base}/en/for/self-employed`, 'x-default': `${base}/autonomos` } } },
    { url: `${base}/en/for/families`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: { languages: { es: `${base}/para/familias`, en: `${base}/en/for/families`, 'x-default': `${base}/para/familias` } } },
    { url: `${base}/en/for/young-professionals`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: { languages: { es: `${base}/para/jovenes-profesionales`, en: `${base}/en/for/young-professionals`, 'x-default': `${base}/para/jovenes-profesionales` } } },
    { url: `${base}/en/for/seniors`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: { languages: { es: `${base}/para/seniors`, en: `${base}/en/for/seniors`, 'x-default': `${base}/para/seniors` } } },
    { url: `${base}/en/foreigners/rentals`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: { languages: { es: `${base}/extranjeros/alquileres`, en: `${base}/en/foreigners/rentals`, 'x-default': `${base}/extranjeros/alquileres` } } },
    { url: `${base}/en/insurance/accident-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/en/insurance/accident-insurance/business-self-employed`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/en/insurance/funeral-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/decesos`, en: `${base}/en/insurance/funeral-insurance`, 'x-default': `${base}/seguros/decesos` } } },
    { url: `${base}/en/insurance/funeral-insurance/families`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/decesos/familias`, en: `${base}/en/insurance/funeral-insurance/families`, 'x-default': `${base}/seguros/decesos/familias` } } },
    { url: `${base}/en/insurance/dental-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/dental`, en: `${base}/en/insurance/dental-insurance`, 'x-default': `${base}/seguros/dental` } } },
    { url: `${base}/en/insurance/dental-insurance/families`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/dental/familias`, en: `${base}/en/insurance/dental-insurance/families`, 'x-default': `${base}/seguros/dental/familias` } } },
    { url: `${base}/en/insurance/pet-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/mascotas`, en: `${base}/en/insurance/pet-insurance`, 'x-default': `${base}/seguros/mascotas` } } },
    { url: `${base}/en/insurance/pet-insurance/civil-liability`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/mascotas/responsabilidad-civil`, en: `${base}/en/insurance/pet-insurance/civil-liability`, 'x-default': `${base}/seguros/mascotas/responsabilidad-civil` } } },
    { url: `${base}/en/insurance/health-insurance/self-employed`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/autonomos`, en: `${base}/en/insurance/health-insurance/self-employed`, 'x-default': `${base}/seguros/salud/autonomos` } } },
    { url: `${base}/en/insurance/health-insurance/comprehensive`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/completa`, en: `${base}/en/insurance/health-insurance/comprehensive`, 'x-default': `${base}/seguros/salud/completa` } } },
    { url: `${base}/en/insurance/health-insurance/families`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/familias`, en: `${base}/en/insurance/health-insurance/families`, 'x-default': `${base}/seguros/salud/familias` } } },
    { url: `${base}/en/insurance/health-insurance/reimbursement`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/reembolso`, en: `${base}/en/insurance/health-insurance/reimbursement`, 'x-default': `${base}/seguros/salud/reembolso` } } },
    { url: `${base}/en/insurance/health-insurance/senior`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/senior`, en: `${base}/en/insurance/health-insurance/senior`, 'x-default': `${base}/seguros/salud/senior` } } },
    { url: `${base}/en/insurance/travel-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/viaje`, en: `${base}/en/insurance/travel-insurance`, 'x-default': `${base}/seguros/viaje` } } },
    { url: `${base}/en/insurance/travel-insurance/students`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/viaje/estudios`, en: `${base}/en/insurance/travel-insurance/students`, 'x-default': `${base}/seguros/viaje/estudios` } } },
    // SUBPÁGINAS DE PRODUCTO — inventario canónico de lib/products.ts
    ...subpages.filter((subpage) => !(subpage.parent === 'accidentes' && subpage.slug === 'pyme-autonomos')).map((subpage) => {
      const es = `${base}/seguros/${subpage.parent}/${subpage.slug}`;
      const en = `${base}${localizedSubpagePath(subpage.parent, subpage.slug, 'en')}`;
      return { url: es, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8, alternates: { languages: { es, en, 'x-default': es } } };
    }),
    { url: `${base}/extranjeros/alquileres`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/empresas/salud`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/empresas/ciberseguridad`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/empresas`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/internacional`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/en/international`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional`, en: `${base}/en/international`, 'x-default': `${base}/internacional` } } },
    { url: `${base}/internacional/corea-del-sur`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/internacional/australia`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/internacional/india`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/internacional/peru`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/en/international/peru`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional/peru`, en: `${base}/en/international/peru`, 'x-default': `${base}/internacional/peru` } } },
    { url: `${base}/en/international/australia`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional/australia`, en: `${base}/en/international/australia`, 'x-default': `${base}/internacional/australia` } } },
    { url: `${base}/en/international/india`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional/india`, en: `${base}/en/international/india`, 'x-default': `${base}/internacional/india` } } },
    { url: `${base}/en/international/south-korea`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional/corea-del-sur`, en: `${base}/en/international/south-korea`, 'x-default': `${base}/internacional/corea-del-sur` } } },
    { url: `${base}/autonomos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    // /para/autonomos excluida: redirige 301 a /autonomos

    // ZONAS (SEO local) — añadido hub
    { url: `${base}/zonas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/boadilla-del-monte`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/majadahonda`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/pozuelo-de-alarcon`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/madrid`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/zonas/las-rozas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // CONFIANZA / AUTORIDAD
    { url: `${base}/como-te-ayudamos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sobre-nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/opiniones`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/garantias`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // /landing/* excluidas: son campañas, no indexables orgánicamente

    // AUDIENCIAS (app/para/) — /para/autonomos excluida por redirect 301
    { url: `${base}/para/familias`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/seniors`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/jovenes-profesionales`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // BLOG — índice
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/en/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6, alternates: { languages: { es: `${base}/blog`, en: `${base}/en/blog`, 'x-default': `${base}/blog` } } },
    // Artículos del blog: fuente única del inventario canónico
    ...getBlogSitemapEntries('es').map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: post.priority,
      ...(post.enSlug ? { alternates: { languages: { es: `${base}/blog/${post.slug}`, en: `${base}/en/blog/${post.enSlug}`, 'x-default': `${base}/blog/${post.slug}` } } } : {}),
    })),
    ...getPublishedEnglishPosts().map((post) => ({
      url: `${base}/en/blog/${post.slug.en}`,
      lastModified: post.shared.date,
      changeFrequency: 'monthly' as const,
      priority: post.sitemap.priority,
      alternates: { languages: { es: `${base}/blog/${post.slug.es}`, en: `${base}/en/blog/${post.slug.en}`, 'x-default': `${base}/blog/${post.slug.es}` } },
    })),

    // CONTACTO
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // LEGALES (baja prioridad)
  ];
}
