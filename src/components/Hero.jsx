import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Play, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navigateTo } from './Router';

function TrailerModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/15" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white">
          <X className="h-5 w-5" />
        </button>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full h-[92vh] pt-0 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,212,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(0,255,224,0.18),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(0,255,128,0.12),transparent_40%)]" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-emerald-300" />
              Now Live: Cosmic Drop — Season 28
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Battle Royale, Reimagined for a Futuristic Galaxy
            </h1>
            <p className="mt-4 text-white/70 text-base sm:text-lg">
              Squad up, drop in, and survive the cosmic frontier. High-fidelity action meets neon futurism with a trippy, immersive universe.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button whileTap={{ scale: 0.97 }} onClick={() => navigateTo('download')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(56,189,248,0.45)] hover:brightness-110 transition-all">
                <Rocket className="h-4 w-4" /> Play Free
              </motion.button>
              <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                <Play className="h-4 w-4" /> Watch Trailer
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <TrailerModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
