import React from 'react';
import { ArrowRight, CheckCircle2, Gift, GraduationCap, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const Benefit: React.FC<{ icon: React.ReactNode; title: string; body: string }> = ({ icon, title, body }) => (
  <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
    <div className="text-lime-500 mt-0.5">{icon}</div>
    <div>
      <div className="font-semibold text-slate-900">{title}</div>
      <p className="text-slate-600 text-sm mt-1">{body}</p>
    </div>
  </div>
);

const Careers: React.FC = () => {
  const hero = useReveal();
  const blocks = useReveal();

  return (
    <main className="pt-28 bg-white min-h-screen">
      {/* Hero */}
      <section ref={hero.ref as any} className="pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div style={{opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(10px)', transition: 'all 400ms ease-out'}}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Build your consulting career</h1>
            <p className="mt-4 text-slate-600 text-lg">Join as a consultant or project-ready analyst. Deliver real outcomes with senior support and clear progression.</p>
            <div className="mt-6">
              <Link to="/apply" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Apply now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" alt="Team collaboration" className="w-full h-[360px] object-cover rounded-2xl border border-slate-200 shadow-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Two image/text blocks */}
      <section ref={blocks.ref as any} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <img src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg" alt="Mentorship" className="w-full h-[300px] object-cover rounded-2xl border border-slate-200 shadow-xl" loading="lazy"
               style={{opacity: blocks.visible ? 1 : 0, transform: blocks.visible ? 'none' : 'translateY(8px)', transition: 'all 380ms ease-out'}} />
          <div style={{opacity: blocks.visible ? 1 : 0, transform: blocks.visible ? 'none' : 'translateY(8px)', transition: 'all 380ms ease-out 60ms'}}>
            <h2 className="text-3xl font-bold text-slate-900">Mentored by senior consultants</h2>
            <p className="mt-2 text-slate-600">Learn on real work with the safety net of leadership support—evidence of capability from day one.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div style={{opacity: blocks.visible ? 1 : 0, transform: blocks.visible ? 'none' : 'translateY(8px)', transition: 'all 380ms ease-out'}}>
            <h2 className="text-3xl font-bold text-slate-900">Progression with purpose</h2>
            <p className="mt-2 text-slate-600">Structured pathways into BA, PO, PM, and delivery leadership—aligned to the outcomes you deliver.</p>
          </div>
          <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg" alt="Progression" className="w-full h-[300px] object-cover rounded-2xl border border-slate-200 shadow-xl" loading="lazy"
               style={{opacity: blocks.visible ? 1 : 0, transform: blocks.visible ? 'none' : 'translateY(8px)', transition: 'all 380ms ease-out 60ms'}} />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Benefit icon={<CheckCircle2 className="w-5 h-5" />} title="Meaningful work" body="Business-critical projects with clear outcomes." />
          <Benefit icon={<Users className="w-5 h-5" />} title="Expert community" body="Learn alongside seasoned consultants and delivery leaders." />
          <Benefit icon={<Briefcase className="w-5 h-5" />} title="Progression" body="Structured pathways and opportunities to lead." />
          <Benefit icon={<GraduationCap className="w-5 h-5" />} title="Learn → Do → Place" body="A practical pathway that builds evidence, not just certificates." />
          <Benefit icon={<Gift className="w-5 h-5" />} title="Paid client delivery" body="Contribute on real engagements from day one." />
        </div>
        <div className="text-center mt-10">
          <Link to="/apply" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            Apply now <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Careers;