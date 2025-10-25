import React from 'react';

const Post = ({ title, tag, excerpt }) => (
  <article className="rounded-2xl border border-white/10 p-6 bg-black/40">
    <div className="text-xs text-white/60">{tag}</div>
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{excerpt}</p>
    <div className="mt-4 text-xs text-white/60 underline decoration-dotted">Read more</div>
  </article>
);

export default function NewsPage() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,212,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">News</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Patch notes, events, and announcements. Stay updated with weekly posts.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Post title="Patch 28.1 Balance Tweaks" tag="PATCH NOTES" excerpt="AR recoil tuned, zone pacing adjusted, and loot economics refreshed." />
          <Post title="Nebula Erangel Variant" tag="MAP UPDATE" excerpt="Explore a glowing reimagining with reactive cover and neon POIs." />
          <Post title="Creators Program" tag="COMMUNITY" excerpt="Apply to join, earn drops for viewers, and access early features." />
          <Post title="Esports Roadmap" tag="COMPETITIVE" excerpt="Season structure, point system, and qualification details for 2025." />
          <Post title="New Anti-Cheat Module" tag="SECURITY" excerpt="Live detection, strike transparency, and real-time appeals." />
          <Post title="Double XP Weekend" tag="EVENT" excerpt="Grind your pass with bonus XP active this weekend only." />
        </div>
      </div>
    </section>
  );
}
