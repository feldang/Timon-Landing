'use client'

import { ArrowRight } from 'lucide-react'
import { ChatPreview } from './ChatPreview'
import { BeforeAfter } from './BeforeAfter'
import { WheelMark } from './Logo'
import { Marquee } from './Marquee'
import { SectionMark } from './SectionMark'
import { useInView } from '@/hooks/useInView'

const PRODUCT_URL = 'https://app.timon.com.ar'

type Props = { onBack: () => void }

const CHAPTERS = [
  {
    n: '01',
    title: 'Mapeamos tu perfil',
    body: 'Preguntas sobre tus intereses y fricciones. Pausás cuando querés — el recorrido te espera.',
    chips: ['Lo que te interesa', 'Cómo pensás', 'Cómo trabajás', 'Qué te aburre'],
  },
  {
    n: '02',
    title: 'Se cruzan los datos',
    body: 'La radiografía exacta de tus variables. La base que va a sostener tu decisión.',
    chips: ['Fortalezas', 'Límites', 'Ritmo de aprendizaje', 'Modo de resolución'],
  },
  {
    n: '03',
    title: 'Decidís con el panorama completo',
    body: 'Carreras, universidades, costos y salidas reales en Argentina.',
    chips: ['Carreras afines', 'Oferta universitaria', 'Costo y duración', 'Salida laboral'],
  },
]

function ChapterCard({ step, idx, isLast }: { step: (typeof CHAPTERS)[number]; idx: number; isLast: boolean }) {
  const reveal = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <article
      ref={reveal.ref}
      className={`relative reveal ${reveal.inView ? 'is-visible' : ''} grid grid-cols-[auto_1fr] sm:grid-cols-[180px_1fr] gap-x-6 sm:gap-x-12 lg:gap-x-16 py-12 sm:py-16 ${idx > 0 ? 'border-t border-[var(--border-cream-strong)]' : ''}`}
    >
      <span
        className="font-display italic font-light text-[var(--ocean)] self-start"
        style={{
          fontSize: 'clamp(4.5rem, 9vw, 7.5rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.06em',
          fontVariationSettings: "'opsz' 144, 'SOFT' 100",
        }}
      >
        {step.n}
      </span>
      <div className="max-w-[560px] pt-2 sm:pt-4">
        <h3
          className="font-display text-[var(--navy)] mb-4 sm:mb-5"
          style={{
            fontWeight: 400,
            fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            fontVariationSettings: "'opsz' 144, 'SOFT' 80",
          }}
        >
          {step.title}
        </h3>
        <p className="text-[1rem] sm:text-[1.125rem] leading-[1.65] text-[var(--navy)]/75 mb-7 sm:mb-8 max-w-[480px]">
          {step.body}
        </p>
        <div className="flex flex-wrap gap-2">
          {step.chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--cream)] border border-[var(--border-cream)] text-[12px] text-[var(--navy)]/80 font-medium hover:border-[var(--ocean)] hover:text-[var(--navy)] transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--ocean)]/60" />
              {chip}
            </span>
          ))}
        </div>
      </div>
      {!isLast && (
        <span
          aria-hidden
          className="hidden sm:block absolute left-[90px] -bottom-[3px] w-[5px] h-[5px] rounded-full bg-[var(--terra)] -translate-x-1/2"
        />
      )}
    </article>
  )
}

