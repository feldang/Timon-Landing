'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/landing/Navbar'
import { HeroUniversal } from '@/components/landing/HeroUniversal'
import { EstudianteLanding } from '@/components/landing/EstudianteLanding'
import { PadreLanding } from '@/components/landing/PadreLanding'
import { Footer } from '@/components/landing/Footer'
import { ScrollProgress } from '@/components/landing/ScrollProgress'

type Audience = 'universal' | 'estudiante' | 'padre'

export default function Home() {
  const [audience, setAudience] = useState<Audience>('universal')

  const handleSelect = (a: 'estudiante' | 'padre') => {
    setAudience(a)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleReset = () => {
    setAudience('universal')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' })
  }

  useEffect(() => {
    document.title =
      audience === 'estudiante'
        ? 'Timon — El primer paso no es elegir. Es entenderte.'
        : audience === 'padre'
        ? 'Timon — Que salga de la nebulosa con un mapa propio'
        : 'Timon — Claridad antes de elegir'
  }, [audience])

  return (
    <main className="flex-1 flex flex-col bg-[var(--cream)] paper-grain">
      <ScrollProgress />
      <Navbar
        audience={audience}
        onLogoClick={handleReset}
        onSwitchAudience={handleSelect}
        onBack={handleReset}
      />

      <div className="flex-1">
        {audience === 'universal' && <HeroUniversal onSelect={handleSelect} />}
        {audience === 'estudiante' && <EstudianteLanding onBack={handleReset} />}
        {audience === 'padre' && <PadreLanding onBack={handleReset} />}
      </div>

      <Footer />
    </main>
  )
}
