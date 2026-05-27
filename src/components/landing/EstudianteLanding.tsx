'use client'

import { Footprints, Sparkles, Map, ArrowRight, ArrowLeft } from 'lucide-react'
import { ChatPreview } from './ChatPreview'
import { BeforeAfter } from './BeforeAfter'

const PRODUCT_URL = 'https://app.timon.com.ar'

type Props = { onBack: () => void }

export function EstudianteLanding({ onBack }: Props) {
  return (
    <div className="animate-fade-in bg-[var(--color-bg)]">
      {/* HERO */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade" />
        <div className="absolute -top-20 sm:top-20 -right-40 sm:right-0 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--color-blue)] opacity-[0.12] blur-[120px] sm:blur-[140px]" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer mb-6 sm:mb-8"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg-elev)] border border-[var(--color-border-soft)] text-xs font-medium text-[var(--color-blue-soft)] mb-5 sm:mb-6">
                Para vos
              </div>
              <h1
                className="font-display font-extrabold text-white text-[2rem] xs:text-[2.25rem] sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-5 sm:mb-6"
                style={{ letterSpacing: '-0.035em' }}
              >
                Entenderte mejor antes de elegir qué vas a hacer{' '}
                <span className="bg-gradient-to-r from-[var(--color-blue-bright)] to-[var(--color-blue-light)] bg-clip-text text-transparent">
                  4 años
                </span>.
              </h1>
              <p className="text-base sm:text-xl text-[var(--color-text-muted)] leading-relaxed mb-8 sm:mb-10">
                Hacés el recorrido con Timon. Te devuelve qué te mueve, qué carreras encajan con vos y dónde estudiarlas. Paso a paso, a tu ritmo.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[var(--color-blue)] text-white font-semibold text-base hover:bg-[var(--color-blue-bright)] transition-all shadow-xl shadow-[var(--color-blue)]/30 hover:shadow-2xl hover:shadow-[var(--color-blue)]/50 active:scale-[0.98] sm:hover:-translate-y-0.5 cursor-pointer"
                >
                  Empezar el recorrido
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Un recorrido, no un cuestionario rápido.
                </p>
              </div>
            </div>

            <div className="lg:pl-8 max-w-md mx-auto w-full">
              <ChatPreview />
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-20 sm:py-32 bg-[var(--color-bg-elev)] border-y border-[var(--color-border-soft)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-[var(--color-blue-bright)] uppercase tracking-wider mb-3">Cómo funciona</p>
            <h2
              className="font-display font-extrabold text-white text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Tres pasos. Cero presión.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[var(--color-border-strong)] to-transparent" />

            {[
              { num: '01', icon: Footprints, title: 'Recorrés', text: 'Preguntas, ejercicios y reflexiones — pensados para vos. A tu ritmo.' },
              { num: '02', icon: Sparkles, title: 'Te entendés', text: 'Timon te muestra tus fortalezas, intereses y estilo — con palabras tuyas.' },
              { num: '03', icon: Map, title: 'Decidís con info', text: 'Carreras que encajan, universidades reales, de qué vas a trabajar.' },
            ].map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.num}
                  className="group relative p-6 sm:p-8 rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border-soft)] sm:hover:border-[var(--color-blue)]/50 transition-all duration-300 sm:hover:-translate-y-1"
                >
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-blue-cornflower)] flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-[var(--color-blue)]/30">
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="font-display font-bold text-xs text-[var(--color-text-dim)] uppercase tracking-wider mb-1">Paso {step.num}</p>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base">
                    {step.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ANTES / DESPUÉS */}
      <BeforeAfter
        eyebrow="Lo que te llevás"
        title="Salís sabiendo lo que hoy no sabés."
        beforeLabel="Hoy"
        afterLabel="Con Timon"
        pairs={[
          { before: '"No sé qué carreras van conmigo"', after: 'Entendés qué carreras van con vos.' },
          { before: '"No sé qué es cada carrera"', after: 'Ves una descripción profunda de cada carrera.' },
          { before: '"No sé dónde se estudia"', after: 'Te damos las opciones en base a tu preferencia.' },
          { before: '"No sé qué laburo da"', after: 'Conocés las salidas laborales reales.' },
        ]}
      />

      {/* QUÉ NO ES */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] bg-[var(--color-blue)]/10 blur-[100px] sm:blur-[120px] rounded-full" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm font-medium text-[var(--color-blue-bright)] uppercase tracking-wider mb-3">Lo importante</p>
          <h2
            className="font-display font-extrabold text-white text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-10 sm:mb-12"
            style={{ letterSpacing: '-0.03em' }}
          >
            Qué Timon <span className="italic text-[var(--color-blue-soft)]">no</span> es.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { strong: 'No te etiqueta', rest: 'con un tipo de personalidad.' },
              { strong: 'No te dice', rest: 'qué estudiar — te da con qué decidir.' },
              { strong: 'No te juzga.', rest: 'Lo que pasa con Timon es tuyo.' },
            ].map((t) => (
              <div
                key={t.strong}
                className="p-5 sm:p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-soft)] text-left"
              >
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold">{t.strong}</span>{' '}
                  <span className="text-[var(--color-text-muted)]">{t.rest}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 sm:py-32 relative overflow-hidden bg-[var(--color-bg-elev)] border-t border-[var(--color-border-soft)]">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2
            className="font-display font-extrabold text-white text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-8"
            style={{ letterSpacing: '-0.03em' }}
          >
            Cuando estés listo, empezá.
          </h2>
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[var(--color-blue)] text-white font-semibold text-base hover:bg-[var(--color-blue-bright)] transition-all shadow-xl shadow-[var(--color-blue)]/30 hover:shadow-2xl hover:shadow-[var(--color-blue)]/50 active:scale-[0.98] sm:hover:-translate-y-0.5 cursor-pointer"
          >
            Hacé el recorrido
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}
