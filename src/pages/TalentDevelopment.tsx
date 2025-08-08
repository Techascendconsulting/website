import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Award, BookOpen, Target, TrendingUp } from 'lucide-react';

const TalentDevelopment = () => {
  const programs = [
    {
      id: "business-analyst",
      title: "Business Analyst (BA)",
      duration: "16 weeks",
      icon: <Target className="w-8 h-8 text-purple-600" />,
      description: "Master the art of bridging business needs with technical solutions through comprehensive business analysis training.",
      skills: [
        "Requirements gathering and documentation",
        "Process mapping and analysis", 
        "Stakeholder management",
        "Data analysis and modeling",
        "Solution design and testing"
      ],
      salary: "£45k - £65k",
      placement: "96%",
      nextStart: "February 10, 2025"
    },
    {
      id: "project-manager",
      title: "Project Manager (PM)",
      duration: "20 weeks",
      icon: <Users className="w-8 h-8 text-lime-600" />,
      description: "Lead successful projects from initiation to completion with our comprehensive project management program.",
      skills: [
        "Project planning and scheduling",
        "Risk management",
        "Team leadership and communication",
        "Budget and resource management",
        "Agile and waterfall methodologies"
      ],
      salary: "£50k - £70k",
      placement: "94%",
      nextStart: "February 24, 2025"
    },
    {
      id: "product-owner",
      title: "Product Owner (PO)",
      duration: "14 weeks", 
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      description: "Drive product success by mastering product strategy, user experience, and stakeholder management.",
      skills: [
        "Product strategy and roadmapping",
        "User story creation and management",
        "Market research and analysis",
        "Stakeholder communication",
        "Agile product development"
      ],
      salary: "£48k - £68k",
      placement: "95%",
      nextStart: "March 3, 2025"
    },
    {
      id: "scrum-master",
      title: "Scrum Master (SM)",
      duration: "12 weeks",
      icon: <Award className="w-8 h-8 text-lime-600" />,
      description: "Facilitate agile teams and drive organizational transformation as a certified Scrum Master.",
      skills: [
        "Scrum framework mastery",
        "Team facilitation and coaching",
        "Agile transformation",
        "Conflict resolution",
        "Continuous improvement"
      ],
      salary: "£42k - £62k",
      placement: "97%",
      nextStart: "March 10, 2025"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      title: "Real Project Experience",
      description: "Work on live client projects from day one, not just theoretical exercises"
    },
    {
      icon: <Users className="w-6 h-6 text-lime-600" />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with years of real-world experience"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Industry Certifications",
      description: "Prepare for and achieve recognized professional certifications"
    },
    {
      icon: <Target className="w-6 h-6 text-lime-600" />,
      title: "Job Placement Support",
      description: "Comprehensive career support including interview prep and job search assistance"
    }
  ];

  const learningPath = [
    {
      phase: "Foundation",
      weeks: "Weeks 1-4",
      description: "Core concepts, methodologies, and industry best practices",
      color: "purple"
    },
    {
      phase: "Application",
      weeks: "Weeks 5-8", 
      description: "Hands-on practice with real tools and simulated scenarios",
      color: "lime"
    },
    {
      phase: "Real Projects",
      weeks: "Weeks 9-12+",
      description: "Work on live client projects with mentor guidance",
      color: "purple"
    },
    {
      phase: "Career Prep",
      weeks: "Final 2 weeks",
      description: "Interview preparation, portfolio building, and job search",
      color: "lime"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Talent Development
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your career with our comprehensive training programs. Gain real-world 
              experience through live projects and expert mentorship.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-lime-400" />
                <span>12-20 weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Small cohorts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-lime-400" />
                <span>95% placement rate</span>
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
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Training Programs</h2>
            <p className="text-xl text-slate-600">
              Choose from our specialized programs designed for high-demand tech roles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={program.id} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{program.title}</h3>
                    <p className="text-slate-600">{program.duration} • Next start: {program.nextStart}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-slate-800">{program.salary}</div>
                    <div className="text-sm text-slate-600">Starting Salary</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-lime-600">{program.placement}</div>
                    <div className="text-sm text-slate-600">Placement Rate</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Skills You'll Learn:</h4>
                  <ul className="space-y-2">
                    {program.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-lime-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/apply"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:shadow-lg' 
                      : 'bg-gradient-to-r from-lime-500 to-lime-600 text-white hover:shadow-lg'
                  }`}
                >
                  Apply for {program.title}
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Your Learning Journey</h2>
            <p className="text-xl text-slate-600">
              A structured path from beginner to job-ready professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPath.map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 ${
                  phase.color === 'purple' 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700' 
                    : 'bg-gradient-to-r from-lime-500 to-lime-600'
                }`}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{phase.phase}</h3>
                <p className="text-sm text-slate-600 mb-3">{phase.weeks}</p>
                <p className="text-slate-700">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl text-slate-600">
              What sets our training apart from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-lime-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Graduates Placed" },
              { number: "£51k", label: "Average Starting Salary" },
              { number: "95%", label: "Job Placement Rate" },
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
            Ready to Start Your Career Transformation?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our next cohort and take the first step towards your new tech career
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
              to="/work-experience"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Learn About Work Experience
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentDevelopment;