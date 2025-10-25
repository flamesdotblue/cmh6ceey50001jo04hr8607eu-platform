import React from 'react';

const Item = ({ name, status }) => (
  <div className="flex items-center justify-between rounded-md border border-white/10 p-4 bg-white/5">
    <div className="text-sm">{name}</div>
    <div className={`text-xs font-semibold ${status === 'Operational' ? 'text-emerald-300' : status === 'Degraded' ? 'text-yellow-300' : 'text-red-300'}`}>{status}</div>
  </div>
);

export default function StatusPage() {
  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Status</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Live service health across regions and core services.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Item name="Game Services (Matchmaking)" status="Operational" />
          <Item name="Authentication" status="Operational" />
          <Item name="Store & Purchases" status="Operational" />
          <Item name="Social & Parties" status="Degraded" />
          <Item name="Leaderboards" status="Operational" />
          <Item name="Telemetry" status="Operational" />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="font-semibold">Incidents</div>
          <p className="mt-2 text-sm text-white/70">No major incidents reported in the last 24 hours.</p>
        </div>
      </div>
    </section>
  );
}
