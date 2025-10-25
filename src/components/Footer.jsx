import React from 'react';
import { navigateTo } from './Router';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_50%_0%,rgba(0,255,224,0.07),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/70">
          <div>
            <div className="text-white font-semibold">PUBG // Neo</div>
            <p className="mt-2">A futuristic homage to battle royale. Not affiliated with PUBG Corp.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Explore</div>
            <ul className="mt-2 space-y-1">
              <li><button onClick={() => navigateTo('modes')} className="hover:text-white">Game Modes</button></li>
              <li><button onClick={() => navigateTo('seasons')} className="hover:text-white">Seasons</button></li>
              <li><button onClick={() => navigateTo('esports')} className="hover:text-white">Esports</button></li>
              <li><button onClick={() => navigateTo('news')} className="hover:text-white">News</button></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Support</div>
            <ul className="mt-2 space-y-1">
              <li>Status</li>
              <li>Security</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Follow</div>
            <ul className="mt-2 space-y-1">
              <li>Twitter/X</li>
              <li>Discord</li>
              <li>Youtube</li>
              <li>Twitch</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} PUBG // Neo. Fan-made concept for educational and demo purposes.</p>
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span>Live Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
