import React from 'react';
import { Link } from 'react-router-dom';

const ITEMS = ['Financial Services', 'Public Sector', 'Healthcare', 'Retail', 'Energy', 'Technology'];

const IndustriesBand: React.FC = () => {
  return (
    <section className="py-16 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-white">Industries We Serve</h3>
          <Link to="/industries" className="text-lime-400 font-semibold hover:underline">Explore all →</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {ITEMS.map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-[#0F172A] px-4 py-3 text-center text-slate-200 text-sm hover:border-lime-400 transition-colors">
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesBand;