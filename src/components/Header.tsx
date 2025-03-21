
import React, { useState, useEffect } from "react";
import { Globe, Menu, X, Bird } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-cyber-black/90 backdrop-blur-lg shadow-lg py-3" : "py-6",
        "border-b border-cyber-blue/20"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center animate-glow-pulse">
              <Bird className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold group-hover:text-glow transition-all duration-300">
                Global Peace Restoration <span className="text-cyber-blue">GPT</span> 🕊️
              </h1>
              <p className="text-xs text-gray-400">
                <span className="italic">World Peace Powered By AI</span> | Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-purple transition-colors">AiWebTools.Ai</a>
              </p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-cyber-blue transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyber-button text-sm"
            >
              USE Global Peace Restoration GPT 🕊️
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white hover:text-cyber-purple transition-colors text-sm"
            >
              Try UBI Strategist GPT 🕊️
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-blue transition-colors text-sm"
            >
              FAQ 🕊️
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-blue transition-colors text-sm"
            >
              Disclaimer 🕊️
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-blue transition-colors text-sm"
            >
              More AI Tools 🕊️
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <nav className="flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyber-button text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              USE Global Peace Restoration GPT 🕊️
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-purple transition-colors text-sm text-center py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Try UBI Strategist GPT 🕊️
            </a>
            <a 
              href="#faq" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ 🕊️
            </a>
            <a 
              href="#disclaimer" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Disclaimer 🕊️
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              More AI Tools 🕊️
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
