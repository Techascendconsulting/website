import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              We provide innovative consulting services and train the next generation of 
              tech professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-lime-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consulting" className="text-slate-300 hover:text-purple-400 transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-purple-400" />
                <span className="text-slate-300 text-sm">info@techascend.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-purple-400" />
                <span className="text-slate-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-slate-300 text-sm">London, UK</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Tech Ascend Consultancy Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;