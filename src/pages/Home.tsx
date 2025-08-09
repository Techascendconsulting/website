import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Zap } from 'lucide-react';
import FeatureBand from '../components/FeatureBand';
import ResultsBand from '../components/ResultsBand';
import ImpactIntro from '../components/ImpactIntro';
import TrustBand from '../components/TrustBand';

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

      {/* Trust Band Section */}
      <TrustBand />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">
              Comprehensive solutions for business transformation and career development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 text-white">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Digital Transformation</h3>
              <p className="text-slate-600 mb-4">
                End-to-end digital transformation strategies that modernize your business processes and technology
                infrastructure.
              </p>
              <Link to="/consulting" className="inline-flex items-center text-lime-600 font-semibold hover:text-lime-700 transition-colors">
                Learn More
                <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-lime-500 rounded-xl flex items-center justify-center mb-6 text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Agile Implementation</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive agile transformation services to improve team productivity and project delivery.
              </p>
              <Link to="/consulting" className="inline-flex items-center text-lime-600 font-semibold hover:text-lime-700 transition-colors">
                Learn More
                <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 text-white">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Business Analysis</h3>
              <p className="text-slate-600 mb-4">
                Expert business analysis services to bridge the gap between business needs and technical solutions.
              </p>
              <Link to="/consulting" className="inline-flex items-center text-lime-600 font-semibold hover:text-lime-700 transition-colors">
                Learn More
                <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-lime-500 rounded-xl flex items-center justify-center mb-6 text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Technology Strategy</h3>
              <p className="text-slate-600 mb-4">
                Strategic technology consulting to align your IT investments with business objectives.
              </p>
              <Link to="/consulting" className="inline-flex items-center text-lime-600 font-semibold hover:text-lime-700 transition-colors">
                Learn More
                <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Band Section */}
      <FeatureBand />

      {/* Results Band Section */}
      <ResultsBand />

      {/* Training Programs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Training Programs</h2>
            <p className="text-xl text-slate-600">Launch your tech career with our comprehensive training programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Business Analyst</h3>
              <p className="text-slate-600 mb-4">Master business analysis with real project experience</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Duration:</span>
                  <span className="text-sm font-semibold text-slate-800">16 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Starting Salary:</span>
                  <span className="text-sm font-semibold text-lime-600">£45k - £65k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Placement Rate:</span>
                  <span className="text-sm font-semibold text-purple-600">96%</span>
                </div>
              </div>
              <Link
                to="/talent-development"
                className="w-full inline-flex items-center justify-center bg-lime-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-lime-600 hover:shadow-lg transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Project Manager</h3>
              <p className="text-slate-600 mb-4">Lead successful projects from start to finish</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Duration:</span>
                  <span className="text-sm font-semibold text-slate-800">20 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Starting Salary:</span>
                  <span className="text-sm font-semibold text-lime-600">£50k - £70k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Placement Rate:</span>
                  <span className="text-sm font-semibold text-purple-600">94%</span>
                </div>
              </div>
              <Link
                to="/talent-development"
                className="w-full inline-flex items-center justify-center bg-lime-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-lime-600 hover:shadow-lg transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Product Owner</h3>
              <p className="text-slate-600 mb-4">Drive product success with strategic thinking</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Duration:</span>
                  <span className="text-sm font-semibold text-slate-800">14 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Starting Salary:</span>
                  <span className="text-sm font-semibold text-lime-600">£48k - £68k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Placement Rate:</span>
                  <span className="text-sm font-semibold text-purple-600">95%</span>
                </div>
              </div>
              <Link
                to="/talent-development"
                className="w-full inline-flex items-center justify-center bg-lime-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-lime-600 hover:shadow-lg transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Scrum Master</h3>
              <p className="text-slate-600 mb-4">Facilitate agile teams and transformation</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Duration:</span>
                  <span className="text-sm font-semibold text-slate-800">12 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Starting Salary:</span>
                  <span className="text-sm font-semibold text-lime-600">£42k - £62k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Placement Rate:</span>
                  <span className="text-sm font-semibold text-purple-600">97%</span>
                </div>
              </div>
              <Link
                to="/talent-development"
                className="w-full inline-flex items-center justify-center bg-lime-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-lime-600 hover:shadow-lg transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;