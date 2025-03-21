
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe, Shield, Brain, ArrowRight, Bird } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-cyber-blue text-glow">AI-Driven</span> Conflict Resolution & Negotiation Facilitator 🕊️
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Comprehensively analyze the root causes of global conflicts and proactively facilitate diplomatic negotiations between disputing parties across nations, regions, and cultures. 🕊️
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
                target="_blank"
                rel="noopener noreferrer" 
                className="cyber-button flex items-center justify-center"
              >
                Start Using Now 🕊️ <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#how-it-works" 
                className="text-white border border-cyber-blue/50 hover:border-cyber-blue bg-cyber-blue/10 hover:bg-cyber-blue/20 px-6 py-3 rounded-md transition-all duration-300 text-center"
              >
                Learn How It Works 🕊️
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-cyber-blue/30 shadow-lg shadow-cyber-blue/20">
              <a 
                href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://ideogram.ai/assets/image/lossless/response/Uq9U_4yDT-iv_yyT4t3F8A" 
                  alt="Global Peace Restoration GPT" 
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
            </div>
            
            {/* Advanced AI text - moved below the image */}
            <div className="mt-4 glass rounded-md p-4 backdrop-blur-md">
              <h3 className="font-bold text-cyber-blue mb-2">Powered by Advanced AI 🕊️</h3>
              <p className="text-sm text-gray-300">Facilitating peace through data-driven diplomatic solutions on a global scale.</p>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-5 -right-5 glass rounded-full p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Bird className="h-6 w-6 text-cyber-blue" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-5 -left-5 glass rounded-full p-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Shield className="h-6 w-6 text-cyber-purple" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 -left-5 glass rounded-full p-4"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Brain className="h-6 w-6 text-cyber-pink" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
