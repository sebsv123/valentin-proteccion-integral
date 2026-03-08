import type { MetadataRoute } from 'next';
import { products, site, subpages } from '@/lib/products';
import { blogPosts } from '@/lib/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain.replace(/\/$/, '');
  const staticRoutes = ['/', '/seguros', '/como-te-ayudamos', '/sobre-mi', '/blog', '/contacto', '/opiniones'];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: route === '/' ? 1 : 0.8 })),
    ...products.map((product) => ({ url: `${base}/seguros/${product.slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.75 })),
    ...subpages.map((page) => ({ url: `${base}/seguros/${page.parent}/${page.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.65 })),
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
