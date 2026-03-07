import Link from 'next/link';
import Image from 'next/image';
import { buildWhatsAppHref, mainNav, products, site } from '@/lib/products';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-white/92">
      <div className="container-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="relative h-20 w-[320px] max-w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-3 shadow-sm">
                <Image src="/brand/logo-vpi.jpeg" alt={site.name} fill className="object-contain" />
              </div>
              <p className="text-[var(--muted)]">{site.brandLine}</p>
            </div>
            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">Asesoramiento personalizado para ayudarte a entender, comparar y elegir mejor. Una web pensada para orientar con claridad y acompañarte antes de contratar.</p>
            <div className="flex flex-wrap gap-3">
              <a href={buildWhatsAppHref('Hola, quiero hablar por WhatsApp con Valentín Protección Integral.')} className="btn-whatsapp !px-5 !py-3">WhatsApp</a>
              <Link href="/contacto" className="btn-ghost !px-5 !py-3">Formulario</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Seguros</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              {products.map((product) => <Link className="block tracking-wide hover:text-[var(--blue)]" key={product.slug} href={`/seguros/${product.slug}`}>{product.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Navegación</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              {mainNav.map((item) => <Link className="block hover:text-[var(--blue)]" key={item.href} href={item.href}>{item.label}</Link>)}
              <Link className="block hover:text-[var(--blue)]" href="/privacidad">Privacidad</Link>
              <Link className="block hover:text-[var(--blue)]" href="/cookies">Cookies</Link>
              <Link className="block hover:text-[var(--blue)]" href="/aviso-legal">Aviso legal</Link>
            </div>
          </div>
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">Contacto</p>
            <div className="mt-4 space-y-3 text-[var(--muted)]">
              <p>{site.phone}</p>
              <p>España</p>
              <a href={site.instagram} className="block hover:text-[var(--blue)]">@segurosrosavalentin</a>
              <a href={buildWhatsAppHref('Hola, quiero una orientación sobre seguros.')} className="block hover:text-[var(--blue)]">Abrir WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 border-t border-[var(--border)] pt-6 text-sm leading-7 text-[var(--muted)] md:grid-cols-3">
          <p>La información mostrada es orientativa y no sustituye a la documentación contractual final.</p>
          <p>Las coberturas, límites, primas y condiciones pueden variar según modalidad, edad, provincia y aceptación.</p>
          <p>Esta web está pensada para orientar, comparar y acompañar antes de contratar.</p>
        </div>
      </div>
    </footer>
  );
}
