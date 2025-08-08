import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Award, TrendingUp, Briefcase, Star } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions and strategic technology implementation.",
      link: "/consulting"
    },
    {
      icon: <Users className="w-8 h-8 text-lime-600" />,
      title: "Agile Implementation", 
      description: "Transform your teams with proven agile methodologies and expert coaching for maximum productivity.",
      link: "/consulting"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Business Analysis",
      description: "Bridge the gap between business needs and technical solutions with expert analysis and strategy.",
      link: "/consulting"
    },
    {
      icon: <Award className="w-8 h-8 text-lime-600" />,
      title: "Talent Development",
      description: "Train the next generation of tech professionals with real-world experience and industry expertise.",
      link: "/talent-development"
    }
  ];

  const programs = [
    { title: "Business Analyst", duration: "16 weeks", salary: "£45k-£65k", placement: "96%" },
    { title: "Project Manager", duration: "20 weeks", salary: "£50k-£70k", placement: "94%" },
    { title: "Product Owner", duration: "14 weeks", salary: "£48k-£68k", placement: "95%" },
    { title: "Scrum Master", duration: "12 weeks", salary: "£42k-£62k", placement: "97%" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Business Analyst at JPMorgan Chase",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      quote: "Tech Ascend's program gave me real project experience that made all the difference in my interviews."
    },
    {
      name: "Michael Rodriguez",
      role: "Product Owner at Spotify", 
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      quote: "The mentorship and hands-on experience prepared me for success from day one in my new role."
    },
    {
      name: "Emma Thompson",
      role: "Scrum Master at Barclays",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      quote: "Working on real client projects built my confidence and gave me a portfolio that employers valued."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-purple-400 to-lime-400 bg-clip-text text-transparent">
              Tech Career
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Expert consulting services and comprehensive training programs that bridge the gap 
            between ambition and achievement in the technology sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/apply"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-3" size={24} />
            </Link>
            <Link
              to="/consulting"
              className="inline-flex items-center border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="ml-3" size={24} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "95%", label: "Job Placement Rate" },
              { number: "£51k", label: "Average Starting Salary" },
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Graduates Placed" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-lime-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions that drive business transformation and career advancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-lime-600 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Training Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive programs designed to launch your tech career with real-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{program.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Duration:</span>
                    <span className="font-semibold">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Salary:</span>
                    <span className="font-semibold text-lime-600">{program.salary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Placement:</span>
                    <span className="font-semibold text-purple-600">{program.placement}</span>
                  </div>
                </div>
                <Link
                  to="/talent-development"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real careers transformed through our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex text-lime-500 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/success-stories"
              className="inline-flex items-center text-purple-600 font-semibold hover:text-lime-600 transition-colors text-lg"
            >
              Read More Success Stories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-lime-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join hundreds of professionals who have successfully transitioned into high-paying tech roles
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Apply for Training
              <ArrowRight className="ml-3" size={24} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="ml-3" size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;