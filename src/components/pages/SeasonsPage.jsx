import React from 'react';

const Reward = ({ name }) => (
  <div className="rounded-xl border border-white/10 p-4 bg-white/[0.03] text-center text-sm">{name}</div>
);

export default function SeasonsPage() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,224,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Season 28: Cosmic Drop</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Complete missions to unlock reactive skins, banners, and currency. Premium pass holders gain bonus tiers and cosmetics.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reward name="Reactive AR Skin" />
          <Reward name="Galaxy Wrap" />
          <Reward name="Animated Banner" />
          <Reward name="1,000 Credits" />
          <Reward name="Legendary Emote" />
          <Reward name="Nebula Parachute" />
          <Reward name="Kill Tracker Charm" />
          <Reward name="Title: Eclipse" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="font-semibold">Missions</div>
            <p className="mt-2 text-sm text-white/70">Daily, Weekly, and Seasonal missions with streak bonuses. Complete chains for premium unlocks.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="font-semibold">Ranked Rewards</div>
            <p className="mt-2 text-sm text-white/70">Climb divisions to earn end-season cosmetics and titles. Top 1% receive animated frames.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="font-semibold">Vault</div>
            <p className="mt-2 text-sm text-white/70">Missed a previous item? The Vault rotates legacy cosmetics each month.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
