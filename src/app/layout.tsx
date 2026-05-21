import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Timón — Descubrí qué estudiar',
  description:
    'Descubrí qué estudiar, dónde, cuánto cuesta y de qué vas a trabajar. Orientación vocacional profesional.',
  openGraph: {
    title: 'Timón — Descubrí qué estudiar',
    description: 'Orientación vocacional profesional para adolescentes y familias.',
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
    <html lang="es" className={`${inter.variable} ${dmSerifDisplay.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  )
}
