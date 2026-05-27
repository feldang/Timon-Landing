'use client'

import { ArrowRight } from 'lucide-react'

type Props = {
  onSelect: (a: 'estudiante' | 'padre') => void
}

export function HeroUniversal({ onSelect }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16 bg-[var(--color-bg)]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade" />

      {/* Radial glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] rounded-full bg-[var(--color-blue)] opacity-[0.18] blur-[120px] sm:blur-[140px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full bg-[var(--color-blue-cornflower)] opacity-[0.15] blur-[120px] sm:blur-[140px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Floating decorative dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[12%] right-[8%] w-2 h-2 rounded-full bg-[var(--color-blue-bright)] animate-float" />
        <div className="absolute top-[70%] left-[6%] w-1.5 h-1.5 rounded-full bg-[var(--color-blue-soft)] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[30%] left-[5%] w-1 h-1 rounded-full bg-[var(--color-blue-light)] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[18%] right-[6%] w-2 h-2 rounded-full bg-[var(--color-blue)] animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-20 text-center">
        <h1
          className="font-display font-extrabold text-white text-[2rem] xs:text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 sm:mb-8 animate-fade-in-up"
          style={{ letterSpacing: '-0.04em' }}
        >
          Elegir qué estudiar no debería ser{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-[var(--color-blue-bright)] via-[var(--color-blue-soft)] to-[var(--color-blue-light)] bg-clip-text text-transparent">
              tirar una moneda
            </span>
          </span>
          .
        </h1>

        <p className="text-base sm:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-14 animate-fade-in-up animate-delay-100 px-2 sm:px-0">
          Conocete, descubrí qué carrera encaja con vos y dónde estudiarla — sin etiquetas, sin presión.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
          <button
            onClick={() => onSelect('estudiante')}
            className="group relative flex items-center justify-between gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--color-blue)] text-white transition-all duration-200 cursor-pointer overflow-hidden active:scale-[0.98] sm:hover:-translate-y-1 shadow-xl shadow-[var(--color-blue)]/25 sm:hover:shadow-2xl sm:hover:shadow-[var(--color-blue)]/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative text-left">
              <p className="font-sans font-medium text-base sm:text-lg leading-tight tracking-tight">Soy estudiante</p>
              <p className="text-xs sm:text-sm font-normal text-white/65 mt-1">Tengo que elegir</p>
            </div>
            <ArrowRight size={18} className="relative shrink-0 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>

          <button
            onClick={() => onSelect('padre')}
            className="group relative flex items-center justify-between gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-[var(--color-bg-elev)] text-white border border-[var(--color-border-soft)] sm:hover:border-[var(--color-blue)] transition-all duration-200 cursor-pointer active:scale-[0.98] sm:hover:-translate-y-1 sm:hover:bg-[var(--color-bg-elev2)]"
          >
            <div className="relative text-left">
              <p className="font-sans font-medium text-base sm:text-lg leading-tight tracking-tight">Soy padre o madre</p>
              <p className="text-xs sm:text-sm font-normal text-[var(--color-text-muted)] mt-1">Mi hijo/a tiene que elegir</p>
            </div>
            <ArrowRight size={18} className="relative shrink-0 text-[var(--color-text-muted)] group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </section>
  )
}
