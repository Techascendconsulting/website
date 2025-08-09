import React from 'react';
import { useReveal } from '../hooks/useReveal';

const SECTORS = [
  { title: 'Financial Services', body: 'Regulatory change, digital onboarding, core system modernisation, data lineage and reporting.', img: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg' },
  { title: 'Public Sector', body: 'Citizen services, case management, accessibility, and secure cloud transformation at pace.', img: 'https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg' },
  { title: 'Healthcare & Life Sciences', body: 'Patient pathways, interoperability, and data-driven improvement with strong governance.', img: 'https://images.pexels.com/photos/7210231/pexels-photo-7210231.jpeg' },
  { title: 'Retail & E‑commerce', body: 'Personalisation, inventory visibility, and analytics for margin and experience gains.', img: 'https://images.pexels.com/photos/5632408/pexels-photo-5632408.jpeg' },
  { title: 'Energy & Utilities', body: 'Asset insights, field mobility, and programme delivery with measurable benefits.', img: 'https://images.pexels.com/photos/157040/pexels-photo-157040.jpeg' },
  { title: 'Technology & SaaS', body: 'From roadmap to rollout—product, platform, and customer success operations.', img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg' },
];

const Industries: React.FC = () => {
  const hero = useReveal();

  return (
    <main className="pt-28 bg-[#0B0F14] min-h-screen">
      {/* Hero */}
      <section ref={hero.ref as any} className="pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div style={{opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(10px)', transition: 'all 380ms ease-out'}}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Industries We Serve</h1>
            <p className="mt-4 text-slate-300 text-lg">Tailored solutions delivered by specialists who understand your context and constraints.</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" alt="Industries montage" className="w-full h-[360px] object-cover rounded-2xl border border-white/10 shadow-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Sector tiles */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SECTORS.map((s, idx) => (
            <div key={s.title} className="rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A] shadow-xl hover:shadow-2xl transition-all">
              <div className="overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white">{s.title}</h2>
                <p className="mt-2 text-slate-300">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Industries;