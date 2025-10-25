import React, { useMemo, useState } from 'react';
import { Calendar, Clock, Flag, Trophy } from 'lucide-react';

function Tab({ active, onClick, children }) {
  return (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-md text-xs font-medium border ${active ? 'bg-white text-black border-white' : 'border-white/15 text-white/80 hover:bg-white/10'}`}>
      {children}
    </button>
  );
}

function EventRow({ name, date, region }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-white/10 p-4 bg-white/5">
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-white/60 flex items-center gap-2"><Calendar className="h-3.5 w-3.5"/> {date} • {region}</div>
      </div>
      <div className="flex gap-2 text-xs">
        <button className="rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/10">Standings</button>
        <button className="rounded-md bg-white text-black px-3 py-1.5 font-semibold hover:brightness-95">Watch</button>
      </div>
    </div>
  );
}

function StandingsTable({ region }) {
  const data = useMemo(() => ({
    Global: [
      { team: 'Orion Esports', pts: 98 },
      { team: 'Valkyrie', pts: 91 },
      { team: 'StormUnit', pts: 87 },
      { team: 'Nebula', pts: 81 },
    ],
    EMEA: [
      { team: 'Valkyrie', pts: 102 },
      { team: 'PolarWave', pts: 96 },
      { team: 'Crimson', pts: 90 },
      { team: 'Azure', pts: 84 },
    ],
    APAC: [
      { team: 'Nebula', pts: 104 },
      { team: 'Lotus', pts: 97 },
      { team: 'TigerClaw', pts: 88 },
      { team: 'Sakura', pts: 83 },
    ],
    Americas: [
      { team: 'Orion Esports', pts: 101 },
      { team: 'StormUnit', pts: 95 },
      { team: 'DesertFox', pts: 89 },
      { team: 'Rift', pts: 82 },
    ],
  }), []);
  const rows = data[region] || data.Global;
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <div className="grid grid-cols-12 bg-white/10 px-4 py-2 text-xs text-white/80">
        <div className="col-span-8">Team</div>
        <div className="col-span-4 text-right">Points</div>
      </div>
      {rows.map((r, i) => (
        <div key={r.team} className="grid grid-cols-12 px-4 py-3 border-t border-white/10 bg-white/5">
          <div className="col-span-8 flex items-center gap-2"><span className="text-white/50 text-xs w-5">{i+1}</span> {r.team}</div>
          <div className="col-span-4 text-right font-semibold">{r.pts}</div>
        </div>
      ))}
    </div>
  );
}

function ScheduleList() {
  const items = [
    { t: 'PMGC Grand Finals', time: 'Nov 24, 18:00 UTC', reg: 'Global' },
    { t: 'EMEA Super Cup', time: 'Dec 2, 17:00 UTC', reg: 'EMEA' },
    { t: 'Americas Clash', time: 'Dec 10, 20:00 UTC', reg: 'Americas' },
    { t: 'Asia Masters', time: 'Dec 17, 12:00 UTC', reg: 'APAC' },
  ];
  return (
    <div className="grid gap-3">
      {items.map((it)=> (
        <div key={it.t} className="flex items-center justify-between rounded-md border border-white/10 p-4 bg-white/5">
          <div>
            <div className="font-semibold">{it.t}</div>
            <div className="text-xs text-white/60 flex items-center gap-2"><Clock className="h-3.5 w-3.5"/> {it.time} • {it.reg}</div>
          </div>
          <button className="rounded-md border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10">Reminder</button>
        </div>
      ))}
    </div>
  );
}

export default function EsportsPage() {
  const [tab, setTab] = useState('events');
  const [region, setRegion] = useState('Global');

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Trophy className="h-5 w-5" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Esports</h1>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Events, standings, and schedules across regions. Follow the action live.</p>

        <div className="mt-6 flex items-center gap-2">
          <Tab active={tab==='events'} onClick={()=>setTab('events')}>Events</Tab>
          <Tab active={tab==='standings'} onClick={()=>setTab('standings')}>Standings</Tab>
          <Tab active={tab==='schedule'} onClick={()=>setTab('schedule')}>Schedule</Tab>
          <div className="ml-auto flex items-center gap-2 text-xs">
            <Flag className="h-3.5 w-3.5 text-white/60" />
            {['Global','EMEA','Americas','APAC'].map(r => (
              <Tab key={r} active={region===r} onClick={()=>setRegion(r)}>{r}</Tab>
            ))}
          </div>
        </div>

        {tab==='events' && (
          <div className="mt-8 grid gap-4">
            <EventRow name="PMGC Grand Finals" date="Nov 24" region="Global" />
            <EventRow name="EMEA Super Cup" date="Dec 2" region="EMEA" />
            <EventRow name="Americas Clash" date="Dec 10" region="Americas" />
            <EventRow name="Asia Masters" date="Dec 17" region="APAC" />
          </div>
        )}

        {tab==='standings' && (
          <div className="mt-8">
            <StandingsTable region={region} />
          </div>
        )}

        {tab==='schedule' && (
          <div className="mt-8">
            <ScheduleList />
          </div>
        )}
      </div>
    </section>
  );
}
