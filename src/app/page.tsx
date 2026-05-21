'use client'

import { useState } from 'react'
import { Navbar } from '@/components/landing/Navbar'
import { HeroSplit } from '@/components/landing/HeroSplit'
import { AudienceToggle } from '@/components/landing/AudienceToggle'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { SolutionSection } from '@/components/landing/SolutionSection'
import { DifferentiatorsSection } from '@/components/landing/DifferentiatorsSection'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'
import { FinalCTA } from '@/components/landing/FinalCTA'

export default function Home() {
  const [audience, setAudience] = useState<'estudiante' | 'padre'>('estudiante')

  return (
    <main>
      <Navbar />
      <HeroSplit />
      <AudienceToggle audience={audience} setAudience={setAudience} />
      <ProblemSection audience={audience} />
      <SolutionSection audience={audience} />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <FinalCTA />
    </main>
  )
}
