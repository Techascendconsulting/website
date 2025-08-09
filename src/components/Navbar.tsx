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
        heading: 'Consulting Delivery',
        items: [
          { icon: <Rocket className="w-5 h-5 text-lime-400" />, title: 'Business Analysis', description: 'Requirements that drive outcomes', href: '/services#consulting' },
          { icon: <Workflow className="w-5 h-5 text-lime-400" />, title: 'Product Ownership', description: 'Vision, backlog, and value', href: '/services#consulting' },
          { icon: <Users className="w-5 h-5 text-lime-400" />, title: 'Project Delivery', description: 'Plan, govern, and deliver', href: '/services#consulting' },
        ],
      },
      {
        heading: 'Project-Ready Talent',
        items: [
          { icon: <Shield className="w-5 h-5 text-lime-400" />, title: 'Associate BAs', description: 'Evidence-based analysts', href: '/services#talent' },
          { icon: <BarChart className="w-5 h-5 text-lime-400" />, title: 'PMO & Reporting', description: 'Cadence and insight', href: '/services#talent' },
          { icon: <Cloud className="w-5 h-5 text-lime-400" />, title: 'Onboarding & Support', description: 'Placement and supervision', href: '/services#talent' },
        ],
      },
      {
        heading: 'Get Started',
        items: [
          { icon: <MessagesSquare className="w-5 h-5 text-lime-400" />, title: 'Speak to Us', description: 'Explore options', href: '/contact' },
          { icon: <Sparkles className="w-5 h-5 text-lime-400" />, title: 'Case Studies', description: 'See outcomes delivered', href: '/case-studies' },
        ],
        cta: { label: 'Book a Consultation', href: '/contact' },
      },
    ],
  } as const;

  // Remove trainingMega and workExperienceMega; new structure navigation below

  type MegaConfig = typeof servicesMega;

  const navigation: Array<
    | { name: 'Home' | 'Case Studies' | 'Industries' | 'Careers' | 'Training Pathway' | 'About' | 'Contact'; href: string }
    | { name: 'Services'; href: string; mega: MegaConfig }
  > = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', mega: servicesMega },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Industries', href: '/industries' },
    { name: 'Careers', href: '/careers' },
    { name: 'Training Pathway', href: '/training-pathway' },
    { name: 'About', href: '/about' },
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
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F14] shadow-2xl"
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