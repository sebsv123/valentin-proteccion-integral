"use client";

import Link from 'next/link';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/products';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import { WhatsAppLink } from '@/components/whatsapp-link';
import { useLocale } from 'next-intl';

export function HeroLeadForm() {
  return (
    <div 
      id="lead-form"
      style={{
        animationName: 'hero-fade-in-right',
        animationDuration: '0.42s',
        animationDelay: '0.05s',
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out',
        opacity: 0,
      }}
    >
      <LeadForm defaultProduct="salud" compact homeVariant />
    </div>
  );
}

export function HeroContentClient() {
  const isEnglish = useLocale() === 'en';
  return (
    <div className="flex h-full max-w-[43rem] flex-col items-start justify-center">
      <p className="text-xs font-bold tracking-[0.16em] text-[var(--blue)] sm:text-sm">
        {isEnglish ? 'INSURANCE ADVISORS IN MADRID · CLEAR, PERSONAL GUIDANCE' : 'ASESORES DE SEGUROS EN MADRID · ASESORAMIENTO CLARO Y PERSONAL'}
      </p>
      <h1 id="hero-title" className="mt-5 font-heading text-4xl font-extrabold leading-[1.08] text-[var(--blue-deep)] sm:text-5xl xl:text-6xl">
        {isEnglish ? <>Protect what matters,<br />without deciding blindly.</> : <>Protege lo importante,<br />sin decidir a ciegas.</>}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
        {isEnglish ? 'We help you choose with confidence. We understand your situation, explain the conditions clearly and stay by your side before and after you buy.' : 'Te ayudamos a elegir con criterio. Analizamos tu caso, te explicamos las condiciones con claridad y te acompañamos antes y después de contratar.'}
      </p>
      <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
        <Link href="/contacto" className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3">
          {isEnglish ? 'Speak to an advisor' : 'Hablar con un asesor'}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
        <WhatsAppLink
          href={buildWhatsAppHref(isEnglish ? 'Hello, I would like clear insurance guidance.' : WHATSAPP_MESSAGE_DEFAULT)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-[var(--blue-deep)] transition hover:text-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
          {isEnglish ? 'I would rather write on WhatsApp' : 'Prefiero escribir por WhatsApp'}
        </WhatsAppLink>
      </div>
      <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[var(--blue-deep)]" aria-label={isEnglish ? 'Trust signals' : 'Señales de confianza'}>
        <li>{isEnglish ? '+10 years of experience' : '+10 años de experiencia'}</li>
        <li>{isEnglish ? '+1,200 families protected' : '+1.200 familias protegidas'}</li>
        <li>{isEnglish ? 'Officially registered insurance guidance' : 'Orientación de seguros con registro oficial'}</li>
      </ul>
    </div>
  );
}
