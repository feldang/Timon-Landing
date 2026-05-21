import {
  GraduationCap,
  Search,
  MapPin,
  DollarSign,
  Briefcase,
  Brain,
  Building,
  Users,
  Shield,
} from 'lucide-react'
import { ProductMockup } from './ProductMockup'

type Props = { audience: 'estudiante' | 'padre' }

const CONTENT = {
  estudiante: {
    titulo: 'Tu perfil. Tus carreras. Tu respuesta.',
    items: [
      {
        icon: GraduationCap,
        titulo: 'Quién sos de verdad',
        texto: 'Tu perfil de fortalezas, valores y estilo de aprendizaje. No lo que creés ser.',
      },
      {
        icon: Search,
        titulo: 'Las carreras que conectan con vos',
        texto: 'Ordenadas por compatibilidad real, con explicación de por qué cada una encaja.',
      },
      {
        icon: MapPin,
        titulo: 'Dónde estudiarlas',
        texto: 'Todas las universidades de Argentina. Públicas y privadas.',
      },
      {
        icon: DollarSign,
        titulo: 'Cuánto cuesta cada opción',
        texto: 'Aranceles reales y actualizados. Sin sorpresas.',
      },
      {
        icon: Briefcase,
        titulo: 'De qué vas a trabajar',
        texto: 'Salidas laborales reales por carrera. Para elegir con información.',
      },
    ],
    badgeBg: 'bg-violet-100 text-violet-700',
  },
  padre: {
    titulo: 'Claridad para tu hijo. Tranquilidad para vos.',
    items: [
      {
        icon: Brain,
        titulo: 'Un proceso psicopedagógico serio',
        texto: 'Basado en MIPS, RIASEC, Herrmann y Gardner — igual que los mejores orientadores.',
      },
      {
        icon: GraduationCap,
        titulo: 'Carreras con futuro real',
        texto: 'Las que combinan compatibilidad personal con panorama laboral concreto.',
      },
      {
        icon: Building,
        titulo: 'Todas las universidades del país',
        texto: '847 carreras en 120+ universidades con costos actualizados.',
      },
      {
        icon: Users,
        titulo: 'Un informe que pueden compartir',
        texto: 'Tu hijo/a puede compartir el resultado con vos para decidir juntos.',
      },
      {
        icon: Shield,
        titulo: 'La quinta parte de un orientador privado',
        texto: 'Un proceso privado cuesta $500.000-$800.000. Timón cuesta $150.000.',
      },
    ],
    badgeBg: 'bg-emerald-100 text-emerald-700',
  },
}

export function SolutionSection({ audience }: Props) {
  const c = CONTENT[audience]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl text-gray-900 mb-16 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {c.titulo}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            {c.items.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.titulo} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${c.badgeBg}`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.titulo}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.texto}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
