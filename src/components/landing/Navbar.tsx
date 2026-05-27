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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/85 backdrop-blur-xl border-b border-[var(--color-border-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {audience !== 'universal' && (
            <button
              onClick={onBack}
              aria-label="Volver al inicio"
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:h-auto sm:gap-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-[var(--color-bg-elev)] sm:bg-transparent border border-[var(--color-border-soft)] sm:border-0 sm:border-r sm:pr-3 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Atrás</span>
            </button>
          )}
          <Logo onClick={onLogoClick} variant="light" size="sm" className="sm:hidden" />
          <Logo onClick={onLogoClick} variant="light" size="md" className="hidden sm:block" />
        </div>

        <nav className="flex items-center gap-3 sm:gap-6 shrink-0">
          {audience === 'estudiante' && (
            <button
              onClick={() => onSwitchAudience('padre')}
              className="hidden sm:inline-flex text-sm text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer"
            >
              ¿Sos padre o madre?
            </button>
          )}
          {audience === 'padre' && (
            <button
              onClick={() => onSwitchAudience('estudiante')}
              className="hidden sm:inline-flex text-sm text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer"
            >
              ¿Sos estudiante?
            </button>
          )}

          <a
            href="#colegios"
            className="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-white transition-colors whitespace-nowrap"
          >
            Para colegios
          </a>
        </nav>
      </div>
    </header>
  )
}
