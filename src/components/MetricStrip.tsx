import React from 'react';

export type Metric = { value: string; label: string };

const MetricStrip: React.FC<{ metrics: Metric[]; inverted?: boolean }> = ({ metrics, inverted }) => {
  const valueClass = inverted ? 'text-lime-400' : 'text-lime-600';
  const labelClass = inverted ? 'text-slate-300' : 'text-slate-600';
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${inverted ? '' : ''}`}>
      {metrics.map((m) => (
        <div key={m.label} className="text-center">
          <div className={`text-3xl md:text-4xl font-bold ${valueClass}`}>{m.value}</div>
          <div className={`mt-1 ${labelClass}`}>{m.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MetricStrip;