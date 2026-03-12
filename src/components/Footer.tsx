
import React from "react";
import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/20 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold">Global Peace Restoration GPT</h3>
            </div>
            <p className="text-gray-400 text-sm mb-1">
              <em>World Peace Powered By AI</em> 🕊️
            </p>
            <p className="text-gray-400 text-sm mb-4">
              AI-driven conflict resolution and negotiation facilitator operating at a global scale to promote peace and understanding. Advanced AI tools by AIWEBTOOLS.AI for diplomatic solutions.
            </p>
            <p className="text-xs text-yellow-400 mb-2 italic">
              For informational, educational, and research purposes only.
            </p>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-cyber-blue hover:text-cyber-purple transition-colors font-semibold"
              aria-label="Visit AIWEBTOOLS.AI for more AI tools"
            >
              Presented by AIWEBTOOLS.AI - Leading AI Tools Provider
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">AI Tools & Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="Use Global Peace Restoration GPT AI Tool"
                >
                  USE Global Peace Restoration GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="Try UBI Strategist GPT AI Tool"
                >
                  Try UBI Strategist GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="AI Tools FAQ"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="AI Tools Disclaimer"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="Explore More AI Tools by AIWEBTOOLS.AI"
                >
                  More AI Tools by AIWEBTOOLS.AI
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal & Terms</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="Privacy Policy for AI Tools"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="Terms of Service for AI Web Tools"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact AIWEBTOOLS.AI</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="flex items-center text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="Call AI Web Tools support"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="flex items-center text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                  aria-label="Email AI Web Tools support"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">AI Tools Keywords:</p>
              <p className="text-xs text-gray-600">AI web tools, artificial intelligence, conflict resolution AI, peace building technology, diplomatic AI solutions</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-purple transition-colors font-semibold" aria-label="AIWEBTOOLS.AI Homepage">AIWEBTOOLS.AI - AI WEB TOOLS LLC</a> All rights reserved. <span className="italic ml-1">World Peace Powered By AI Tools</span> 🕊️
          </p>
          
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300"
            aria-label="Discover More AI Tools at AIWEBTOOLS.AI"
          >
            Explore More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
