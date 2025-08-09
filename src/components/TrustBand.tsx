import React from 'react';

const TrustBand: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-purple-700 to-purple-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-stretch">
          {/* Left: Text content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Organisations Trust Us for Consulting and Talent Solutions
            </h2>
            <div className="mt-5 space-y-5 text-purple-50">
              <p className="text-base md:text-lg leading-relaxed">
                We help businesses deliver complex projects while building the workforce they need for the future. By combining experienced consultants with project-ready analysts from our talent pipeline, we enable organisations to deliver at pace without compromising quality.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Our consultants bring deep expertise across business analysis, product ownership, and project delivery, while our project-ready analysts arrive equipped with live project experience and the skills to contribute from day one. This approach reduces delivery risk, scales capacity, and secures talent that’s already proven itself in real-world conditions.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                With a track record of delivering measurable results for UK organisations, we’ve built long-term partnerships based on trust, quality, and consistent impact.
              </p>
            </div>
          </div>

          {/* Right: Image, matched height to left on desktop */}
          <figure className="relative overflow-hidden rounded-2xl shadow-xl border border-white/10 h-64 lg:h-auto">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Professionals collaborating on a project in a modern workspace"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default TrustBand;