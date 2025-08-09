import React from 'react';
import { ArrowRight, CheckCircle2, Gift, GraduationCap, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Benefit: React.FC<{ icon: React.ReactNode; title: string; body: string }> = ({ icon, title, body }) => (
  <div className="p-5 rounded-xl bg-[#0F172A] border border-white/10 flex items-start gap-3">
    <div className="text-lime-400 mt-0.5">{icon}</div>
    <div>
      <div className="font-semibold text-white">{title}</div>
      <p className="text-slate-300 text-sm mt-1">{body}</p>
    </div>
  </div>
);

const Careers: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-[#0B0F14] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Careers at Tech Ascend</h1>
          <p className="mt-4 text-slate-300 text-lg">Join as a consultant or project-ready analyst and deliver real impact from day one.</p>
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white">Consulting Roles</h2>
            <p className="mt-2 text-slate-300">Business Analyst, Product Owner, Project Manager, Delivery Lead.</p>
            <div className="mt-4 space-y-3">
              <Benefit icon={<CheckCircle2 className="w-5 h-5" />} title="Meaningful work" body="Business-critical projects with clear outcomes." />
              <Benefit icon={<Users className="w-5 h-5" />} title="Expert community" body="Learn alongside seasoned consultants and delivery leaders." />
              <Benefit icon={<Briefcase className="w-5 h-5" />} title="Progression" body="Structured pathways and opportunities to lead." />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white">Project-Ready Analysts</h2>
            <p className="mt-2 text-slate-300">Associate consultants trained and tested on live deliverables with our senior team.</p>
            <div className="mt-4 space-y-3">
              <Benefit icon={<GraduationCap className="w-5 h-5" />} title="Learn → Do → Place" body="A practical pathway that builds evidence, not just certificates." />
              <Benefit icon={<Gift className="w-5 h-5" />} title="Paid client delivery" body="Contribute on real engagements from day one." />
              <Benefit icon={<CheckCircle2 className="w-5 h-5" />} title="Support" body="Ongoing supervision and career guidance." />
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/apply" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            Apply now <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Careers;