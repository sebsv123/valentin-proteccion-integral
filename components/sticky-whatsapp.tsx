import { MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppHref, site } from '@/lib/products';

export function StickyWhatsApp() {
  return (
    <>
      <a href={buildWhatsAppHref('Hola, quiero orientación sobre un seguro.')} className="floating-whatsapp hidden md:inline-flex">
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white/95 p-3 shadow-[0_-12px_24px_rgba(18,59,104,0.08)] backdrop-blur md:hidden">
        <div className="container-shell grid grid-cols-2 gap-3">
          <a href={buildWhatsAppHref('Hola, quiero orientación sobre un seguro.')} className="btn-whatsapp w-full !py-3">WhatsApp</a>
          <a href={`tel:${site.phoneHref}`} className="btn-secondary w-full !py-3"><Phone className="h-4 w-4" /> Llamar</a>
        </div>
      </div>
    </>
  );
}
