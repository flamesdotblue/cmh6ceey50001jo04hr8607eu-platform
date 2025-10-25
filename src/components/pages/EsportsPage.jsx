import React from 'react';

const EventCard = ({ name, date, region }) => (
  <div className="rounded-2xl border border-white/10 p-5 bg-black/40">
    <div className="text-sm text-white/60">{region} • {date}</div>
    <div className="mt-1 text-lg font-semibold">{name}</div>
    <div className="mt-4 flex gap-2 text-xs text-white/70">
      <span className="rounded-full border border-white/15 px-2 py-1">Standings</span>
      <span className="rounded-full border border-white/15 px-2 py-1">Schedule</span>
      <span className="rounded-full border border-white/15 px-2 py-1">Watch</span>
    </div>
  </div>
);

export default function EsportsPage() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,212,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Esports</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Follow tournaments, team standings, and live broadcasts. Catch highlights and weekly recaps across regions.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <EventCard name="PMGC Grand Finals" date="Nov 24" region="Global" />
          <EventCard name="EMEA Super Cup" date="Dec 2" region="EMEA" />
          <EventCard name="Americas Clash" date="Dec 10" region="Americas" />
          <EventCard name="Asia Masters" date="Dec 17" region="APAC" />
          <EventCard name="Community Cup #12" date="Every Fri" region="Open" />
          <EventCard name="Creators Showdown" date="Monthly" region="Online" />
        </div>
      </div>
    </section>
  );
}
