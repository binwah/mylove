'use client'

import { motion } from 'framer-motion'

/** A torn-paper sweet note, pinned with masking tape. */
export function NoteCard({
  children,
  rotate = 0,
  color = 'bg-card',
  torn = true,
  className = '',
  tape = 'tape',
}: {
  children: React.ReactNode
  rotate?: number
  color?: string
  torn?: boolean
  className?: string
  tape?: 'tape' | 'tape-pink' | 'tape-sky' | 'none'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 130, damping: 15 }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      className={`relative ${color} p-6 shadow-[0_8px_20px_rgba(0,0,0,0.16)] ${
        torn ? 'torn-edge' : 'rounded-sm'
      } ${className}`}
    >
      {tape !== 'none' && (
        <span
          className={`tape ${tape} left-6 -top-3 -rotate-6`}
          aria-hidden="true"
        />
      )}
      <div className="font-[family-name:var(--font-hand)] text-2xl leading-snug text-foreground">
        {children}
      </div>
    </motion.div>
  )
}
