import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      dropdown: [
        { name: 'Consulting Services', path: '/consulting' },
        { name: 'Digital Transformation', path: '/consulting#digital-transformation' },
        { name: 'Agile Implementation', path: '/consulting#agile' },
        { name: 'Business Analysis', path: '/consulting#business-analysis' }
      ]
    },
    {
      name: 'Training',
      dropdown: [
        { name: 'Talent Development', path: '/talent-development' },
        { name: 'Work Experience Program', path: '/work-experience' },
        { name: 'Business Analyst Training', path: '/talent-development#business-analyst' },
        { name: 'Project Manager Training', path: '/talent-development#project-manager' },
        { name: 'Product Owner Training', path: '/talent-development#product-owner' },
        { name: 'Scrum Master Training', path: '/talent-development#scrum-master' }
      ]
    },
    {
      name: 'About',
      dropdown: [
        { name: 'Success Stories', path: '/success-stories' },
        { name: 'Our Approach', path: '/consulting#approach' },
        { name: 'Industries We Serve', path: '/consulting#industries' }
      ]
    },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TA</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-5 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Tech Ascend
              </span>
              <span className={`text-sm ${
                isScrolled ? 'text-slate-600' : 'text-slate-200'
              }`}>
                Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className={`font-medium transition-colors duration-200 hover:text-purple-400 flex items-center space-x-1 ${
                        item.dropdown.some(subItem => location.pathname === subItem.path)
                          ? 'text-purple-400'
                          : isScrolled
                          ? 'text-slate-700'
                          : 'text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-3 text-sm transition-colors duration-200 hover:bg-purple-50 hover:text-purple-600 ${
                              location.pathname === subItem.path
                                ? 'text-purple-600 bg-purple-50'
                                : 'text-slate-700'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-200 hover:text-purple-400 ${
                      location.pathname === item.path
                        ? 'text-purple-400'
                        : isScrolled
                        ? 'text-slate-700'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/apply"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 pt-4 px-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`w-full text-left py-2 font-medium transition-colors duration-200 hover:text-purple-600 flex items-center justify-between ${
                          item.dropdown.some(subItem => location.pathname === subItem.path)
                            ? 'text-purple-600'
                            : 'text-slate-700'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className={`block py-2 text-sm transition-colors duration-200 hover:text-purple-600 ${
                                location.pathname === subItem.path
                                  ? 'text-purple-600 font-medium'
                                  : 'text-slate-600'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 font-medium transition-colors duration-200 hover:text-purple-600 ${
                        location.pathname === item.path
                          ? 'text-purple-600'
                          : 'text-slate-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold text-center mt-4"
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