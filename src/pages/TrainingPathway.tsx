import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Step: React.FC<{ k: string; title: string; body: string }> = ({ k, title, body }) => (
  <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-6 shadow-xl">
    <div className="text-lime-400 font-mono text-sm tracking-widest">{k}</div>
    <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
    <p className="text-slate-300 mt-2">{body}</p>
  </div>
);

const TrainingPathway: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-[#0B0F14] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Training Pathway</h1>
          <p className="mt-4 text-slate-300 text-lg">A clear journey—Learn the craft, deliver real work, and step into a client role with confidence.</p>
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step k="01" title="Learn" body="Practical foundations guided by senior consultants—methods that translate into delivery." />
          <Step k="02" title="Do" body="Work on live deliverables with our team—evidence of capability, not just theory." />
          <Step k="03" title="Place" body="Join client projects as a project-ready analyst with ongoing support and supervision." />
        </div>

        <div className="text-center mt-10">
          <Link to="/careers" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            Explore careers <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TrainingPathway;