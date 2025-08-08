import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/consulting',
      dropdown: [
        { name: 'Digital Transformation', href: '/consulting#digital-transformation' },
        { name: 'Agile Implementation', href: '/consulting#agile-implementation' },
        { name: 'Business Analysis', href: '/consulting#business-analysis' },
        { name: 'Technology Strategy', href: '/consulting#technology-strategy' }
      ]
    },
    { 
      name: 'Training', 
      href: '/talent-development',
      dropdown: [
        { name: 'Business Analyst', href: '/talent-development#business-analyst' },
        { name: 'Project Manager', href: '/talent-development#project-manager' },
        { name: 'Product Owner', href: '/talent-development#product-owner' },
        { name: 'Scrum Master', href: '/talent-development#scrum-master' }
      ]
    },
    { name: 'Work Experience', href: '/work-experience' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
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
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`flex items-center space-x-1 text-slate-300 hover:text-lime-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-slate-800 ${
                        location.pathname === item.href ? 'text-lime-400 bg-slate-800' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 transition-all duration-200 ${
                      activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-slate-300 hover:text-lime-400 hover:bg-slate-700 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
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
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/apply"
              className="ml-4 bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-lime-400 transition-colors"
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
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`flex items-center justify-between w-full px-3 py-2 text-slate-300 hover:text-lime-400 transition-colors font-medium rounded-lg hover:bg-slate-700 ${
                          location.pathname === item.href ? 'text-lime-400 bg-slate-700' : ''
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-slate-400 hover:text-lime-400 transition-colors rounded-lg hover:bg-slate-700"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
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