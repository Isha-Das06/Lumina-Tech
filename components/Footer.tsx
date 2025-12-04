import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LINKEDIN_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-lumina-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              LUMINA<span className="text-lumina-accent">TECH</span>
            </h3>
            <p className="text-lumina-muted max-w-sm mb-6">
              Pioneering the intersection of advanced robotics, sustainable hardware, and software R&D. Building the future, ethically.
            </p>
            <div className="flex space-x-4">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lumina-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-lumina-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-lumina-accent transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-lumina-muted hover:text-lumina-accent transition-colors">About Founder</Link></li>
              <li><Link to="/services" className="text-lumina-muted hover:text-lumina-accent transition-colors">Our Innovations</Link></li>
              <li><Link to="/services" className="text-lumina-muted hover:text-lumina-accent transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-lumina-muted hover:text-lumina-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-lumina-muted">
                <Mail size={16} />
                <span>contact@luminatech.com</span>
              </li>
              <li className="text-lumina-muted">
                Global HQs:<br />
                Bangalore, India<br />
                Berlin, Germany
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-lumina-muted">
          <p>&copy; {new Date().getFullYear()} Lumina Tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};