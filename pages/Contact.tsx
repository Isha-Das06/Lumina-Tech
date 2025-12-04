import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen flex flex-col"
    >
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-display font-bold mb-6">
              LET'S BUILD <br />
              <span className="text-lumina-accent">THE FUTURE</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">
              Reach out to Lumina Tech for collaborations, R&D inquiries, or to learn more about our sustainable innovations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="text-lumina-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Global HQs</h3>
                  <p className="text-gray-400">Bangalore, India</p>
                  <p className="text-gray-400">Berlin, Germany</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="text-lumina-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email Us</h3>
                  <p className="text-gray-400">contact@luminatech.com</p>
                  <p className="text-gray-400">careers@luminatech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="text-lumina-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Call Us</h3>
                  <p className="text-gray-400">+91 80 1234 5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-lumina-card p-8 md:p-10 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
            {isSent ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                 <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                   <Send className="text-green-500" />
                 </div>
                 <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                 <p className="text-gray-400 mt-2">Thank you for contacting Lumina Tech. <br/>We will respond shortly.</p>
                 <button onClick={() => setIsSent(false)} className="mt-6 text-lumina-accent hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lumina-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lumina-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-lumina-accent transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-lumina-secondary to-lumina-accent text-white font-display font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};