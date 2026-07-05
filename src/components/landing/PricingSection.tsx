'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const PRODUCT_URL = 'https://app.timon.com.ar'

type ProductId = 'timon' | 'timon_psico'
type Props = { onBack: () => void }

const C = {
  navy: '#0F1F36',
  ocean: '#1E5BA0',
  creamElev: '#FBF5EA',
  creamBorder: '#E6DCC9',
  creamBorderStrong: '#D8CCB4',
  hueso: '#6B7B96',
  terra: '#C97F5E',
}

type Product = {
  id: ProductId
  name: string
  tagline: string
  includes: string[]
  basePrice: number
}

type Modality = {
  id: string
  name: string
  size: string
  discountPct: number
  highlight: boolean
}

const PRODUCTS: Product[] = [
  {
    id: 'timon',
    name: 'Timon',
    tagline: 'El recorrido completo',
    includes: [
      'Análisis de quién sos',
      'Carreras compatibles con tu perfil',
      'Universidades en Argentina',
      'Salida laboral y rangos salariales',
    ],
    basePrice: 140000,
  },
  {
    id: 'timon_psico',
    name: 'Timon + Psicopedagogo/a',
    tagline: 'Con acompañamiento profesional',
    includes: [
      'Todo lo incluido en Timon',
      'Reunión con psicopedagogo/a para revisar el resultado juntos',
    ],
    basePrice: 210000,
  },
]

const MODALITIES: Modality[] = [
  { id: 'individual', name: 'Individual', size: '1 persona',     discountPct: 0,  highlight: false },
  { id: 'grupito',   name: 'Grupito',    size: '2 – 3 personas', discountPct: 10, highlight: false },
  { id: 'amigos',    name: 'Amigos',     size: '4 personas',     discountPct: 25, highlight: true  },
]

function formatPrice(n: number): string {
  return '$' + n.toLocaleString('es-AR')
}

function calcPrice(base: number, discountPct: number): number {
  return Math.round(base * (1 - discountPct / 100))
}

// ── Step label ────────────────────────────────────────────────────────────────

function StepLabel({ n, text }: { n: number; text: string }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-5 flex items-center gap-3" style={{ color: C.hueso }}>
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
        style={{ background: C.navy, color: C.creamElev }}
      >
        {n}
      </span>
      {text}
    </p>
  )
}

// ── Product card ──────────────────────────────────────────────────────────────

