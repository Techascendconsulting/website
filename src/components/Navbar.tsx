import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Rocket,
  Workflow,
  Users,
  Shield,
  BarChart,
  Wrench,
  Cloud,
  Sparkles,
  GraduationCap,
  FileText,
  MessagesSquare,
  Briefcase,
  ArrowRight,
  Target,
  Award,
  Clock,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  // Close dropdowns when clicking outside or pressing Escape
  const navRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close any open dropdown when route changes
  React.useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const servicesMega = {
    id: 'Services',
    columns: [
      {
        heading: 'Transformation',
        items: [
          {
            icon: <Rocket className="w-5 h-5 text-lime-400" />,
            title: 'Digital Transformation',
            description: 'Modernize processes and platforms end-to-end',
            href: '/consulting#digital-transformation',
          },
          {
            icon: <Workflow className="w-5 h-5 text-lime-400" />,
            title: 'Agile Implementation',
            description: 'Adopt agile at team and enterprise scale',
            href: '/consulting#agile-implementation',
          },
          {
            icon: <Users className="w-5 h-5 text-lime-400" />,
            title: 'Business Analysis',
            description: 'Capture requirements that drive outcomes',
            href: '/consulting#business-analysis',
          },
        ],
      },
      {
        heading: 'Strategy & Enablement',
        items: [
          {
            icon: <Shield className="w-5 h-5 text-lime-400" />,
            title: 'Technology Strategy',
            description: 'Roadmaps, governance, and risk management',
            href: '/consulting#technology-strategy',
          },
          {
            icon: <BarChart className="w-5 h-5 text-lime-400" />,
            title: 'Data & Analytics',
            description: 'Insights to inform smarter decisions',
            href: '/resources',
          },
          {
            icon: <Cloud className="w-5 h-5 text-lime-400" />,
            title: 'Cloud Adoption',
            description: 'Migration, optimization, and security',
            href: '/resources',
          },
        ],
      },
      {
        heading: 'Solutions & CTA',
        items: [
          {
            icon: <Wrench className="w-5 h-5 text-lime-400" />,
            title: 'Delivery Acceleration',
            description: 'Tooling, automation, and DevOps practices',
            href: '/resources',
          },
          {
            icon: <Sparkles className="w-5 h-5 text-lime-400" />,
            title: 'Innovation Labs',
            description: 'Experimentation with measurable value',
            href: '/resources',
          },
        ],
        cta: {
          label: 'Talk to a Consultant',
          href: '/contact',
        },
      },
    ],
  } as const;

  const trainingMega = {
    id: 'Training',
    columns: [
      {
        heading: 'Programs',
        items: [
          {
            icon: <FileText className="w-5 h-5 text-lime-400" />,
            title: 'Business Analyst',
            description: 'Requirements, stakeholder, and delivery skills',
            href: '/talent-development#business-analyst',
          },
          {
            icon: <Briefcase className="w-5 h-5 text-lime-400" />,
            title: 'Project Manager',
            description: 'Plan, manage risk, and lead execution',
            href: '/talent-development#project-manager',
          },
        ],
      },
      {
        heading: 'Leadership Tracks',
        items: [
          {
            icon: <GraduationCap className="w-5 h-5 text-lime-400" />,
            title: 'Product Owner',
            description: 'Own vision, backlog, and value delivery',
            href: '/talent-development#product-owner',
          },
          {
            icon: <Users className="w-5 h-5 text-lime-400" />,
            title: 'Scrum Master',
            description: 'Coach teams and enable continuous improvement',
            href: '/talent-development#scrum-master',
          },
        ],
      },
      {
        heading: 'Get Support',
        items: [
          {
            icon: <MessagesSquare className="w-5 h-5 text-lime-400" />,
            title: 'Career Coaching',
            description: 'CV review, interview prep, job search',
            href: '/resources',
          },
          {
            icon: <BarChart className="w-5 h-5 text-lime-400" />,
            title: 'Success Stories',
            description: 'See outcomes from past cohorts',
            href: '/success-stories',
          },
        ],
        cta: {
          label: 'Apply Now',
          href: '/apply',
        },
      },
    ],
  } as const;

  const workExperienceMega = {
    id: 'Work Experience',
    columns: [
      {
        heading: 'Explore Projects',
        items: [
          {
            icon: <Briefcase className="w-5 h-5 text-lime-400" />,
            title: 'Live Client Projects',
            description: 'Real engagements with measurable outcomes',
            href: '/work-experience',
          },
          {
            icon: <Target className="w-5 h-5 text-lime-400" />,
            title: 'Roles & Responsibilities',
            description: 'BA, PM, PO, and Scrum roles on projects',
            href: '/work-experience',
          },
          {
            icon: <Award className="w-5 h-5 text-lime-400" />,
            title: 'Portfolio Building',
            description: 'Deliverables to showcase your skills',
            href: '/work-experience',
          },
        ],
      },
      {
        heading: 'Program Benefits',
        items: [
          {
            icon: <Users className="w-5 h-5 text-lime-400" />,
            title: 'Professional Mentorship',
            description: 'Guidance from experienced consultants',
            href: '/work-experience',
          },
          {
            icon: <BarChart className="w-5 h-5 text-lime-400" />,
            title: 'Career Outcomes',
            description: 'Pathways into leading organizations',
            href: '/success-stories',
          },
          {
            icon: <Clock className="w-5 h-5 text-lime-400" />,
            title: 'Timeline & Commitment',
            description: '8–14 weeks of hands-on experience',
            href: '/work-experience',
          },
        ],
      },
      {
        heading: 'Get Started',
        items: [
          {
            icon: <MessagesSquare className="w-5 h-5 text-lime-400" />,
            title: 'Speak to Us',
            description: 'We’ll help you choose the right path',
            href: '/contact',
          },
          {
            icon: <Sparkles className="w-5 h-5 text-lime-400" />,
            title: 'Success Stories',
            description: 'Hear from people who made the jump',
            href: '/success-stories',
          },
        ],
        cta: {
          label: 'Apply for Work Experience',
          href: '/apply',
        },
      },
    ],
  } as const;

  type MegaConfig = typeof servicesMega;

  const navigation: Array<
    | { name: 'Home' | 'Success Stories' | 'Resources' | 'Contact'; href: string }
    | { name: 'Services' | 'Training' | 'Work Experience'; href: string; mega: MegaConfig }
  > = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/consulting', mega: servicesMega },
    { name: 'Training', href: '/talent-development', mega: trainingMega },
    { name: 'Work Experience', href: '/work-experience', mega: workExperienceMega },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleTriggerFocus = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900 shadow-2xl"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={() => setActiveDropdown(null)}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-lime-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">TA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-5 text-white">Tech Ascend</span>
              <span className="text-sm text-slate-300">Consultancy Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {'mega' in item ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onFocus={() => handleTriggerFocus(item.name)}
                  >
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                      aria-controls={`mega-${item.name}`}
                      className={`flex items-center space-x-1 text-slate-300 hover:text-lime-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800 ${
                        location.pathname.startsWith(item.href) ? 'text-lime-400 bg-slate-800' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Mega Menu Panel */}
                    <div
                      id={`mega-${item.name}`}
                      role="region"
                      aria-label={`${item.name} menu`}
                      className={`absolute left-0 mt-2 w-[900px] max-w-[90vw] bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 transition-all duration-200 ${
                        activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                    >
                      <div className="grid grid-cols-3 gap-6 p-6">
                        {item.mega.columns.map((col, colIdx) => (
                          <div key={colIdx} className="">
                            <h4 className="text-sm font-semibold text-slate-300 mb-3 tracking-wide uppercase">
                              {col.heading}
                            </h4>
                            <ul className="space-y-2">
                              {col.items.map((entry) => (
                                <li key={entry.title}>
                                  <Link
                                    to={entry.href}
                                    className="group flex items-start gap-3 rounded-xl p-3 hover:bg-slate-700/60"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="mt-0.5">{entry.icon}</div>
                                    <div>
                                      <div className="font-semibold text-slate-100 group-hover:text-lime-400">{entry.title}</div>
                                      <div className="text-sm text-slate-400">{entry.description}</div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {colIdx === 2 && col['cta'] ? (
                              <div className="mt-4">
                                <Link
                                  to={col.cta!.href}
                                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-lime-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {col.cta!.label}
                                  <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-slate-300 hover:text-lime-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800 ${
                      location.pathname === item.href ? 'text-lime-400 bg-slate-800' : ''
                    }`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/apply"
              className="ml-4 bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setActiveDropdown(null)}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-lime-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 border-t border-slate-700 rounded-b-xl">
              {navigation.map((item) => (
                <div key={item.name}>
                  {'mega' in item ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`flex items-center justify-between w-full px-3 py-2 text-slate-300 hover:text-lime-400 transition-colors font-medium rounded-lg hover:bg-slate-700 ${
                          location.pathname.startsWith(item.href) ? 'text-lime-400 bg-slate-700' : ''
                        }`}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.name}
                        aria-controls={`mobile-accordion-${item.name}`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div id={`mobile-accordion-${item.name}`} className="ml-2 mt-2 space-y-4">
                          {item.mega.columns.map((col, colIdx) => (
                            <div key={colIdx} className="bg-slate-700/50 rounded-xl p-3">
                              <h4 className="text-sm font-semibold text-slate-300 mb-2 tracking-wide uppercase">
                                {col.heading}
                              </h4>
                              <ul className="space-y-2">
                                {col.items.map((entry) => (
                                  <li key={entry.title}>
                                    <Link
                                      to={entry.href}
                                      className="flex items-start gap-3 rounded-lg p-2 hover:bg-slate-700"
                                      onClick={() => {
                                        setIsOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      <div className="mt-0.5">{entry.icon}</div>
                                      <div>
                                        <div className="font-semibold text-slate-100">{entry.title}</div>
                                        <div className="text-sm text-slate-400">{entry.description}</div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              {colIdx === 2 && col['cta'] ? (
                                <div className="mt-3">
                                  <Link
                                    to={col.cta!.href}
                                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-lime-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {col.cta!.label}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                  </Link>
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-slate-300 hover:text-lime-400 transition-colors font-medium rounded-lg hover:bg-slate-700 ${
                        location.pathname === item.href ? 'text-lime-400 bg-slate-700' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/apply"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;