import React from 'react';

const SECTORS = [
  {
    title: 'Financial Services',
    body: 'Regulatory change, digital onboarding, core system modernisation, data lineage and reporting.',
  },
  {
    title: 'Public Sector',
    body: 'Citizen services, case management, accessibility, and secure cloud transformation at pace.',
  },
  {
    title: 'Healthcare & Life Sciences',
    body: 'Patient pathways, interoperability, and data-driven improvement with strong governance.',
  },
  {
    title: 'Retail & E‑commerce',
    body: 'Personalisation, inventory visibility, and analytics for margin and experience gains.',
  },
  {
    title: 'Energy & Utilities',
    body: 'Asset insights, field mobility, and programme delivery with measurable benefits.',
  },
  {
    title: 'Technology & SaaS',
    body: 'From roadmap to rollout—product, platform, and customer success operations.',
  },
];

const Industries: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-[#0B0F14] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Industries We Serve</h1>
          <p className="mt-4 text-slate-300 text-lg">Tailored solutions delivered by specialists who understand your context and constraints.</p>
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SECTORS.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-[#0F172A] p-6 shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <h2 className="text-xl font-semibold text-white">{s.title}</h2>
              <p className="mt-2 text-slate-300">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Industries;