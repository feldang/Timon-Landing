'use client'

import { ArrowRight } from 'lucide-react'
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
    name: 'El punto de partida',
    text: 'De la incertidumbre a tener sus intereses y fricciones mapeados con claridad.',
  },
  {
    n: '02',
    name: 'El universo de opciones',
    text: 'Carreras nuevas, descritas con profundidad — para entender la realidad de cada una.',
  },
  {
    n: '03',
    name: 'Las opciones que se alinean',
    text: 'Argumentos concretos del fit con su perfil. Nunca etiquetas.',
  },
  {
    n: '04',
    name: 'El mundo real argentino',
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
      className={`reveal reveal-delay-${(idx % 2) + 1} ${reveal.inView ? 'is-visible' : ''} group relative bg-[var(--cream)] p-12 sm:p-16 transition-colors hover:bg-[var(--cream-elev)]`}
    >
      <div className="flex items-baseline gap-5 mb-6">
        <span
          className="font-display italic font-light text-[var(--ocean)]/70"
          style={{
            fontSize: '2.25rem',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            fontVariationSettings: "'opsz' 144, 'SOFT' 100",
          }}
        >
          {item.n}
        </span>
        <span className="h-px flex-1 bg-[var(--border-cream-strong)] mb-2" />
      </div>
      <h3
        className="font-display text-[var(--navy)] mb-5"
        style={{
          fontWeight: 400,
          fontSize: 'clamp(1.5rem, 2vw, 1.875rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          fontVariationSettings: "'opsz' 144, 'SOFT' 80",
        }}
      >
        {item.name}
      </h3>
      <p className="text-[1rem] sm:text-[1.0625rem] leading-[1.65] text-[var(--navy)]/75 max-w-[420px]">{item.text}</p>
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

        <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] pt-10 pb-20 sm:pt-14 sm:pb-28">
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
                Padre o madre
              </span>

              <h1
                className="font-display font-light text-[var(--navy)] mb-6 sm:mb-8"
                style={{
                  fontSize: 'clamp(2.25rem, 5.2vw, 4.25rem)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.04em',
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                }}
              >
                Para identificar<br />
                intereses reales<br />
                y elegir qué estudiar{' '}
                <em
                  className="italic font-normal text-[var(--ocean)]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  sin improvisar.
                </em>
              </h1>

              <p className="reveal reveal-delay-2 is-visible text-[1rem] sm:text-[1.25rem] leading-[1.55] text-[var(--navy)]/80 max-w-[560px] mb-8 sm:mb-10">
                El fin del limbo. Le entregamos el escenario completo para avanzar con dirección.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-[18px] rounded-full bg-[var(--ocean)] text-[var(--cream-elev)] font-medium text-[15px] hover:bg-[var(--ocean-deep)] transition-all cursor-pointer"
                  style={{ boxShadow: '0 12px 32px rgba(30, 91, 160, 0.20)' }}
                >
                  Dar acceso al recorrido
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--hueso)]">
                  Privado · a su propio ritmo
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

        <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] py-24 sm:py-32">
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
              El costo de elegir{' '}
              <em
                className="italic font-normal text-[var(--terra-soft)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
              >
                sin información.
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

        <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] py-24 sm:py-32">
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
        title="El impacto de la"
        titleEm="información."
        beforeLabel="Sin Timon"
        afterLabel="Con Timon"
        pairs={[
          { before: 'Mi hijo queda en la nebulosa.', after: 'Sale con un mapa de opciones que entendió y comparó.' },
          { before: 'Estudia años algo que no le convence.', after: 'Sabe de qué se trata su carrera antes de empezar.' },
          { before: 'Elige apurado, a ciegas y por descarte.', after: 'Decide con el escenario completo antes de invertir 4 años y USD 30K.' },
        ]}
      />

      {/* ─── TU ROL ─── */}
      <section className="relative bg-[var(--cream-elev)] border-y border-[var(--border-cream)] overflow-hidden">
        <SectionMark label="05" position="top-right" tone="terra" opacity={0.6} />

        <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] py-24 sm:py-32">
          <div
            ref={rolBlock.ref}
            className={`reveal ${rolBlock.inView ? 'is-visible' : ''} max-w-[760px]`}
          >
            <p className="eyebrow eyebrow--with-rule mb-7">Tu rol en el proceso</p>
            <h2
              className="font-display font-light text-[var(--navy)] mb-10 sm:mb-12"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontVariationSettings: "'opsz' 144, 'SOFT' 80",
              }}
            >
              Facilitar la herramienta.{' '}
              <em
                className="italic font-normal text-[var(--ocean)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
              >
                Nada más.
              </em>
            </h2>

            <ul className="border-t border-dashed border-[var(--border-cream-strong)]">
              {[
                {
                  strong: 'Hacés posible que empiece.',
                  rest: 'Eso solo ya cambia las cosas.',
                },
                {
                  strong: 'Esperar sin invadir.',
                  rest: 'El recorrido es privado y tiene su tiempo. La decisión sigue siendo suya.',
                },
                {
                  strong: 'Información sobre la mesa.',
                  rest: 'Si te comparte su resumen, van a revisarlo juntos con datos de oferta y costos, sin discutir en el aire.',
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

        <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] py-24 sm:py-32 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--hueso)] mb-8 inline-flex items-center gap-3 justify-center">
            <span className="w-8 h-px bg-[var(--terra)]/60" />
            Cierre
            <span className="w-8 h-px bg-[var(--terra)]/60" />
          </p>
          <div className="flex justify-center mb-6">
            <WheelMark tone="terra" size={48} className="spin-helm-slow" />
          </div>
          <h2
            ref={closing.ref}
            className={`reveal ${closing.inView ? 'is-visible' : ''} font-display font-light italic text-[var(--navy)] mb-10 sm:mb-12 mx-auto max-w-[820px]`}
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.045em',
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
            Dar acceso al recorrido
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--hueso)]">
            Hoy es un buen momento para que arranque
          </p>
        </div>
      </section>
    </div>
  )
}
