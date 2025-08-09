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
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#0B0F14' }}>
      {/* Top hairline divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Radial accent */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(40% 40% at 70% 30%, rgba(203,234,0,0.12), rgba(203,234,0,0) 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <header>
          <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
            Built to deliver. Designed to develop.
          </h2>
          <p className="mt-4 text-base md:text-lg text-stone-300 max-w-2xl">
            We operate as two engines—delivery and talent—so clients ship real work, and learners gain real experience.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {/* Card 1 */}
          <article
            className="rounded-2xl bg-[#0F172A]/90 border border-white/10 backdrop-blur-sm p-6 lg:p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-[#CBEA00]/40 focus-within:ring-2 focus-within:ring-[#CBEA00]"
            role="listitem"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CBEA00] text-black/80 ring-1 ring-white/10">
              <PlaceholderIcon />
            </div>
            <h3 className="mt-5 text-white font-semibold text-lg">Consulting delivery</h3>
            <p className="mt-2 text-sm md:text-base text-[#E5E7EB]">
              We design and ship platforms, integrations, and data workflows with clear scope, steady cadence, and measurable outcomes.
            </p>
          </article>

          {/* Card 2 */}
          <article
            className="rounded-2xl bg-[#0F172A]/90 border border-white/10 backdrop-blur-sm p-6 lg:p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-[#CBEA00]/40 focus-within:ring-2 focus-within:ring-[#CBEA00]"
            role="listitem"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CBEA00] text-black/80 ring-1 ring-white/10">
              <PlaceholderIcon />
            </div>
            <h3 className="mt-5 text-white font-semibold text-lg">Project‑ready talent</h3>
            <p className="mt-2 text-sm md:text-base text-[#E5E7EB]">
              Our cohorts learn by doing on live deliverables with our leads, so they join teams speaking product, data, and delivery.
            </p>
          </article>

          {/* Card 3 */}
          <article
            className="rounded-2xl bg-[#0F172A]/90 border border-white/10 backdrop-blur-sm p-6 lg:p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-[#CBEA00]/40 focus-within:ring-2 focus-within:ring-[#CBEA00]"
            role="listitem"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#CBEA00] text-black/80 ring-1 ring-white/10">
              <PlaceholderIcon />
            </div>
            <h3 className="mt-5 text-white font-semibold text-lg">Train → Build → Place</h3>
            <p className="mt-2 text-sm md:text-base text-[#E5E7EB]">
              A straight path: learn the toolkit, contribute on real projects, then step into paid roles with evidence of impact.
            </p>
          </article>
        </div>

        {/* Optional CTA row - desktop only for breathing room */}
        <div className="hidden md:flex items-center justify-between mt-10 rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-stone-300">
            See how our model connects delivery and talent to accelerate outcomes.
          </p>
          <a
            href="/work-experience"
            className="inline-flex items-center rounded-lg bg-[#CBEA00] px-4 py-2 text-sm font-semibold text-black/80 hover:brightness-95 transition"
          >
            Explore work experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureBand;