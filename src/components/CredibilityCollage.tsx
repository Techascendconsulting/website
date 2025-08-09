import React, { useEffect, useRef, useState } from 'react';

const IMAGES = {
  center: 'https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg',
  topLeft: 'https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg',
  topRight: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  midLeft: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  midRight: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
  bottomLeft: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg',
  bottomRight: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
};

const CredibilityCollage: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cardBase =
    'rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 hover:ring-[#CBEA00]/40';
  const imgBase = 'w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]';

  return (
    <section ref={sectionRef} aria-labelledby="credibility-heading" className="w-full" style={{ backgroundColor: '#0B0F14' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 id="credibility-heading" className="text-white text-4xl md:text-5xl font-bold tracking-tight">
            Trusted by professionals across industries
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
            We partner with consultants, analysts, and industry leaders to deliver impactful projects and career opportunities.
          </p>
        </header>

        {/* Collage grid */}
        <div className="mt-12 grid place-items-center">
          <div className="relative grid gap-6" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {/* Top left (square 220x220) */}
            <div
              className={`group ${cardBase} col-start-1 col-end-3 justify-self-end`} 
              style={{ width: 220, height: 220, transitionDelay: visible ? '50ms' : '0ms', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <img src={IMAGES.topLeft} alt="Consultant on a video call" className={imgBase} loading="lazy" width={220} height={220} />
            </div>

            {/* Top right (square 220x220) */}
            <div
              className={`group ${cardBase} col-start-6 col-end-8`} 
              style={{ width: 220, height: 220, transitionDelay: visible ? '100ms' : '0ms', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <img src={IMAGES.topRight} alt="Professional with tablet in workspace" className={imgBase} loading="lazy" width={220} height={220} />
            </div>

            {/* Middle left (portrait 220x320) */}
            <div
              className={`group ${cardBase} col-start-1 col-end-3 row-start-2`} 
              style={{ width: 220, height: 320, transitionDelay: visible ? '150ms' : '0ms', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <img src={IMAGES.midLeft} alt="Colleagues reviewing data on laptop" className={imgBase} loading="lazy" width={220} height={320} />
            </div>

            {/* Center (largest portrait 320x420) */}
            <div
              className={`group ${cardBase} col-start-3 col-end-6 row-start-1 row-end-3 justify-self-center`} 
              style={{ width: 320, height: 420, transitionDelay: visible ? '200ms' : '0ms', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <img src={IMAGES.center} alt="Leader presenting to a group" className={imgBase} loading="lazy" width={320} height={420} />
            </div>

            {/* Middle right (portrait 220x320) */}
            <div
              className={`group ${cardBase} col-start-6 col-end-8 row-start-2`} 
              style={{ width: 220, height: 320, transitionDelay: visible ? '250ms' : '0ms', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <img src={IMAGES.midRight} alt="Consultant discussing with client at table" className={imgBase} loading="lazy" width={220} height={320} />
            </div>

            {/* Bottom left (landscape 320x200) */}
            <div
              className={`group ${cardBase} col-start-2 col-end-5 row-start-3 justify-self-end`} 
              style={{ width: 320, height: 200, transitionDelay: visible ? '300ms' : '0ms', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <img src={IMAGES.bottomLeft} alt="Team collaborating over documents" className={imgBase} loading="lazy" width={320} height={200} />
            </div>

            {/* Bottom right (landscape 320x200) */}
            <div
              className={`group ${cardBase} col-start-5 col-end-8 row-start-3`} 
              style={{ width: 320, height: 200, transitionDelay: visible ? '350ms' : '0ms', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <img src={IMAGES.bottomRight} alt="Professional on a business call outdoors" className={imgBase} loading="lazy" width={320} height={200} />
            </div>
          </div>
        </div>

        {/* Mobile stack */}
        <div className="mt-12 grid gap-4 sm:hidden">
          {[IMAGES.center, IMAGES.topLeft, IMAGES.topRight, IMAGES.midLeft, IMAGES.midRight, IMAGES.bottomLeft, IMAGES.bottomRight].map(
            (src, idx) => (
              <div key={idx} className={`group ${cardBase}`} style={{ height: 220 }}>
                <img src={src} alt="Professional culture collage" className={imgBase} loading="lazy" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CredibilityCollage;