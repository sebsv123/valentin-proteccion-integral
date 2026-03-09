import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkSecurity } from './lib/security';

export async function middleware(request: NextRequest) {
  // Get IP from headers (Edge compatible)
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';

  // Check security engine
  const result = await checkSecurity(ip);

  if (!result.allowed) {
    if (result.status === 429) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Demasiadas peticiones. Por favor, espera un momento.',
          message: 'Rate limit exceeded (20 req/s @ VPI Security Layer)' 
        }),
        { status: 429, headers: { 'content-type': 'application/json' } }
      );
    }
    
    if (result.status === 403) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Acceso denegado.',
          message: 'IP flagged for suspicious activity.' 
        }),
        { status: 403, headers: { 'content-type': 'application/json' } }
      );
    }

    if (result.status === 503) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Servicio temporalmente no disponible.',
          message: 'Circuit breaker active.' 
        }),
        { status: 503, headers: { 'content-type': 'application/json' } }
      );
    }
  }

  // Security Headers
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permission-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

// Only apply to app routes, not assets
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|brand).*)',
    '/api/(.*)',
  ],
};
