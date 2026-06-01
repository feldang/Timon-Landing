'use client'

import { Logo } from './Logo'
import { ArrowLeft } from 'lucide-react'

type Props = {
  audience: 'universal' | 'estudiante' | 'padre'
  onLogoClick: () => void
  onSwitchAudience: (a: 'estudiante' | 'padre') => void
  onBack: () => void
}

export function Navbar({ audience, onLogoClick, onSwitchAudience, onBack }: Props) {
  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 border-b border-[var(--border-cream)]"
      style={{
        background: 'rgba(245, 237, 224, 0.82)',
        backdropFilter: 'blur(20px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {audience !== 'universal' && (
            <button
              onClick={onBack}
              aria-label="Volver al inicio"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--hueso)] hover:text-[var(--navy)] transition-colors cursor-pointer pr-3 sm:border-r sm:border-[var(--border-cream)] shrink-0"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Volver</span>
            </button>
          )}
          <Logo onClick={onLogoClick} tone="navy" size={26} />
          <span
            className="hidden md:inline-flex items-center font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--hueso)] ml-1"
          >
            Claridad antes de elegir
          </span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-7 shrink-0">
          {audience === 'estudiante' && (
            <button
              onClick={() => onSwitchAudience('padre')}
              className="hidden sm:inline-flex text-[13px] text-[var(--hueso)] hover:text-[var(--navy)] transition-colors cursor-pointer"
            >
              ¿Sos padre o madre?
            </button>
          )}
          {audience === 'padre' && (
            <button
              onClick={() => onSwitchAudience('estudiante')}
              className="hidden sm:inline-flex text-[13px] text-[var(--hueso)] hover:text-[var(--navy)] transition-colors cursor-pointer"
            >
              ¿Sos estudiante?
            </button>
          )}
          {audience === 'universal' && (
            <>
              <button
                onClick={() => onSwitchAudience('estudiante')}
                className="hidden sm:inline-flex text-[13px] text-[var(--hueso)] hover:text-[var(--navy)] transition-colors cursor-pointer"
              >
                Para estudiantes
              </button>
              <button
                onClick={() => onSwitchAudience('padre')}
                className="hidden sm:inline-flex text-[13px] text-[var(--hueso)] hover:text-[var(--navy)] transition-colors cursor-pointer"
              >
                Para familias
              </button>
            </>
          )}

          <a
            href="#colegios"
            className="text-[13px] text-[var(--hueso)] hover:text-[var(--navy)] transition-colors whitespace-nowrap"
          >
            Para colegios
          </a>
        </nav>
      </div>
    </header>
  )
}
