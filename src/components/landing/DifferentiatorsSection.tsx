export function DifferentiatorsSection() {
  const blocks = [
    {
      num: '01',
      numColor: 'text-violet-100',
      titulo: 'La base de carreras más completa de Argentina.',
      texto:
        '847 carreras universitarias. 120+ universidades públicas y privadas. Costos actualizados. Salidas laborales reales. No buscás en Google. No preguntás en foros. Todo está acá.',
      pills: ['847 carreras', '120+ universidades', '100% con costos actualizados'],
      pillStyle: 'bg-violet-50 border-violet-200 text-violet-700',
      table: null,
    },
    {
      num: '02',
      numColor: 'text-blue-100',
      titulo: 'Las metodologías más rigurosas del mundo.',
      texto:
        'MIPS, RIASEC Holland, Herrmann, Gardner, proyectivas. Las mismas herramientas que usan los mejores orientadores vocacionales del mundo. No un quiz de internet — psicopedagogía clínica real.',
      pills: ['MIPS', 'RIASEC Holland', 'Herrmann', 'Gardner'],
      pillStyle: 'bg-blue-50 border-blue-200 text-blue-700',
      table: null,
    },
    {
      num: '03',
      numColor: 'text-emerald-100',
      titulo: 'La quinta parte del costo. La misma calidad.',
      texto:
        'Un proceso con orientador vocacional privado cuesta entre $500.000 y $800.000 en Argentina. Timón cuesta $150.000. Con un proceso más completo, más objetivo y con resultados que podés medir.',
      pills: null,
      pillStyle: '',
      table: {
        headers: ['', 'Orientador privado', 'Timón'],
        rows: [
          ['Costo', '$500.000 – $800.000', '$150.000'],
          ['Tiempo', '1 – 2 meses', '3 – 7 días'],
          ['Objetividad', 'Subjetivo', 'Validado clínicamente'],
          ['Base de datos', 'Sin base de datos', '847 carreras'],
        ],
      },
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Por qué Timón y no otra cosa.
          </h2>
          <p className="text-gray-400 text-lg">Tres diferencias que no son de marketing.</p>
        </div>

        <div className="flex flex-col divide-y divide-gray-200">
          {blocks.map((block) => (
            <div key={block.num} className="relative py-16 overflow-hidden">
              <span
                className={`absolute top-8 right-0 text-9xl font-bold select-none pointer-events-none leading-none ${block.numColor}`}
              >
                {block.num}
              </span>
              <div className="relative z-10">
                <h3
                  className="text-3xl text-gray-900 mb-4 max-w-xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {block.titulo}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6 max-w-2xl">
                  {block.texto}
                </p>
                {block.pills && (
                  <div className="flex flex-wrap gap-2">
                    {block.pills.map((p) => (
                      <span
                        key={p}
                        className={`border text-sm px-3 py-1 rounded-full font-medium ${block.pillStyle}`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
                {block.table && (
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr>
                          {block.table.headers.map((h, i) => (
                            <th
                              key={i}
                              className={`text-left py-2 px-4 text-xs uppercase tracking-wider font-semibold ${
                                i === 2
                                  ? 'text-violet-600 bg-violet-50 rounded-t-lg'
                                  : 'text-gray-400'
                              }`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.table.rows.map((row, ri) => (
                          <tr key={ri} className="border-t border-gray-100">
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`py-2.5 px-4 ${
                                  ci === 0
                                    ? 'text-gray-400 text-xs uppercase tracking-wide'
                                    : ci === 2
                                    ? 'text-violet-700 font-semibold bg-violet-50'
                                    : 'text-gray-600'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
