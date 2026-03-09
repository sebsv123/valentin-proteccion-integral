"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, MessageCircle, ShieldCheck } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';

const formSchema = z.object({
  fullName: z.string().min(2, 'Indícanos tu nombre'),
  phone: z.string().min(6, 'Añade un teléfono válido'),
  productInterest: z.string().min(2, 'Selecciona una categoría'),
  notes: z.string().optional(),
  consent: z.boolean().refine((value) => value, 'Necesitamos tu consentimiento para responderte'),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadForm({ defaultProduct = 'salud', compact = false }: { defaultProduct?: string; compact?: boolean }) {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { fullName: '', phone: '', productInterest: defaultProduct, notes: '', consent: false, website: '' },
  });

  const onSubmit = async (values: FormValues) => {
    setServerMessage(null);
    setServerError(null);

    const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
    const secret = process.env.NEXT_PUBLIC_LEAD_SECRET;

    const payload = {
      ...values,
      page: typeof window !== 'undefined' ? { url: window.location.href, referrer: document.referrer || '' } : {},
      timestamp: new Date().toISOString(),
    };

    if (!endpoint) {
      setServerMessage('Tu solicitud está lista para enviarse. Mientras terminamos la conexión automática, puedes escribirnos por WhatsApp y te ayudamos igualmente.');
      reset({ fullName: '', phone: '', productInterest: defaultProduct, notes: '', consent: false, website: '' });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(secret ? { 'X-Lead-Secret': secret } : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('No hemos podido enviar tu solicitud. Escríbenos por WhatsApp y lo resolvemos contigo.');

      setServerMessage('Gracias. Hemos recibido tu solicitud y te responderemos con una orientación inicial lo antes posible.');
      reset({ fullName: '', phone: '', productInterest: defaultProduct, notes: '', consent: false, website: '' });
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'Ha ocurrido un error inesperado.');
    }
  };

  return (
    <div className="soft-card p-6 md:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="kicker">Consulta sin compromiso</p>
          <h3 className="mt-2 font-heading text-3xl font-bold text-[var(--blue-deep)] md:text-4xl">Cuéntanos qué necesitas</h3>
          <p className="mt-3 text-base leading-8 text-[var(--muted)]">Te respondemos con una primera orientación clara para ayudarte a comparar y elegir mejor.</p>
        </div>
        <div className="hidden rounded-2xl bg-[var(--bg)] p-3 text-[var(--blue)] md:block">
          <ShieldCheck className="h-7 w-7" />
        </div>
      </div>

      <div className="mb-6 rounded-[24px] bg-[var(--bg)] p-4 text-sm leading-7 text-[var(--muted)] md:text-base">
        Si prefieres ir más rápido, también puedes escribirnos por <a className="font-semibold text-[var(--blue)] underline underline-offset-4" href={buildWhatsAppHref(`Hola, quiero una orientación clara sobre el seguro de ${defaultProduct}.`)}>WhatsApp</a>.
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4" noValidate>
        <input type="hidden" {...register('website')} />

        <div className={compact ? 'grid gap-4 md:grid-cols-2' : 'grid gap-4'}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Nombre y apellidos</label>
            <input className="input-ui" placeholder="Tu nombre" {...register('fullName')} />
            {errors.fullName ? <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Teléfono</label>
            <input className="input-ui" placeholder="Ej. 603 448 765" {...register('phone')} />
            {errors.phone ? <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Producto</label>
            <select className="select-ui" {...register('productInterest')}>
              <option value="salud">SALUD (Básico, Senior, Reembolso...)</option>
              <option value="vida">VIDA</option>
              <option value="negocio">NEGOCIO / PYME</option>
              <option value="proteccion-juridica">PROTECCIÓN JURÍDICA</option>
              <option value="electrodomesticos">ELECTRODOMÉSTICOS</option>
              <option value="mascotas">MASCOTAS</option>
              <option value="accidentes">ACCIDENTES</option>
              <option value="dental">DENTAL</option>
              <option value="decesos">DECESOS</option>
              <option value="viaje">VIAJE</option>
            </select>
            {errors.productInterest ? <p className="mt-2 text-sm text-red-600">{errors.productInterest.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Detalle útil</label>
            <input className="input-ui" placeholder="Familia, autónomo, mascota, viaje puntual..." {...register('notes')} />
          </div>
        </div>

        <label className="mt-2 flex items-start gap-3 rounded-[22px] bg-[var(--bg)] p-4 text-sm leading-6 text-[var(--muted)] md:text-base">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[var(--border)]" {...register('consent')} />
          <span>Acepto que mis datos se utilicen para responder a mi consulta y orientarme sobre opciones que puedan encajar conmigo.</span>
        </label>
        {errors.consent ? <p className="text-sm text-red-600">{errors.consent.message}</p> : null}

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            Solicitar orientación
          </button>
          <a href={buildWhatsAppHref(`Hola, quiero una orientación clara sobre el seguro de ${defaultProduct}.`)} className="btn-whatsapp w-full sm:w-auto">
            <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
          </a>
        </div>

        {serverMessage ? <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{serverMessage}</div> : null}
        {serverError ? <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{serverError}</div> : null}
      </form>
    </div>
  );
}
