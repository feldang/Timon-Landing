// Adapted from timon-main — removed useInView dependency, simplified for landing

import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Siempre pensé que me gustaba medicina porque sí. Timón me ayudó a entender que lo que realmente me mueve es resolver problemas complejos bajo presión. Ahora estoy segura.',
    name: 'Valentina M.',
    detail: '17 años · Colegio San Martín, CABA',
    accent: '#4361EE',
  },
  {
    quote:
      'Como papá, quería que el proceso fuera serio. No quería que mi hijo eligiera carrera basándose en un test de internet de 5 preguntas. Timón fue diferente desde el primer módulo.',
    name: 'Eduardo R.',
    detail: 'Padre de Tomás, 16 años',
    accent: '#059669',
  },
  {
    quote:
      'Nunca pensé que iba a terminar eligiendo diseño industrial. Parecía que todo me llevaba a algo creativo pero yo no lo veía. El informe fue muy claro.',
    name: 'Mateo L.',
    detail: '18 años · Quilmes, Buenos Aires',
    accent: '#7C3AED',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-5 sm:px-8" aria-label="Testimonios">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl text-foreground leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Lo que dicen los que ya{' '}
            <br className="hidden sm:block" />
            recorrieron el camino.
          </h2>
        </div>

        <div className="flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 sm:mx-0 sm:px-0 pb-4 sm:pb-0">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-card border border-border/50 p-8 flex-shrink-0 w-[300px] sm:w-auto snap-start transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderLeft: `4px solid ${t.accent}` }}
            >
              <Quote
                className="mb-5"
                style={{ color: t.accent, width: 28, height: 28, opacity: 0.25 }}
                aria-hidden="true"
              />
              <blockquote
                className="text-lg text-foreground/80 leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: t.accent }}
                  aria-hidden="true"
                >
                  <span className="font-bold text-sm text-white">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.detail}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
