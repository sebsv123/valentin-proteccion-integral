import { MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppHref, site } from '@/lib/products';

export function StickyWhatsApp() {
  return (
    <>
      <a href={buildWhatsAppHref('Hola, quiero orientación sobre un seguro.')} className="floating-whatsapp glass animate-pulse-soft !border-white/20 hidden md:inline-flex items-center gap-3 pr-6">
        <div className="bg-white/20 p-2 rounded-full"><MessageCircle className="h-5 w-5" /></div> WhatsApp
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-white/80 p-4 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="container-shell grid grid-cols-2 gap-4">
          <a href={buildWhatsAppHref('Hola, quiero orientación sobre un seguro.')} className="btn-whatsapp animate-pulse-soft w-full !py-4 shadow-lg">WhatsApp</a>
          <a href={`tel:${site.phoneHref}`} className="btn-secondary w-full !py-4 shadow-lg"><Phone className="h-5 w-5" /> Llamar</a>
        </div>
      </div>
    </>
  );
}
