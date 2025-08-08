import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, BookOpen, Video, FileText, Users } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      icon: <BookOpen className="w-8 h-8 text-lime-500" />,
      title: "The Complete Guide to Tech Career Transitions",
      type: "Free Ebook",
      description: "Everything you need to know about breaking into Business Analysis, Project Management, Product Ownership, and Scrum Master roles",
      features: [
        "Market analysis and salary benchmarks",
        "Skill requirements for each role",
        "Interview preparation strategies",
        "Career progression pathways"
      ]
    },
    {
      icon: <Video className="w-8 h-8 text-blue-500" />,
      title: "Masterclass: Agile Transformation",
      type: "Video Series",
      description: "Learn from our experts how organizations successfully implement agile methodologies",
      features: [
        "Real case study presentations",
        "Common pitfalls and how to avoid them",
        "Change management strategies",
        "Measuring transformation success"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: "Business Analysis Templates",
      type: "Template Pack",
      description: "Professional templates and frameworks used by our consultants on real projects",
      features: [
        "Requirements documentation templates",
        "Process mapping frameworks",
        "Stakeholder analysis matrices",
        "Business case templates"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Career Development Webinars",
      type: "Live Sessions",
      description: "Monthly webinars covering industry trends, career advice, and skill development",
      features: [
        "Industry expert guest speakers",
        "Q&A with hiring managers",
        "Live coaching sessions",
        "Networking opportunities"
      ]
    }
  ];

  const blogPosts = [
    {
      title: "5 Skills Every Business Analyst Needs in 2025",
      excerpt: "The role of Business Analyst is evolving rapidly. Discover the essential skills that will set you apart in today's market.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Business Analysis"
    },
    {
      title: "Digital Transformation: Why 70% of Projects Fail",
      excerpt: "Learn from real case studies what separates successful digital transformations from costly failures.",
      date: "January 10, 2025", 
      readTime: "8 min read",
      category: "Digital Transformation"
    },
    {
      title: "From Zero to Scrum Master: A Complete Roadmap",
      excerpt: "Step-by-step guide to becoming a certified Scrum Master, even if you're completely new to agile methodologies.",
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "Scrum Master"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access our library of expert resources, industry insights, and career development 
              tools designed to accelerate your professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Resources</h2>
            <p className="text-xl text-slate-600">
              Essential tools and guides from our experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  <div>{resource.icon}</div>
                  <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{resource.title}</h3>
                <p className="text-slate-600 mb-6">{resource.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {resource.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full"></div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Download className="mr-2" size={16} />
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Latest Insights</h2>
            <p className="text-xl text-slate-600">
              Industry expertise and career advice from our consultants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm">{post.date}</span>
                    <Link
                      to="#"
                      className="text-lime-600 font-semibold hover:text-lime-700 transition-colors flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="#"
              className="inline-flex items-center text-lime-600 font-semibold hover:text-lime-700 transition-colors text-lg"
            >
              View All Articles
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tools & Calculators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Career Tools</h2>
            <p className="text-xl text-slate-600">
              Interactive tools to help you plan and advance your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Salary Calculator",
                description: "Get accurate salary expectations based on role, experience, and location",
                action: "Calculate Now"
              },
              {
                title: "Career Path Finder", 
                description: "Discover which tech role aligns best with your skills and interests",
                action: "Take Assessment"
              },
              {
                title: "Skills Gap Analysis",
                description: "Identify the skills you need to develop for your target role",
                action: "Start Analysis"
              }
            ].map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
                <p className="text-slate-300 mb-6">{tool.description}</p>
                <button className="w-full bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  {tool.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get weekly insights on industry trends, career advice, and exclusive resources 
            delivered straight to your inbox
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              Join 5,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-green-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Take the next step with our comprehensive training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
            >
              Apply for Training
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;