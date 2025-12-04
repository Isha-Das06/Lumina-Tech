import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-lumina-dark"
    >
      <div className="bg-lumina-card/30 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            OUR <span className="text-lumina-accent">EXPERTISE</span>
           </h1>
           <p className="text-xl text-lumina-muted max-w-2xl mx-auto">
             Comprehensive solutions across software, hardware, and sustainability.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-lumina-secondary/20 rounded-lg text-lumina-secondary group-hover:bg-lumina-secondary group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <span className="text-5xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 h-12">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-lumina-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="inline-flex items-center gap-2 text-lumina-accent font-bold hover:gap-4 transition-all">
                Learn More <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LIVE MAP SECTION --- */}
      <div className="py-20 border-t border-white/5 bg-lumina-card relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  GLOBAL <span className="text-lumina-secondary">OPERATIONS</span>
                </h2>
                <p className="text-lumina-muted mt-2 font-mono text-sm flex items-center gap-2">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   LIVE SATELLITE FEED // BANGALORE HQ
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-lumina-accent border border-lumina-accent/30 px-4 py-2 rounded-full bg-lumina-accent/5">
                <MapPin size={16} /> 12.9716° N, 77.5946° E
              </div>
           </div>

           <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              {/* Overlay for tech effect */}
              <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-lumina-accent/50 z-20 shadow-[0_0_20px_#00f0ff]"></div>
              
              {/* Map Iframe with Filters for Dark Mode */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908529990176!3d12.95395998805391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1716381234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* HUD Elements */}
              <div className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur-md p-4 rounded border-l-2 border-lumina-accent">
                 <h4 className="text-white font-bold">LUMINA RESEARCH LABS</h4>
                 <p className="text-xs text-gray-400">Electronic City Phase I</p>
                 <p className="text-xs text-lumina-accent mt-1">STATUS: OPERATIONAL</p>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-lumina-accent py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
             <h2 className="text-3xl font-display font-bold text-black mb-2">Have a radical idea?</h2>
             <p className="text-black/80">We specialize in turning impossible concepts into working prototypes.</p>
          </div>
          <Link to="/contact" className="px-8 py-3 bg-black text-white font-display font-bold rounded hover:bg-gray-900 transition-colors">
            LET'S INNOVATE
          </Link>
        </div>
      </div>
    </motion.div>
  );
};