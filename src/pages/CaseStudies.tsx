import React from 'react';

const CASES = [
  {
    title: 'Regulatory Reporting Platform',
    sector: 'Financial Services',
    before: 'Manual processes and fragmented data leading to delays and rework.',
    after: 'Automated data lineage, streamlined workflows, and on-time submissions.',
  },
  {
    title: 'Customer Onboarding Journey',
    sector: 'Retail Banking',
    before: 'Drop-offs due to unclear steps and duplicate data entry.',
    after: 'Simplified journeys, reduced handling, and higher conversion rates.',
  },
  {
    title: 'Cloud Cost Optimisation',
    sector: 'Technology',
    before: 'Sprawl across environments with limited cost visibility.',
    after: 'Right-sized infrastructure, governance, and 28% cost reduction.',
  },
];

const Card: React.FC<typeof CASES[number]> = ({ title, sector, before, after }) => (
  <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-6 shadow-xl">
    <div className="text-sm text-slate-400">{sector}</div>
    <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl bg-[#0B0F14]/60 border border-white/10 p-4">
        <div className="text-slate-400 text-xs uppercase tracking-wide">Before</div>
        <p className="text-slate-300 mt-1 text-sm">{before}</p>
      </div>
      <div className="rounded-xl bg-[#0B0F14]/60 border border-white/10 p-4">
        <div className="text-slate-400 text-xs uppercase tracking-wide">After</div>
        <p className="text-slate-300 mt-1 text-sm">{after}</p>
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-[#0B0F14] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h1>
          <p className="mt-4 text-slate-300 text-lg">Real outcomes delivered across industries—clear before and after impact.</p>
        </header>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CaseStudies;