import React, { useMemo, useState } from 'react';
import { Download, Play, Globe2, RefreshCw, Search } from 'lucide-react';

export default function SectionHero() {
  const [region, setRegion] = useState('NA');
  const [players, setPlayers] = useState(284312);
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const items = [
      { label: 'Download for PC', href: '#/download' },
      { label: 'Patch 28.1 Notes', href: '#/news' },
      { label: 'Season 28: Cosmic Drop', href: '#/seasons' },
      { label: 'Esports Schedule', href: '#/esports' },
    ];
    if (!q) return items;
    return items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  const refreshPlayers = () => {
    const delta = Math.floor(Math.random() * 5000) - 2500;
    setPlayers((p) => Math.max(100000, p + delta));
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 mb-10 rounded-2xl border border-white/10 bg-white text-black overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2 rounded-md bg-black text-white px-2 py-1 text-xs">Live Now • Season 28</div>
              <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight">Drop In. Adapt Fast. Outlast Everyone.</h1>
              <p className="mt-4 text-black/70 text-base sm:text-lg">Pure battle royale energy with crisp, solid design. Squad up, take the fight, and claim the final circle.</p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a href="#/download" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-6 py-3 font-semibold hover:opacity-90"><Download className="h-4 w-4" /> Get the Game</a>
                <a href="#/news" className="inline-flex items-center gap-2 rounded-md border border-black/20 px-6 py-3 font-semibold hover:bg-black/5"><Play className="h-4 w-4" /> Watch Trailer</a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <div className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 bg-black/5">
                  <Globe2 className="h-4 w-4" />
                  <select value={region} onChange={(e) => setRegion(e.target.value)} className="bg-transparent outline-none">
                    <option value="NA">NA</option>
                    <option value="EU">EU</option>
                    <option value="APAC">APAC</option>
                    <option value="SA">SA</option>
                  </select>
                </div>
                <div className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 bg-black/5">
                  <span className="font-semibold">{players.toLocaleString()}</span>
                  <span className="text-black/60">players online</span>
                  <button onClick={refreshPlayers} className="ml-1 inline-flex items-center rounded px-2 py-1 hover:bg-black/10" aria-label="Refresh players">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 rounded-md border border-black/15 bg-black/5 px-3 py-2">
                  <Search className="h-4 w-4 text-black/60" />
                  <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search patches, modes, download..." className="w-full bg-transparent outline-none placeholder:text-black/50" />
                </div>
                {!!results.length && (
                  <div className="mt-2 grid gap-1">
                    {results.map((r) => (
                      <a key={r.label} href={r.href} className="text-left rounded-md px-2 py-1 hover:bg-black/10">
                        {r.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-black/10 bg-gray-50">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-black/10 bg-white p-4">
                  <div className="text-xs text-black/60">Mode</div>
                  <div className="mt-1 font-semibold">Ranked Eclipse</div>
                  <div className="mt-3 text-xs text-black/60">MMR • Seasonal • Leaderboards</div>
                  <div className="mt-3"><a href="#/modes" className="text-xs rounded-md bg-black text-white px-3 py-1.5 hover:opacity-90">Queue</a></div>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-4">
                  <div className="text-xs text-black/60">Event</div>
                  <div className="mt-1 font-semibold">Bonus XP Weekend</div>
                  <div className="mt-3 text-xs text-black/60">Fri–Sun • +100% Missions</div>
                  <div className="mt-3"><a href="#/seasons" className="text-xs rounded-md border border-black/20 px-3 py-1.5 hover:bg-black/5">View</a></div>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-4">
                  <div className="text-xs text-black/60">Esports</div>
                  <div className="mt-1 font-semibold">PMGC Grand Finals</div>
                  <div className="mt-3 text-xs text-black/60">Global • Nov 24</div>
                  <div className="mt-3"><a href="#/esports" className="text-xs rounded-md border border-black/20 px-3 py-1.5 hover:bg-black/5">Open Hub</a></div>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-4">
                  <div className="text-xs text-black/60">Start</div>
                  <div className="mt-1 font-semibold">Download Free</div>
                  <div className="mt-3 text-xs text-black/60">PC • Console • Mobile</div>
                  <div className="mt-3"><a href="#/download" className="text-xs rounded-md bg-black text-white px-3 py-1.5 hover:opacity-90">Download</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
