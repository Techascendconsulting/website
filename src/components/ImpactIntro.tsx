import React from 'react';

const ImpactIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Authentic image */}
          <figure className="order-1 lg:order-none relative w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Collaborative team working on a project in a modern workspace"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </figure>

          {/* Right: Content */}
          <div className="order-2 lg:order-none">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Consulting and Talent Solutions That Deliver Real Impact
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-prose">
              We combine the precision of a consulting firm with the pipeline of a training academy—helping organisations deliver complex projects while building the workforce of tomorrow.
            </p>

            <ul className="mt-8 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lime-500" aria-hidden />
                <span>Deliver business-critical projects with experienced consultants and project-ready talent.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lime-500" aria-hidden />
                <span>Reduce delivery risk through structured processes, Agile practices, and transparent communication.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lime-500" aria-hidden />
                <span>Provide access to a steady pipeline of professionals trained on live projects.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lime-500" aria-hidden />
                <span>Support both immediate project needs and long-term talent development strategies.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lime-500" aria-hidden />
                <span>Align every engagement with measurable business outcomes.</span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="/consulting"
                className="text-lime-600 font-semibold inline-flex items-center gap-2 hover:text-lime-700"
              >
                Learn more about our approach
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactIntro;