import { ChatFunnel } from './ChatFunnel'

export function HeroSplit() {
  return (
    <section
      className="min-h-screen flex items-center pt-20 pb-12"
      style={{ backgroundColor: '#0d0d14' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white/70 text-xs px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Orientación vocacional profesional
            </div>

            <h1
              className="text-4xl md:text-5xl xl:text-6xl text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Descubrí qué estudiar,{' '}
              <span className="text-violet-400">dónde</span>, cuánto cuesta y de qué vas a trabajar.
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Construido desde quién sos de verdad. No un test de 5 preguntas — un perfil profundo
              que te da respuestas concretas.
            </p>

            <div className="flex flex-wrap gap-6">
              {['4.200+ adolescentes', '95% tomó su decisión', 'Resultados en 3 días'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/40 text-sm">
                  <span className="text-violet-400">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <ChatFunnel />
          </div>
        </div>
      </div>
    </section>
  )
}
