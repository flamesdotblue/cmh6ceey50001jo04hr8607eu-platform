import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Placeholder from './components/Placeholder';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modes" element={<Placeholder title="Modes" description="Browse competitive and arcade playlists. Queue solo or with your squad." />} />
            <Route path="/esports" element={<Placeholder title="Esports" description="Follow tournaments, live matches, standings, and teams." />} />
            <Route path="/community" element={<Placeholder title="Community" description="Find squads, join events, and follow creators." />} />
            <Route path="/news" element={<Placeholder title="News" description="Patch notes, updates, events, and announcements." />} />
            <Route path="/seasons" element={<Placeholder title="Seasons" description="Progress your pass, complete missions, and unlock rewards." />} />
            <Route path="/download" element={<Placeholder title="Download" description="Choose your platform and get started for free." />} />
            <Route path="/status" element={<Placeholder title="Status" description="Live service health across regions and core services." />} />
            <Route path="/security" element={<Placeholder title="Security" description="Our commitment to fair play and data protection." />} />
            <Route path="/terms" element={<Placeholder title="Terms of Service" description="The terms that govern your use of the game and services." />} />
            <Route path="/privacy" element={<Placeholder title="Privacy Policy" description="How we collect, use, and protect your data." />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
