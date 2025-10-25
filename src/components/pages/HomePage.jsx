import React from 'react';
import Hero from '../Hero';
import ModesShowcase from '../ModesShowcase';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Radar, Cpu } from 'lucide-react';
import { navigateTo } from '../Router';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-black/40 p-5 overflow-hidden group">
      <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30" />
      <div className="relative">
        <Icon className="h-5 w-5 text-white/80" />
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#04070a] to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,212,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
          <div className="p-8 sm:p-12 grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to Drop In?</h3>
              <p className="mt-2 text-white/70">Download the game free on your platform and claim your Season 28 starter rewards. Neon-themed skins and an animated banner await.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => navigateTo('download')} className="rounded-full bg-white text-black text-sm font-semibold px-4 py-2.5 hover:brightness-110">Get the Game</button>
                <button onClick={() => navigateTo('seasons')} className="rounded-full border border-white/20 text-white text-sm font-semibold px-4 py-2.5 hover:bg-white/10">View Season</button>
              </div>
            </div>
            <div className="relative h-48 sm:h-56 rounded-2xl border border-white/10 bg-[linear-gradient(120deg,rgba(217,70,239,0.25),rgba(34,211,238,0.25),rgba(16,185,129,0.25))]">
              <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(100%_80%_at_20%_0%,rgba(255,0,212,0.35),transparent_40%),radial-gradient(100%_80%_at_80%_100%,rgba(0,255,224,0.35),transparent_40%)]" />
              <div className="absolute inset-0 grid place-items-center text-center p-6">
                <div>
                  <div className="text-sm text-white/70">Season 28: Cosmic Drop</div>
                  <div className="mt-1 text-3xl font-extrabold tracking-tight">Bonus XP Weekend</div>
                  <div className="mt-2 text-white/70 text-sm">Double XP on missions and ranked from Fri–Sun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative py-20 bg-gradient-to-b from-black via-black to-[#04070a]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,224,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why PUBG // Neo</h2>
              <p className="mt-2 text-white/60 max-w-2xl">Classic battle royale energy reimagined for a neon galaxy. High-fidelity gunplay, reactive arenas, and seamless squads.</p>
            </div>
            <button onClick={() => navigateTo('news')} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition">Latest News</button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Feature icon={ShieldCheck} title="Anti-Cheat+" desc="Active machine-learning detection with live strike system." />
            <Feature icon={Zap} title="Fluid Movement" desc="Slide, mantle, and boost through reactive cover and jump pads." />
            <Feature icon={Radar} title="Dynamic Zones" desc="Shifting safe zones create evolving tactical layers every match." />
            <Feature icon={Cpu} title="Smart Matchmaking" desc="Latency-aware lobbies and role-based squad balancing." />
          </div>
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <ModesShowcase />
      </motion.div>

      <CTASection />
    </>
  );
}
