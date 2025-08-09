import React from 'react';

const PlaceholderIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" className="opacity-90" />
    <path d="M7 13h10M7 9h6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const FeatureBand: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0B0F14] to-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header>
          <h2 className="text-white text-4xl font-semibold tracking-tight">
            Built to deliver. Designed to develop.
          </h2>
          <p className="mt-4 text-base text-stone-300 max-w-2xl">
            We operate as two engines—delivery and talent—so clients ship real work, and learners gain real experience.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {/* Card 1 */}
          <article
            className="rounded-2xl bg-[#0F172A] p-6 lg:p-8 shadow-xl ring-1 ring-white/5 transition transform hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#CBEA00]"
            role="listitem"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CBEA00] text-black/80">
              <PlaceholderIcon />
            </div>
            <h3 className="mt-5 text-white font-semibold text-lg">Consulting delivery</h3>
            <p className="mt-2 text-sm text-[#E5E7EB]">
              We design and ship platforms, integrations, and data workflows with clear scope, steady cadence, and measurable outcomes.
            </p>
          </article>

          {/* Card 2 */}
          <article
            className="rounded-2xl bg-[#0F172A] p-6 lg:p-8 shadow-xl ring-1 ring-white/5 transition transform hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#CBEA00]"
            role="listitem"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CBEA00] text-black/80">
              <PlaceholderIcon />
            </div>
            <h3 className="mt-5 text-white font-semibold text-lg">Project-ready talent</h3>
            <p className="mt-2 text-sm text-[#E5E7EB]">
              Our cohorts learn by doing on live deliverables with our leads, so they join teams speaking product, data, and delivery.
            </p>
          </article>

          {/* Card 3 */}
          <article
            className="rounded-2xl bg-[#0F172A] p-6 lg:p-8 shadow-xl ring-1 ring-white/5 transition transform hover:-translate-y-1 hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#CBEA00]"
            role="listitem"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CBEA00] text-black/80">
              <PlaceholderIcon />
            </div>
            <h3 className="mt-5 text-white font-semibold text-lg">Train → Do → Place</h3>
            <p className="mt-2 text-sm text-[#E5E7EB]">
              A straight path: learn the toolkit, contribute on real projects, then step into paid roles with evidence of impact.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeatureBand;