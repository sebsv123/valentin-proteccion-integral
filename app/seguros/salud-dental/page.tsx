import type { Metadata } from 'next'
import { DentalLanding } from '@/components/dental-landing'

export const metadata: Metadata = {
  title: 'Seguro Dental en Madrid · Sin Carencias | Valentín Protección Integral',
  description: 'Seguro dental en Madrid sin períodos de carencia para revisiones y limpiezas. Rosa y Sebastián Valentín te atienden personalmente en menos de 30 minutos.',
  openGraph: {
    title: 'Seguro Dental en Madrid · Sin Carencias',
    description: 'Sin esperas. Revisiones y limpiezas desde el primer día. Rosa y Sebastián te llaman en 30 minutos.',
    url: 'https://valentinproteccionintegral.es/seguros/salud-dental',
  },
}

export default function SaludDentalPage() {
  return (
    <main className="flex-1">
      <DentalLanding />
    </main>
  )
}
