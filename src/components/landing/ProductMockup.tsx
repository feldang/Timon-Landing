// Adapted from timon-main — removed useInView dependency, simplified for landing

const modules = [
  { name: 'Vibecheck', status: 'done' },
  { name: 'Vos y el colegio', status: 'done' },
  { name: 'Dominancia cerebral', status: 'active' },
  { name: 'RIASEC Holland', status: 'pending' },
  { name: 'Inteligencias múltiples', status: 'pending' },
  { name: 'Tu autobiografía', status: 'pending' },
]

const careers = [
  { name: 'Diseño industrial', match: 94 },
  { name: 'Arquitectura', match: 89 },
  { name: 'Ingeniería civil', match: 81 },
]

const dimensions = [
  { label: 'Analítico', value: 87, color: '#4361EE' },
  { label: 'Creativo', value: 74, color: '#7C3AED' },
]

export function ProductMockup() {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden max-w-4xl mx-auto">
      {/* Window title bar */}
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} aria-hidden="true" />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} aria-hidden="true" />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} aria-hidden="true" />
        <div className="flex-1" />
        <span className="text-sm font-medium text-gray-500 mr-2">timón</span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#7C3AED' }}
          aria-hidden="true"
        >
          <span className="font-bold text-xs text-white">V</span>
        </div>
      </div>

      {/* App body */}
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-44 bg-gray-50 border-r border-gray-200 p-4 flex-shrink-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Mis módulos
          </p>
          <ul className="space-y-2">
            {modules.map((mod) => (
              <li key={mod.name} className="flex items-center gap-1.5">
                {mod.status === 'done' && (
                  <>
                    <span className="text-xs font-bold" style={{ color: '#10B981' }}>✓</span>
                    <span className="text-xs text-gray-600 leading-tight">{mod.name}</span>
                  </>
                )}
                {mod.status === 'active' && (
                  <>
                    <span className="text-xs" style={{ color: '#7C3AED' }}>⟳</span>
                    <span
                      className="text-xs font-semibold leading-tight"
                      style={{ color: '#7C3AED' }}
                    >
                      {mod.name}
                    </span>
                    <span
                      className="text-[10px] rounded-full px-1.5 py-0.5 font-semibold ml-auto flex-shrink-0"
                      style={{ backgroundColor: '#ede9fe', color: '#7C3AED' }}
                    >
                      en curso
                    </span>
                  </>
                )}
                {mod.status === 'pending' && (
                  <>
                    <span className="text-xs text-gray-300">○</span>
                    <span className="text-xs text-gray-400 leading-tight">{mod.name}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-4">+ 7 más...</p>
        </div>

        {/* Main area */}
        <div className="flex-1 p-6 pb-8 bg-white overflow-auto">
          <p className="text-base font-semibold text-gray-800 mb-2">Tu perfil vocacional</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Valentina, tu perfil muestra una orientación hacia carreras que combinan análisis y
            creatividad.
          </p>

          {/* Dimension pills */}
          <div className="flex gap-3 mb-6">
            {dimensions.map((d) => (
              <div key={d.label} className="flex-1 rounded-xl border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold leading-none" style={{ color: d.color }}>
                  {d.value}%
                </p>
                <p className="text-xs text-gray-500 mt-1">{d.label}</p>
              </div>
            ))}
          </div>

          {/* Career matches */}
          <p className="text-sm font-semibold text-gray-700 mb-2">Carreras sugeridas:</p>
          <ul className="divide-y divide-gray-100 mb-2">
            {careers.map((c) => (
              <li key={c.name} className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-700">→ {c.name}</span>
                <span className="text-sm font-semibold" style={{ color: '#10B981' }}>
                  match {c.match}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
