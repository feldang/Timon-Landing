import Link from 'next/link'

export const metadata = {
  title: 'Términos y Condiciones — Timon',
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-white mb-12"
        >
          ← Volver
        </Link>
        <h1
          className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          style={{ letterSpacing: '-0.035em' }}
        >
          Términos y Condiciones
        </h1>
        <p className="text-[var(--color-text-muted)] mb-12">
          Próximamente — borrador en revisión legal.
        </p>
        <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
          <p>
            Timon es una herramienta tecnológica de exploración vocacional. Sus respuestas son
            generadas por inteligencia artificial con fines informativos y de autoconocimiento.
            No constituye un diagnóstico psicológico ni una evaluación psicométrica, y no
            reemplaza la consulta con un profesional matriculado (Ley N° 23.277).
          </p>
          <p>
            Cumple con la Ley N° 25.326 de Protección de Datos Personales. Las decisiones
            tomadas a partir de la información provista por la plataforma son de exclusiva
            responsabilidad del usuario.
          </p>
        </div>
      </div>
    </main>
  )
}
