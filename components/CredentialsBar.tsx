'use client'
import { BadgeCheck, GraduationCap, Clock, ShieldCheck } from 'lucide-react'
import RevealLight from '@/components/ui/reveal-light'
import { useLocale } from 'next-intl'
import { getHomeContent } from './home-content'

const credentials = [
  {
    icon: BadgeCheck,
    label: 'Agente de seguros registrada',
    sub: 'Registro DGSyFP oficial',
  },
  {
    icon: GraduationCap,
    label: 'Formación continua',
    sub: 'Certificada cada año',
  },
  {
    icon: Clock,
    label: '+10 años de experiencia',
    sub: 'Especialista en Madrid',
  },
  {
    icon: ShieldCheck,
    label: 'Agente registrada en la DGSFP',
    sub: 'Registro oficial de la actividad',
  },
]

export default function CredentialsBar() {
  const locale = useLocale() as 'es' | 'en'
  const content = getHomeContent(locale).credentials
  return (
    <section
      aria-label={content.aria}
      className="border-y border-[var(--border)] bg-white py-10"
    >
      <div className="container-shell">
        <RevealLight>
          <p className="kicker text-center mb-8">
            {content.kicker}
          </p>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {credentials.map(({ icon: Icon }, index) => { const { label, sub } = content.items[index]; return (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-[22px]
                           border border-[var(--border)] bg-[var(--off-white)]
                           p-6 text-center transition-all duration-300
                           hover:border-[var(--blue)]/30 hover:shadow-md
                           hover:-translate-y-1"
              >
                <div className="inline-flex rounded-2xl bg-white p-3
                                text-[var(--blue)] shadow-sm">
                   <Icon className="h-6 w-6" />
                </div>
                <p className="font-heading text-lg font-bold
                              text-[var(--blue-deep)]">
                  {label}
                </p>
                <p className="text-xs text-[var(--muted)] font-semibold
                              uppercase tracking-widest">
                  {sub}
                </p>
              </div>
            )})}
          </div>
        </RevealLight>
      </div>
    </section>
  )
}
