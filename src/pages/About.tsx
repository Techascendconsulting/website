import React from 'react';

const Stat: React.FC<{ n: string; label: string }> = ({ n, label }) => (
  <div className="text-center p-6 rounded-xl bg-[#0F172A] border border-white/10">
    <div className="text-3xl font-bold text-lime-400">{n}</div>
    <div className="text-slate-300 mt-1">{label}</div>
  </div>
);

const About: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-[#0B0F14] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-slate-300 text-lg">We deliver business-critical projects and build the workforce of tomorrow—through a dual model of consulting delivery and project-ready talent.</p>
        </header>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Stat n="95%" label="Placement success" />
          <Stat n="200+" label="Careers launched" />
          <Stat n="£51k" label="Avg starting salary" />
        </section>

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p className="mt-3 text-slate-300">Founded in the UK, Tech Ascend Consultancy Limited partners with organisations to deliver meaningful change while developing the next generation of consulting talent. Our approach combines senior expertise with a pipeline of analysts who have proven themselves on live deliverables.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white">Values</h2>
            <ul className="mt-3 space-y-2 text-slate-300 list-disc list-inside">
              <li>Evidence over claims</li>
              <li>Respect for people and time</li>
              <li>Pragmatic excellence</li>
              <li>Inclusive by design</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;