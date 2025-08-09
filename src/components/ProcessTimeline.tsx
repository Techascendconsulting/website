import React from 'react';

type Step = { k: string; title: string; body: string };

const ProcessTimeline: React.FC<{ steps: Step[]; inverted?: boolean }> = ({ steps, inverted }) => {
  const dot = inverted ? 'bg-lime-400' : 'bg-lime-600';
  const title = inverted ? 'text-white' : 'text-slate-900';
  const body = inverted ? 'text-slate-300' : 'text-slate-600';
  const border = inverted ? 'border-white/10' : 'border-slate-200';

  return (
    <ol className={`relative pl-6`}> 
      {steps.map((s, i) => (
        <li key={s.k} className={`mb-6 border-l ${border} pl-6`}>
          <span className={`absolute -left-2 top-1 w-3 h-3 rounded-full ${dot}`} />
          <div className={`text-xs font-mono tracking-widest ${inverted ? 'text-slate-300' : 'text-slate-500'}`}>{s.k}</div>
          <div className={`text-lg font-semibold ${title}`}>{s.title}</div>
          <p className={`${body} mt-1`}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
};

export default ProcessTimeline;