import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading for entrance animation
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-lumina-dark flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-lumina-accent to-lumina-secondary animate-pulse">
            LUMINA TECH
          </h1>
          <p className="mt-4 text-lumina-accent font-mono text-sm tracking-widest">INITIALIZING SYSTEMS...</p>
          <div className="w-64 h-1 bg-gray-800 mt-6 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-lumina-accent w-full animate-[progress_2s_ease-in-out_infinite]" style={{ transformOrigin: 'left' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-lumina-dark text-lumina-text overflow-x-hidden selection:bg-lumina-accent selection:text-black">
        <CustomCursor />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Chatbot />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;