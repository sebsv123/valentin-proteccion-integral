export const FOREIGNERS_PARTNER_EVENT = 'foreigners_partner' as const;

export const FOREIGNERS_PARTNER_ACTIONS = [
  'cta_click',
  'section_view',
  'form_start',
  'form_submit',
  'whatsapp_click',
  'email_click',
  'dgsfp_click',
] as const;

export type ForeignersPartnerAction = (typeof FOREIGNERS_PARTNER_ACTIONS)[number];

type ForeignersPartnerParams = {
  action: ForeignersPartnerAction;
  label?: string;
  section?: string;
};

const isKnownAction = (action: string): action is ForeignersPartnerAction =>
  FOREIGNERS_PARTNER_ACTIONS.includes(action as ForeignersPartnerAction);

export function trackForeignersPartner({ action, label, section }: ForeignersPartnerParams) {
  if (typeof window === 'undefined' || !isKnownAction(action)) return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;

  gtag('event', FOREIGNERS_PARTNER_EVENT, {
    action,
    label,
    section,
  });
}
