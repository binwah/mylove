'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/** A polaroid-style photo with a white border, caption, and masking tape. */
export function Polaroid({
  src,
  alt,
  caption,
  rotate = 0,
  className = '',
  tape = 'tape',
  tapePosition = 'top',
}: {
  src: string
  alt: string
  caption?: string
  rotate?: number
  className?: string
  tape?: 'tape' | 'tape-pink' | 'tape-sky' | 'none'
  tapePosition?: 'top' | 'corners'
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, rotate: rotate * 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 30 }}
      className={`relative w-56 shrink-0 bg-card p-3 pb-14 shadow-[0_10px_25px_rgba(0,0,0,0.22)] md:w-64 ${className}`}
    >
      {tape !== 'none' && tapePosition === 'top' && (
        <span
          className={`tape ${tape} left-1/2 -top-3 -translate-x-1/2 -rotate-3`}
          aria-hidden="true"
        />
      )}
      {tape !== 'none' && tapePosition === 'corners' && (
        <>
          <span className={`tape ${tape} -left-4 -top-3 !w-16 -rotate-45`} aria-hidden="true" />
          <span className={`tape ${tape} -right-4 -top-3 !w-16 rotate-45`} aria-hidden="true" />
        </>
      )}
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          sizes="(max-width: 768px) 60vw, 300px"
          className="object-cover contrast-105 saturate-[0.92] sepia-[0.12]"
        />
      </div>
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-3 px-2 text-center font-[family-name:var(--font-hand)] text-xl leading-none text-foreground">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}
