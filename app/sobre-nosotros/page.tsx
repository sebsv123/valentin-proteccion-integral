import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  Briefcase,
  ClipboardList,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site, testimonials } from '@/lib/products';

export const metadata: Metadata = {
  title: `Quiénes Somos · Rosa Valentín y Sebastián Sifontes | ${site.name}`,
  description:
    'Conoce al equipo de Valentín Protección Integral: Rosa Valentín y Sebastián Sifontes. Agentes exclusivos de seguros registrados en la DGSFP con más de 10 años ayudando a familias en Madrid.',
  openGraph: {
    title: `Quiénes Somos · Rosa Valentín y Sebastián Sifontes | ${site.name}`,
    description:
      'Asesoramiento personalizado en seguros para familias y particulares. Sin presión y con transparencia total.',
    images: [
      {
        url: `${site.domain}/images/rosa_y_sebastian.jpeg`,
        alt: 'Rosa Valentín y Sebastián Sifontes — Valentín Protección Integral',
      },
    ],
  },
};

const team = [
  {
    name: 'Rosa Valentín',
    role: 'Socia y asesora experta',
    nif: '79234434D',
    dgsfp: 'C012479234434D',
    location: 'Boadilla del Monte, Madrid',
    phone: '+34 603 44 87 65',
    phoneHref: '+34603448765',
    whatsappMsg: 'Hola Rosa, quiero orientación sobre un seguro.',
    bio: 'Rosa lleva más de 10 años acompañando a familias y particulares en Madrid para que entiendan y elijan bien sus coberturas. Su especialidad: simplificar lo complejo sin sacrificar la profundidad del asesoramiento.',
    specialties: ['Salud', 'Dental', 'Mascotas', 'Decesos', 'Extranjeros', 'Viaje'],
    avatar: 'R',
  },
  {
    name: 'Sebastián Sifontes Valentín',
    role: 'Socio y especialista en Vida y Negocios',
    nif: '72295271S',
    dgsfp: 'C046172295271S',
    location: 'Boadilla del Monte, Madrid',
    phone: '+34 603 448 765',
    phoneHref: '+34603448765',
    whatsappMsg: 'Hola Sebastián, quiero orientación sobre un seguro de vida o para mi negocio.',
    bio: 'Sebastián gestiona personalmente las consultas de seguros de vida, accidentes y negocios. Su enfoque directo y práctico ayuda a entender exactamente qué se cubre y por qué, sin rodeos ni letra pequeña.',
    specialties: ['Vida', 'Accidentes', 'Negocios / Autónomos', 'Protección Jurídica', 'Electrodomésticos'],
    avatar: 'S',
  },
];

