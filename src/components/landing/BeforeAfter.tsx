'use client'

import { ArrowRight } from 'lucide-react'

type Pair = { before: string; after: string }

type Props = {
  eyebrow: string
  title: string
  beforeLabel?: string
  afterLabel?: string
  pairs: Pair[]
}

export function BeforeAfter({
  eyebrow,
  title,
  beforeLabel = 'Hoy',
  afterLabel = 'Con Timon',
  pairs,
}: Props) {
  return (
    <section className="py-20 sm:py-32 bg-[var(--color-bg-elev)] border-y border-[var(--color-border-soft)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[300px] sm:h-[400px] bg-[var(--color-blue)]/8 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <p className="text-sm font-medium text-[var(--color-blue-bright)] uppercase tracking-wider mb-3">
            {eyebrow}
          </p>
          <h2
            className="font-display font-extrabold text-white text-[1.75rem] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            {title}
          </h2>
        </div>

        {/* Column headers (desktop) */}
        <div className="hidden md:grid md:grid-cols-[1fr_56px_1fr] gap-4 mb-4 px-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-dim)]">
            {beforeLabel}
          </p>
          <div />
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-blue-bright)]">
            {afterLabel}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-3">
          {pairs.map((p, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] gap-2 md:gap-4 items-stretch"
            >
              {/* Before */}
              <div className="relative px-5 pt-8 pb-5 md:pt-5 md:py-5 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-soft)] flex items-center">
                <span className="absolute top-3 left-5 md:hidden text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-dim)]">
                  {beforeLabel}
                </span>
                <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-snug">
                  {p.before}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center -my-1 md:my-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-blue-cornflower)] flex items-center justify-center shadow-lg shadow-[var(--color-blue)]/30 rotate-90 md:rotate-0">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>

              {/* After */}
              <div className="relative px-5 pt-8 pb-5 md:pt-5 md:py-5 rounded-2xl bg-gradient-to-br from-[var(--color-blue)]/10 to-[var(--color-blue-cornflower)]/5 border border-[var(--color-blue)]/30 flex items-center">
                <span className="absolute top-3 left-5 md:hidden text-[10px] font-semibold uppercase tracking-wider text-[var(--color-blue-bright)]">
                  {afterLabel}
                </span>
                <p className="text-white text-base md:text-lg leading-snug font-medium">
                  {p.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
