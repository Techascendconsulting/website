import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Award, Clock, Briefcase, TrendingUp } from 'lucide-react';

const WorkExperience = () => {
  const projects = [
    {
      title: "Digital Banking Transformation",
      client: "Major UK Bank",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      description: "Led requirements gathering for a £5M digital banking platform modernization project.",
      roles: ["Business Analyst", "Project Manager"],
      duration: "8 weeks",
      skills: ["Requirements Analysis", "Stakeholder Management", "Process Mapping"]
    },
    {
      title: "E-commerce Platform Development",
      client: "Retail Technology Startup",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      description: "Managed product roadmap and user story development for a new e-commerce platform.",
      roles: ["Product Owner", "Scrum Master"],
      duration: "10 weeks",
      skills: ["Product Strategy", "Agile Coaching", "User Story Mapping"]
    },
    {
      title: "Healthcare System Integration",
      client: "NHS Trust",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      description: "Facilitated agile transformation and system integration for patient management systems.",
      roles: ["Scrum Master", "Business Analyst"],
      duration: "12 weeks",
      skills: ["Agile Transformation", "System Integration", "Change Management"]
    },
    {
      title: "Fintech Mobile App Launch",
      client: "Financial Services Company",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
      description: "Project managed the development and launch of a mobile banking application.",
      roles: ["Project Manager", "Product Owner"],
      duration: "14 weeks",
      skills: ["Mobile Development", "Risk Management", "Go-to-Market Strategy"]
    }
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Real Client Work",
      description: "Work on actual client projects with real business impact, not simulated exercises"
    },
    {
      icon: <Users className="w-8 h-8 text-lime-600" />,
      title: "Professional Mentorship",
      description: "Guided by experienced consultants who provide ongoing support and feedback"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Portfolio Development",
      description: "Build a professional portfolio with real project deliverables and outcomes"
    },
    {
      icon: <Award className="w-8 h-8 text-lime-600" />,
      title: "Industry Recognition",
      description: "Gain credible experience that employers recognize and value"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Project Assignment",
      description: "Matched to live client projects based on your chosen specialization and learning objectives",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      step: "2",
      title: "Team Integration",
      description: "Join our consulting teams and work alongside experienced professionals on real deliverables",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      step: "3",
      title: "Skill Application",
      description: "Apply your training in real-world scenarios with mentor guidance and regular feedback",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    },
    {
      step: "4",
      title: "Career Transition",
      description: "Leverage your project experience and portfolio to secure your next role with confidence",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Business Analyst at JPMorgan Chase",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      quote: "Working on the digital transformation project gave me real experience I could talk about in interviews. My new employer was impressed by the actual work I had done.",
      project: "Digital Banking Transformation"
    },
    {
      name: "Michael Rodriguez", 
      role: "Product Owner at Spotify",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      quote: "The fintech project taught me how to balance user needs with business objectives. I started my new role with confidence and practical experience.",
      project: "Fintech Mobile App Launch"
    },
    {
      name: "Emma Thompson",
      role: "Scrum Master at Barclays",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      quote: "Facilitating the NHS agile transformation was challenging but incredibly rewarding. It prepared me for the complexities of real organizational change.",
      project: "Healthcare System Integration"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Work Experience Program
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Gain real-world experience through live client projects. Our unique work experience 
                model ensures you graduate with practical skills and a professional portfolio.
              </p>
              <div className="flex items-center space-x-8 text-slate-300 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-lime-400" />
                  <span>8-14 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>Real client projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-lime-400" />
                  <span>Professional portfolio</span>
                </div>
              </div>
              <Link
                to="/apply"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="Team working on project"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Live Client Projects</h2>
            <p className="text-xl text-slate-600">
              Real projects our trainees have worked on with actual business impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                    <span className="text-sm text-slate-600">{project.duration}</span>
                  </div>
                  <p className="text-slate-600 mb-4">{project.client}</p>
                  <p className="text-slate-700 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Roles Involved:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.roles.map((role, roleIndex) => (
                        <span key={roleIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">
              Your journey from training to professional experience
            </p>
          </div>

          <div className="space-y-16">
            {process.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700' 
                      : 'bg-gradient-to-r from-lime-500 to-lime-600'
                  }`}>
                    {step.step}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Work Experience Matters</h2>
            <p className="text-xl text-slate-600">
              The advantages of learning through real client work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 text-lg">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600">
              How real project experience transformed careers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-purple-600 font-medium">
                  Project: {testimonial.project}
                </div>
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
              { number: "50+", label: "Live Projects" },
              { number: "95%", label: "Job Placement Rate" },
              { number: "£51k", label: "Average Starting Salary" },
              { number: "6 weeks", label: "Average Time to Offer" }
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
            Ready to Gain Real-World Experience?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our work experience program and build your career with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-lime-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Apply for Training
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/success-stories"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Read More Success Stories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;