export function EstudianteLanding({ onBack }: Props) {
  const heroLeft = useInView<HTMLDivElement>()
  const heroRight = useInView<HTMLDivElement>()
  const chaptersTitle = useInView<HTMLDivElement>()
  const closingTitle = useInView<HTMLHeadingElement>()

  return (
    <div className="animate-fade-in bg-[var(--cream)]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 editorial-grid editorial-grid-fade pointer-events-none" />
        <div
          className="absolute pointer-events-none ocean-orb"
          style={{ top: '20%', right: '-10%', width: 700, height: 700 }}
        />
        <SectionMark label="01" position="top-right" tone="terra" />

        <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] pt-10 pb-20 sm:pt-14 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-start">
            <div ref={heroLeft.ref} className={`reveal ${heroLeft.inView ? 'is-visible' : ''}`}>
              <span
                className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--navy)] mb-6 px-3.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(201, 127, 94, 0.10)',
                  border: '1px solid rgba(201, 127, 94, 0.30)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--terra)]" />
                Para vos · 14–18 años
              </span>

              <h1
                className="font-display font-light text-[var(--navy)] mb-6 sm:mb-8"
                style={{
                  fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.04em',
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100",
                }}
              >
                El primer paso<br />
                no es elegir.<br />
                <em
                  className="italic font-normal text-[var(--ocean)]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  Es entenderte.
                </em>
              </h1>

              <p className="reveal reveal-delay-2 is-visible text-[1rem] sm:text-[1.25rem] leading-[1.5] text-[var(--navy)]/80 max-w-[600px] mb-8 sm:mb-10">
                No devolvemos una lista al azar. Detallamos planes de estudio, duración real, costos actualizados y el estado del mercado laboral.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-[18px] rounded-full bg-[var(--ocean)] text-[var(--cream-elev)] font-medium text-[15px] hover:bg-[var(--ocean-deep)] transition-all cursor-pointer"
                  style={{ boxShadow: '0 12px 32px rgba(30, 91, 160, 0.20)' }}
                >
                  Empezar el recorrido
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--hueso)]">
                  Privado · sin límite de tiempo
                </p>
              </div>
            </div>

            <div ref={heroRight.ref} className={`reveal reveal-delay-3 ${heroRight.inView ? 'is-visible' : ''} lg:pl-4 max-w-md mx-auto w-full`}>
              <ChatPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog marquee — careers */}
      <Marquee variant="careers" surface="cream" speedSec={65} />

      {/* ─── CÓMO ES — chapters editorial con chips ─── */}
      <section className="relative border-t border-[var(--border-cream)] bg-[var(--cream-elev)] overflow-hidden">
        <SectionMark label="02" position="top-left" tone="ocean" opacity={0.55} />

        <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] py-24 sm:py-32">
          <div
            ref={chaptersTitle.ref}
            className={`reveal ${chaptersTitle.inView ? 'is-visible' : ''} max-w-[920px] mb-14 sm:mb-20`}
          >
            <p className="eyebrow eyebrow--with-rule mb-7">Cómo es el recorrido</p>
            <h2
              className="font-display font-light text-[var(--navy)]"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                fontVariationSettings: "'opsz' 144, 'SOFT' 80",
              }}
            >
              El proceso.{' '}
              <em
                className="italic font-normal text-[var(--ocean)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
              >
                A tu ritmo.
              </em>
            </h2>
          </div>

          <div className="border-t border-[var(--border-cream-strong)]">
            {CHAPTERS.map((step, idx) => (
              <ChapterCard key={step.n} step={step} idx={idx} isLast={idx === CHAPTERS.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ANTES / DESPUÉS — shift visual ─── */}
      <BeforeAfter
        eyebrow="Lo que te llevás"
        title="De la incertidumbre"
        titleEm="a tener el mapa en tus manos."
        beforeLabel="Hoy"
        afterLabel="Con Timon"
        pairs={[
          { before: '"No sé qué carreras van conmigo."', after: 'Entendés qué opciones encajan con tu perfil, y exactamente por qué.' },
          { before: '"No sé bien de qué se trata cada una."', after: 'Tenés el detalle real y los planes de estudio de cada carrera.' },
          { before: '"No sé dónde se estudia ni qué me conviene."', after: 'Conocés las universidades argentinas reales según tus posibilidades.' },
          { before: '"No sé a qué laburo te lleva cada carrera."', after: 'Accedés a las salidas laborales y los rangos salariales actuales.' },
        ]}
      />

      {/* ─── CTA FINAL ─── */}
      <section className="relative bg-[var(--cream-elev)] border-t border-[var(--border-cream)] overflow-hidden">
        <SectionMark label="04" position="bottom-right" tone="terra" />

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
            ref={closingTitle.ref}
            className={`reveal ${closingTitle.inView ? 'is-visible' : ''} font-display font-light italic text-[var(--navy)] mb-10 sm:mb-12 mx-auto max-w-[820px]`}
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.045em',
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
            }}
          >
            Cuando quieras,{' '}
            <span className="text-[var(--ocean)] font-normal not-italic" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
              empezamos.
            </span>
          </h2>
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-[var(--ocean)] text-[var(--cream-elev)] font-medium text-[15px] hover:bg-[var(--ocean-deep)] transition-all cursor-pointer"
            style={{ boxShadow: '0 12px 32px rgba(30, 91, 160, 0.20)' }}
          >
            Empezar el recorrido
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--hueso)]">
            Privado · sin límite de tiempo
          </p>
        </div>
      </section>
    </div>
  )
}
