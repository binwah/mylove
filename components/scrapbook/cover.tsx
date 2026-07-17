'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Sticker } from './stickers'

export function Cover({ name = 'girlhood' }: { name?: string }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      {/* The notebook cover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full max-w-2xl"
      >
        {/* spiral binding */}
        <div className="absolute -top-4 left-0 right-0 z-20 flex justify-around px-8">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="h-8 w-2.5 rounded-full bg-foreground/70 shadow-inner"
            />
          ))}
        </div>

        <div className="paper-grid relative rounded-[10px] border-4 border-card bg-card/70 px-6 py-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:px-16 md:py-28">
          {/* corner stickers */}
          <Sticker name="star" rotate={-15} className="left-4 top-4 h-10 w-10 text-mustard md:h-14 md:w-14" float />
          <Sticker name="heart" rotate={12} className="right-5 top-8 h-9 w-9 text-berry md:h-12 md:w-12" float />
          <Sticker name="flower" rotate={0} className="bottom-8 left-8 h-10 w-10 text-bubblegum" float />
          <Sticker name="sparkles" rotate={0} className="right-8 bottom-10 h-10 w-10 text-sky" float />
          <Sticker name="cloud" rotate={-6} className="left-1/2 top-6 h-8 w-8 -translate-x-1/2 text-sky/80" />

          <p className="text-center font-[family-name:var(--font-typewriter)] text-xs uppercase tracking-[0.4em] text-foreground/60">
            surat cinta kecil untuk
          </p>

          <h1 className="mt-4 text-balance text-center font-[family-name:var(--font-gochi)] text-5xl leading-none text-berry drop-shadow-[2px_3px_0_rgba(0,0,0,0.12)] md:text-8xl">
            {name}
          </h1>

          <div className="mt-6 flex items-center justify-center gap-2">
            <Sticker name="heart" className="relative h-5 w-5 text-berry" style={{ position: 'relative' }} />
            <span className="font-[family-name:var(--font-hand)] text-2xl text-foreground/70">
              sayangku, selamanya
            </span>
            <Sticker name="heart" className="relative h-5 w-5 text-berry" style={{ position: 'relative' }} />
          </div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 1.6 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
      >
        <span className="font-[family-name:var(--font-hand)] text-xl text-foreground/70">
          buka pelan-pelan ya
        </span>
        <ChevronDown className="mx-auto h-7 w-7 text-berry" />
      </motion.div>
    </section>
  )
}
