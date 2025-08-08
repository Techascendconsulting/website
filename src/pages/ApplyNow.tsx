import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Award } from 'lucide-react';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: 'business-analyst',
    startDate: 'feb-2025',
    experience: 'entry-level',
    education: 'bachelors',
    currentRole: '',
    motivation: '',
    availability: 'full-time',
    hearAbout: 'google'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your application! We\'ll review it and get back to you within 3 business days.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: 'business-analyst',
        startDate: 'feb-2025',
        experience: 'entry-level',
        education: 'bachelors',
        currentRole: '',
        motivation: '',
        availability: 'full-time',
        hearAbout: 'google'
      });
    }, 1500);
  };

  const programs = [
    {
      id: 'business-analyst',
      title: 'Business Analyst (BA)',
      duration: '16 weeks',
      nextStart: 'February 10, 2025',
      spots: '8 spots remaining'
    },
    {
      id: 'project-manager',
      title: 'Project Manager (PM)',
      duration: '20 weeks',
      nextStart: 'February 24, 2025',
      spots: '6 spots remaining'
    },
    {
      id: 'product-owner',
      title: 'Product Owner (PO)',
      duration: '14 weeks',
      nextStart: 'March 3, 2025',
      spots: '10 spots remaining'
    },
    {
      id: 'scrum-master',
      title: 'Scrum Master (SM)',
      duration: '12 weeks',
      nextStart: 'March 10, 2025',
      spots: '12 spots remaining'
    }
  ];

  const benefits = [
    "Real project experience from day one",
    "Industry expert mentorship",
    "95% job placement rate",
    "£45k+ average starting salary",
    "Professional certification preparation",
    "Lifetime career support"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Apply for Training
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the first step towards your new tech career. Join our next cohort and 
              transform your professional future with real-world experience and expert guidance.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-lime-400" />
                <span>12-20 weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-lime-400" />
                <span>Small cohorts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-lime-400" />
                <span>95% placement rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Choose Your Program</h2>
            <p className="text-xl text-slate-600">
              Select the program that aligns with your career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {programs.map((program) => (
              <div key={program.id} className="bg-slate-50 p-6 rounded-xl border-2 border-transparent hover:border-lime-400 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{program.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-2 text-lime-500" />
                    {program.duration}
                  </div>
                  <div className="text-sm text-slate-600">
                    <strong>Next Start:</strong> {program.nextStart}
                  </div>
                  <div className="text-sm text-lime-600 font-medium">
                    {program.spots}
                  </div>
                </div>
                <Link
                  to={`/talent-development#${program.id}`}
                  className="text-lime-600 font-semibold hover:text-lime-700 transition-colors text-sm flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1" size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Application Form</h2>
              <p className="text-xl text-slate-600">
                Tell us about yourself and your career aspirations
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="+44 (0) 20 1234 5678"
                    />
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                  Program Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Program *
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    >
                      <option value="business-analyst">Business Analyst (16 weeks)</option>
                      <option value="project-manager">Project Manager (20 weeks)</option>
                      <option value="product-owner">Product Owner (14 weeks)</option>
                      <option value="scrum-master">Scrum Master (12 weeks)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Start Date *
                    </label>
                    <select
                      id="startDate"
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    >
                      <option value="feb-2025">February 2025</option>
                      <option value="mar-2025">March 2025</option>
                      <option value="apr-2025">April 2025</option>
                      <option value="may-2025">May 2025</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-slate-700 mb-2">
                      Availability *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    >
                      <option value="full-time">Full-time (Weekdays 9-5)</option>
                      <option value="part-time-evening">Part-time (Evenings)</option>
                      <option value="part-time-weekend">Part-time (Weekends)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-slate-700 mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      required
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    >
                      <option value="google">Google Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Friend/Colleague Referral</option>
                      <option value="social-media">Social Media</option>
                      <option value="job-board">Job Board</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Background Information */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                  Background Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                      Professional Experience Level *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    >
                      <option value="entry-level">Entry Level (0-2 years)</option>
                      <option value="mid-level">Mid Level (2-5 years)</option>
                      <option value="senior-level">Senior Level (5+ years)</option>
                      <option value="career-change">Career Changer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-slate-700 mb-2">
                      Highest Education Level *
                    </label>
                    <select
                      id="education"
                      name="education"
                      required
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    >
                      <option value="high-school">High School</option>
                      <option value="some-college">Some College</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="currentRole" className="block text-sm font-medium text-slate-700 mb-2">
                    Current/Most Recent Role
                  </label>
                  <input
                    type="text"
                    id="currentRole"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    placeholder="e.g., Marketing Coordinator, Software Developer, etc."
                  />
                </div>
              </div>

              {/* Motivation */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                  Tell Us About Your Goals
                </h3>
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-slate-700 mb-2">
                    Why are you interested in this program? What are your career goals? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={6}
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Share your motivation for joining our program, your career goals, and what you hope to achieve..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Happens Next?</h2>
            <p className="text-xl text-slate-600">
              Our application process is designed to ensure the best fit for both you and our program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Application Review",
                description: "We review your application within 3 business days and may request additional information",
                timeframe: "3 days"
              },
              {
                step: "2",
                title: "Interview",
                description: "Successful candidates are invited for a video interview to discuss goals and fit",
                timeframe: "1 week"
              },
              {
                step: "3", 
                title: "Offer & Enrollment",
                description: "Accepted candidates receive an offer letter and can secure their spot with enrollment",
                timeframe: "2 weeks"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full flex items-center justify-center text-2xl font-bold text-slate-900 mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{phase.title}</h3>
                <p className="text-slate-600 mb-3">{phase.description}</p>
                <span className="text-sm text-lime-600 font-medium">~{phase.timeframe}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Reminder */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose Tech Ascend?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <CheckCircle className="w-6 h-6 text-lime-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link
              to="/success-stories"
              className="inline-flex items-center text-lime-400 font-semibold hover:text-lime-300 transition-colors text-lg"
            >
              Read Our Success Stories
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;