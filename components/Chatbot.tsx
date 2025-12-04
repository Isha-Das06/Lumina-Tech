import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Minimize2, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'System initialized. I am Lumina AI. How can I assist you with our technologies today?', isBot: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: input,
        config: {
            systemInstruction: "You are Lumina AI, the advanced virtual assistant for Lumina Tech. Lumina Tech is a futuristic company founded by Isha Das, specializing in VTOLs, Robotics (Hexapods, Octopods), Bionic Limbs, and Sustainable Tech. Your tone is professional, futuristic, slightly robotic but helpful, and concise. Keep answers under 100 words. If asked about location, mention Bangalore and Berlin. If asked about services, mention Software, Hardware, and R&D.",
        }
      });

      const botMessage = { 
        id: (Date.now() + 1).toString(), 
        text: response.text || "I apologize, my neural link is experiencing interference. Please try again.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage = { 
        id: (Date.now() + 1).toString(), 
        text: "Error: Connection to main server failed. Please check your API configuration.", 
        isBot: true 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-lumina-accent text-black shadow-[0_0_20px_rgba(0,240,255,0.5)] ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} fill="currentColor" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 h-[500px] bg-lumina-card/95 backdrop-blur-xl border border-lumina-accent/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-display font-bold text-white tracking-wider">LUMINA AI</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-lumina-accent/20">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot 
                        ? 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none' 
                        : 'bg-lumina-accent/20 border border-lumina-accent/50 text-white rounded-tr-none'
                    }`}
                  >
                    {msg.isBot && <Bot size={14} className="mb-1 text-lumina-accent" />}
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white/5 border border-white/10 p-3 rounded-lg rounded-tl-none flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-lumina-accent" />
                      <span className="text-xs text-gray-500">Processing...</span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our protocols..."
                  className="flex-1 bg-black/40 border border-white/20 rounded text-white px-3 py-2 text-sm focus:outline-none focus:border-lumina-accent transition-colors font-mono"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2 bg-lumina-accent text-black rounded hover:bg-white transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};