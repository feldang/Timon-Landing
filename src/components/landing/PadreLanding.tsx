'use client'

import { ArrowRight, ArrowLeft } from 'lucide-react'
import { ReportPreview } from './ReportPreview'
import { BeforeAfter } from './BeforeAfter'
import { WheelMark } from './Logo'
import { Marquee } from './Marquee'
import { SectionMark } from './SectionMark'
import { AnimatedCounter } from './AnimatedCounter'
import { useInView } from '@/hooks/useInView'

const PRODUCT_URL = 'https://app.timon.com.ar'

type Props = { onBack: () => void }

const STATS: {
  pre?: string
  to: number
  unit: string
  label: string
  source: string
}[] = [
  {
    to: 40,
    unit: '%',
    label: 'de los chicos que arrancan una carrera la dejan o cambian en el primer año.',
    source: 'SPU · Síntesis 2021–2022',
  },
  {
    to: 52,
    unit: '%',
    label: 'de los adolescentes argentinos de 15 años no puede proyectar qué ocupación tendrá en su vida laboral.',
    source: 'PISA 2022 · Argentinos por la Educación',
  },
  {
    to: 1,
    unit: 'de 5',
    label: 'termina la carrera elegida en el tiempo nominal previsto.',
    source: 'SPU · 2022',
  },
  {
    pre: 'USD ',
    to: 30,
    unit: 'K',
    label: 'la inversión promedio entre aranceles y costo de oportunidad de una carrera no terminada.',
    source: 'Estimación interna · ABC1 CABA',
  },
]

const PROMISES = [
  {
    n: '01',
    name: 'Disipar la nebulosa',
    text: 'De "no sé qué quiero" a "sé quién soy". Punto de partida claro.',
  },
  {
    n: '02',
    name: 'Abrir el universo de opciones',
    text: 'Carreras nuevas, descritas con profundidad — para entender cada una de verdad.',
  },
  {
    n: '03',
    name: 'Distinguir las carreras que encajan',
    text: 'Argumentos concretos del fit con su perfil. Nunca etiquetas.',
  },
  {
    n: '04',
    name: 'Aterrizar al mundo real argentino',
    text: 'Universidades, costos actualizados, salidas laborales y rangos salariales — cada dato verificable.',
  },
]

function StatCard({ stat, idx }: { stat: (typeof STATS)[number]; idx: number }) {
  const reveal = useInView<HTMLDivElement>({ threshold: 0.35 })
  return (
    <div
      ref={reveal.ref}
      className={`reveal reveal-delay-${idx + 1} ${reveal.inView ? 'is-visible' : ''} border-l border-[var(--navy-mid)] pl-8 py-3 hover:border-l-[var(--terra)] transition-colors`}
    >
      <div
        className="font-display font-light text-[var(--cream)] mb-5"
        style={{
          fontSize: 'clamp(4rem, 7vw, 5.75rem)',
          lineHeight: 1,
          letterSpacing: '-0.05em',
          fontVariationSettings: "'opsz' 144, 'SOFT' 100",
        }}
      >
        {stat.pre && (
          <span className="text-[1.75rem] sm:text-[2rem] align-baseline mr-1 text-[var(--ocean-light)] font-normal">
            {stat.pre}
          </span>
        )}
        <em
          className="font-normal text-[var(--terra-soft)]"
          style={{ fontStyle: 'italic', fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
        >
          <AnimatedCounter to={stat.to} />
        </em>
        <span className="text-[1.75rem] sm:text-[2rem] align-baseline ml-1 text-[var(--ocean-light)] font-normal">
          {stat.unit}
        </span>
      </div>
      <p className="text-[14px] sm:text-[15px] leading-[1.5] text-[var(--cream)]/85 mb-3 max-w-[280px]">
        {stat.label}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--cream)]/50">
        {stat.source}
      </p>
    </div>
  )
}

function PromiseCard({ item, idx }: { item: (typeof PROMISES)[number]; idx: number }) {
  const reveal = useInView<HTMLDivElement>({ threshold: 0.3 })
  return (
    <article
      ref={reveal.ref}
      className={`reveal reveal-delay-${(idx % 2) + 1} ${reveal.inView ? 'is-visible' : ''} bg-[var(--cream)] p-10 sm:p-14 transition-colors hover:bg-[var(--cream-elev)]`}
    >
      <p className="font-mono text-[11px] text-[var(--ocean)] uppercase tracking-[0.16em] font-semibold mb-5">
        {item.n}
      </p>
      <h3
        className="font-display text-[var(--navy)] mb-4"
        style={{
          fontWeight: 500,
          fontSize: '1.625rem',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          fontVariationSettings: "'opsz' 144, 'SOFT' 80",
        }}
      >
        {item.name}
      </h3>
      <p className="text-[1rem] leading-[1.6] text-[var(--navy)]/85">{item.text}</p>
    </article>
  )
}

