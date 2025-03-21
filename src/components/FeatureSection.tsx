
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, FileText, Users, PieChart, 
  BarChart2, CheckCircle, Clock, ShieldAlert 
} from "lucide-react";

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="group glass rounded-lg p-6 border border-white/5 hover:border-cyber-blue/30 transition-all duration-500 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-cyber-blue/5 rounded-full blur-3xl group-hover:bg-cyber-blue/10 transition-all duration-500"></div>
      
      <div className="bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 w-12 h-12 flex items-center justify-center rounded-md mb-4 group-hover:from-cyber-blue/30 group-hover:to-cyber-purple/30 transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-cyber-blue transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </motion.div>
  );
};

const features = [
  {
    icon: <Search className="text-cyber-blue h-6 w-6" />,
    title: "Root Cause Analysis",
    description: "Deep historical timeline mapping and analysis of triggering incidents that lead to conflicts."
  },
  {
    icon: <Users className="text-cyber-purple h-6 w-6" />,
    title: "Stakeholder Mapping",
    description: "Identification of key actors, institutions, networks, interest alignments, and communication breakdowns."
  },
  {
    icon: <FileText className="text-cyber-pink h-6 w-6" />,
    title: "Negotiation Frameworks",
    description: "Advanced integrative bargaining models and collaborative decision theory to facilitate discussions."
  },
  {
    icon: <BarChart2 className="text-cyber-teal h-6 w-6" />,
    title: "Multi-Phase Strategy",
    description: "Design of multi-layered peace-building roadmaps from emergency stabilization to monitoring protocols."
  },
  {
    icon: <PieChart className="text-cyber-yellow h-6 w-6" />,
    title: "Impact Forecasting",
    description: "Generate 1-year, 5-year, and 10-year forecasts using macro-level and micro-level metrics."
  },
  {
    icon: <CheckCircle className="text-cyber-blue h-6 w-6" />,
    title: "Document Compilation",
    description: "Compilation of all sections into a sequential, labeled master document for comprehensive strategy."
  },
  {
    icon: <Clock className="text-cyber-purple h-6 w-6" />,
    title: "Total Memory Recall",
    description: "Permanent memory of all contextual details, regional specifics, stakeholder objectives, and strategy stages."
  },
  {
    icon: <ShieldAlert className="text-cyber-red h-6 w-6" />,
    title: "Data-Driven Approach",
    description: "Utilizes Python for generating simulations, policy briefs, stakeholder diagrams, and impact assessments."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Powerful Capabilities
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Global Peace Restoration GPT offers a comprehensive suite of tools for conflict resolution and peace building.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
