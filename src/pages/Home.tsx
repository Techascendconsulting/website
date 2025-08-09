import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Zap } from 'lucide-react';
import FeatureBand from '../components/FeatureBand';
import ResultsBand from '../components/ResultsBand';
import ImpactIntro from '../components/ImpactIntro';
import TrustBand from '../components/TrustBand';
import PartnersBand from '../components/PartnersBand';
import CredibilityCollage from '../components/CredibilityCollage';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg")',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent">
              Tech Career
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Bridge the gap between ambition and achievement with our unique blend of
            <span className="text-lime-400 font-semibold"> real project experience</span> and
            <span className="text-purple-400 font-semibold"> expert mentorship</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/apply"
              className="inline-flex items-center bg-lime-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-lime-600 hover:shadow-lg transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/success-stories"
              className="inline-flex items-center border-2 border-lime-500 text-lime-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-lime-500 hover:text-white transition-all duration-300"
            >
              Success Stories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-lime-400 mb-2">95%</div>
              <div className="text-slate-200 text-sm lg:text-base">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-lime-400 mb-2">£51k</div>
              <div className="text-slate-200 text-sm lg:text-base">Average Starting Salary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-lime-400 mb-2">200+</div>
              <div className="text-slate-200 text-sm lg:text-base">Graduates Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-lime-400 mb-2">6 weeks</div>
              <div className="text-slate-200 text-sm lg:text-base">Average Time to Offer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Intro Section */}
      <ImpactIntro />

      {/* Partners Band Section */}
      <PartnersBand />

      {/* Trust Band Section */}
      <TrustBand />

      {/* Tech Stack Section (replaces Our Services) */}
      <TechStack />

      {/* Feature Band Section */}
      <FeatureBand />

      {/* Results Band Section */}
      <ResultsBand />

      {/* Credibility Collage Section */}
      <CredibilityCollage />
    </div>
  );
};

export default Home;