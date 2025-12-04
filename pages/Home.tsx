import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Globe, Shield, Terminal, Zap, ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INNOVATIONS, CERTIFICATIONS, JURISDICTIONS, NEWS_OUTLETS } from '../constants';
import { ParticleBackground } from '../components/ParticleBackground';

// Utility component for glitch text effect
const GlitchText = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -ml-[2px] text-lumina-accent opacity-0 group-hover:opacity-70 animate-pulse">{text}</span>
      <span className="absolute top-0 left-0 ml-[2px] text-lumina-secondary opacity-0 group-hover:opacity-70 animate-pulse delay-75">{text}</span>
    </div>
  );
};

export const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
    }
  };

  const fadeInUp: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <div className="relative min-h-screen bg-lumina-dark overflow-hidden">
      <ParticleBackground />
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* HUD Elements */}
        <div className="absolute top-24 left-4 md:left-12 w-64 h-64 border-l border-t border-lumina-accent/30 rounded-tl-3xl pointer-events-none opacity-50" />
        <div className="absolute bottom-12 right-4 md:right-12 w-64 h-64 border-r border-b border-lumina-secondary/30 rounded-br-3xl pointer-events-none opacity-50" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-3 px-4 py-1 rounded-full border border-lumina-accent/20 bg-lumina-accent/5 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-lumina-accent animate-pulse" />
            <span className="text-lumina-accent font-mono text-xs tracking-[0.2em] uppercase">System Online // v2.4.0</span>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0, letterSpacing: "0.5em" }}
            animate={{ y: 0, opacity: 1, letterSpacing: "normal" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-none tracking-tighter mb-6 relative"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 pb-2">
              <GlitchText text="DESIGNING" />
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lumina-accent via-white to-lumina-secondary">
              THE UNTHINKABLE
            </span>
          </motion.h1>

          <motion.p 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl text-lumina-muted font-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            <motion.span variants={fadeInUp} className="inline-block mr-2">Robotics.</motion.span>
            <motion.span variants={fadeInUp} className="inline-block mr-2 text-lumina-accent">•</motion.span>
            <motion.span variants={fadeInUp} className="inline-block mr-2">Aerospace.</motion.span>
            <motion.span variants={fadeInUp} className="inline-block mr-2 text-lumina-accent">•</motion.span>
            <motion.span variants={fadeInUp} className="inline-block">Sustainability.</motion.span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/services" 
              className="group relative px-8 py-4 bg-lumina-accent text-black font-display font-bold tracking-widest overflow-hidden skew-x-[-10deg] hover:bg-white transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 skew-x-[10deg]">
                INITIALIZE PROTOCOL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-lumina-muted font-mono uppercase tracking-widest">Scroll to Explore</span>
          <ChevronDown className="text-lumina-accent" />
        </motion.div>
      </section>

      {/* --- NEWS TICKER (MARQUEE) --- */}
      <div className="w-full bg-lumina-card border-y border-white/5 py-4 overflow-hidden relative z-20">
        <div className="flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap min-w-max">
           {[...NEWS_OUTLETS, ...NEWS_OUTLETS].map((outlet, i) => (
             <div key={i} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
               <span className="w-2 h-2 bg-lumina-secondary rounded-full" />
               <span className="text-lg font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">{outlet.toUpperCase()}</span>
             </div>
           ))}
        </div>
      </div>

      {/* --- INNOVATIONS GRID (THE HOLODECK) --- */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-16 border-b border-white/10 pb-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                R&D <span className="text-lumina-accent">ARCHIVES</span>
              </h2>
              <p className="text-lumina-muted mt-2 font-mono text-sm">ACCESS LEVEL: PUBLIC // DISPLAYING PROTOTYPES</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-lumina-accent hover:text-white transition-colors font-mono text-sm">
              VIEW FULL DATABASE <ExternalLink size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {INNOVATIONS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-lumina-card ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Tech Overlay Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-lumina-accent shadow-[0_0_10px_#00f0ff] animate-[scan_2s_linear_infinite]" />
                  <div className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-lumina-accent rounded-tr-xl" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-lumina-secondary rounded-bl-xl" />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <span className="text-lumina-accent font-mono text-xs mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        PROJECT ID: {item.id.toUpperCase()}
                     </span>
                     <h3 className="text-3xl font-display font-bold text-white mb-3 group-hover:text-lumina-accent transition-colors">
                       {item.title}
                     </h3>
                     <p className="text-gray-300 text-sm max-w-md line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                       {item.description}
                     </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SYSTEM STATUS (STATS & TRUST) --- */}
      <section className="py-24 bg-lumina-card relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Dashboard Stats */}
            <div>
              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="inline-flex items-center gap-2 text-lumina-secondary font-mono text-sm mb-4"
              >
                <Zap size={14} /> SYSTEM METRICS
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                GLOBAL <br /> <span className="text-white/20">OPERATIONS</span>
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Jurisdictions", value: "08", sub: "Active Regions" },
                  { label: "Patents", value: "115", sub: "Filed & Pending" },
                  { label: "Certifications", value: "10+", sub: "ISO / Global" },
                  { label: "Prototypes", value: "50+", sub: "Deployed" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-black/40 border border-white/10 p-6 rounded-xl hover:border-lumina-accent/50 transition-colors group"
                  >
                    <div className="text-4xl font-display font-bold text-white group-hover:text-lumina-accent transition-colors mb-1">{stat.value}</div>
                    <div className="text-xs text-lumina-muted font-mono uppercase">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Holographic Lists */}
            <div className="space-y-6">
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border-l-4 border-lumina-accent p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl flex items-center gap-2">
                    <Shield className="text-lumina-accent" size={20} /> COMPLIANCE LOGS
                  </h3>
                  <div className="flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-75"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                   {CERTIFICATIONS.map(cert => (
                     <span key={cert.name} className="px-3 py-1 bg-black/50 border border-white/10 text-xs text-gray-300 font-mono rounded hover:bg-lumina-accent/20 hover:border-lumina-accent transition-colors cursor-crosshair">
                       {cert.name}
                     </span>
                   ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border-l-4 border-lumina-secondary p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl flex items-center gap-2">
                    <Globe className="text-lumina-secondary" size={20} /> ACTIVE NODES
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                   {JURISDICTIONS.slice(0, 6).map(j => (
                     <div key={j.code} className="flex items-center gap-2 text-sm text-gray-400">
                       <span className="w-1.5 h-1.5 bg-lumina-secondary rounded-full"></span>
                       {j.name}
                     </div>
                   ))}
                   <div className="text-xs text-lumina-muted italic mt-1 col-span-3">+ 3 more regions</div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA FOOTER PREVIEW --- */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-lumina-accent/5"></div>
         <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <div className="w-[500px] h-[500px] border border-lumina-accent rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[300px] h-[300px] border border-dashed border-lumina-secondary rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
         </div>

         <div className="relative z-10 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              READY TO <span className="text-lumina-accent bg-black px-2">UPGRADE</span> REALITY?
            </h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center w-64 h-16 bg-white text-black font-display font-bold text-xl tracking-wider hover:bg-lumina-accent hover:scale-105 transition-all duration-300 clip-path-polygon"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            >
              INITIATE CONTACT
            </Link>
         </div>
      </section>

    </div>
  );
};