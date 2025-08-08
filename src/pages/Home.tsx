import React from 'react';
              <Mail size={16} className="text-purple-400" />
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
              <Phone size={16} className="text-purple-400" />
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <MapPin size={16} className="text-purple-400" />
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-lime-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-5">Tech Ascend</span>
                <span className="text-sm text-slate-300">Consultancy Limited</span>
              </div>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
          <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
              We provide innovative consulting services and train the next generation of 
              tech professionals.
          <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors">
          <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
              </a>
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors">
                <Twitter size={20} />
              </a>
                >
                  Explore Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>


            {/* Hero Image */}
            <div className="relative">
              {console.log('Rendering hero image')}
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="Professional team collaboration"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                onLoad={() => console.log('Hero image loaded successfully')}
                onError={() => console.error('Hero image failed to load')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
              
              {/* Achievement Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-lime-500" />
                  <div>
                    <div className="font-bold text-slate-800">95% Success Rate</div>
                    <div className="text-sm text-slate-600">Job Placement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEBUG: Services Section */}
      {console.log('Rendering services section')}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">
              Comprehensive solutions for business transformation and career development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: "Consulting Services",
                description: "Expert consulting in digital transformation, agile implementation, and technology strategy."
              },
              {
                icon: <Users className="w-8 h-8 text-lime-600" />,
                title: "Talent Development",
                description: "Comprehensive training programs that prepare you for high-demand tech roles."
              }
            ].map((service, index) => {
              console.log(`Rendering service ${index + 1}:`, service.title);
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <Link
                    to={index === 0 ? "/consulting" : "/talent-development"}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

              <Link to="/consulting" className="text-slate-300 hover:text-purple-400 transition-colors">