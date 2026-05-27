'use client'

import { Briefcase, GraduationCap, MapPin } from 'lucide-react'

export function ReportPreview() {
  const careers = [
    { name: 'Ciencias Políticas', match: 94 },
    { name: 'Sociología', match: 88 },
    { name: 'Comunicación', match: 81 },
  ]

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow halo */}
      <div className="absolute -inset-6 bg-gradient-to-br from-[var(--color-blue)]/30 to-[var(--color-blue-cornflower)]/20 blur-3xl rounded-full" />

      <div className="relative rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border-soft)] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[var(--color-border-soft)]">
          <p className="text-xs uppercase tracking-wider text-[var(--color-text-dim)] mb-1">Resumen</p>
          <p className="font-display font-bold text-white text-lg leading-tight">
            Carreras compatibles con Juana
          </p>
        </div>

        {/* Career rows */}
        <div className="px-6 py-5 flex flex-col gap-4">
          {careers.map((c, idx) => (
            <div key={c.name} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-white">{c.name}</span>
                <span className="text-sm font-semibold text-[var(--color-blue-bright)]">{c.match}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[var(--color-bg-elev2)] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-blue-bright)] rounded-full transition-all"
                  style={{ width: `${c.match}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mini stats footer */}
        <div className="grid grid-cols-3 border-t border-[var(--color-border-soft)] bg-[var(--color-bg-elev)]">
          <div className="px-4 py-4 border-r border-[var(--color-border-soft)]">
            <GraduationCap size={14} className="text-[var(--color-blue-soft)] mb-1" />
            <p className="text-xs text-[var(--color-text-dim)]">Universidades</p>
            <p className="font-display font-bold text-white text-sm">120+</p>
          </div>
          <div className="px-4 py-4 border-r border-[var(--color-border-soft)]">
            <MapPin size={14} className="text-[var(--color-blue-soft)] mb-1" />
            <p className="text-xs text-[var(--color-text-dim)]">Provincias</p>
            <p className="font-display font-bold text-white text-sm">24</p>
          </div>
          <div className="px-4 py-4">
            <Briefcase size={14} className="text-[var(--color-blue-soft)] mb-1" />
            <p className="text-xs text-[var(--color-text-dim)]">Carreras</p>
            <p className="font-display font-bold text-white text-sm">847</p>
          </div>
        </div>
      </div>
    </div>
  )
}
