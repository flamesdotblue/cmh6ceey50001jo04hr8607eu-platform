import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/80">
          <div>
            <div className="text-white font-semibold">PUBG // Solid</div>
            <p className="mt-2 text-white/70">A futuristic homage to battle royale. Not affiliated with PUBG Corp.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Explore</div>
            <ul className="mt-2 space-y-1">
              <li><Link to="/modes" className="hover:text-white">Game Modes</Link></li>
              <li><Link to="/seasons" className="hover:text-white">Seasons</Link></li>
              <li><Link to="/esports" className="hover:text-white">Esports</Link></li>
              <li><Link to="/news" className="hover:text-white">News</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Support</div>
            <ul className="mt-2 space-y-1">
              <li><Link to="/status" className="hover:text-white">Status</Link></li>
              <li><Link to="/security" className="hover:text-white">Security</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
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
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} PUBG // Solid. Fan-made concept for educational and demo purposes.</p>
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span>Live Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
