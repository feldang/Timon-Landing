'use client'

import { WheelMark } from './Logo'

export function ChatPreview() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Soft ocean halo */}
      <div
        className="absolute -inset-8 rounded-full opacity-60 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30, 91, 160, 0.18) 0%, transparent 65%)' }}
      />

      <div
        className="relative rounded-[28px] bg-[var(--cream-elev)] border border-[var(--border-cream)] overflow-hidden"
        style={{ boxShadow: '0 24px 60px rgba(15, 31, 54, 0.12)' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border-cream)]">
          <WheelMark tone="ocean" size={28} />
          <div className="flex-1">
            <p className="font-sans font-semibold text-[var(--navy)] text-[14px] leading-tight">Timon</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--hueso)] mt-1">
              Recorrido · pausado en cualquier momento
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="px-5 py-6 flex flex-col gap-3 min-h-[320px] bg-[var(--cream)]">
          <div className="flex justify-start animate-fade-in-up">
            <div className="max-w-[88%] px-4 py-3 rounded-2xl rounded-tl-md bg-[var(--cream-elev)] border border-[var(--border-cream)] text-[var(--navy)] text-[14px] leading-[1.55]">
              ¿Qué materias del cole te enganchan, aunque no sean en las que mejor te va?
            </div>
          </div>

          <div className="flex justify-end animate-fade-in-up animate-delay-200">
            <div className="max-w-[88%] px-4 py-3 rounded-2xl rounded-tr-md bg-[var(--ocean)] text-[var(--cream-elev)] text-[14px] leading-[1.55]">
              Historia y filosofía, pero no se me ocurre carrera con eso.
            </div>
          </div>

          <div className="flex justify-start animate-fade-in-up animate-delay-300">
            <div className="max-w-[88%] px-4 py-3 rounded-2xl rounded-tl-md bg-[var(--cream-elev)] border border-[var(--border-cream)] text-[var(--navy)] text-[14px] leading-[1.55]">
              Hay <em className="italic-emphasis">muchas más</em> de las que pensás. ¿Te interesa más entender por qué pasan las cosas, o cómo cambiarlas?
            </div>
          </div>

          <div className="flex justify-start animate-fade-in-up animate-delay-400">
            <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-[var(--cream-elev)] border border-[var(--border-cream)]">
              <div className="flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--hueso)]/60 animate-bounce" />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[var(--hueso)]/60 animate-bounce"
                  style={{ animationDelay: '150ms' }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[var(--hueso)]/60 animate-bounce"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer mono caption */}
        <div className="px-5 py-3 border-t border-[var(--border-cream)] bg-[var(--cream-elev)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--hueso)] text-center">
            Vos marcás el ritmo · vos elegís qué contás
          </p>
        </div>
      </div>
    </div>
  )
}
