import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCtaStrip: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-700 to-purple-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to deliver results?</h3>
        <Link to="/contact" className="inline-flex items-center bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:opacity-95 transition-all">
          Book a consultation <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default FinalCtaStrip;