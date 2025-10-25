import React from 'react';

export default function Placeholder({ title, description }) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
        {description && <p className="mt-2 text-white/70 max-w-2xl">{description}</p>}
        <div className="mt-8 rounded-2xl border border-white/10 p-6 bg-white/5 text-sm text-white/70">
          This section is connected to routing with clean URLs. All header and hero buttons navigate without using hash URLs.
        </div>
      </div>
    </section>
  );
}
