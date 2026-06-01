import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz', 'SOFT'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Timon — Claridad antes de elegir',
  description:
    'El primer paso no es elegir. Es entenderte. Un recorrido al ritmo que vos vayas — carreras, universidades argentinas y salidas laborales reales.',
  openGraph: {
    title: 'Timon — Claridad antes de elegir',
    description:
      'El primer paso no es elegir. Es entenderte. Un recorrido al ritmo que vos vayas.',
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
    <html
      lang="es"
      className={`${fraunces.variable} ${plex.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="font-sans min-h-full flex flex-col bg-[var(--cream)] text-[var(--navy)]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
