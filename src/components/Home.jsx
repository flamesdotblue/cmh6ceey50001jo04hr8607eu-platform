import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Play, Globe2, RefreshCw, Search, Trophy } from 'lucide-react';

export default function Home() {
  const [region, setRegion] = useState('NA');
  const [players, setPlayers] = useState(284312);
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const items = [
      { label: 'Download for PC', to: '/download' },
      { label: 'Patch 28.1 Notes', to: '/news' },
      { label: 'Season 28: Cosmic Drop', to: '/seasons' },
      { label: 'Esports Schedule', to: '/esports' },
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
                <Link to="/download" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-6 py-3 font-semibold hover:opacity-90"><Download className="h-4 w-4" /> Get the Game</Link>
                <Link to="/news" className="inline-flex items-center gap-2 rounded-md border border-black/20 px-6 py-3 font-semibold hover:bg-black/5"><Play className="h-4 w-4" /> Watch Trailer</Link>
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
                      <Link key={r.label} to={r.to} className="text-left rounded-md px-2 py-1 hover:bg-black/10">
                        {r.label}
                      </Link>
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
                  <div className="mt-3"><Link to="/modes" className="text-xs rounded-md bg-black text-white px-3 py-1.5 hover:opacity-90">Queue</Link></div>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-4">
                  <div className="text-xs text-black/60">Event</div>
                  <div className="mt-1 font-semibold">Bonus XP Weekend</div>
                  <div className="mt-3 text-xs text-black/60">Fri–Sun • +100% Missions</div>
                  <div className="mt-3"><Link to="/seasons" className="text-xs rounded-md border border-black/20 px-3 py-1.5 hover:bg-black/5">View</Link></div>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-4">
                  <div className="text-xs text-black/60">Esports</div>
                  <div className="mt-1 font-semibold">PMGC Grand Finals</div>
                  <div className="mt-3 text-xs text-black/60">Global • Nov 24</div>
                  <div className="mt-3"><Link to="/esports" className="text-xs rounded-md border border-black/20 px-3 py-1.5 hover:bg-black/5">Open Hub</Link></div>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-4">
                  <div className="text-xs text-black/60">Start</div>
                  <div className="mt-1 font-semibold">Download Free</div>
                  <div className="mt-3 text-xs text-black/60">PC • Console • Mobile</div>
                  <div className="mt-3"><Link to="/download" className="text-xs rounded-md bg-black text-white px-3 py-1.5 hover:opacity-90">Download</Link></div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-black/10 bg-white p-4">
                <div className="text-xs text-black/60">Quick Access</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <Link to="/status" className="rounded-md border border-black/15 px-2 py-1 hover:bg-black/5">Service Status</Link>
                  <Link to="/security" className="rounded-md border border-black/15 px-2 py-1 hover:bg-black/5">Security</Link>
                  <Link to="/terms" className="rounded-md border border-black/15 px-2 py-1 hover:bg-black/5">Terms</Link>
                  <Link to="/privacy" className="rounded-md border border-black/15 px-2 py-1 hover:bg-black/5">Privacy</Link>
                  <Link to="/esports" className="rounded-md bg-black text-white px-2 py-1 inline-flex items-center gap-1"><Trophy className="h-3.5 w-3.5"/> Esports</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
