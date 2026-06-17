"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { trackForeignersPartner } from '@/lib/foreigners-partner-analytics';

const professionalReferralSchema = z.object({
  professionalName: z.string().trim().min(2, 'Indica el nombre del profesional'),
  organization: z.string().trim().min(2, 'Indica la empresa o entidad'),
  professionalEmail: z.string().trim().email('Indica un correo profesional válido'),
  clientName: z.string().trim().min(2, 'Indica el nombre del cliente'),
  clientContact: z.string().trim().min(6, 'Indica un contacto válido del cliente'),
  procedureType: z.string().trim().min(2, 'Selecciona el tipo aproximado de trámite'),
  clientAuthorization: z.boolean().refine((value) => value, 'Confirma la autorización del cliente'),
  sensitiveNotice: z.boolean().refine((value) => value, 'Confirma que no adjuntarás documentación sensible'),
  website: z.string().optional(),
});

type ProfessionalReferralValues = z.infer<typeof professionalReferralSchema>;

const defaultValues: ProfessionalReferralValues = {
  professionalName: '',
  organization: '',
  professionalEmail: '',
  clientName: '',
  clientContact: '',
  procedureType: '',
  clientAuthorization: false,
  sensitiveNotice: false,
  website: '',
};

export function ForeignersPartnerForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const startedRef = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfessionalReferralValues>({
    resolver: zodResolver(professionalReferralSchema),
    defaultValues,
  });

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackForeignersPartner({ action: 'form_start', label: 'professional_referral' });
  };

  const onSubmit = async (values: ProfessionalReferralValues) => {
    setStatus('idle');
    setServerMessage(null);

    try {
      const response = await fetch('/api/professional-referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'No hemos podido enviar la derivación.');
      }

      trackForeignersPartner({ action: 'form_submit', label: 'professional_referral' });
      setStatus('success');
      setServerMessage('Solicitud recibida. Revisaremos la información y contactaremos sin pedir documentación sensible por este formulario.');
      reset(defaultValues);
      startedRef.current = false;
    } catch (error) {
      setStatus('error');
      setServerMessage(error instanceof Error ? error.message : 'Ha ocurrido un error inesperado.');
    }
  };

  return (
    <form className="grid gap-4" onFocusCapture={markStarted} onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register('website')} />

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nombre del profesional" error={errors.professionalName?.message}>
          <input className="input-ui" aria-label="Nombre del profesional" autoComplete="name" {...register('professionalName')} />
        </Field>
        <Field label="Empresa o entidad" error={errors.organization?.message}>
          <input className="input-ui" aria-label="Empresa o entidad" autoComplete="organization" {...register('organization')} />
        </Field>
      </div>

      <Field label="Correo profesional" error={errors.professionalEmail?.message}>
        <input className="input-ui" aria-label="Correo profesional" type="email" autoComplete="email" {...register('professionalEmail')} />
      </Field>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nombre del cliente" error={errors.clientName?.message}>
          <input className="input-ui" aria-label="Nombre del cliente" autoComplete="off" {...register('clientName')} />
        </Field>
        <Field label="Contacto del cliente" error={errors.clientContact?.message}>
          <input className="input-ui" aria-label="Contacto del cliente" autoComplete="off" placeholder="Teléfono o correo autorizado" {...register('clientContact')} />
        </Field>
      </div>

      <Field label="Tipo aproximado de trámite" error={errors.procedureType?.message}>
        <select className="select-ui" aria-label="Tipo aproximado de trámite" {...register('procedureType')}>
          <option value="">Selecciona una opción</option>
          <option value="estancia-estudios">Estancia por estudios</option>
          <option value="residencia-no-lucrativa">Residencia no lucrativa</option>
          <option value="arraigo">Arraigo u otro trámite de residencia</option>
          <option value="renovacion">Renovación o modificación</option>
          <option value="otro">Otro trámite de extranjería</option>
        </select>
      </Field>

      <div className="rounded-[22px] border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
        No adjuntes pasaportes, informes médicos, resoluciones administrativas ni otros documentos sensibles. El primer contacto solo necesita los datos mínimos de derivación.
      </div>

      <label className="flex items-start gap-3 rounded-[22px] bg-[var(--bg)] p-4 text-sm leading-6 text-[var(--muted)]">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[var(--border)]" {...register('clientAuthorization')} />
        <span>Confirmo que el cliente ha autorizado que Valentín Protección Integral contacte con él para orientarle sobre seguro médico para extranjería.</span>
      </label>
      {errors.clientAuthorization ? <p className="text-sm text-red-600">{errors.clientAuthorization.message}</p> : null}

      <label className="flex items-start gap-3 rounded-[22px] bg-[var(--bg)] p-4 text-sm leading-6 text-[var(--muted)]">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[var(--border)]" {...register('sensitiveNotice')} />
        <span>Confirmo que no enviaré documentación sensible mediante este formulario y he revisado la <Link className="font-semibold text-[var(--blue)] underline underline-offset-4" href="/privacidad">política de privacidad</Link>.</span>
      </label>
      {errors.sensitiveNotice ? <p className="text-sm text-red-600">{errors.sensitiveNotice.message}</p> : null}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center sm:w-fit">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Enviar derivación
      </button>

      {serverMessage ? (
        <div className={`flex items-start gap-3 rounded-2xl px-4 py-3 text-sm ${status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`}>
          {status === 'success' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />}
          <p>{serverMessage}</p>
        </div>
      ) : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--text)]">{label}</label>
      {children}
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
