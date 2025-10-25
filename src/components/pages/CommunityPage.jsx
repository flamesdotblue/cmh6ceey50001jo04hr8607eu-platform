import React from 'react';

export default function CommunityPage() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,224,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Community</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Join squads, find events, and share highlights. Our Discord and forums host weekly challenges and giveaways.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-black/40">
              <div className="text-sm text-white/60">Featured Squad #{i + 1}</div>
              <div className="mt-1 text-lg font-semibold">Nebula Raiders</div>
              <p className="mt-2 text-sm text-white/70">Competitive-friendly, EU/NA, nightly scrims.</p>
              <div className="mt-4 flex gap-2 text-xs text-white/70">
                <span className="rounded-full border border-white/15 px-2 py-1">Join</span>
                <span className="rounded-full border border-white/15 px-2 py-1">View</span>
                <span className="rounded-full border border-white/15 px-2 py-1">DM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
