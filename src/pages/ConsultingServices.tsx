import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

const ConsultingServices = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies that modernize your business processes and technology infrastructure.",
      features: [
        "Legacy system modernization",
        "Cloud migration strategies",
        "Process automation",
        "Digital strategy roadmaps"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-lime-600" />,
      title: "Agile Implementation",
      description: "Comprehensive agile transformation services to improve team productivity and project delivery.",
      features: [
        "Agile coaching and training",
        "Scrum implementation",
        "Team transformation",
        "Performance optimization"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Business Analysis",
      description: "Expert business analysis services to bridge the gap between business needs and technical solutions.",
      features: [
        "Requirements gathering",
        "Process mapping",
        "Stakeholder analysis",
        "Solution design"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-lime-600" />,
      title: "Technology Strategy",
      description: "Strategic technology consulting to align your IT investments with business objectives.",
      features: [
        "Technology roadmapping",
        "Architecture design",
        "Vendor selection",
        "Risk assessment"
      ]
    }
  ];

  const industries = [
    { name: "Financial Services", icon: "🏦", description: "Banking, insurance, and fintech solutions" },
    { name: "Healthcare", icon: "🏥", description: "Digital health and medical technology" },
    { name: "Retail & E-commerce", icon: "🛍️", description: "Customer experience and digital commerce" },
    { name: "Manufacturing", icon: "🏭", description: "Industry 4.0 and smart manufacturing" },
    { name: "Technology", icon: "💻", description: "Software and technology companies" },
    { name: "Government", icon: "🏛️", description: "Public sector digital transformation" }
  ];

  const methodology = [
    {
      step: "1",
      title: "Discovery & Assessment",
      description: "We start by understanding your current state, challenges, and objectives through comprehensive analysis."
    },
    {
      step: "2", 
      title: "Strategy Development",
      description: "Our experts develop a tailored strategy and roadmap aligned with your business goals and constraints."
    },
    {
      step: "3",
      title: "Implementation",
      description: "We execute the strategy with our experienced team, ensuring minimal disruption to your operations."
    },
    {
      step: "4",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and ongoing support to ensure sustained success."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Consulting Services
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our expert consulting services. We deliver innovative 
              solutions that drive growth, efficiency, and competitive advantage.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">
              Comprehensive consulting solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-lime-600" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600">
              Deep expertise across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{industry.name}</h3>
                <p className="text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Methodology</h2>
            <p className="text-xl text-slate-600">
              A proven approach that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 ${
                  index % 2 === 0 ? 'bg-gradient-to-r from-purple-600 to-purple-700' : 'bg-gradient-to-r from-lime-500 to-lime-600'
                }`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-lime-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Enterprise Clients" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our consulting services can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Download Resources
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingServices;