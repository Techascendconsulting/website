import React from 'react';
import { useReveal } from '../hooks/useReveal';

const CASES = [
  {
    title: 'Regulatory Reporting Platform',
    sector: 'Financial Services',
    before: 'Manual processes and fragmented data leading to delays and rework.',
    after: 'Automated data lineage, streamlined workflows, and on-time submissions.',
    img: 'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg',
    metrics: ['12 weeks to MVP', '0 missed deadlines', '5 systems integrated'],
  },
  {
    title: 'Customer Onboarding Journey',
    sector: 'Retail Banking',
    before: 'Drop-offs due to unclear steps and duplicate data entry.',
    after: 'Simplified journeys, reduced handling, and higher conversion rates.',
    img: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg',
    metrics: ['+18% conversion', '-22% handling time'],
  },
  {
    title: 'Cloud Cost Optimisation',
    sector: 'Technology',
    before: 'Sprawl across environments with limited cost visibility.',
    after: 'Right-sized infrastructure, governance, and 28% cost reduction.',
    img: 'https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg',
    metrics: ['-28% monthly cost', '0 downtime'],
  },
];

const Card: React.FC<typeof CASES[number]> = ({ title, sector, before, after, img, metrics }) => (
  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
    <div className="overflow-hidden">
      <img src={img} alt={title} className="w-full h-44 object-cover transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
    </div>
    <div className="p-6">
      <div className="text-sm text-slate-500">{sector}</div>
      <h3 className="text-xl font-semibold text-slate-900 mt-1">{title}</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <div className="text-slate-500 text-xs uppercase tracking-wide">Before</div>
          <p className="text-slate-700 mt-1 text-sm">{before}</p>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <div className="text-slate-500 text-xs uppercase tracking-wide">After</div>
          <p className="text-slate-700 mt-1 text-sm">{after}</p>
        </div>
      </div>
      {metrics && (
        <div className="mt-4 flex flex-wrap gap-2">
          {metrics.map((m) => (
            <span key={m} className="text-xs bg-slate-50 text-slate-800 px-3 py-1 rounded-full border border-slate-200">{m}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const hero = useReveal();

  return (
    <main className="pt-28 bg-white min-h-screen">
      {/* Hero */}
      <section ref={hero.ref as any} className="pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div style={{opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(10px)', transition: 'all 380ms ease-out'}}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Case Studies</h1>
            <p className="mt-4 text-slate-600 text-lg">Real outcomes delivered across industries—clear before and after impact.</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg" alt="Case studies montage" className="w-full h-[360px] object-cover rounded-2xl border border-slate-200 shadow-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;