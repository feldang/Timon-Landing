'use client'

import Image from 'next/image'

type Props = {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

const SIZE = {
  sm: { w: 80, h: 26 },
  md: { w: 104, h: 34 },
  lg: { w: 180, h: 60 },
}

export function Logo({ variant = 'light', size = 'md', onClick, className = '' }: Props) {
  const src = variant === 'light' ? '/timon-logo-light.png' : '/timon-logo-dark.png'
  const dims = SIZE[size]

  const inner = (
    <Image
      src={src}
      alt="Timon"
      width={dims.w}
      height={dims.h}
      priority
      className="object-contain"
      style={{ height: 'auto', width: `${dims.w}px` }}
    />
  )

  if (!onClick) return <span className={className}>{inner}</span>

  return (
    <button
      onClick={onClick}
      aria-label="Timon — volver al inicio"
      className={`cursor-pointer transition-opacity hover:opacity-80 ${className}`}
    >
      {inner}
    </button>
  )
}
