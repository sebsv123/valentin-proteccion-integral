import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const handleLocale = createMiddleware({
  ...routing,
  localeDetection: false,
});

// next-intl rewrites public English aliases to the filesystem route names
// (for example /en/reviews -> /en/opiniones). The rewritten request passes
// through this proxy again; let it reach the route without translating it
// back to the public alias, otherwise the two URLs form a 307 loop.
const internalEnglishPaths = new Set([
  '/en/opiniones',
  '/en/aviso-legal',
  '/en/privacidad',
  '/en/empresas',
  '/en/empresas/salud',
  '/en/empresas/ciberseguridad',
  '/en/para/autonomos',
  '/en/para/familias',
  '/en/para/jovenes-profesionales',
  '/en/para/seniors',
  '/en/extranjeros/alquileres',
]);

export default function proxy(request: NextRequest) {
  if (internalEnglishPaths.has(request.nextUrl.pathname)) return NextResponse.next();
  return handleLocale(request);
}

export const config = {
  // The Spanish tree is legacy and must remain untouched. The pilot only
  // needs locale negotiation for the new /en routes.
  matcher: ['/en', '/en/:path*'],
};
