
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bird } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform <span className="text-cyber-blue text-glow">Conflict Resolution</span>? 🕊️
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Experience the power of AI-driven diplomatic solutions and take the first step toward global peace. 🕊️
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyber-button px-8 py-4 text-lg flex items-center justify-center group"
            >
              Start Using Now 🕊️ 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-4 border border-cyber-purple/50 hover:border-cyber-purple bg-cyber-purple/10 hover:bg-cyber-purple/20 rounded-md transition-all duration-300 text-center text-lg flex items-center justify-center"
            >
              Try UBI Strategist GPT 🕊️
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
