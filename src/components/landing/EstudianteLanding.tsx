'use client'

import { ArrowRight, ArrowLeft } from 'lucide-react'
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
    title: 'Recorrés módulos',
    body: 'Preguntas y ejercicios pensados para vos. Pausás cuando querés — el recorrido te espera.',
    chips: ['Lo que te mueve', 'Cómo pensás', 'Cómo te llevás con otros', 'Qué te aburre'],
  },
  {
    n: '02',
    title: 'Aparece tu perfil',
    body: 'Una versión clara de vos — la que va a sostener la elección.',
    chips: ['Fortalezas', 'Intereses reales', 'Modo de trabajo', 'Estilo de aprendizaje'],
  },
  {
    n: '03',
    title: 'Decidís con información',
    body: 'Carreras, universidades, costos y salidas reales — para concluir por tu cuenta.',
    chips: ['Carreras compatibles', 'Universidades', 'Costo y duración', 'Salida laboral'],
  },
]

function ChapterCard({ step, idx, isLast }: { step: (typeof CHAPTERS)[number]; idx: number; isLast: boolean }) {
  const reveal = useInView<HTMLDivElement>({ threshold: 0.25 })

  return (
    <article
      ref={reveal.ref}
      className={`relative reveal ${reveal.inView ? 'is-visible' : ''} grid grid-cols-1 sm:grid-cols-[88px_1fr] gap-6 sm:gap-10 py-8 sm:py-10 ${idx > 0 ? 'border-t border-dashed border-[var(--border-cream-strong)]' : ''}`}
    >
      <span
        className="font-display italic font-light text-[var(--ocean)] transition-transform duration-700 group-hover:translate-x-1"
        style={{
          fontSize: '3.5rem',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          fontVariationSettings: "'opsz' 144, 'SOFT' 100",
        }}
      >
        {step.n}
      </span>
      <div>
        <h3
          className="font-display text-[var(--navy)] mb-3"
          style={{
            fontWeight: 500,
            fontSize: '1.625rem',
            letterSpacing: '-0.02em',
            fontVariationSettings: "'opsz' 144, 'SOFT' 80",
          }}
        >
          {step.title}
        </h3>
        <p className="text-[1rem] sm:text-[1.0625rem] leading-[1.7] text-[var(--navy)]/85 mb-6">
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
      {/* connector dot between chapters */}
      {!isLast && (
        <span
          aria-hidden
          className="hidden sm:block absolute left-[43px] -bottom-[5px] w-[3px] h-[3px] rounded-full bg-[var(--terra)]"
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
                Preguntas y ejercicios para descubrir <em className="italic-emphasis">quién sos</em> — y que la elección sea tuya.
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
                  Privado · sin apuro
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
        <SectionMark label="02" position="top-left" tone="ocean" opacity={0.7} />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div
            ref={chaptersTitle.ref}
            className={`reveal ${chaptersTitle.inView ? 'is-visible' : ''} max-w-[920px] mb-12 sm:mb-16`}
          >
            <p className="eyebrow eyebrow--with-rule mb-7">Cómo es el recorrido</p>
            <h2
              className="font-display font-light text-[var(--navy)]"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontVariationSettings: "'opsz' 144, 'SOFT' 80",
              }}
            >
              Tres capítulos.{' '}
              <em
                className="italic font-normal text-[var(--ocean)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
              >
                A tu ritmo.
              </em>
            </h2>
          </div>

          <div className="max-w-[860px] mx-auto">
            {CHAPTERS.map((step, idx) => (
              <ChapterCard key={step.n} step={step} idx={idx} isLast={idx === CHAPTERS.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ANTES / DESPUÉS — shift visual ─── */}
      <BeforeAfter
        eyebrow="Lo que te llevás"
        title="Llegás a la elección"
        titleEm="con un mapa."
        beforeLabel="Hoy"
        afterLabel="Con Timon"
        pairs={[
          { before: '"No sé qué carreras van conmigo."', after: 'Entendés qué carreras encajan con vos, y por qué.' },
          { before: '"No sé bien de qué se trata cada una."', after: 'Tenés descripciones profundas y reales de cada carrera.' },
          { before: '"No sé dónde se estudia ni qué universidad me conviene."', after: 'Conocés las universidades argentinas según tus oportunidades.' },
          { before: '"No sé a qué laburo te lleva cada carrera."', after: 'Sabés las salidas laborales y los rangos salariales reales.' },
        ]}
      />

      {/* ─── CTA FINAL ─── */}
      <section className="relative bg-[var(--cream-elev)] border-t border-[var(--border-cream)] overflow-hidden">
        <SectionMark label="04" position="bottom-right" tone="terra" />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
          <div className="flex justify-center mb-8">
            <WheelMark tone="terra" size={56} className="spin-helm-slow" />
          </div>
          <h2
            ref={closingTitle.ref}
            className={`reveal ${closingTitle.inView ? 'is-visible' : ''} font-display font-light italic text-[var(--navy)] mb-10`}
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 5rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
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
            Hacer el recorrido
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}
