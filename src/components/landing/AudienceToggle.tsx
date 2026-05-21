'use client'

import { GraduationCap, Heart } from 'lucide-react'

type Props = {
  audience: 'estudiante' | 'padre'
  setAudience: (a: 'estudiante' | 'padre') => void
}

export function AudienceToggle({ audience, setAudience }: Props) {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
          La landing se adapta a quién sos
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              value: 'estudiante' as const,
              label: 'Soy estudiante',
              sub: 'Encontrá tu camino',
              icon: GraduationCap,
              active: 'border-violet-500 bg-violet-50 text-violet-700',
              inactive: 'border-gray-200 bg-white text-gray-500 hover:border-gray-300',
              iconActive: 'text-violet-500',
            },
            {
              value: 'padre' as const,
              label: 'Soy padre/madre',
              sub: 'Ayudá a tu hijo/a',
              icon: Heart,
              active: 'border-emerald-500 bg-emerald-50 text-emerald-700',
              inactive: 'border-gray-200 bg-white text-gray-500 hover:border-gray-300',
              iconActive: 'text-emerald-500',
            },
          ].map((opt) => {
            const Icon = opt.icon
            const isActive = audience === opt.value
            return (
              <button
                key={opt.value}
                onClick={() => setAudience(opt.value)}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  isActive ? opt.active : opt.inactive
                }`}
              >
                <Icon size={28} className={isActive ? opt.iconActive : 'text-gray-400'} />
                <div>
                  <p className="font-semibold text-base">{opt.label}</p>
                  <p className={`text-xs mt-0.5 ${isActive ? 'opacity-70' : 'text-gray-400'}`}>
                    {opt.sub}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
