import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-lime-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-5">Tech Ascend</span>
                <span className="text-sm text-slate-300">Consultancy Limited</span>
              </div>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              A forward-thinking company blending software solutions and talent development. 
              We provide innovative consulting services and train the next generation of 
              <Link to="/talent-development" className="text-slate-300 hover:text-purple-400 transition-colors">
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors">
                <Linkedin size={20} />
              <Link to="/work-experience" className="text-slate-300 hover:text-purple-400 transition-colors">
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
              <Link to="/success-stories" className="text-slate-300 hover:text-purple-400 transition-colors">

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consulting" className="text-slate-300 hover:text-lime-400 transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
              <Mail size={16} className="text-purple-400" />
                  Talent Development
                </Link>
              </li>
              <Phone size={16} className="text-purple-400" />
                <Link to="/work-experience" className="text-slate-300 hover:text-lime-400 transition-colors">
                  Work Experience
                </Link>
              <MapPin size={16} className="text-purple-400" />
              <li>
                <Link to="/success-stories" className="text-slate-300 hover:text-lime-400 transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-lime-400" />
          <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
              </div>
              <div className="flex items-center space-x-3">
          <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
                <span className="text-slate-300">+44 (0) 20 7946 0958</span>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TA</span>
            {/* Hero Image */}
            <div className="relative lg:block">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="Professional team collaboration"
                  className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-600 to-lime-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-lime-400 to-purple-600 rounded-full opacity-60 animate-bounce"></div>
              </div>
              
              {/* Achievement Badge */}
              <div className="absolute -bottom-8 left-8 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-lime-400 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">95% Success Rate</div>
                    <div className="text-sm text-slate-600">Job Placement</div>
                  </div>
                <span className="text-slate-300">London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Tech Ascend Consultancy Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-lime-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
              <Link to="/consulting" className="text-slate-300 hover:text-purple-400 transition-colors">