import React, { useMemo, useState } from 'react';
import { Users, MapPin, Gamepad2, Search, Plus, Sword, Calendar } from 'lucide-react';

function Pill({ active, children, onClick }) {
  return (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-md text-xs font-medium border ${active ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>
      {children}
    </button>
  );
}

function SquadCard({ name, region, platform, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="mt-0.5 text-xs text-white/60 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" /> {region}
            <span className="opacity-40">•</span>
            <Gamepad2 className="h-3.5 w-3.5" /> {platform}
          </div>
        </div>
        <button className="rounded-md bg-white text-black px-3 py-1.5 text-xs font-semibold hover:brightness-95">Join</button>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/70">
        <span className="rounded-md border border-white/15 px-2 py-1">Scrims</span>
        <span className="rounded-md border border-white/15 px-2 py-1">Competitive</span>
        <span className="rounded-md border border-white/15 px-2 py-1">Casual</span>
      </div>
    </div>
  );
}

function EventCard({ title, date, region, type }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="text-xs text-white/60 flex items-center gap-2"><Calendar className="h-3.5 w-3.5"/> {date} • {region}</div>
      <div className="mt-1.5 text-lg font-semibold">{title}</div>
      <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
        <span className="rounded-md border border-white/15 px-2 py-1">{type}</span>
        <span className="rounded-md border border-white/15 px-2 py-1">Prizing</span>
        <span className="rounded-md border border-white/15 px-2 py-1">Open Signup</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="rounded-md bg-white text-black px-3 py-1.5 text-xs font-semibold hover:brightness-95">Register</button>
        <button className="rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10">Details</button>
      </div>
    </div>
  );
}

function CreatorCard({ name, platform, followers }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="text-lg font-semibold">{name}</div>
      <div className="mt-1 text-xs text-white/60">{platform} • {followers.toLocaleString()} followers</div>
      <div className="mt-4 flex gap-2">
        <button className="rounded-md bg-white text-black px-3 py-1.5 text-xs font-semibold hover:brightness-95">Follow</button>
        <button className="rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10">Watch</button>
      </div>
    </div>
  );
}

export default function CommunityPage() {
  const [tab, setTab] = useState('squads');
  const [region, setRegion] = useState('All');
  const [platform, setPlatform] = useState('All');
  const [q, setQ] = useState('');

  const squads = useMemo(() => [
    { name: 'Nebula Raiders', region: 'EU', platform: 'PC', desc: 'Competitive-friendly, nightly scrims.' },
    { name: 'Desert Fox', region: 'NA', platform: 'Console', desc: 'Casual squad with weekly events.' },
    { name: 'Polar Eclipse', region: 'APAC', platform: 'PC', desc: 'High MMR ranked grinders.' },
    { name: 'Emerald Dawn', region: 'SA', platform: 'Mobile', desc: 'Mobile-only tournaments and duos.' },
  ].filter(s => (region==='All'||s.region===region) && (platform==='All'||s.platform===platform) && (!q || s.name.toLowerCase().includes(q.toLowerCase()))), [region, platform, q]);

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Community</h1>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Join squads, compete in events, and follow creators. Find your crew and start dropping in.</p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Pill active={tab==='squads'} onClick={() => setTab('squads')}>Squads</Pill>
          <Pill active={tab==='events'} onClick={() => setTab('events')}>Events</Pill>
          <Pill active={tab==='creators'} onClick={() => setTab('creators')}>Creators</Pill>
          <div className="ml-auto flex items-center gap-2 text-sm">
            <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2">
              <Search className="h-4 w-4 text-white/60" />
              <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search squads, events, creators" className="bg-transparent outline-none placeholder:text-white/50 text-sm" />
            </div>
          </div>
        </div>

        {tab==='squads' && (
          <>
            <div className="mt-6 flex items-center gap-2 text-xs">
              <span>Region</span>
              {['All','NA','EU','APAC','SA'].map(r=> (
                <Pill key={r} active={region===r} onClick={()=>setRegion(r)}>{r}</Pill>
              ))}
              <span className="ml-3">Platform</span>
              {['All','PC','Console','Mobile'].map(p=> (
                <Pill key={p} active={platform===p} onClick={()=>setPlatform(p)}>{p}</Pill>
              ))}
              <button className="ml-auto inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"><Plus className="h-3.5 w-3.5"/> Create Squad</button>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {squads.map((s) => (
                <SquadCard key={s.name} {...s} />
              ))}
            </div>
          </>
        )}

        {tab==='events' && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <EventCard title="Community Cup #12" date="Fridays" region="Open" type="Weekly" />
            <EventCard title="Creators Showdown" date="Monthly" region="Online" type="Showmatch" />
            <EventCard title="Regional Clash" date="Dec 10" region="EMEA" type="Qualifier" />
            <EventCard title="Holiday Scrims" date="Dec 22" region="NA" type="Scrims" />
            <EventCard title="Mobile Mayhem" date="Jan 3" region="APAC" type="Mobile" />
            <EventCard title="Console Circuit" date="Jan 12" region="Americas" type="Console" />
          </div>
        )}

        {tab==='creators' && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CreatorCard name="NovaAim" platform="Twitch" followers={243000} />
            <CreatorCard name="PixelPlays" platform="YouTube" followers={512000} />
            <CreatorCard name="MobileZed" platform="TikTok" followers={128000} />
            <CreatorCard name="ClutchKat" platform="Twitch" followers={98000} />
            <CreatorCard name="Boombox" platform="YouTube" followers={302000} />
            <CreatorCard name="RiftRunner" platform="Kick" followers={45000} />
          </div>
        )}
      </div>
    </section>
  );
}
