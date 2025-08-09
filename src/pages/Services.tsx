import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionCard: React.FC<{ title: string; subtitle: string; children: React.ReactNode; id?: string }> = ({ title, subtitle, children, id }) => (
  <section id={id} className="rounded-2xl border border-white/10 bg-[#0F172A] p-8 md:p-10 shadow-xl">
    <header className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-slate-300">{subtitle}</p>
    </header>
    <div>{children}</div>
  </section>
);

const ItemRow: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0B0F14]/60 border border-white/10">
    <div className="mt-0.5 text-lime-400">
      <CheckCircle2 className="w-5 h-5" />
    </div>
    <div>
      <div className="font-semibold text-white">{title}</div>
      <p className="text-slate-300 text-sm md:text-base mt-1">{desc}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-[#0B0F14] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Services</h1>
          <p className="mt-4 text-slate-300 text-lg">
            Immediate delivery impact from experienced consultants, plus a pipeline of project-ready analysts to scale sustainably.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <SectionCard
            id="consulting"
            title="Consulting Delivery"
            subtitle="Delivery leaders specialising in Business Analysis, Product Ownership, Project Delivery, and Digital Transformation."
          >
            <div className="space-y-4">
              <ItemRow title="Business Analysis" desc="From discovery to UAT—clear requirements, stakeholder alignment, measurable outcomes." />
              <ItemRow title="Product Ownership" desc="Vision, backlog, and value delivery—keeping teams focused on the most impactful work." />
              <ItemRow title="Project Delivery" desc="Plan, govern, and deliver—PMO rigour with agile execution to land business-critical change." />
              <ItemRow title="Digital Transformation" desc="Turn strategy into shipped outcomes—operating models, cloud adoption, ways of working." />
            </div>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Book a consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </SectionCard>

          <SectionCard
            id="talent"
            title="Project-Ready Talent"
            subtitle="Associate consultants trained and tested on live deliverables, ready to contribute from day one."
          >
            <div className="space-y-4">
              <ItemRow title="Associate Business Analysts" desc="Evidence-based analysts who gather, model, and communicate change effectively." />
              <ItemRow title="Data & Reporting Analysts" desc="Insightful dashboards and reporting that connect business to action." />
              <ItemRow title="PMO Analysts" desc="Pragmatic governance, risk management, and delivery cadence." />
              <ItemRow title="Onboarding & Placement" desc="Structured onboarding, supervision, and ongoing performance support." />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/careers" className="inline-flex items-center bg-[#0F172A] border border-white/10 text-white px-5 py-3 rounded-xl font-semibold hover:border-purple-500 hover:shadow-lg transition-all">
                Join as an Associate
              </Link>
              <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Request profiles <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </SectionCard>
        </div>

        <div className="mt-14 text-center">
          <p className="text-slate-300">Need something bespoke?</p>
          <Link to="/contact" className="mt-3 inline-flex items-center bg-transparent border border-white/20 text-white px-5 py-3 rounded-xl font-semibold hover:border-lime-400 hover:text-lime-400 transition-all">
            Talk to a consultant <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Services;