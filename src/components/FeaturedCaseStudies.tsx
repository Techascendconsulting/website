import React from 'react';
import { Link } from 'react-router-dom';

const CARDS = [
  {
    title: 'Regulatory reporting in 12 weeks',
    body: 'Delivered BA and PMO capability to land a time-critical, multi-system change.',
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  },
  {
    title: 'Customer onboarding uplift',
    body: 'Re-designed journeys and data flows to improve conversion and reduce handling.',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
  {
    title: 'Cloud cost optimisation',
    body: 'Partnered with engineering to save 28% on monthly spend with zero downtime.',
    img: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
  },
];

const FeaturedCaseStudies: React.FC = () => {
  return (
    <section className="py-16 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-white">Featured Case Studies</h3>
          <Link to="/case-studies" className="text-lime-400 font-semibold hover:underline">View all →</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((c, idx) => (
            <div key={c.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A] shadow-xl hover:shadow-2xl transition-all">
              <div className="overflow-hidden">
                <img src={c.img} alt="Case study" className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
              </div>
              <div className="p-5">
                <h4 className="text-white font-semibold">{c.title}</h4>
                <p className="mt-2 text-slate-300 text-sm">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;