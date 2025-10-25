import React from 'react';

function CreatorCard({ name, platform, followers }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="text-lg font-semibold">{name}</div>
      <div className="mt-1 text-xs text-white/60">{platform} • {followers.toLocaleString()} followers</div>
      <div className="mt-4 flex gap-2 text-xs">
        <button className="rounded-md bg-white text-black px-3 py-1.5 font-semibold hover:brightness-95">Follow</button>
        <button className="rounded-md border border-white/15 px-3 py-1.5 hover:bg-white/10">Watch</button>
      </div>
    </div>
  );
}

export default function CreatorsSpotlight() {
  const creators = [
    { name: 'NovaAim', platform: 'Twitch', followers: 243000 },
    { name: 'PixelPlays', platform: 'YouTube', followers: 512000 },
    { name: 'MobileZed', platform: 'TikTok', followers: 128000 },
    { name: 'ClutchKat', platform: 'Twitch', followers: 98000 },
    { name: 'Boombox', platform: 'YouTube', followers: 302000 },
    { name: 'RiftRunner', platform: 'Kick', followers: 45000 },
  ];
  return (
    <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
      <div className="font-semibold text-sm">Creators Spotlight</div>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {creators.map(c => (
          <CreatorCard key={c.name} {...c} />
        ))}
      </div>
    </div>
  );
}
