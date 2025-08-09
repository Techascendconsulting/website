import React, { useEffect, useRef, useState } from 'react';

const BRAND_PURPLE = '#6E56CF';

type StackItem = {
  name: string;
  slug: string;
  href?: string;
};

const ITEMS: StackItem[] = [
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Python', slug: 'python' },
  { name: 'AWS', slug: 'amazonaws' },
  { name: 'Microsoft Azure', slug: 'microsoftazure' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Power BI', slug: 'powerbi' },
];

const getIconSources = (slug: string): string[] => [
  // Primary CDN
  `https://cdn.simpleicons.org/${slug}`,
  // Fallback 1: unpkg
  `https://unpkg.com/simple-icons@latest/icons/${slug}.svg`,
  // Fallback 2: Iconify
  `https://api.iconify.design/simple-icons:${slug}.svg`,
];

const ResilientIcon: React.FC<{ slug: string; name: string }> = ({ slug, name }) => {
  const sources = getIconSources(slug);
  const [index, setIndex] = useState(0);
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        aria-hidden
        className="flex items-center justify-center w-14 h-14 rounded-md bg-slate-100 text-slate-500 text-xs font-medium"
      >
        {name.split(' ').map((w) => w[0]).join('').slice(0, 3)}
      </div>
    );
  }

  return (
    <img
      src={sources[index]}
      alt={name}
      width={56}
      height={56}
      className="transition-all duration-200"
      style={{ filter: 'grayscale(100%)', WebkitFilter: 'grayscale(100%)' }}
      onError={(e) => {
        // Advance to next source; stop at the end to avoid loops/blinking
        if (index < sources.length - 1) {
          setIndex((i) => i + 1);
        } else {
          // Prevent further error loops
          (e.currentTarget as HTMLImageElement).onerror = null;
          setBroken(true);
        }
      }}
    />
  );
};

const TechStack: React.FC = () => {
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
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="techstack-heading" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h2 id="techstack-heading" className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#0B0F14' }}>
            Powering real outcomes with modern technology
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: '#4B5563' }}>
            We design, deliver, and scale solutions using a pragmatic, battle-tested stack—chosen for performance, security, and long-term maintainability.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {ITEMS.map((item, idx) => (
            <div
              key={item.slug}
              className={[
                'group relative rounded-xl border border-slate-200 bg-white shadow-sm',
                'flex flex-col items-center justify-center gap-3 p-5 sm:p-6 h-32',
                'transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-md',
                'focus-within:outline-none focus-within:ring-2',
              ].join(' ')}
              style={{
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                transitionDelay: visible ? `${idx * 60}ms` : '0ms',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
              }}
              role={item.href ? undefined : 'img'}
              aria-label={item.name}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="absolute inset-0 rounded-xl focus:outline-none focus:ring-2"
                  style={{ outlineColor: BRAND_PURPLE }}
                  aria-label={item.name}
                />
              ) : null}

              <div className="flex items-center justify-center">
                <ResilientIcon slug={item.slug} name={item.name} />
              </div>
              <div className="text-sm font-medium text-slate-600 transition-colors">{item.name}</div>
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-xl border transition-colors" style={{ borderColor: 'transparent' }} />
              <style>{`
                .group:hover { border-color: ${BRAND_PURPLE}; box-shadow: 0 6px 16px rgba(0,0,0,0.08); }
                .group:focus-within { box-shadow: 0 0 0 2px ${BRAND_PURPLE} inset; }
                .group:hover img { filter: none; -webkit-filter: none; }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;