
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const ConsentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("hasConsented");
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hasConsented", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleAccept}
          />
          
          <motion.div
            className="glass z-10 rounded-lg overflow-hidden max-w-lg w-full border border-cyber-blue/30 shadow-lg shadow-cyber-blue/10"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 p-4 flex items-center">
              <Shield className="h-6 w-6 text-cyber-blue mr-2" />
              <h3 className="font-bold text-lg">Important Disclaimer</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 mb-6">
                Global Peace Restoration GPT is provided for informational and educational purposes only. The analysis, recommendations, and strategies should not be construed as professional diplomatic, legal, or security advice.
              </p>
              <p className="text-gray-300 mb-6">
                By continuing to use this tool, you acknowledge that you have read and understood our full disclaimer and agree to use this tool responsibly.
              </p>
              
              <div className="flex justify-end">
                <button
                  className="cyber-button"
                  onClick={handleAccept}
                >
                  I Agree
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsentPopup;
