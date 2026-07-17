'use client'

import { motion } from 'framer-motion'
import {
  Star,
  Heart,
  Sparkles,
  Flower2,
  Sun,
  Cloud,
  MapPin,
  type LucideIcon,
} from 'lucide-react'
import type { CSSProperties } from 'react'

type StickerProps = {
  className?: string
  style?: CSSProperties
  rotate?: number
  float?: boolean
}

const icons: Record<string, LucideIcon> = {
  star: Star,
  heart: Heart,
  sparkles: Sparkles,
  flower: Flower2,
  sun: Sun,
  cloud: Cloud,
  pin: MapPin,
}

/** A single decorative sticker/vector icon. */
export function Sticker({
  name,
  className = '',
  style,
  rotate = 0,
  float = false,
}: StickerProps & { name: keyof typeof icons }) {
  const Icon = icons[name]
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none drop-shadow-sm ${
        float ? 'animate-float' : ''
      } ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      <Icon className="h-full w-full" strokeWidth={2.5} />
    </span>
  )
}

/** A round enamel-pin style badge with text. */
export function PinBadge({
  children,
  className = '',
  rotate = -6,
}: {
  children: React.ReactNode
  className?: string
  rotate?: number
}) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: rotate - 20 }}
      whileInView={{ scale: 1, rotate }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 180, damping: 12 }}
      whileHover={{ scale: 1.08, rotate: 0 }}
      className={`inline-flex items-center justify-center rounded-full border-4 border-card px-5 py-3 text-center font-[family-name:var(--font-hand)] text-xl font-bold shadow-[0_4px_0_rgba(0,0,0,0.15)] ${className}`}
    >
      {children}
    </motion.div>
  )
}
