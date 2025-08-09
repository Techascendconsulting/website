import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const Step: React.FC<{ k: string; title: string; body: string }> = ({ k, title, body }) => (
  <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-6 shadow-xl">
    <div className="text-lime-400 font-mono text-sm tracking-widest">{k}</div>
    <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
    <p className="text-slate-300 mt-2">{body}</p>
  </div>
);

const TrainingPathway: React.FC = () => {
  const hero = useReveal();
  const steps = useReveal();
  const gallery = useReveal();

  return (
    <main className="pt-28 bg-[#0B0F14] min-h-screen">
      {/* Hero */}
      <section ref={hero.ref as any} className="pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div style={{opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(10px)', transition: 'all 380ms ease-out'}}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Training Pathway: Learn → Do → Place</h1>
            <p className="mt-4 text-slate-300 text-lg">A clear journey that builds capability through real work—so you join client projects ready to deliver.</p>
            <Link to="/careers" className="mt-6 inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Explore careers <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Learning cohort" className="w-full h-[360px] object-cover rounded-2xl border border-white/10 shadow-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section ref={steps.ref as any} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step k="01" title="Learn" body="Practical foundations guided by senior consultants—methods that translate into delivery." />
          <Step k="02" title="Do" body="Work on live deliverables with our team—evidence of capability, not just theory." />
          <Step k="03" title="Place" body="Join client projects as a project-ready analyst with ongoing support and supervision." />
        </div>
      </section>

      {/* Deliverables gallery */}
      <section ref={gallery.ref as any} className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-white">What you’ll deliver</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[{
              t:'Requirements pack', img:'https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg'
            },{t:'Process maps', img:'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'},{t:'Dashboards', img:'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg'},
            {t:'Test plans', img:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'},{t:'Backlogs', img:'https://images.pexels.com/photos/3861944/pexels-photo-3861944.jpeg'},{t:'Stakeholder comms', img:'https://images.pexels.com/photos/5151697/pexels-photo-5151697.jpeg'}].map((g, i) => (
              <div key={g.t} className="rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A] shadow-xl">
                <div className="overflow-hidden">
                  <img src={g.img} alt={g.t} className="w-full h-40 object-cover transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="text-white font-medium">{g.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrainingPathway;