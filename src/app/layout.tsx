import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Timon — Elegir qué estudiar no debería ser tirar una moneda',
  description:
    'Conocete, descubrí qué carrera encaja con vos y dónde estudiarla. Sin tests, sin etiquetas, sin presión.',
  openGraph: {
    title: 'Timon — Elegir qué estudiar no debería ser tirar una moneda',
    description: 'Conocete, descubrí qué carrera encaja con vos y dónde estudiarla.',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable} h-full antialiased`} suppressHydrationWarning>
      <body
        className="font-sans min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
