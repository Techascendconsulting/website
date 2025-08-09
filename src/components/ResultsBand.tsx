import React from 'react';

type ResultItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ITEMS: ResultItem[] = [
  {
    id: 1,
    title: 'Talent-Backed Delivery',
    description:
      "We deliver real projects for clients by pairing experienced consultants with project-ready talent from our training pipeline—combining proven expertise with fresh capability.",
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
  },
  {
    id: 2,
    title: 'Real-World Training',
    description:
      "Our learners gain hands-on experience on live client deliverables, building the skills, habits, and confidence needed to perform from day one.",
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  },
  {
    id: 3,
    title: 'Work Experience to Employment',
    description:
      "We bridge the gap between training and career with outcome-based project experience, helping organisations onboard talent that’s already proven itself.",
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
];

const ResultsBand: React.FC = () => {
  const [activeId, setActiveId] = React.useState<number | null>(1);

  const activeItem = ITEMS.find((i) => i.id === activeId) || null;

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section aria-labelledby="results-heading" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="results-heading" className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Ways We Drive Results
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left: Dynamic image tied to selection */}
          <figure className="order-1 lg:order-none relative w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200 min-h-[260px]">
            {activeItem ? (
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
            ) : (
              <div className="h-full w-full bg-slate-100 grid place-items-center text-slate-400 text-sm">
                Click a topic to preview
              </div>
            )}
          </figure>

          {/* Right: Numbered expandable items */}
          <div className="order-2 lg:order-none">
            {/* Top accent line above list */}
            <div className="relative">
              <div aria-hidden className="absolute -top-4 left-0 h-0.5 w-16 rounded" style={{ backgroundColor: '#CBEA00' }} />
            </div>

            <div className="divide-y divide-slate-200" role="list">
              {ITEMS.map((item, idx) => {
                const isOpen = activeId === item.id;
                const panelId = `result-panel-${item.id}`;
                const btnId = `result-trigger-${item.id}`;
                return (
                  <article key={item.id} role="listitem" className="py-2">
                    <h3>
                      <button
                        id={btnId}
                        type="button"
                        aria-controls={panelId}
                        aria-expanded={isOpen}
                        onClick={() => handleToggle(item.id)}
                        className="group w-full text-left rounded-xl -mx-2 px-2 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CBEA00] transition-transform hover:-translate-y-0.5"
                      >
                        <div className="grid grid-cols-[auto,1fr] gap-4 items-start">
                          <div className="pt-1 font-mono tabular-nums text-slate-500">{String(idx + 1).padStart(2, '0')}</div>
                          <div>
                            <div className="text-xl md:text-2xl font-semibold text-slate-900 group-hover:underline underline-offset-4">
                              {item.title}
                            </div>
                            {isOpen && (
                              <p className="mt-2 text-slate-600 max-w-prose">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </button>
                    </h3>
                    <div id={panelId} role="region" aria-labelledby={btnId} className="sr-only">
                      {/* Region exists for accessibility; content is rendered inline above when open */}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsBand;