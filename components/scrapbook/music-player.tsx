'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, X } from 'lucide-react'

export function MusicPlayer() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-60 transition-all duration-300 hover:opacity-100">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="player"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="relative rounded-xl border-2 border-card bg-card p-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close music player"
              className="absolute -right-2 -top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-berry text-primary-foreground shadow-md"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <iframe
              title="Playlist"
              src="https://open.spotify.com/embed/playlist/3XSB1TfWNJnyy2njwQsMNv?utm_source=generator"
              width="300"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            />
          </motion.div>
        ) : (
          <motion.button
            key="fab"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setOpen(true)}
            aria-label="Open music player"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-card bg-berry text-primary-foreground shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
          >
            <Music className="h-6 w-6 animate-wiggle" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
