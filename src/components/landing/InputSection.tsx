'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { SectionMark } from './SectionMark'
import { PhoneCarousel } from './PhoneCarousel'
import { InputMacBook } from './InputMacBook'
import { ViewToggle, ViewMode } from './ViewToggle'

const C = {
  creamElev: '#FBF5EA',
  creamBorder: '#E6DCC9',
  creamDeep: '#EDE2CF',
  navy: '#0F1F36',
  ocean: '#1E5BA0',
  hueso: '#6B7B96',
}


export function InputSection() {
  const [view, setView] = useState<ViewMode>('phone')
  const titleReveal = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="relative border-t border-[var(--border-cream)] bg-[var(--cream)] overflow-hidden">
      <SectionMark label="02" position="top-left" tone="ocean" opacity={0.55} />

      <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] pt-16 sm:pt-24 pb-8 sm:pb-12">
        <div ref={titleReveal.ref} className={`reveal ${titleReveal.inView ? 'is-visible' : ''} max-w-[920px]`}>
          <p className="eyebrow eyebrow--with-rule mb-7">Cómo es el recorrido</p>
          <h2
            className="font-display font-light text-[var(--navy)] mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.0, letterSpacing: '-0.04em' }}
          >
            ¿Cómo funciona Timon?
          </h2>
          <p className="text-[1rem] sm:text-[1.125rem] leading-[1.65] text-[var(--navy)]/75 w-full mb-6">
            Hacemos preguntas sobre intereses y fricciones. Con formatos distintos. Lo podés completar a tu ritmo.
          </p>
          <ViewToggle value={view} onChange={setView} options={['phone', 'desktop']} />
        </div>
      </div>

      <div className="w-full pb-16 sm:pb-24">
        {view === 'phone' && <PhoneCarousel />}
        {view === 'desktop' && (
          <div className="px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw]">
            <InputMacBook />
          </div>
        )}
      </div>
    </section>
  )
}
