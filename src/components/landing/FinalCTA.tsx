import { Button } from '@/components/ui/button'

export function FinalCTA() {
  return (
    <section className="py-24" style={{ backgroundColor: '#0d0d14' }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl text-white mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          No es un test.{' '}
          <span className="text-violet-400">Es el inicio de conocerte de verdad.</span>
        </h2>
        <p className="text-white/60 text-lg mb-10">
          En días sabés qué estudiar, dónde y de qué vas a trabajar.
        </p>
        <Button
          size="lg"
          className="bg-violet-600 hover:bg-violet-700 text-white rounded-2xl px-10 py-6 text-lg font-semibold"
        >
          Empezar mi perfil →
        </Button>
        <div className="flex items-center justify-center gap-6 mt-4">
          {['Tu perfil es tuyo', 'Sin spam', 'Resultado en 3 días'].map((t) => (
            <span key={t} className="text-white/40 text-sm">
              ✓ {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