export function PadreLanding({ onBack }: Props) {
  const heroLeft = useInView<HTMLDivElement>()
  const heroRight = useInView<HTMLDivElement>()
  const dataTitle = useInView<HTMLDivElement>()
  const promisesTitle = useInView<HTMLDivElement>()
  const rolBlock = useInView<HTMLDivElement>()
  const closing = useInView<HTMLHeadingElement>()

  return (
    <div className="animate-fade-in bg-[var(--cream)]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 editorial-grid editorial-grid-fade pointer-events-none" />
        <div
          className="absolute pointer-events-none ocean-orb"
          style={{ top: '20%', left: '-10%', width: 700, height: 700 }}
        />
        <SectionMark label="01" position="top-right" tone="ocean" />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-[13px] text-[var(--hueso)] hover:text-[var(--navy)] transition-colors cursor-pointer mb-6"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
            <div ref={heroLeft.ref} className={`reveal ${heroLeft.inView ? 'is-visible' : ''}`}>
              <span
                className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--navy)] mb-6 px-3.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(30, 91, 160, 0.08)',
                  border: '1px solid rgba(30, 91, 160, 0.20)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ocean)]" />
                Para vos · padre o madre
              </span>

              <h1
                className="font-display font-light text-[var(--navy)] mb-6 sm:mb-8"
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.04em',
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                }}
              >
                Que salga<br />
                de la nebulosa<br />
                con un mapa{' '}
                <em
                  className="italic font-normal text-[var(--ocean)]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  propio.
                </em>
              </h1>

              <p className="reveal reveal-delay-2 is-visible text-[1rem] sm:text-[1.25rem] leading-[1.55] text-[var(--navy)]/80 max-w-[600px] mb-8 sm:mb-10">
                Tu hijo/a recorre Timon en privado. No necesitás entender de carreras, ni convencerlo, ni decidir por él/ella. El recorrido es suyo.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-[18px] rounded-full bg-[var(--ocean)] text-[var(--cream-elev)] font-medium text-[15px] hover:bg-[var(--ocean-deep)] transition-all cursor-pointer"
                  style={{ boxShadow: '0 12px 32px rgba(30, 91, 160, 0.20)' }}
                >
                  Abrir el recorrido
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--hueso)]">
                  Privado · sin apuro
                </p>
              </div>
            </div>

            <div ref={heroRight.ref} className={`reveal reveal-delay-3 ${heroRight.inView ? 'is-visible' : ''} lg:pl-4 max-w-md mx-auto w-full`}>
              <ReportPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Universities marquee */}
      <Marquee variant="universities" surface="cream" speedSec={70} />

      {/* ─── DATA SLAB — navy bg, evidencia ─── */}
      <section className="relative bg-[var(--navy)] text-[var(--cream)] border-y border-[var(--navy-mid)] overflow-hidden">
        <SectionMark label="02" position="top-right" tone="cream" />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div
            ref={dataTitle.ref}
            className={`reveal ${dataTitle.inView ? 'is-visible' : ''} max-w-[920px] mb-12 sm:mb-16`}
          >
            <p className="font-mono text-[11px] font-medium text-[var(--ocean-light)] uppercase tracking-[0.16em] mb-7 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-current opacity-50" />
              02 · Evidencia
            </p>
            <h2
              className="font-display font-light text-[var(--cream)]"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.25rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontVariationSettings: "'opsz' 144, 'SOFT' 80",
              }}
            >
              El peso real de elegir{' '}
              <em
                className="italic font-normal text-[var(--terra-soft)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
              >
                a ciegas.
              </em>
            </h2>
            <p className="mt-7 text-[var(--cream)]/75 text-[1.0625rem] sm:text-[1.1875rem] leading-[1.55] max-w-[680px]">
              Cuatro cifras de fuentes públicas que dimensionan lo que hoy carga cada familia argentina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, idx) => (
              <StatCard key={idx} stat={s} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Careers marquee on navy surface */}
      <Marquee variant="careers" surface="navy" speedSec={75} />

      {/* ─── 4 PROMESAS ─── */}
      <section className="relative bg-[var(--cream)] overflow-hidden">
        <SectionMark label="03" position="bottom-left" tone="ocean" opacity={0.55} />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div
            ref={promisesTitle.ref}
            className={`reveal ${promisesTitle.inView ? 'is-visible' : ''} max-w-[920px] mb-12 sm:mb-16`}
          >
            <p className="eyebrow eyebrow--with-rule mb-7">Lo que se lleva</p>
            <h2
              className="font-display font-light text-[var(--navy)]"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontVariationSettings: "'opsz' 144, 'SOFT' 80",
              }}
            >
              Más que información.{' '}
              <em
                className="italic font-normal text-[var(--ocean)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
              >
                Capacidad de decidir.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-cream)]">
            {PROMISES.map((item, idx) => (
              <PromiseCard key={item.n} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ANTES / DESPUÉS — JTBD shift padre ─── */}
      <BeforeAfter
        eyebrow="El cambio"
        title="Lo que"
        titleEm="sí va a pasar."
        beforeLabel="Sin Timon"
        afterLabel="Con Timon"
        pairs={[
          { before: 'Mi hijo queda en la nebulosa.', after: 'Sale con un mapa de opciones que entendió y comparó.' },
          { before: 'Estudia 4 años algo que no termina de elegir.', after: 'Sabe qué le interesa antes de empezar.' },
          { before: 'Elige apurado y a ciegas.', after: 'Decide con información antes de invertir 4 años y USD 30K.' },
          { before: 'Inseguridad sobre la elección.', after: 'Está convencido/a de la carrera que eligió.' },
        ]}
      />

      {/* ─── TU ROL ─── */}
      <section className="relative bg-[var(--cream-elev)] border-y border-[var(--border-cream)] overflow-hidden">
        <SectionMark label="05" position="top-right" tone="terra" opacity={0.6} />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div
            ref={rolBlock.ref}
            className={`reveal ${rolBlock.inView ? 'is-visible' : ''} max-w-[760px]`}
          >
            <p className="eyebrow eyebrow--with-rule mb-7">Tu rol</p>
            <h2
              className="font-display font-light text-[var(--navy)] mb-10 sm:mb-12"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontVariationSettings: "'opsz' 144, 'SOFT' 80",
              }}
            >
              Abrirle la puerta.{' '}
              <em
                className="italic font-normal text-[var(--ocean)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
              >
                Nada más, nada menos.
              </em>
            </h2>

            <ul className="border-t border-dashed border-[var(--border-cream-strong)]">
              {[
                {
                  strong: 'Hacés posible que empiece.',
                  rest: 'Eso solo, ya cambia las cosas.',
                },
                {
                  strong: 'Si quiere, te comparte el resumen del recorrido.',
                  rest: 'Lo van a revisar juntos, con información sobre la mesa.',
                },
                {
                  strong: 'Si prefiere mantenerlo privado, también está bien.',
                  rest: 'La decisión sigue siendo suya.',
                },
                {
                  strong: 'Esperar sin invadir.',
                  rest: 'El recorrido tiene su tiempo, y eso vale.',
                },
              ].map((line) => (
                <li
                  key={line.strong}
                  className="grid grid-cols-[24px_1fr] gap-4 py-6 border-b border-dashed border-[var(--border-cream-strong)] hover:bg-[var(--cream)] transition-colors -mx-3 px-3 rounded-md"
                >
                  <span className="text-[var(--ocean)] font-mono text-[15px] font-semibold leading-[1.5]">+</span>
                  <p className="text-[var(--navy)] text-[16px] sm:text-[17px] leading-[1.6]">
                    <span
                      className="font-display italic font-medium text-[var(--navy)]"
                      style={{ letterSpacing: '-0.01em', fontVariationSettings: "'opsz' 72, 'SOFT' 80" }}
                    >
                      {line.strong}
                    </span>{' '}
                    <span className="text-[var(--navy)]/75">{line.rest}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative bg-[var(--cream)] overflow-hidden">
        <SectionMark label="06" position="bottom-right" tone="terra" />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
          <div className="flex justify-center mb-8">
            <WheelMark tone="terra" size={56} className="spin-helm-slow" />
          </div>
          <h2
            ref={closing.ref}
            className={`reveal ${closing.inView ? 'is-visible' : ''} font-display font-light italic text-[var(--navy)] mb-10`}
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 5rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
            }}
          >
            Claridad{' '}
            <span className="text-[var(--ocean)] font-normal not-italic" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              antes
            </span>{' '}
            de elegir.
          </h2>
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-[var(--ocean)] text-[var(--cream-elev)] font-medium text-[15px] hover:bg-[var(--ocean-deep)] transition-all cursor-pointer"
            style={{ boxShadow: '0 12px 32px rgba(30, 91, 160, 0.20)' }}
          >
            Abrir el recorrido
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--hueso)]">
            Hoy es un buen momento para que arranque
          </p>
        </div>
      </section>
    </div>
  )
}
