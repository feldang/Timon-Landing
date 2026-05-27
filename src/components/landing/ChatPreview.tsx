'use client'

export function ChatPreview() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow halo */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[var(--color-blue)]/30 to-[var(--color-blue-cornflower)]/20 blur-3xl rounded-full" />

      <div className="relative rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border-soft)] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-border-soft)]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-blue-cornflower)] flex items-center justify-center text-white font-display font-bold text-sm">
            T
          </div>
          <div className="flex-1">
            <p className="font-semibold text-white text-sm leading-tight">Timon</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-[var(--color-text-dim)]">En línea</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="px-5 py-6 flex flex-col gap-3 min-h-[320px]">
          <div className="flex justify-start animate-fade-in-up">
            <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm bg-[var(--color-bg-elev2)] text-white text-sm leading-relaxed">
              ¿Qué materias del cole te enganchan, aunque no sean las mejores en notas?
            </div>
          </div>

          <div className="flex justify-end animate-fade-in-up animate-delay-200">
            <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm bg-[var(--color-blue)] text-white text-sm leading-relaxed">
              Historia y filosofía, pero no se me ocurre carrera con eso.
            </div>
          </div>

          <div className="flex justify-start animate-fade-in-up animate-delay-300">
            <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm bg-[var(--color-bg-elev2)] text-white text-sm leading-relaxed">
              Hay más de las que pensás. ¿Te interesa más entender por qué pasan las cosas o cómo cambiarlas?
            </div>
          </div>

          <div className="flex justify-start animate-fade-in-up animate-delay-400">
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[var(--color-bg-elev2)]">
              <div className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-dim)] animate-bounce" />
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-dim)] animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-dim)] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
