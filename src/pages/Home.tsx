import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Award, TrendingUp, Zap, Shield } from 'lucide-react';

const Home = () => {
  console.log('Home component rendering');

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
      title: "Technology Strategy",
      description: "Strategic technology consulting to align IT investments with business objectives."
    }
  ];

  const handleImageLoad = () => {
    console.log('Hero image loaded successfully');
  };

  const handleImageError = () => {
    console.log('Hero image failed to load');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-white">Your Future</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A forward-thinking company blending software solutions and talent development. 
                We provide innovative consulting services and train the next generation of 
                <Link to="/talent-development" className="text-slate-300 hover:text-purple-400 transition-colors">
                  tech professionals
                </Link>.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-lime-400">95%</div>
                  <div className="text-slate-400 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">200+</div>
                  <div className="text-slate-400 text-sm">Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-lime-400">£51k</div>
                  <div className="text-slate-400 text-sm">Avg Salary</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Apply for Training
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/consulting"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Consulting Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="Professional team working together"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full opacity-70 animate-bounce"></div>
              
              {/* Achievement Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-lime-600" />
                  <span className="font-semibold text-slate-800">95% Success Rate</span>
                </div>
              </div>
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
              Comprehensive solutions for business transformation and career development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              console.log(`Rendering service ${index + 1}: ${service.title}`);
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Training Programs</h2>
            <p className="text-xl text-slate-600">
              Launch your tech career with our comprehensive training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Business Analyst", duration: "16 weeks", salary: "£45k-£65k" },
              { title: "Project Manager", duration: "20 weeks", salary: "£50k-£70k" },
              { title: "Product Owner", duration: "14 weeks", salary: "£48k-£68k" },
              { title: "Scrum Master", duration: "12 weeks", salary: "£42k-£62k" }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{program.title}</h3>
                <p className="text-slate-600 mb-2">{program.duration}</p>
                <p className="text-lime-600 font-semibold mb-4">{program.salary}</p>
                <Link
                  to="/talent-development"
                  className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-lime-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of professionals who have launched successful tech careers with Tech Ascend
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/success-stories"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Success Stories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;