'use client'

import { Ear, Compass, Map, Heart, ArrowRight, ArrowLeft } from 'lucide-react'
import { ReportPreview } from './ReportPreview'
import { BeforeAfter } from './BeforeAfter'

const PRODUCT_URL = 'https://app.timon.com.ar'

type Props = { onBack: () => void }

export function PadreLanding({ onBack }: Props) {
  return (
    <div className="animate-fade-in bg-[var(--color-bg)]">
      {/* HERO */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade" />
        <div className="absolute -top-20 sm:top-20 -left-40 sm:left-0 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--color-blue-cornflower)] opacity-[0.12] blur-[120px] sm:blur-[140px]" />

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
                Para vos como padre o madre
              </div>
              <h1
                className="font-display font-extrabold text-white text-[2rem] xs:text-[2.25rem] sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-5 sm:mb-6"
                style={{ letterSpacing: '-0.035em' }}
              >
                Que la primera gran decisión de tu hijo/a no termine en un{' '}
                <span className="bg-gradient-to-r from-[var(--color-blue-bright)] to-[var(--color-blue-light)] bg-clip-text text-transparent">
                  cambio de carrera
                </span>.
              </h1>
              <p className="text-base sm:text-xl text-[var(--color-text-muted)] leading-relaxed mb-8 sm:mb-10">
                Timon lo ayuda a entenderse, descubrir qué carrera encaja con él/ella y conocer dónde estudiar en Argentina. Vos hacés posible que empiece. El recorrido es suyo.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[var(--color-blue)] text-white font-semibold text-base hover:bg-[var(--color-blue-bright)] transition-all shadow-xl shadow-[var(--color-blue)]/30 hover:shadow-2xl hover:shadow-[var(--color-blue)]/50 active:scale-[0.98] sm:hover:-translate-y-0.5 cursor-pointer"
                >
                  Empezar
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Un proceso pensado para él/ella. A su ritmo.
                </p>
              </div>
            </div>

            <div className="lg:pl-8 max-w-md mx-auto w-full">
              <ReportPreview />
            </div>
          </div>
        </div>
      </section>

      {/* EL PROBLEMA — DATOS */}
      <section className="py-20 sm:py-32 bg-[var(--color-bg-elev)] border-y border-[var(--color-border-soft)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-[var(--color-blue)]/8 blur-[100px] sm:blur-[120px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-blue-bright)] uppercase tracking-wider mb-3">El contexto</p>
            <h2
              className="font-display font-extrabold text-white text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              No es falta de capacidad. Es falta de claridad al momento de decidir.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { stat: '40%', desc: 'abandona o cambia carrera en el primer año.' },
              { stat: '1 de 5', desc: 'termina la carrera en el tiempo nominal.' },
              { stat: '52%', desc: 'no proyecta su ocupación al terminar el secundario.' },
            ].map((s) => (
              <div
                key={s.stat}
                className="relative p-6 sm:p-8 rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border-soft)] overflow-hidden group sm:hover:border-[var(--color-blue)]/40 transition-colors"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[var(--color-blue)]/15 blur-2xl" />
                <p
                  className="relative font-display font-extrabold text-[2.75rem] sm:text-5xl md:text-6xl bg-gradient-to-br from-white to-[var(--color-blue-soft)] bg-clip-text text-transparent leading-none mb-3 sm:mb-4 tracking-tight"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {s.stat}
                </p>
                <p className="relative text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--color-text-dim)] mt-6 sm:mt-8">Fuentes: SPU · PISA 2022</p>
        </div>
      </section>

      {/* QUÉ SE LLEVA TU HIJO/A */}
      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <p className="text-sm font-medium text-[var(--color-blue-bright)] uppercase tracking-wider mb-3">Lo importante</p>
            <h2
              className="font-display font-extrabold text-white text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Qué se lleva tu hijo/a.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {[
              { icon: Ear, title: 'Un recorrido que lo escucha', text: 'Sin etiquetas, sin juicios. Avanza al ritmo que necesita.' },
              { icon: Compass, title: 'Carreras que encajan con quién es', text: 'Con argumentos reales — no con tipos de personalidad genéricos.' },
              { icon: Map, title: 'El mapa completo de Argentina', text: 'Universidades, costos, modalidades y de qué va a trabajar al recibirse.' },
              { icon: Heart, title: 'Más claridad, menos ansiedad', text: 'Para que llegue al momento de inscribirse con la cabeza más liviana.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border-soft)] sm:hover:border-[var(--color-blue)]/40 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-blue-cornflower)]/10 border border-[var(--color-blue)]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[var(--color-blue-bright)]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed text-sm sm:text-base">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ANTES / DESPUÉS — REASEGURO PADRE */}
      <BeforeAfter
        eyebrow="Lo que dejamos atrás"
        title="Lo que ya no le va a pasar."
        beforeLabel="Sin Timon"
        afterLabel="Con Timon"
        pairs={[
          { before: 'La nebulosa que no se disipa.', after: 'Sale con un mapa claro de opciones.' },
          { before: '4 años de carrera tirados.', after: 'Decide antes de invertir tiempo y plata.' },
          { before: 'El limbo del "no sé qué hacer".', after: 'Avanza con dirección, a su ritmo.' },
          { before: 'Frustrarse por elegir mal.', after: 'Elige sabiendo por qué le va a gustar.' },
        ]}
      />

      {/* TU ROL */}
      <section className="py-20 sm:py-32 bg-[var(--color-bg-elev)] border-y border-[var(--color-border-soft)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="mb-10 sm:mb-12 max-w-2xl">
            <p className="text-sm font-medium text-[var(--color-blue-bright)] uppercase tracking-wider mb-3">Tu rol</p>
            <h2
              className="font-display font-extrabold text-white text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Abrirle la puerta. Nada más, nada menos.
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { strong: 'Hacés posible que empiece.', rest: 'Eso solo ya cambia las cosas.' },
              { strong: 'Si tu hijo/a quiere, te comparte el resumen del recorrido.', rest: 'Y lo revisan juntos, con información sobre la mesa.' },
              { strong: 'Si prefiere mantenerlo privado, también está bien.', rest: 'La decisión sigue siendo suya.' },
              { strong: 'Vos no tenés que entender de carreras.', rest: 'Ni convencerlo. Ni elegir por él/ella.' },
            ].map((line) => (
              <div
                key={line.strong}
                className="px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-soft)]"
              >
                <p className="text-white text-sm sm:text-lg leading-relaxed">
                  <span className="font-semibold">{line.strong}</span>{' '}
                  <span className="text-[var(--color-text-muted)]">{line.rest}</span>
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
            Hoy es un buen momento para que arranque.
          </h2>
          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[var(--color-blue)] text-white font-semibold text-base hover:bg-[var(--color-blue-bright)] transition-all shadow-xl shadow-[var(--color-blue)]/30 hover:shadow-2xl hover:shadow-[var(--color-blue)]/50 active:scale-[0.98] sm:hover:-translate-y-0.5 cursor-pointer"
          >
            Empezar
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  )
}
