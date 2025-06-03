
import React, { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
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
          <div className="flex items-center space-x-4 group flex-1">
            <Link to="/" className="flex items-center space-x-2" aria-label="AIWEBTOOLS.AI - AI Tools Homepage">
              <div className="w-10 h-10 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center animate-glow-pulse">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold group-hover:text-glow transition-all duration-300">
                  Global Peace Restoration <span className="text-cyber-blue">GPT</span> 🕊️
                </h1>
                <p className="text-xs text-gray-400">
                  <span className="italic">World Peace Powered By AI</span> | Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-purple transition-colors font-semibold">AIWEBTOOLS.AI</a>
                </p>
              </div>
            </Link>
            <p className="text-xs italic bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 cursor-default font-semibold transform hover:scale-105 hidden lg:block ml-auto mr-4">
              "I MAY BE A DREAMER BUT I'M NOT THE ONLY ONE" - John Lennon
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-cyber-blue transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            <a 
              href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyber-button text-sm"
              aria-label="Use Global Peace Restoration GPT AI Tool"
            >
              USE Global Peace Restoration GPT 🕊️
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white hover:text-cyber-purple transition-colors text-sm"
              aria-label="Try UBI Strategist GPT AI Tool"
            >
              Try UBI Strategist GPT 🕊️
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-blue transition-colors text-sm"
              aria-label="Frequently Asked Questions about AI Tools"
            >
              FAQ 🕊️
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyber-blue transition-colors text-sm"
              aria-label="AI Tools Disclaimer and Terms"
            >
              Disclaimer 🕊️
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-blue transition-colors text-sm"
              aria-label="More AI Tools by AIWEBTOOLS.AI"
            >
              More AI Tools 🕊️
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <p className="text-xs italic mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent font-semibold text-center">
            "I MAY BE A DREAMER BUT I'M NOT THE ONLY ONE" - John Lennon
          </p>
          <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
            <a 
              href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyber-button text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Use Global Peace Restoration GPT AI Tool"
            >
              USE Global Peace Restoration GPT 🕊️
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-purple transition-colors text-sm text-center py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Try UBI Strategist GPT AI Tool"
            >
              Try UBI Strategist GPT 🕊️
            </a>
            <a 
              href="#faq" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Frequently Asked Questions"
            >
              FAQ 🕊️
            </a>
            <a 
              href="#disclaimer" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Disclaimer and Terms"
            >
              Disclaimer 🕊️
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
              aria-label="More AI Tools by AIWEBTOOLS.AI"
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
