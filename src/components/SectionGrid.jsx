import React from 'react';
import { ShieldCheck, Zap, Radar, Cpu, Info } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Anti-Cheat+', desc: 'Machine-learning detection with transparent strikes.' },
  { icon: Zap, title: 'Fluid Movement', desc: 'Slide, mantle, and boost through reactive cover.' },
  { icon: Radar, title: 'Dynamic Zones', desc: 'Shifting circles keep every endgame fresh.' },
  { icon: Cpu, title: 'Smart Matchmaking', desc: 'Latency-aware lobbies and squad balancing.' },
];

const cards = [
  { title: 'Season 28: Cosmic Drop', desc: 'Grind your pass and unlock solid cosmetics.', action: '#/seasons' },
  { title: 'Esports Hub', desc: 'Follow events, standings, and teams.', action: '#/esports' },
  { title: 'Community Events', desc: 'Weekly open cups and creator showmatches.', action: '#/community' },
];

export default function SectionGrid() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why PUBG // Solid</h2>
            <p className="mt-2 text-white/60 max-w-2xl">Classic battle royale energy with no clutter. Crisp visuals, fluid movement, and tactical depth.</p>
          </div>
          <a href="#/news" className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition inline-flex items-center gap-2"><Info className="h-4 w-4"/> Latest News</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="relative rounded-xl border border-white/10 bg-white/5 p-5">
              <f.icon className="h-5 w-5 text-white" />
              <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-xl font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
              <div className="mt-4"><a href={c.action} className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-semibold hover:brightness-95">Open</a></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
