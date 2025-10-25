import React from 'react';
import { Gamepad2, Trophy, Users, Download } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 backdrop-blur-md bg-black/40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 blur-md opacity-60" />
            <div className="relative h-9 w-9 rounded-full bg-black/80 ring-1 ring-white/20 grid place-items-center">
              <Gamepad2 className="h-5 w-5 text-white" />
            </div>
          </div>
          <span className="font-semibold tracking-wide text-white/90">PUBG // Neo</span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <li className="hover:text-white transition-colors flex items-center gap-2"><Users className="h-4 w-4" /> Community</li>
          <li className="hover:text-white transition-colors flex items-center gap-2"><Trophy className="h-4 w-4" /> Esports</li>
          <li className="hover:text-white transition-colors">Seasons</li>
          <li className="hover:text-white transition-colors">News</li>
        </ul>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:brightness-110 active:scale-95 transition-all">
          <Download className="h-4 w-4" /> Play Free
        </button>
      </nav>
    </header>
  );
}
