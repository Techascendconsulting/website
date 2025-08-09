import React from 'react';

const CLIENTS = [
  { name: 'JPMorgan', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/J_P_Morgan_Logo_2008_1.svg' },
  { name: 'Barclays', img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Barclays_logo.svg' },
  { name: 'KPMG', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/KPMG_logo.svg' },
  { name: 'Deloitte', img: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
  { name: 'Accenture', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Accenture.svg' },
];

const ClientLogos: React.FC<{ inverted?: boolean }> = ({ inverted }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
      {CLIENTS.map((c) => (
        <div key={c.name} className="flex items-center justify-center">
          <img
            src={c.img}
            alt={c.name}
            className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-200"
            style={{ filter: 'grayscale(100%)' }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;