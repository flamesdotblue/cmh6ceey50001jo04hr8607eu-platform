import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModesShowcase from './components/ModesShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ModesShowcase />
      <Footer />
    </div>
  );
}
