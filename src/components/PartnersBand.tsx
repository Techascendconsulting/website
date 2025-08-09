import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Card = {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaHref: string;
};

const CARDS: Card[] = [
  {
    title: 'Client Solutions',
    description:
      "We deliver tailored project teams that blend seasoned consultants with project-ready analysts, ensuring speed, quality, and measurable results.",
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    ctaText: 'See how we deliver for clients →',
    ctaHref: '/consulting',
  },
  {
    title: 'Talent Partnerships',
    description:
      "We collaborate with industry leaders to mentor, prepare, and deploy talent that’s ready to contribute from day one.",
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    ctaText: 'Discover our talent collaborations →',
    ctaHref: '/talent-development',
  },
  {
    title: 'Join Our Network',
    description:
      "Whether as a client, partner, or associate consultant, join our ecosystem and help deliver projects that make a lasting impact.",
    image:
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
    ctaText: 'Start your partnership with us →',
    ctaHref: '/contact',
  },
];

const PartnersBand: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="partners-heading" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="partners-heading" className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Partnering for Greater Impact
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, idx) => (
            <article
              key={card.title}
              className={[
                'group rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 overflow-hidden transition-all duration-300',
                'hover:shadow-2xl hover:-translate-y-1',
                'opacity-0 translate-y-4',
                visible ? 'opacity-100 translate-y-0' : '',
              ].join(' ')}
              style={{ transitionDelay: visible ? `${idx * 80}ms` : '0ms' }}
            >
              <figure className="relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </figure>

              <div className="p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-slate-600">
                  {card.description}
                </p>
                <div className="mt-4">
                  <Link
                    to={card.ctaHref}
                    className="inline-flex items-center gap-2 text-lime-600 font-semibold relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full hover:text-lime-700"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersBand;