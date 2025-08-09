import React from 'react';
import { Link } from 'react-router-dom';

const ResultsBand: React.FC = () => {
  return (
    <section aria-labelledby="results-heading" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="results-heading" className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Ways We Drive Results
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left: Hero image */}
          <figure className="order-1 lg:order-none relative w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
              alt="Modern team workspace collaborating around laptops"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </figure>

          {/* Right: Numbered items */}
          <div className="order-2 lg:order-none">
            {/* First item with top accent line */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -top-4 left-0 h-0.5 w-16 rounded"
                style={{ backgroundColor: '#CBEA00' }}
              />
            </div>

            <div className="divide-y divide-slate-200">
              {/* Row 01 */}
              <Link
                to="/consulting"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CBEA00] rounded-xl -mx-2 px-2 py-4 transition-transform hover:-translate-y-0.5"
              >
                <article className="grid grid-cols-[auto,1fr] gap-4 items-start">
                  <div className="pt-1 font-mono tabular-nums text-slate-500">01</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">
                      Talent-Backed Delivery
                    </h3>
                    <p className="mt-1 text-slate-600">
                      We deliver real projects for clients by pairing experienced consultants with project-ready talent from our training pipeline—combining proven expertise with fresh capability.
                    </p>
                  </div>
                </article>
              </Link>

              {/* Row 02 */}
              <Link
                to="/talent-development"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CBEA00] rounded-xl -mx-2 px-2 py-4 transition-transform hover:-translate-y-0.5"
              >
                <article className="grid grid-cols-[auto,1fr] gap-4 items-start">
                  <div className="pt-1 font-mono tabular-nums text-slate-500">02</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">
                      Real-World Training
                    </h3>
                    <p className="mt-1 text-slate-600">
                      Our learners gain hands-on experience on live client deliverables, building the skills, habits, and confidence needed to perform from day one.
                    </p>
                  </div>
                </article>
              </Link>

              {/* Row 03 */}
              <Link
                to="/work-experience"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CBEA00] rounded-xl -mx-2 px-2 py-4 transition-transform hover:-translate-y-0.5"
              >
                <article className="grid grid-cols-[auto,1fr] gap-4 items-start">
                  <div className="pt-1 font-mono tabular-nums text-slate-500">03</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">
                      Work Experience to Employment
                    </h3>
                    <p className="mt-1 text-slate-600">
                      We bridge the gap between training and career with outcome-based project experience, helping organisations onboard talent that’s already proven itself.
                    </p>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsBand;