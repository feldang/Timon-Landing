'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
          </div>
          <span
            className={`font-semibold text-lg transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            timón
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`text-sm transition-colors hidden md:block ${
              scrolled ? 'text-gray-600' : 'text-white/70'
            }`}
          >
            Iniciar sesión
          </span>
          <Button
            size="sm"
            className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-5"
          >
            Empezar ahora
          </Button>
        </div>
      </div>
    </nav>
  )
}
