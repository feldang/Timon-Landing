'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/landing/Navbar'
import { HeroUniversal } from '@/components/landing/HeroUniversal'
import { EstudianteLanding } from '@/components/landing/EstudianteLanding'
import { PadreLanding } from '@/components/landing/PadreLanding'
import { Footer } from '@/components/landing/Footer'

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
        ? 'Timon — Entenderte mejor antes de elegir'
        : audience === 'padre'
        ? 'Timon — Que la primera gran decisión no termine en un cambio de carrera'
        : 'Timon — Elegir qué estudiar no debería ser tirar una moneda'
  }, [audience])

  return (
    <main className="flex-1 flex flex-col bg-[var(--color-bg)]">
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