function ProductCard({ product, selected, onSelect }: {
  product: Product
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left rounded-2xl transition-all cursor-pointer"
      style={{
        border: `2px solid ${selected ? C.ocean : C.creamBorderStrong}`,
        background: selected ? 'rgba(30,91,160,0.04)' : C.creamElev,
        padding: '20px 24px',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display font-normal text-[1.15rem] tracking-[-0.02em]" style={{ color: C.navy }}>
            {product.name}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] mt-1" style={{ color: C.hueso }}>
            {product.tagline}
          </p>
        </div>
        <div
          className="shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all"
          style={{
            borderColor: selected ? C.ocean : C.creamBorderStrong,
            background: selected ? C.ocean : 'transparent',
          }}
        >
          {selected && <Check size={11} color="white" strokeWidth={3} />}
        </div>
      </div>

      <ul className="mt-4 flex flex-col gap-1.5">
        {product.includes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full mt-[7px] shrink-0" style={{ background: C.ocean }} />
            <span className="text-[13px] leading-snug" style={{ color: `${C.navy}cc` }}>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${selected ? 'rgba(30,91,160,0.2)' : C.creamBorder}` }}>
        <span className="font-display font-light text-[1.75rem] tracking-[-0.03em]" style={{ color: C.navy }}>
          {formatPrice(product.basePrice)}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] ml-2" style={{ color: C.hueso }}>
          individual
        </span>
      </div>
    </button>
  )
}

// ── Modality card ─────────────────────────────────────────────────────────────

function ModalityCard({ modality, basePrice }: { modality: Modality; basePrice: number }) {
  const price = calcPrice(basePrice, modality.discountPct)
  const isGroup = modality.discountPct > 0

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: modality.highlight ? C.ocean : C.creamElev,
        border: modality.highlight ? 'none' : `1px solid ${C.creamBorder}`,
        boxShadow: modality.highlight ? '0 16px 48px rgba(30,91,160,0.22)' : undefined,
      }}
    >
      {modality.highlight && (
        <div className="flex justify-center pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-1 rounded-full" style={{ background: C.terra, color: C.creamElev }}>
            Mejor valor
          </span>
        </div>
      )}

      <div className="px-6 pt-5 pb-2">
        <p className="font-display font-normal text-[1.2rem] tracking-[-0.02em] mb-0.5" style={{ color: modality.highlight ? C.creamElev : C.navy }}>
          {modality.name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: modality.highlight ? 'rgba(251,245,234,0.55)' : C.hueso }}>
          {modality.size}
        </p>
        <div className="flex items-baseline gap-1.5 mt-3">
          <span className="font-display font-light tracking-[-0.03em]" style={{ fontSize: '2rem', color: modality.highlight ? C.creamElev : C.navy }}>
            {formatPrice(price)}
          </span>
          {isGroup && (
            <span className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: modality.highlight ? 'rgba(251,245,234,0.6)' : C.hueso }}>
              c/u
            </span>
          )}
        </div>
        {modality.discountPct > 0 && (
          <span
            className="inline-block font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full mt-1.5"
            style={{
              background: modality.highlight ? 'rgba(255,255,255,0.15)' : 'rgba(30,91,160,0.1)',
              color: modality.highlight ? C.creamElev : C.ocean,
            }}
          >
            {modality.discountPct}% off
          </span>
        )}
      </div>

      <div className="flex-1" />

      <div className="px-6 pb-6 pt-3">
        <a
          href={PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`group w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium text-[14px] transition-all cursor-pointer ${
            modality.highlight
              ? 'bg-[var(--cream-elev)] text-[var(--ocean)] hover:bg-white'
              : 'bg-[var(--ocean)] text-[var(--cream-elev)] hover:bg-[var(--ocean-deep)]'
          }`}
        >
          Empezar
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export function PricingSection({ onBack: _onBack }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<ProductId | null>(null)
  const block = useInView<HTMLDivElement>()

  const currentProduct = PRODUCTS.find(p => p.id === selectedProduct) ?? null

  return (
    <div className="animate-fade-in bg-[var(--cream)]">
      <section
        className="relative overflow-hidden min-h-screen flex flex-col justify-center"
        style={{ marginTop: '-4rem', paddingTop: '4rem' }}
      >
        <div className="mesh-stage" aria-hidden>
          <div className="mesh-blob mesh-blob--ocean-a" />
          <div className="mesh-blob mesh-blob--terra" />
          <div className="mesh-blob mesh-blob--ocean-b" />
        </div>

        <div className="relative w-full px-5 sm:px-8 lg:px-12 xl:px-[5vw] 2xl:px-[6vw] py-16 sm:py-20 z-10">
          <div ref={block.ref} className={`reveal ${block.inView ? 'is-visible' : ''}`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--hueso)] mb-8 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--terra)]/60" />
              Planes y precios
            </p>
            <h1
              className="font-display font-light text-[var(--navy)] mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', lineHeight: 0.98, letterSpacing: '-0.04em' }}
            >
              El recorrido es 100% individual.{' '}
              <span className="text-[var(--ocean)] font-normal">
                El descuento es grupal.
              </span>
            </h1>

            {/* Step 1 — product */}
            <div className="mb-10">
              <StepLabel n={1} text="Elegí el producto" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px]">
                {PRODUCTS.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    selected={selectedProduct === product.id}
                    onSelect={() => setSelectedProduct(product.id)}
                  />
                ))}
              </div>
            </div>

            {/* Step 2 — modality (only after product selected) */}
            {currentProduct && (
              <div className="animate-fade-in">
                <StepLabel n={2} text="Elegí la modalidad" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[760px]">
                  {MODALITIES.map(modality => (
                    <ModalityCard
                      key={modality.id}
                      modality={modality}
                      basePrice={currentProduct.basePrice}
                    />
                  ))}
                </div>
                <p className="mt-5 text-[12px] leading-[1.55]" style={{ color: C.hueso, maxWidth: 520 }}>
                  En grupos, cada persona puede elegir un producto distinto. El descuento se aplica sobre el producto que cada uno eligió.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
