import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Talent Development', href: '/talent-development' },
    { name: 'Work Experience', href: '/work-experience' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-lime-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-5 text-slate-800">Tech Ascend</span>
              <span className="text-sm text-slate-600">Consultancy Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-slate-700 hover:text-purple-600 transition-colors font-medium ${
                  location.pathname === item.href ? 'text-purple-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-slate-700 hover:text-purple-600 transition-colors font-medium ${
                    location.pathname === item.href ? 'text-purple-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/apply"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-lime-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4"
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