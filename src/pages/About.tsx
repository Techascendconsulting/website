import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Stat: React.FC<{ n: string; label: string }> = ({ n, label }) => (
  <div className="text-center p-6 rounded-xl bg-white border border-slate-200">
    <div className="text-3xl font-bold text-lime-600">{n}</div>
    <div className="text-slate-600 mt-1">{label}</div>
  </div>
);

const About: React.FC = () => {
  const hero = useReveal();

  return (
    <main className="pt-28 bg-white min-h-screen">
      {/* Hero */}
      <section ref={hero.ref as any} className="pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div style={{opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(10px)', transition: 'all 380ms ease-out'}}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About Tech Ascend</h1>
            <p className="mt-4 text-slate-600 text-lg">We deliver business-critical projects and build the workforce of tomorrow—through a dual model of consulting delivery and project-ready talent.</p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg" alt="Our team" className="w-full h-[360px] object-cover rounded-2xl border border-slate-200 shadow-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Stat n="95%" label="Placement success" />
          <Stat n="200+" label="Careers launched" />
          <Stat n="£51k" label="Avg starting salary" />
        </div>
      </section>

      {/* Leadership */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-slate-900">Leadership</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{n:'Alex Morgan',r:'Delivery Director',img:'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'},{n:'Samira Patel',r:'Head of Product',img:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'},{n:'Daniel Li',r:'Consulting Lead',img:'https://images.pexels.com/photos/237941/pexels-photo-237941.jpeg'}].map(p => (
              <div key={p.n} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <img src={p.img} alt={p.n} className="w-24 h-24 object-cover rounded-full mx-auto ring-1 ring-slate-200" loading="lazy" />
                <div className="mt-3 text-slate-900 font-semibold">{p.n}</div>
                <div className="text-slate-600 text-sm">{p.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
            <p className="mt-3 text-slate-600">Founded in the UK, we partner with organisations to deliver meaningful change while developing the next generation of consulting talent. Our approach combines senior expertise with a pipeline of analysts who have proven themselves on live deliverables.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Values</h2>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc list-inside">
              <li>Evidence over claims</li>
              <li>Respect for people and time</li>
              <li>Pragmatic excellence</li>
              <li>Inclusive by design</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;