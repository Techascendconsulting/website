import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Zap, Shield, Globe, TrendingUp, Award, Clock, Star } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies that modernize your business processes."
    },
    {
      icon: <Users className="w-8 h-8 text-lime-600" />,
      title: "Agile Implementation", 
      description: "Comprehensive agile transformation services to improve team productivity."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Business Analysis",
      description: "Expert business analysis services to bridge business needs and technical solutions."
    },
    {
      icon: <Shield className="w-8 h-8 text-lime-600" />,
      title: "Talent Development",
      description: "Comprehensive training programs that prepare professionals for high-demand tech roles."
    }
  ];

  const programs = [
    { name: "Business Analyst", duration: "16 weeks", placement: "96%" },
    { name: "Project Manager", duration: "20 weeks", placement: "94%" },
    { name: "Product Owner", duration: "14 weeks", placement: "95%" },
    { name: "Scrum Master", duration: "12 weeks", placement: "97%" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-lime-400"> Expert Consulting</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We deliver innovative solutions that drive growth, efficiency, and competitive advantage. 
              From digital transformation to talent development, we're your partner in success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/consulting"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/apply"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Start Training
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "200+", label: "Professionals Trained" },
                { number: "95%", label: "Job Placement Rate" },
                { number: "50+", label: "Enterprise Clients" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-bold text-lime-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">
              Comprehensive solutions for your business transformation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-lime-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Training Programs</h2>
            <p className="text-xl text-slate-700">
              Launch your tech career with our comprehensive training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{program.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">{program.placement}</div>
                <div className="text-slate-600 mb-4">Placement Rate</div>
                <div className="text-sm text-slate-500">{program.duration}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/talent-development"
              className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
            >
              View All Programs
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600">
              Real careers transformed through our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Business Analyst at JPMorgan Chase",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                quote: "The real project experience made all the difference. I started my new role confident and ready to contribute from day one."
              },
              {
                name: "Michael Rodriguez",
                role: "Product Owner at Spotify",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
                quote: "The program didn't just teach me about product management – it made me think like a product leader."
              },
              {
                name: "Emma Thompson",
                role: "Scrum Master at Barclays",
                image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
                quote: "Tech Ascend didn't just train me for a job – they prepared me for a career with real growth potential."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">{story.name}</h4>
                    <p className="text-sm text-slate-600">{story.role}</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/success-stories"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors text-lg"
            >
              Read More Success Stories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-lime-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Whether you need expert consulting or want to launch your tech career, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Explore Resources
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;