import React, { useMemo, useState } from 'react';
import { Check, Target, Trophy, ListChecks } from 'lucide-react';

function ProgressBar({ value }) {
  return (
    <div className="w-full h-3 rounded-md bg-white/10 overflow-hidden">
      <div className="h-full bg-white" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

function Reward({ name, tier, owned }) {
  return (
    <div className={`rounded-xl border ${owned ? 'border-white' : 'border-white/10'} p-4 bg-white/5`}> 
      <div className="text-xs text-white/60">Tier {tier}</div>
      <div className="mt-1 font-semibold">{name}</div>
      {owned && <div className="mt-2 inline-flex items-center gap-1 text-xs text-emerald-300"><Check className="h-3.5 w-3.5"/> Owned</div>}
    </div>
  );
}

function MissionItem({ title, xp, done, onToggle }) {
  return (
    <button onClick={onToggle} className={`flex items-center justify-between rounded-md border p-4 text-left ${done ? 'border-white bg-white text-black' : 'border-white/10 bg-white/5 text-white'}`}>
      <div>
        <div className="font-semibold">{title}</div>
        <div className={`text-xs ${done ? 'text-black/70' : 'text-white/60'}`}>+{xp} XP</div>
      </div>
      <div className={`text-xs font-semibold ${done ? 'text-black/80' : 'text-white/80'}`}>{done ? 'Completed' : 'Mark Done'}</div>
    </button>
  );
}

export default function SeasonsPage() {
  const [xp, setXp] = useState(4200);
  const level = Math.min(100, Math.floor(xp / 100));
  const progress = (xp % 100);
  const [missions, setMissions] = useState([
    { title: 'Win a match in Squad Royale', xp: 300, done: false },
    { title: 'Deal 1000 damage in any mode', xp: 200, done: true },
    { title: 'Revive teammates 5 times', xp: 150, done: false },
    { title: 'Loot 3 supply drops', xp: 250, done: false },
  ]);

  const rewards = useMemo(()=>[
    { name: 'Reactive AR Skin', tier: 5 },
    { name: 'Galaxy Wrap', tier: 10 },
    { name: 'Animated Banner', tier: 15 },
    { name: '1,000 Credits', tier: 20 },
    { name: 'Legendary Emote', tier: 25 },
    { name: 'Nebula Parachute', tier: 30 },
    { name: 'Kill Tracker Charm', tier: 35 },
    { name: 'Title: Eclipse', tier: 40 },
  ], []);

  const toggleMission = (i) => {
    setMissions(prev => prev.map((m, idx)=> idx===i ? { ...m, done: !m.done } : m));
    const delta = missions[i].done ? -missions[i].xp : missions[i].xp;
    setXp(x => Math.max(0, x + delta));
  };

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Target className="h-5 w-5" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Season 28: Cosmic Drop</h1>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl">Progress your pass, complete missions, and unlock solid cosmetics. Earn seasonal ranked rewards for top performance.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5 lg:col-span-2">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs text-white/60">Level</div>
                <div className="text-3xl font-extrabold">{level}</div>
              </div>
              <div className="text-sm text-white/70">{xp.toLocaleString()} XP</div>
            </div>
            <div className="mt-3">
              <ProgressBar value={progress} />
              <div className="mt-1 text-xs text-white/60">{progress}% to next level</div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {rewards.map((r) => (
                <Reward key={r.tier} name={r.name} tier={r.tier} owned={level >= r.tier} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="flex items-center gap-2 font-semibold"><ListChecks className="h-4 w-4"/> Missions</div>
            <div className="mt-4 grid gap-3">
              {missions.map((m, i) => (
                <MissionItem key={m.title} {...m} onToggle={() => toggleMission(i)} />
              ))}
            </div>
            <div className="mt-4 text-xs text-white/60">Tip: streak bonuses grant extra XP on consecutive daily completions.</div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="flex items-center gap-2 font-semibold"><Trophy className="h-4 w-4"/> Ranked Rewards</div>
          <p className="mt-2 text-sm text-white/70">Climb divisions for end-season cosmetics and titles. Top 1% unlock animated frames and an exclusive badge.</p>
        </div>
      </div>
    </section>
  );
}
