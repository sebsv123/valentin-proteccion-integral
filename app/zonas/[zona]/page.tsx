import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { WhatsAppButton } from '@/components/whatsapp-button';
import GuaranteeBadge from '@/components/GuaranteeBadge';
import GarantiasSection from '@/components/GarantiasSection';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { buildWhatsAppHref } from '@/lib/products';
import { Sparkles, CheckCircle2, MapPin, Building2, Stethoscope, Home, Dog, Heart, Phone } from 'lucide-react';

// Helper to capitalize zone name from slug
function capitalizeZona(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export async function generateMetadata({ params }: { params: Promise<{ zona: string }> }): Promise<Metadata> {
  const { zona } = await params;
  const zonaName = capitalizeZona(zona);
  return {
    title: `Seguros en ${zonaName} — Agente Registrado DGSFP | Valentín Protección Integral`,
    description: `Asesor de seguros en ${zonaName}. Salud privada, vida, dental y mascotas. Asesoramiento con registro en la DGSFP. Consulta gratis.`,
    keywords: [`seguros ${zonaName}`, `agente seguros ${zonaName}`, `seguro salud ${zonaName}`, `asesor seguros ${zonaName}`],
    alternates: { canonical: `https://valentinproteccionintegral.com/zonas/${zona}` },
    openGraph: {
      title: `Seguros en ${zonaName} — Agente Registrado DGSFP | Valentín Protección Integral`,
      description: `Asesor de seguros en ${zonaName}. Salud privada, vida, dental y mascotas. Asesoramiento con registro en la DGSFP. Consulta gratis.`,
      url: `https://valentinproteccionintegral.com/zonas/${zona}`,
      siteName: 'Valentín Protección Integral',
      locale: 'es_ES',
      type: 'website',
    },
  };
}

export const dynamic = 'force-static';

export default async function ZonaPage({ params }: { params: Promise<{ zona: string }> }) {
  const { zona } = await params;
  const zonaName = capitalizeZona(zona);
  const wCotiza = buildWhatsAppHref(`Hola, soy de ${zonaName} y necesito información sobre seguros.`);

  // Schema LocalBusiness dinámico
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Valentín Protección Integral - Seguros ${zonaName}`,
    telephone: '+34603448765',
    address: {
      '@type': 'PostalAddress',
      addressLocality: zonaName,
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    description: `Agente de seguros registrado DGSFP en ${zonaName}. Salud, vida, dental, mascotas.`,
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Inicio', url: '/' }, { name: 'Zonas', url: '/zonas' }, { name: zonaName, url: `/zonas/${zona}` }]} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <main className='min-h-screen bg-white'>
        {/* HERO UBER — Mapa local style */}
        <section className='py-16 lg:py-24'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Left: Content */}
              <div>
                {/* Guarantee Badge */}
                <div className='mb-6'>
                  <GuaranteeBadge type='zonas' />
                </div>

                {/* H1 Uber style — 52px bold */}
                <h1 className='text-[40px] sm:text-[48px] lg:text-[52px] font-bold text-black leading-[1.23] mb-4'>
                  Seguros en {zonaName}:
                  <br />
                  <span className='text-[#4b4b4b]'>Tu Agente Registrado DGSFP</span>
                </h1>

                {/* Subhead */}
                <p className='text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md'>
                  Te asesoramos para encontrar la cobertura más adecuada para ti en {zonaName}. Te explicamos las condiciones de cada póliza, sin letras pequeñas.
                </p>

                {/* CTAs Uber — pill 999px */}
                <div className='flex flex-wrap gap-4 mb-8'>
                  <WhatsAppButton
                    href={wCotiza}
                    location={`${zona}-hero`}
                    className='group inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors'
                  >
                    WhatsApp {zonaName}
                  </WhatsAppButton>
                  <a
                    href='tel:603448765'
                    className='inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-medium border border-[#efefef] hover:bg-[#e2e2e2] transition-colors'
                  >
                    <Phone className='w-5 h-5' />
                    Llamar
                  </a>
                </div>

                {/* Trust pills */}
                <div className='flex flex-wrap gap-3'>
                  <span className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm'>
                    <CheckCircle2 className='w-4 h-4' />

                  </span>
                  <span className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm'>
                    <Heart className='w-4 h-4' />
                    Conocemos la zona
                  </span>
                </div>
              </div>

              {/* Right: Map image (fallback to Madrid) */}
              <div className='relative'>
                <div className='relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]'>
                  <Image
                    src='/images/zonas/madrid.webp'
                    alt={`Seguros en ${zonaName}`}
                    width={600}
                    height={450}
                    className='w-full h-auto object-cover object-top'
                    priority
                  />
                  {/* Location badge bottom-left */}
                  <div className='absolute bottom-4 left-4'>
                    <div className='inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg'>
                      <MapPin className='w-4 h-4 text-black' />
                      <span className='text-sm font-bold text-black'>{zonaName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL PROOF — Uber cards dark (genérico) */}
        <section className='py-16 bg-black text-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <p className='text-sm uppercase tracking-wider text-[#afafaf] mb-4'>{zonaName.toUpperCase()}, MADRID</p>
            <p className='text-lg text-[#afafaf] mb-12 max-w-2xl'>
              Asesoramiento con registro oficial para familias y autónomos de {zonaName}. Más de 10 años protegiendo lo que más importa.
            </p>

            <div className='grid md:grid-cols-3 gap-6'>
              {[
                { icon: Building2, title: 'Agente registrado DGSFP', desc: 'Asesoramiento personalizado con registro oficial DGSFP.' },
                { icon: Sparkles, title: 'Respuesta en horario', desc: 'Contacto directo con Rosa o Sebastián por WhatsApp. Sin centralitas, sin esperas, sin robots.' },
                { icon: Heart, title: 'Gestión de siniestros', desc: 'No desaparecemos tras la firma. Te acompañamos en renovaciones, cambios y siniestros.' },
              ].map((item, i) => (
                <div key={i} className='rounded-xl p-6 border border-[#333]'>
                  <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4'>
                    <item.icon className='w-5 h-5 text-white' />
                  </div>
                  <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                  <p className='text-[#afafaf]'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POPULARES — Uber grid (genérico) */}
        <section className='py-16'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <h2 className='text-[36px] font-bold text-black leading-[1.22] text-center mb-12'>Populares en {zonaName}</h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {[
                { icon: Stethoscope, title: 'Salud privada', desc: 'Coberturas y tiempos según modalidad.' },
                { icon: Home, title: 'Vida familiar', desc: 'Protege tu patrimonio.' },
                { icon: Dog, title: 'Mascotas', desc: 'La ley obliga. Te lo gestionamos.' },
                { icon: Heart, title: 'Dental', desc: 'Revisiones sin espera.' },
              ].map((item, i) => (
                <div key={i} className='rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow'>
                  <div className='w-10 h-10 rounded-lg bg-[#efefef] flex items-center justify-center mb-3'>
                    <item.icon className='w-5 h-5 text-black' />
                  </div>
                  <h3 className='text-base font-bold text-black mb-1'>{item.title}</h3>
                  <p className='text-sm text-[#4b4b4b]'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO LOCAL (genérico) */}
        <section className='py-16 bg-[#efefef]'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]'>
                <Image
                  src='/images/rosa_y_sebastian.jpeg'
                  alt={`Rosa Valentín · Asesora en ${zonaName}`}
                  width={500}
                  height={500}
                  className='w-full h-auto object-cover object-[center_20%]'
                  priority
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <div>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm mb-6 shadow-sm'>
                  <MapPin className='w-4 h-4' />
                  Atendemos {zonaName}
                </div>
                <h2 className='text-[36px] font-bold text-black leading-[1.22] mb-4'>Rosa Valentín</h2>
                <p className='text-lg text-[#4b4b4b] mb-6'>
                  Tu agente de seguros en {zonaName}. Conozco las necesidades de las familias de la zona porque las asesoro cada día.
                </p>
                <div className='space-y-3 mb-8'>
                  <div className='flex items-center gap-3 text-[#4b4b4b]'>
                    <MapPin className='w-5 h-5 text-black' />
                    <span>{zonaName}, Madrid</span>
                  </div>
                  <div className='flex items-center gap-3 text-[#4b4b4b]'>
                    <Phone className='w-5 h-5 text-black' />
                    <span>603 44 87 65</span>
                  </div>
                </div>
                <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm'>
                  <CheckCircle2 className='w-4 h-4' />
                  DGSFP: C012479234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO LOCAL (genérico) */}
        <section className='py-16'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <h2 className='text-[36px] font-bold text-black leading-[1.22] text-center mb-12'>Proceso en {zonaName}</h2>

            <div className='grid md:grid-cols-3 gap-8'>
              {[
                { num: '1', title: 'WhatsApp', desc: `Escribe "${zonaName}" y tu necesidad. Te respondemos en nuestro horario de atención.` },
                { num: '2', title: 'Propuesta', desc: 'Te asesoramos y te recomendamos la cobertura más adecuada para tu caso.' },
                { num: '3', title: 'Contratación', desc: 'Online o presencial en nuestra oficina de Boadilla del Monte.' },
              ].map((step, i) => (
                <div key={i} className='text-center'>
                  <div className='w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold mx-auto mb-4'>{step.num}</div>
                  <h3 className='text-xl font-bold text-black mb-2'>{step.title}</h3>
                  <p className='text-base text-[#4b4b4b]'>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + MAPA */}
        <section className='py-16 bg-black text-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Left: CTA */}
              <div className='text-center lg:text-left'>
                <h2 className='text-[36px] sm:text-[48px] font-bold leading-[1.22] mb-4'>Tu asesor de seguros en {zonaName}</h2>
                <p className='text-xl text-[#afafaf] mb-8'>Con registro oficial en la DGSFP. Te explicamos las condiciones de cada póliza.</p>
                <WhatsAppButton
                  href={wCotiza}
                  location={`${zona}-cta-final`}
                  className='group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors'
                >
                  WhatsApp {zonaName}
                </WhatsAppButton>

                {/* Badges */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-3 mt-8'>
                  {['Sin copagos', 'Agente registrado DGSFP', 'DGSFP verificado'].map((item, i) => (
                    <div key={i} className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm'>
                      <CheckCircle2 className='w-4 h-4' />
                      {item}
                    </div>
                  ))}
                </div>

                <p className='text-sm text-[#afafaf] mt-8'>DGSFP: C012479234434D</p>
              </div>

              {/* Right: Google Maps embed */}
              <div className='relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] h-[350px]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1234567890123!2d-3.7038!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228f123456789%3A0xabcdef1234567890!2sMadrid%20Centro!5e0!3m2!1ses!2ses!4v1234567890123'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title={`Ubicación ${zonaName}`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title={`Opiniones de clientes en ${zonaName}`} />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor='#10b981' />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
