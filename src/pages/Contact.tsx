import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: 'consulting',
    company: '',
    message: ''
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
      alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiry: 'consulting',
        company: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-lime-500" />,
      title: "Email Us",
      details: "info@techascend.co.uk",
      description: "Get a response within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6 text-lime-500" />,
      title: "Call Us", 
      details: "+44 (0) 20 7946 0958",
      description: "Mon-Fri, 9am-6pm GMT"
    },
    {
      icon: <MapPin className="w-6 h-6 text-lime-500" />,
      title: "Visit Us",
      details: "London, United Kingdom",
      description: "Central London office"
    },
    {
      icon: <Clock className="w-6 h-6 text-lime-500" />,
      title: "Office Hours",
      details: "9:00 AM - 6:00 PM",
      description: "Monday to Friday"
    }
  ];

  const faqs = [
    {
      question: "What makes your training programs different?",
      answer: "Our work experience model means you work on real client projects from day one, not just theoretical exercises. This gives you authentic professional experience that employers recognize and value."
    },
    {
      question: "How long are the training programs?",
      answer: "Programs range from 12-20 weeks depending on the role: Scrum Master (12 weeks), Product Owner (14 weeks), Business Analyst (16 weeks), and Project Manager (20 weeks)."
    },
    {
      question: "Do you guarantee job placement?",
      answer: "While we can't guarantee employment, we have a 95% job placement rate. We provide comprehensive career support including interview preparation, resume optimization, and job search assistance."
    },
    {
      question: "Can I study part-time?",
      answer: "We offer both full-time intensive programs and part-time evening/weekend options to accommodate different schedules and commitments."
    },
    {
      question: "What kind of consulting services do you offer?",
      answer: "We specialize in digital transformation, agile implementation, business analysis, project management, and technology strategy consulting across multiple industries."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients globally. Many of our consulting projects are delivered remotely, and our training programs attract international students."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business or launch your tech career? We're here to help. 
              Reach out for consulting inquiries, training program questions, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-2xl mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-slate-900 mb-1">{info.details}</p>
                <p className="text-slate-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <p className="text-xl text-slate-600 mb-8">
                Tell us about your needs and we'll get back to you with a tailored solution.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="Your full name"
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                      placeholder="+44 (0) 20 1234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-slate-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    >
                      <option value="consulting">Consulting Services</option>
                      <option value="training">Training Programs</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your needs, challenges, or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* CTA Card */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-slate-300 mb-6">
                  If you're interested in joining our training programs, you can apply directly 
                  through our application portal.
                </p>
                <Link
                  to="/apply"
                  className="inline-flex items-center bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h4>
                {[
                  { name: "Download Course Brochure", href: "#" },
                  { name: "View Success Stories", href: "/success-stories" },
                  { name: "Explore Resources", href: "/resources" },
                  { name: "Book a Consultation", href: "#" }
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block text-slate-600 hover:text-lime-600 transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 flex-shrink-0" size={16} />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;