export default function SobreNosotrosPage() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-pad pt-6 md:pt-10">
          <div className="container-shell">
            <Breadcrumbs
              items={[{ label: 'Inicio', href: '/' }, { label: 'Sobre nosotros' }]}
            />
            <div className="mt-8 max-w-3xl">
              <p className="kicker font-bold tracking-[0.3em]">Quiénes somos</p>
              <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-gradient md:text-5xl xl:text-6xl leading-[1.08]">
                Valentín Protección Integral: criterio, cercanía y honestidad
              </h1>
              <p className="mt-6 text-lg leading-9 text-[var(--muted)]">
                Somos Rosa y Sebastián. Llevamos más de 10 años ayudando a familias y particulares a
                entender mejor lo que contratan. No empujamos productos: acompañamos decisiones con
                contexto real, sin presión y con toda la transparencia.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                Trabajamos desde <strong>Boadilla del Monte, Madrid</strong>, atendiendo a clientes
                de toda España. Más de <strong>1.200 familias</strong> ya han confiado en nosotros.
              </p>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="soft-card p-8 md:p-10 flex flex-col gap-6"
                >
                  {/* Avatar + nombre */}
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)] font-heading text-2xl font-bold text-white shadow-lg">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">
                        {member.name}
                      </p>
                      <p className="text-sm font-semibold text-[var(--blue)]">{member.role}</p>
                      <div className="mt-1 flex items-center gap-1.5 text-sm text-[var(--muted)]">
                        <MapPin className="h-3.5 w-3.5" />
                        {member.location}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-base leading-8 text-[var(--muted)]">{member.bio}</p>

                  {/* Especialidades */}
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--muted)]/60">
                      Especialidades
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-[var(--blue)]/20 bg-[var(--blue)]/5 px-3 py-1 text-xs font-semibold text-[var(--blue-deep)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Datos legales DGSFP */}
                  <div className="rounded-[18px] border border-[var(--border)] bg-[var(--bg)] px-5 py-4 text-xs text-[var(--muted)] space-y-1">
                    <p>
                      <span className="font-semibold text-[var(--blue-deep)]">NIF:</span>{' '}
                      {member.nif}
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--blue-deep)]">Registro DGSFP:</span>{' '}
                      {member.dgsfp}
                    </p>
                    <p className="mt-1 leading-5">
                      Agente exclusivo de seguros registrado en la Dirección General de Seguros y
                      Fondos de Pensiones (DGSFP).
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppHref(member.whatsappMsg)}
                      className="btn-whatsapp"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                    <a href={`tel:${member.phoneHref}`} className="btn-secondary">
                      <Phone className="h-4 w-4" /> {member.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card glass overflow-hidden border-white/40 shadow-xl">
              <div className="p-8 md:p-10 lg:p-12">
                <p className="kicker font-bold tracking-[0.3em]">Nuestra forma de trabajar</p>
                <h2 className="mt-4 section-title">Un proceso sencillo orientado a tu claridad</h2>
                <p className="section-copy mt-4 max-w-3xl">
                  No hay fórmulas mágicas. Hay escucha, comparación y acompañamiento real.
                </p>
                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    {
                      step: '01',
                      title: 'Escuchamos',
                      desc: 'Empezamos por entender tu momento, tus prioridades y qué te preocupa. Sin prisas.',
                      icon: MessageCircle,
                    },
                    {
                      step: '02',
                      title: 'Comparamos',
                      desc: 'Revisamos opciones reales, explicamos diferencias y te orientamos con lenguaje claro.',
                      icon: ClipboardList,
                    },
                    {
                      step: '03',
                      title: 'Decidimos juntos',
                      desc: 'Tú decides con toda la información. Sin presiones, sin letra pequeña oculta.',
                      icon: ShieldCheck,
                    },
                    {
                      step: '04',
                      title: 'Seguimos contigo',
                      desc: 'No desaparecemos al contratar. Seguimos disponibles para dudas, renovaciones y cambios.',
                      icon: HeartHandshake,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.step}
                        className="group rounded-[28px] border border-[var(--border)] bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[var(--blue)]/20 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-4 mb-5">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--blue-deep)] text-sm font-extrabold text-white shadow-lg">
                            {item.step}
                          </span>
                          <Icon className="h-5 w-5 text-[var(--blue)] opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Award, stat: '+10 años', desc: 'Asesorando familias con cercanía' },
                { icon: Users, stat: '+1.200', desc: 'Familias protegidas en España' },
                { icon: Briefcase, stat: '9 ramos', desc: 'Salud, Vida, Mascotas y más' },
                { icon: ShieldCheck, stat: 'DGSFP', desc: 'Agentes oficialmente registrados' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.stat}
                    className="rounded-[22px] bg-white px-5 py-6 text-center border border-[var(--border)] shadow-sm"
                  >
                    <Icon className="h-6 w-6 mx-auto text-[var(--blue)] mb-2" />
                    <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">
                      {item.stat}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="mb-8 max-w-3xl">
              <p className="kicker">Lo que dicen quienes ya han confiado en nosotros</p>
              <h2 className="mt-3 section-title">Opiniones reales de personas reales</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {featuredTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="soft-card p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-[var(--green)]/40" />
                  <p className="mt-3 text-base leading-8 text-[var(--muted)] italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)] font-heading text-lg font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--blue-deep)]">{t.name}</p>
                      <div className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
                        <MapPin className="h-3 w-3" />
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/opiniones" className="btn-secondary">
                Ver todas las opiniones
              </Link>
            </div>
          </div>
        </section>

        {/* Aviso legal DGSFP */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="rounded-[20px] border border-[var(--border)] bg-[var(--bg)] px-6 py-6 text-xs text-[var(--muted)] leading-6 space-y-2">
              <p className="font-semibold text-[var(--blue-deep)] text-sm">Información legal y registro</p>
              <p>
                <strong>Valentín Protección Integral</strong> · C. de los Reyes Católicos, 1, Boadilla del Monte, Madrid.
              </p>
              <p>
                <strong>Rosa Valentín</strong> · NIF: 79234434D · Registro DGSFP: C012479234434D · Agente exclusivo de seguros.
              </p>
              <p>
                <strong>Sebastián Sifontes Valentín</strong> · NIF: 72295271S · Registro DGSFP: C046172295271S · Agente exclusivo de seguros.
              </p>
              <p>
                Actividad supervisada por la Dirección General de Seguros y Fondos de Pensiones (DGSFP).
                Puede verificar nuestro registro en{' '}
                <a
                  href="https://rrpp.dgsfp.mineco.es/Mediador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[var(--blue)]"
                >
                  el registro público de la DGSFP
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 text-white md:p-10 text-center">
              <p className="kicker !text-white/70">¿Quieres que hablemos?</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
                Una consulta sin compromiso puede ser el mejor primer paso
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-9 text-white/80">
                Cuéntanos tu situación y te ayudamos a entender qué opciones tienen sentido para ti.
                Sin presión, sin compromiso, con toda la claridad.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row justify-center">
                <a
                  href={buildWhatsAppHref(
                    'Hola, quiero una consulta para entender qué seguro me conviene.',
                  )}
                  className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"
                >
                  <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]"
                >
                  Contactar
                </Link>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
