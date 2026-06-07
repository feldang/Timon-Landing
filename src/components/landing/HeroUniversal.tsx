'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { Marquee } from './Marquee'

type Props = {
  onSelect: (a: 'estudiante' | 'padre') => void
}

type Path = 'estudiante' | 'padre' | null

export function HeroUniversal({ onSelect }: Props) {
  const headline = useInView<HTMLDivElement>()
  const sub = useInView<HTMLParagraphElement>()
  const divider = useInView<HTMLDivElement>()
  const fork = useInView<HTMLDivElement>()

  const [hovered, setHovered] = useState<Path>(null)

  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: 'calc(100dvh - 128px)' }}
    >
      {/* layered background: brand mesh + quiet dot grid */}
      <div className="absolute inset-0 hero-mesh pointer-events-none" />
      <div className="absolute inset-0 dot-grid dot-grid-fade pointer-events-none" />

      <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] pt-8 sm:pt-10 pb-3 sm:pb-4 flex-1 flex flex-col justify-center">
        {/* Top: headline + subtitle */}
        <div
          ref={headline.ref}
          className={`reveal ${headline.inView ? 'is-visible' : ''} max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%]`}
        >
          <h1
            className="font-display font-light text-[var(--navy)] mb-6 sm:mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 6.5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.04em',
              fontVariationSettings: "'opsz' 144, 'SOFT' 100",
            }}
          >
            Para definir qué{' '}
            <em
              className="italic font-normal text-[var(--ocean)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Carrera y Universidad
            </em>{' '}
            elegir.
          </h1>

          <p
            ref={sub.ref}
            className={`reveal reveal-delay-2 ${sub.inView ? 'is-visible' : ''} text-[1.0625rem] sm:text-[1.25rem] xl:text-[1.375rem] leading-[1.55] text-[var(--navy)]/70 max-w-[640px] xl:max-w-[720px]`}
          >
            El escenario real: opciones compatibles detalladas, características de cursada, costos y el estado actual de cada profesión.
          </p>
        </div>

        {/* "¿Quién sos?" — quiet mono label */}
        <div
          ref={divider.ref}
          className={`reveal reveal-delay-3 ${divider.inView ? 'is-visible' : ''} flex items-center gap-4 mt-10 sm:mt-14 mb-6 sm:mb-8`}
          aria-hidden
        >
          <span
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--hueso)]"
          >
            ¿Quién sos?
          </span>
          <span className="flex-1 h-px bg-[var(--border-cream)]" />
        </div>

        {/* THE FORK — two equal cards, decision-grade */}
        <div
          ref={fork.ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5"
        >
          {/* TEEN CARD — ocean filled */}
          <button
            onClick={() => onSelect('estudiante')}
            onMouseEnter={() => setHovered('estudiante')}
            onMouseLeave={() => setHovered(null)}
            className={`reveal reveal-delay-4 ${fork.inView ? 'is-visible' : ''} group relative text-left rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 cursor-pointer transition-[transform,opacity,box-shadow] duration-700 ease-out`}
            style={{
              minHeight: 'clamp(180px, 19vh, 220px)',
              background: 'var(--ocean)',
              color: 'var(--cream-elev)',
              transform: hovered === 'estudiante'
                ? 'scale(1.015)'
                : hovered === 'padre'
                ? 'scale(0.985)'
                : 'scale(1)',
              opacity: hovered === 'padre' ? 0.55 : 1,
              boxShadow:
                hovered === 'estudiante'
                  ? '0 28px 80px rgba(30, 91, 160, 0.32)'
                  : '0 16px 40px rgba(30, 91, 160, 0.22)',
            }}
          >
            {/* sweep highlight */}
            <span
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 20% 0%, rgba(255,255,255,0.14) 0%, transparent 55%)',
              }}
            />

            <div className="relative flex items-start justify-between mb-6 sm:mb-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold opacity-90">
                01
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
                14 – 18 años
              </span>
            </div>

            <h2
              className="relative font-display font-light leading-[0.95] mb-3"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.035em',
                fontVariationSettings: "'opsz' 144, 'SOFT' 100",
              }}
            >
              Soy{' '}
              <em
                className="italic font-normal"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                estudiante
              </em>
              .
            </h2>

            <p className="relative text-[15px] sm:text-[17px] leading-[1.55] opacity-85 max-w-[420px]">
              Empiezo el recorrido. Conozco quién soy y qué carreras encajan conmigo — a mi tiempo.
            </p>

            <ArrowUpRight
              size={22}
              strokeWidth={1.5}
              className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

          {/* PADRE CARD — cream outlined */}
          <button
            onClick={() => onSelect('padre')}
            onMouseEnter={() => setHovered('padre')}
            onMouseLeave={() => setHovered(null)}
            className={`reveal reveal-delay-5 ${fork.inView ? 'is-visible' : ''} group relative text-left rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 cursor-pointer transition-[transform,opacity,box-shadow,border-color] duration-700 ease-out`}
            style={{
              minHeight: 'clamp(180px, 19vh, 220px)',
              background: 'var(--cream-elev)',
              color: 'var(--navy)',
              border: '1px solid var(--border-cream)',
              transform: hovered === 'padre'
                ? 'scale(1.015)'
                : hovered === 'estudiante'
                ? 'scale(0.985)'
                : 'scale(1)',
              opacity: hovered === 'estudiante' ? 0.55 : 1,
              boxShadow:
                hovered === 'padre'
                  ? '0 28px 80px rgba(15, 31, 54, 0.16)'
                  : '0 8px 24px rgba(15, 31, 54, 0.06)',
              borderColor: hovered === 'padre' ? 'var(--ocean)' : 'var(--border-cream)',
            }}
          >
            {/* subtle terra accent that appears on hover */}
            <span
              aria-hidden
              className="absolute top-0 left-0 h-1 bg-[var(--terra)] origin-left transition-transform duration-700"
              style={{
                width: '100%',
                transform: hovered === 'padre' ? 'scaleX(1)' : 'scaleX(0)',
              }}
            />

            <div className="relative flex items-start justify-between mb-6 sm:mb-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--ocean)]">
                02
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--hueso)]">
                Padre o madre
              </span>
            </div>

            <h2
              className="relative font-display font-light leading-[0.95] mb-3"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.035em',
                fontVariationSettings: "'opsz' 144, 'SOFT' 100",
              }}
            >
              Soy{' '}
              <em
                className="italic font-normal text-[var(--ocean)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                padre/madre
              </em>
              .
            </h2>

            <p className="relative text-[15px] sm:text-[17px] leading-[1.55] text-[var(--navy)]/75 max-w-[420px]">
              Habilito el recorrido para mi hijo/a. Lo hace en privado, a su tiempo — y veo el mapa cuando él/ella lo comparte.
            </p>

            <ArrowUpRight
              size={22}
              strokeWidth={1.5}
              className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 text-[var(--hueso)] group-hover:text-[var(--ocean)]"
            />
          </button>
        </div>
      </div>

      {/* Catalog marquee — anchored to bottom of viewport */}
      <div className="relative mt-auto">
        <Marquee variant="universities" surface="cream" speedSec={70} />
      </div>
    </section>
  )
}
