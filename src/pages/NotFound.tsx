
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center px-4">
      <div className="max-w-md w-full glass rounded-lg p-8 border border-cyber-blue/30">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 bg-cyber-blue/10 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="h-10 w-10 text-cyber-blue" />
          </div>
          
          <h1 className="text-4xl font-bold mb-2 text-glow">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link 
            to="/" 
            className="cyber-button flex items-center justify-center"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
