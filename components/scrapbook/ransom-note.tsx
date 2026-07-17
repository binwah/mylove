'use client'

import { motion } from 'framer-motion'

const swatches = [
  'bg-berry text-primary-foreground',
  'bg-mustard text-foreground',
  'bg-sky text-foreground',
  'bg-bubblegum text-foreground',
  'bg-sage text-foreground',
  'bg-card text-foreground',
]

const rotations = [-6, 4, -3, 6, -5, 3, -4, 5, -2]

/** Ransom-note lettering: every glyph gets its own color + rotation. */
export function RansomNote({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-1 ${className}`}>
      {text.split('').map((char, i) => {
        if (char === ' ') return <span key={i} className="w-3 md:w-5" />
        return (
          <motion.span
            key={i}
            initial={{ y: 24, opacity: 0, rotate: 0 }}
            whileInView={{ y: 0, opacity: 1, rotate: rotations[i % rotations.length] }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, type: 'spring', stiffness: 220, damping: 14 }}
            whileHover={{ rotate: 0, scale: 1.15 }}
            className={`inline-flex h-11 w-9 items-center justify-center rounded-[3px] font-[family-name:var(--font-typewriter)] text-2xl font-bold shadow-[1px_2px_3px_rgba(0,0,0,0.2)] md:h-16 md:w-14 md:text-4xl ${
              swatches[i % swatches.length]
            }`}
          >
            {char}
          </motion.span>
        )
      })}
    </div>
  )
}
