import React from 'react';

export type QA = { q: string; a: string };

const Faq: React.FC<{ items: QA[]; inverted?: boolean }> = ({ items, inverted }) => {
  const qClass = inverted ? 'text-white' : 'text-slate-900';
  const aClass = inverted ? 'text-slate-300' : 'text-slate-600';
  const border = inverted ? 'border-white/10' : 'border-slate-200';

  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200/60">
      {items.map((it, idx) => (
        <div key={it.q} className={`py-4 ${idx !== 0 ? `border-t ${border}` : ''}`}>
          <button
            className={`w-full text-left font-semibold ${qClass}`}
            aria-expanded={openIdx === idx}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            {it.q}
          </button>
          {openIdx === idx && <p className={`mt-2 ${aClass}`}>{it.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;