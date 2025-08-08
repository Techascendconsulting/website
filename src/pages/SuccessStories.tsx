import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star, TrendingUp } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Chen",
      role: "Senior Business Analyst",
      company: "JPMorgan Chase",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      salary: "£52,000",
      timeline: "Hired 4 weeks after graduation",
      background: "Career changer from marketing",
      story: "After 8 years in marketing, I knew I wanted to transition into tech but didn't know where to start. Tech Ascend's BA program not only taught me the skills but gave me real project experience. Working on the digital transformation project for a major retailer gave me the confidence and portfolio I needed. My interviewer was impressed by the actual work I had done, not just theoretical knowledge.",
      projectHighlight: "Led requirements gathering for a £2M digital transformation initiative",
      quote: "The real project experience made all the difference. I started my new role confident and ready to contribute from day one."
    },
    {
      name: "Michael Rodriguez",
      role: "Product Owner",
      company: "Spotify",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      salary: "£58,000",
      timeline: "Multiple offers within 6 weeks",
      background: "Recent computer science graduate",
      story: "As a fresh CS graduate, I had technical skills but no business acumen. Tech Ascend's PO program bridged that gap perfectly. Working on the fintech startup's mobile app development taught me how to balance user needs with business objectives. The mentorship from experienced product managers was invaluable in shaping my strategic thinking.",
      projectHighlight: "Defined product roadmap for a fintech startup's Series A funding",
      quote: "The program didn't just teach me about product management – it made me think like a product leader."
    },
    {
      name: "Emma Thompson",
      role: "Scrum Master",
      company: "Barclays",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      salary: "£48,000",
      timeline: "Hired by client from training project",
      background: "Former project coordinator",
      story: "I was a project coordinator feeling stuck in my career. The Scrum Master program opened up a completely new path for me. The highlight was facilitating the agile transformation for a healthcare tech company – they were so impressed with my work that they offered me a permanent position. But I chose to explore other opportunities and landed at Barclays with better compensation.",
      projectHighlight: "Successfully coached 3 development teams through agile transformation",
      quote: "Tech Ascend didn't just train me for a job – they prepared me for a career with real growth potential."
    },
    {
      name: "David Okafor",
      role: "Senior Project Manager",
      company: "Accenture",
      image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
      salary: "£55,000",
      timeline: "Promoted within 8 months of starting",
      background: "Military veteran transitioning to civilian career",
      story: "Transitioning from military to civilian life was challenging. Tech Ascend's PM program provided structure I was familiar with but applied to the business world. The real project management experience on multiple client engagements gave me a diverse portfolio. My military leadership background combined with Tech Ascend's business training made me a strong candidate.",
      projectHighlight: "Managed a complex system integration project worth £5M",
      quote: "The program respected my existing skills while building the business acumen I needed for success in consulting."
    },
    {
      name: "Priya Sharma",
      role: "Lead Business Analyst",
      company: "KPMG",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      salary: "£60,000",
      timeline: "Started as Senior BA after graduation",
      background: "Finance professional seeking tech transition",
      story: "With 10 years in finance, I understood business but not technology. The BA program was perfect for bridging that gap. Working on the digital transformation project taught me how to translate business needs into technical requirements. My finance background became an asset when combined with my new BA skills – I could speak both languages fluently.",
      projectHighlight: "Led business analysis for a major bank's regulatory compliance system",
      quote: "Tech Ascend showed me how to leverage my existing skills while building new ones. I'm earning more now than I ever did in finance."
    },
    {
      name: "James Mitchell",
      role: "Agile Coach",
      company: "Deloitte",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      salary: "£62,000",
      timeline: "Headhunted during final project",
      background: "Startup founder looking for stability",
      story: "After my startup didn't work out, I needed to rebuild my career. The Scrum Master program gave me credible experience in agile methodologies. The coaching aspect really resonated with my leadership style. Working with multiple client teams during training gave me the confidence to position myself as an agile coach rather than just a Scrum Master. Deloitte recruited me during my final project.",
      projectHighlight: "Designed agile transformation strategy for a Fortune 500 company",
      quote: "The program helped me turn my entrepreneurial experience into valuable consulting skills."
    }
  ];

  const stats = [
    { number: "95%", label: "Job Placement Rate" },
    { number: "£51k", label: "Average Starting Salary" },
    { number: "6 weeks", label: "Average Time to Offer" },
    { number: "87%", label: "Promoted Within 12 Months" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real careers transformed through our work experience programs. These aren't just job placements – 
              they're career transformations that create lasting impact.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center bg-gradient-to-r from-lime-400 to-lime-500 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Success Story
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-lime-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Graduate Success Stories</h2>
            <p className="text-xl text-slate-600">
              From diverse backgrounds to leading tech careers
            </p>
          </div>

          <div className="space-y-16">
            {stories.map((story, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-start mb-6">
                      <Quote className="w-8 h-8 text-lime-400 flex-shrink-0 mr-4 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{story.name}</h3>
                        <p className="text-lime-600 font-semibold mb-1">{story.role}</p>
                        <p className="text-slate-600 mb-4">{story.company}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-slate-800">{story.salary}</div>
                        <div className="text-sm text-slate-600">Starting Salary</div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <div className="text-sm font-bold text-slate-800">{story.timeline}</div>
                        <div className="text-sm text-slate-600">Job Placement</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="inline-block bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        Background: {story.background}
                      </span>
                      <p className="text-slate-700 mb-4 leading-relaxed">{story.story}</p>
                      <div className="bg-gradient-to-r from-lime-50 to-green-50 p-4 rounded-lg border-l-4 border-lime-400">
                        <p className="text-sm font-semibold text-slate-800 mb-1">Key Project Achievement:</p>
                        <p className="text-slate-700">{story.projectHighlight}</p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-lime-400 pl-4 italic text-slate-700 font-medium">
                      "{story.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Career Progression</h2>
            <p className="text-xl text-slate-600">
              Our graduates don't just get jobs – they build careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Year 1: Foundation",
                salary: "£45k - £55k",
                roles: ["Business Analyst", "Junior PM", "Product Owner", "Scrum Master"],
                description: "Start with solid fundamentals and real project experience"
              },
              {
                title: "Year 2-3: Growth", 
                salary: "£55k - £70k",
                roles: ["Senior BA", "Project Manager", "Senior PO", "Agile Coach"],
                description: "Advance to senior roles with increased responsibility"
              },
              {
                title: "Year 4+: Leadership",
                salary: "£70k - £100k+",
                roles: ["Lead BA", "Program Manager", "Head of Product", "Delivery Manager"],
                description: "Move into leadership positions and strategic roles"
              }
            ].map((stage, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
                <TrendingUp className="w-10 h-10 text-lime-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
                <div className="text-lime-400 font-bold text-xl mb-4">{stage.salary}</div>
                <p className="text-slate-300 mb-4">{stage.description}</p>
                <div className="space-y-1">
                  {stage.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="text-sm bg-slate-700 px-3 py-1 rounded-full inline-block mr-2 mb-1">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Join Our Alumni Network</h2>
            <p className="text-xl text-slate-600">
              Success doesn't end at graduation – it's just the beginning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { company: "JPMorgan Chase", count: "15+ Alumni" },
              { company: "Accenture", count: "12+ Alumni" },
              { company: "Deloitte", count: "10+ Alumni" },
              { company: "KPMG", count: "8+ Alumni" },
              { company: "Barclays", count: "7+ Alumni" },
              { company: "Spotify", count: "5+ Alumni" },
              { company: "Amazon", count: "6+ Alumni" },
              { company: "Google", count: "4+ Alumni" }
            ].map((company, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center border border-slate-200 hover:border-lime-400 transition-all duration-300">
                <h3 className="font-bold text-slate-800 mb-2">{company.company}</h3>
                <p className="text-lime-600 font-semibold">{company.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-green-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Join hundreds of professionals who have transformed their careers with Tech Ascend
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
              Talk to an Advisor
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;