import React from 'react';
import { ArrowRight, CheckCircle2, Briefcase, Workflow, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import MetricStrip from '../components/MetricStrip';
import ProcessTimeline from '../components/ProcessTimeline';
import ClientLogos from '../components/ClientLogos';
import Faq from '../components/Faq';

const Bullet: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-lime-500 mt-0.5" />
    <span className="text-slate-700">{text}</span>
  </li>
);

const Services: React.FC = () => {
  const hero = useReveal();
  const consult = useReveal();
  const talent = useReveal();
  const caps = useReveal();
  const engage = useReveal();

  return (
    <main className="pt-28 bg-white min-h-screen">
      {/* Hero */}
      <section ref={hero.ref as any} className="pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            style={{
              opacity: hero.visible ? 1 : 0,
              transform: hero.visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'all 400ms ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Consulting Delivery & Project-Ready Talent</h1>
            <p className="mt-4 text-slate-600 text-lg">
              Immediate impact from experienced consultants and a pipeline of analysts trained on live deliverables. One partner to deliver now and scale sustainably.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Book a consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/case-studies" className="inline-flex items-center bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:border-purple-500 transition-all">
                View case studies
              </Link>
            </div>
          </div>
          <div className="order-first lg:order-none">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
              alt="Consulting team collaborating"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl border border-slate-200 shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Consulting Delivery */}
      <section ref={consult.ref as any} className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div
            className="order-last lg:order-none"
            style={{ opacity: consult.visible ? 1 : 0, transform: consult.visible ? 'translateY(0)' : 'translateY(12px)', transition: 'all 400ms ease-out 60ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Consulting Delivery</h2>
            <p className="mt-3 text-slate-600">
              Specialists in Business Analysis, Product Ownership, Project Delivery, and Digital Transformation—focused on measurable business outcomes.
            </p>
            <ul className="mt-5 space-y-3">
              <Bullet text="Business Analysis: discovery to UAT, with clear, testable requirements" />
              <Bullet text="Product Ownership: vision, roadmap, and ruthless prioritisation" />
              <Bullet text="Project Delivery: PMO rigour with agile execution" />
              <Bullet text="Digital Transformation: operating models, cloud adoption, and ways of working" />
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Whiteboard workshop"
              className="w-full h-[340px] object-cover rounded-2xl border border-slate-200 shadow-2xl"
              loading="lazy"
              style={{ opacity: consult.visible ? 1 : 0, transform: consult.visible ? 'translateY(0)' : 'translateY(12px)', transition: 'all 400ms ease-out' }}
            />
          </div>
        </div>
      </section>

      {/* Project-Ready Talent */}
      <section ref={talent.ref as any} className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative order-first">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Analysts collaborating"
              className="w-full h-[340px] object-cover rounded-2xl border border-slate-200 shadow-2xl"
              loading="lazy"
              style={{ opacity: talent.visible ? 1 : 0, transform: talent.visible ? 'translateY(0)' : 'translateY(12px)', transition: 'all 400ms ease-out' }}
            />
          </div>
          <div
            style={{ opacity: talent.visible ? 1 : 0, transform: talent.visible ? 'translateY(0)' : 'translateY(12px)', transition: 'all 400ms ease-out 60ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Project-Ready Talent</h2>
            <p className="mt-3 text-slate-600">
              Analysts trained and tested on live deliverables with our senior team—ready to contribute from day one. Inspired by UK leaders in train-and-deploy models.
            </p>
            <ul className="mt-5 space-y-3">
              <Bullet text="Associate Business Analysts, Data/Reporting Analysts, PMO Analysts" />
              <Bullet text="Placement with structured onboarding and supervision" />
              <Bullet text="Ongoing performance support and development" />
              <Bullet text="Scale capacity while reducing delivery risk" />
            </ul>
          </div>
        </div>
      </section>

      {/* Capabilities grid (dark contrast) */}
      <section ref={caps.ref as any} className="py-12 bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-6">
          <MetricStrip inverted metrics={[
            { value: '95%', label: 'Placement success' },
            { value: '200+', label: 'Analysts placed' },
            { value: '12w', label: 'Avg project kick-off' },
            { value: '£51k', label: 'Avg starting salary' },
          ]} />
          <h3 className="text-2xl font-semibold text-white mt-8">Capabilities</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{icon: <Briefcase className="w-5 h-5" />, t:'Delivery Leadership'}, {icon:<Workflow className="w-5 h-5"/>, t:'Agile & Product'}, {icon:<Users className="w-5 h-5"/>, t:'Stakeholder & Change'}, {icon:<Sparkles className="w-5 h-5"/>, t:'Innovation Enablement'}].map((c, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-[#0F172A] p-4 text-white/90 flex items-center gap-3 hover:border-lime-400 transition-colors"
                   style={{opacity: caps.visible ? 1 : 0, transform: caps.visible ? 'none' : 'translateY(8px)', transition: `all 300ms ease-out ${i*50}ms`}}>
                <span className="text-lime-400">{c.icon}</span>
                <span>{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline (light) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">How we engage</h3>
            <ProcessTimeline
              steps={[
                { k: '01', title: 'Discovery & framing', body: 'Align on outcomes, constraints, and success metrics.' },
                { k: '02', title: 'Team & plan', body: 'Right-size capability and create an actionable roadmap.' },
                { k: '03', title: 'Deliver & iterate', body: 'Agile delivery with visible progress and tight feedback loops.' },
                { k: '04', title: 'Embed & scale', body: 'Knowledge transfer and handover to internal teams.' },
              ]}
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">FAQs</h3>
            <Faq
              items={[
                { q: 'How quickly can you start?', a: 'Typically 2–4 weeks for consulting squads; faster for embedded roles.' },
                { q: 'How does supervision work for analysts?', a: 'Each placement includes clear objectives, supervision, and performance reviews.' },
                { q: 'Do you operate fixed-price?', a: 'Yes, for well-defined scopes. We also offer T&M and outcome-based models.' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Clients band */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <ClientLogos />
        </div>
      </section>

      {/* Engagement models on light */}
      <section ref={engage.ref as any} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[{
            h:'Consulting Teams', b:'Cross-functional squads to deliver programmes and critical initiatives.'
          },{h:'Embedded Consultants', b:'Specialists embedded in your teams to accelerate delivery.'},{h:'Associate Cohorts', b:'Scale with project-ready analysts, supervised and performance-managed.'}].map((x, i) => (
            <div key={x.h} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                 style={{opacity: engage.visible ? 1 : 0, transform: engage.visible ? 'none' : 'translateY(8px)', transition: `all 350ms ease-out ${i*80}ms`}}>
              <h4 className="text-slate-900 font-semibold text-xl">{x.h}</h4>
              <p className="text-slate-600 mt-2">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 text-center">
          <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            Talk to a consultant <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;