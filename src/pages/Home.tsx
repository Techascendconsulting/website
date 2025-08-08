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
      {/* Hero Section - Large Banner */}
      <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Transform Your Business & Career
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Leading consultancy delivering innovative solutions while developing 
                  the next generation of tech professionals through real-world experience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/consulting"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/apply"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Apply for Training
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-lime-400">500+</div>
                  <div className="text-slate-300">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime-400">95%</div>
                  <div className="text-slate-300">Job Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime-400">£51k</div>
                  <div className="text-slate-300">Avg Starting Salary</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="Professional team collaboration"
                  className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver comprehensive solutions that drive business transformation and career development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs - Lime Green Background */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-lime-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Training Programs</h2>
            <p className="text-xl text-slate-800 max-w-3xl mx-auto">
              Transform your career with our comprehensive work experience programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{program.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-600" />
                    <span className="text-slate-600">{program.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-lime-600">{program.placement}</div>
                  <div className="text-sm text-slate-600">Placement Rate</div>
                </div>
                <Link
                  to="/talent-development"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Why Choose Tech Ascend?
              </h2>
              <div className="space-y-6">
                {[
                  "Real project experience from day one",
                  "95% job placement rate with top companies",
                  "Expert mentorship from industry professionals",
                  "Comprehensive career support and guidance",
                  "Work on live client projects worth millions",
                  "Build a professional portfolio that stands out"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Success story"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Lime Green Background */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-green-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-800 max-w-3xl mx-auto">
              Real careers transformed through our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Business Analyst at JPMorgan Chase",
                salary: "£52,000",
                quote: "The real project experience made all the difference in my interviews."
              },
              {
                name: "Michael Rodriguez",
                role: "Product Owner at Spotify", 
                salary: "£58,000",
                quote: "Tech Ascend didn't just train me for a job – they prepared me for a career."
              },
              {
                name: "Emma Thompson",
                role: "Scrum Master at Barclays",
                salary: "£48,000", 
                quote: "I was hired by the client I worked with during my training project."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-xl hover:bg-white transition-all duration-300">
                <div className="mb-4">
                  <h4 className="font-bold text-slate-800">{story.name}</h4>
                  <p className="text-sm text-slate-600">{story.role}</p>
                  <p className="text-lg font-bold text-purple-600">{story.salary}</p>
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
              className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
            >
              Read More Success Stories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our next cohort and start your journey to a successful tech career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;