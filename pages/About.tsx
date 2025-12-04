import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Linkedin, Quote, Terminal, Cpu, Globe, Award } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';
import { LINKEDIN_URL } from '../constants';

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 50 } 
  }
};

export const About: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-lumina-dark overflow-hidden pt-24 pb-20">
      <ParticleBackground />
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,27,0)_2px,transparent_2px),linear-gradient(90deg,rgba(18,18,27,0)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-20"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-lumina-accent font-mono text-sm mb-4 border border-lumina-accent/30 px-3 py-1 rounded bg-lumina-accent/5">
             <Terminal size={14} /> EXEC_PROFILE_LOAD.bat
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight mb-6">
            The Visionary <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-secondary to-lumina-accent">Mindset</span>
          </motion.h1>
          <motion.div variants={itemVariants} className="h-1 w-32 bg-gradient-to-r from-lumina-accent to-transparent"></motion.div>
        </div>

        {/* Founder Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
           
           {/* Image with Scanner Effect */}
           <motion.div variants={itemVariants} className="md:col-span-5 relative group">
              <div className="absolute -inset-4 border-2 border-lumina-accent/20 rounded-xl rounded-tr-[3rem] z-0"></div>
              <div className="absolute inset-0 bg-lumina-secondary/10 rounded-lg transform translate-x-4 translate-y-4 z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              <div className="relative rounded-lg overflow-hidden border border-white/10 z-10 bg-lumina-card">
                <img 
                  src="https://i.imgur.com/ptlDU1p.jpeg" 
                  alt="Isha Das" 
                  className="w-full h-auto object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Scanning Line Animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lumina-accent/20 to-transparent h-[20%] w-full animate-[scan_3s_linear_infinite] pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none"></div>
              </div>

              {/* HUD Decoration */}
              <div className="absolute -bottom-6 -right-6 flex gap-2">
                 <div className="w-12 h-2 bg-lumina-accent/50 animate-pulse"></div>
                 <div className="w-4 h-2 bg-lumina-secondary/50"></div>
              </div>
           </motion.div>

           {/* Founder Content */}
           <div className="md:col-span-7">
             <motion.div variants={itemVariants} className="flex items-end gap-6 mb-6">
               <h2 className="text-4xl font-display font-bold text-white">Isha Das</h2>
               <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-lumina-muted hover:text-lumina-accent transition-colors pb-2">
                 <Linkedin size={24} />
               </a>
             </motion.div>
             
             <motion.p variants={itemVariants} className="text-lumina-accent font-mono text-lg mb-8 flex items-center gap-2">
               <Cpu size={16} /> FOUNDER & CEO // SYSTEM ARCHITECT
             </motion.p>
             
             <motion.div variants={itemVariants} className="space-y-6 text-gray-300 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
               <p>
                 A visionary entrepreneur bridging the gap between <strong className="text-white">futuristic technology</strong> and sustainable living. Isha has steered Lumina Tech from a basement R&D lab to a global leader in robotics.
               </p>
               <p>
                 "Our mission isn't just to build robots. It's to create an ecosystem where technology enhances welfare without compromising the environment. Every certification we earn is a promise kept to the future."
               </p>
             </motion.div>
             
             <motion.div 
               variants={itemVariants} 
               className="mt-10 p-8 bg-white/5 border border-lumina-accent/30 rounded-br-3xl backdrop-blur-sm relative overflow-hidden"
             >
               <Quote className="absolute top-4 left-4 text-lumina-accent/20 w-16 h-16 -z-10" />
               <p className="font-display font-medium text-xl text-white italic relative z-10">
                 We don't just predict the future. We prototype it, break it, and rebuild it better.
               </p>
             </motion.div>
           </div>
        </div>

        {/* Digital Logs / Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border-t border-b border-white/10 bg-black/40 py-16"
        >
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "R&D Cycle", val: "5+", icon: Terminal },
                { label: "Prototypes", val: "50+", icon: Cpu },
                { label: "Global Awards", val: "12", icon: Award },
                { label: "Jurisdictions", val: "08", icon: Globe },
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                   <div className="flex justify-center mb-4 text-lumina-muted group-hover:text-lumina-accent transition-colors duration-300">
                     <stat.icon size={28} strokeWidth={1.5} />
                   </div>
                   <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                     {stat.val}
                   </div>
                   <div className="text-xs font-mono text-lumina-muted uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Company Origin Log */}
        <div className="mt-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
             <h2 className="text-3xl font-display font-bold mb-4">SYSTEM ORIGIN</h2>
             <p className="text-lumina-muted">Decrypted Log File: 2018 - Present</p>
          </motion.div>

          <div className="relative border-l border-lumina-accent/30 ml-4 md:ml-0 space-y-12 pb-12">
            {[
               { year: '2018', title: 'Initialization', desc: 'Lumina Tech founded. First autonomous rover prototype deployed.' },
               { year: '2020', title: 'Global Expansion', desc: 'Opened R&D centers in Berlin. Secured Series A funding.' },
               { year: '2022', title: 'Sustainability Core', desc: 'Achieved B Corp Certification. Launched the "Green Robotics" initiative.' },
               { year: '2024', title: 'The Bionic Era', desc: 'Unveiled the Lumina Bionic Hand and Tiltwing VTOL to global acclaim.' }
            ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: -20, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="relative pl-8 md:pl-12"
               >
                 <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-lumina-dark border border-lumina-accent rounded-full"></div>
                 <div className="flex flex-col md:flex-row gap-2 md:items-center mb-2">
                    <span className="text-lumina-accent font-mono font-bold text-xl">{item.year}</span>
                    <span className="hidden md:inline text-white/20">//</span>
                    <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                 </div>
                 <p className="text-gray-400 max-w-lg">{item.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};