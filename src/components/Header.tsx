
import React, { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-cyber-black/90 backdrop-blur-lg shadow-lg py-2 sm:py-3" : "py-3 sm:py-6",
        "border-b border-cyber-blue/20"
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4 group flex-1 min-w-0">
            <Link to="/" className="flex items-center space-x-2 min-w-0 shrink" aria-label="AIWEBTOOLS.AI - AI Tools Homepage">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center animate-glow-pulse shrink-0">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-xl font-bold group-hover:text-glow transition-all duration-300 truncate">
                  Global Peace Restoration <span className="text-cyber-blue">GPT</span> 🕊️
                </h1>
                <p className="text-[10px] sm:text-xs text-gray-400 truncate">
                  <span className="italic">World Peace Powered By AI</span> | Presented by <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-purple transition-colors font-semibold" onClick={(e) => e.stopPropagation()}>AIWEBTOOLS.AI</a>
                </p>
              </div>
            </Link>
            <p className="text-xs italic bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 cursor-default font-semibold transform hover:scale-105 hidden xl:block ml-auto mr-4 whitespace-nowrap">
              "I MAY BE A DREAMER BUT I'M NOT THE ONLY ONE" - John Lennon
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-cyber-blue transition-colors p-2 -mr-2 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 shrink-0" role="navigation" aria-label="Main navigation">
            <a 
              href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyber-button text-sm whitespace-nowrap"
              aria-label="Use Global Peace Restoration GPT AI Tool"
            >
              USE Global Peace Restoration GPT 🕊️
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white hover:text-cyber-purple transition-colors text-sm whitespace-nowrap"
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
              href={AIWEBTOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-blue transition-colors text-sm whitespace-nowrap"
              aria-label="More AI Tools by AIWEBTOOLS.AI"
            >
              More AI Tools 🕊️
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[500px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <p className="text-xs italic mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent font-semibold text-center">
            "I MAY BE A DREAMER BUT I'M NOT THE ONLY ONE" - John Lennon
          </p>
          <nav className="flex flex-col space-y-3" role="navigation" aria-label="Mobile navigation">
            <a 
              href="https://chatgpt.com/g/g-67dd8de036448191a8e1c97cd013e462-global-peace-restoration-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="cyber-button text-center text-sm py-3"
              onClick={closeMenu}
              aria-label="Use Global Peace Restoration GPT AI Tool"
            >
              USE Global Peace Restoration GPT 🕊️
            </a>
            <a 
              href="https://chatgpt.com/g/g-67dd7a72d0fc81919821bdeec393b21d-ubi-strategist-gpt"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-purple transition-colors text-sm text-center py-3 rounded-md active:scale-[0.98]"
              onClick={closeMenu}
              aria-label="Try UBI Strategist GPT AI Tool"
            >
              Try UBI Strategist GPT 🕊️
            </a>
            <a 
              href="#faq" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-3 rounded-md active:scale-[0.98]"
              onClick={closeMenu}
              aria-label="Frequently Asked Questions"
            >
              FAQ 🕊️
            </a>
            <a 
              href="#disclaimer" 
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-3 rounded-md active:scale-[0.98]"
              onClick={closeMenu}
              aria-label="Disclaimer and Terms"
            >
              Disclaimer 🕊️
            </a>
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyber-blue/80 text-white hover:text-cyber-blue transition-colors text-sm text-center py-3 rounded-md active:scale-[0.98]"
              onClick={closeMenu}
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
