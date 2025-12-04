import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-2 font-display text-sm tracking-widest transition-all duration-300 hover:text-lumina-accent ${
      isActive ? 'text-lumina-accent after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-lumina-accent' : 'text-gray-300'
    }`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-lumina-dark/90 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-lumina-accent/10 border border-lumina-accent rounded flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                <Cpu className="text-lumina-accent w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white">
                LUMINA<span className="text-lumina-accent">TECH</span>
              </span>
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <NavLink to="/" className={navClasses}>HOME</NavLink>
              <NavLink to="/about" className={navClasses}>ABOUT</NavLink>
              <NavLink to="/services" className={navClasses}>SERVICES</NavLink>
              <NavLink to="/contact" className={navClasses}>CONTACT</NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-lumina-card border-b border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={toggleMenu} className="block px-3 py-2 text-base font-display text-white hover:bg-white/10 rounded-md">HOME</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="block px-3 py-2 text-base font-display text-white hover:bg-white/10 rounded-md">ABOUT</NavLink>
            <NavLink to="/services" onClick={toggleMenu} className="block px-3 py-2 text-base font-display text-white hover:bg-white/10 rounded-md">SERVICES</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className="block px-3 py-2 text-base font-display text-white hover:bg-white/10 rounded-md">CONTACT</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};