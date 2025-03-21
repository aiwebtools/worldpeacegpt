
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ClipboardList, Database, Network, LineChart, 
  FileBarChart, FileSearch, Layers, RotateCcw
} from "lucide-react";

const ProcessStep = ({ number, icon, title, description, isActive, onClick }) => {
  return (
    <div 
      className={`flex items-start space-x-4 p-4 cursor-pointer transition-all duration-300 rounded-lg ${
        isActive ? "bg-cyber-blue/10 border border-cyber-blue/30" : "hover:bg-white/5"
      }`}
      onClick={onClick}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        isActive ? "bg-cyber-blue text-white" : "bg-gray-800 text-gray-400"
      }`}>
        {number}
      </div>
      <div>
        <h3 className={`text-lg font-bold mb-1 flex items-center ${isActive ? "text-cyber-blue" : "text-white"}`}>
          {icon}
          <span className="ml-2">{title}</span>
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1));
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const steps = [
    {
      number: 1,
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Mission Setup & User Input",
      description: "Gathering information about the conflict, regions involved, and objectives for resolution.",
      content: "We begin by collecting essential data about the conflict situation, including geographic location, conflict type, and desired outcomes. This initial information provides the foundation for all subsequent analysis."
    },
    {
      number: 2,
      icon: <Database className="w-4 h-4" />,
      title: "Root Cause & Stakeholder Analysis",
      description: "Deep analysis of historical context, power dynamics, and key stakeholders.",
      content: "Our system conducts comprehensive historical analysis to identify triggering incidents, long-term stressors, power imbalances, and key stakeholders. We map communication breakdowns and cultural factors that influence the conflict."
    },
    {
      number: 3,
      icon: <Network className="w-4 h-4" />,
      title: "Negotiation Strategy Frameworks",
      description: "Developing tailored negotiation frameworks using game theory and decision models.",
      content: "We simulate and model potential negotiation approaches using advanced integrative bargaining models, game theory, and collaborative decision-making frameworks to create optimal engagement strategies for all parties."
    },
    {
      number: 4,
      icon: <Layers className="w-4 h-4" />,
      title: "Multi-Phase Resolution Strategy",
      description: "Creating a comprehensive roadmap from emergency stabilization to monitoring.",
      content: "Our system designs multi-layered peace-building strategies, starting with emergency stabilization and progressing through mediation, consensus building, institutional agreements, and establishing monitoring protocols."
    },
    {
      number: 5,
      icon: <LineChart className="w-4 h-4" />,
      title: "Impact Forecasting & Scenario Planning",
      description: "Simulating outcomes at 1-year, 5-year, and 10-year intervals.",
      content: "We generate detailed forecasts of potential outcomes under various scenarios, accounting for political changes, international interventions, public sentiment shifts, and emerging challenges like climate pressures."
    },
    {
      number: 6,
      icon: <FileBarChart className="w-4 h-4" />,
      title: "Document Compilation",
      description: "Generating comprehensive strategy documents with Python.",
      content: "All analyses and strategies are compiled into a sequential, labeled master document that maintains a complete record of the conflict analysis, proposed solutions, and implementation roadmap."
    },
    {
      number: 7,
      icon: <RotateCcw className="w-4 h-4" />,
      title: "Total Flexibility & Full Recall",
      description: "Maintaining memory of all details for continuous improvement.",
      content: "Our system maintains permanent memory of all contextual details, allowing for expansion, revision, or rerunning of any scenario while maintaining continuity and accuracy throughout the process."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading mb-6">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our systematic 7-step approach ensures thorough conflict analysis and effective resolution strategies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {steps.map((step) => (
                <ProcessStep 
                  key={step.number}
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === step.number}
                  onClick={() => setActiveStep(step.number)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div 
              className="glass rounded-lg p-8 h-full border border-white/10"
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-cyber-blue">
                  Step {activeStep}: {steps[activeStep - 1].title}
                </h3>
                <div className="w-12 h-12 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                  {steps[activeStep - 1].icon}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">
                {steps[activeStep - 1].content}
              </p>
              
              <div className="bg-cyber-dark rounded-lg p-6 border border-white/5">
                <h4 className="font-bold mb-3 text-cyber-purple">Process Highlights:</h4>
                <ul className="space-y-2 text-gray-400">
                  {activeStep === 1 && (
                    <>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></div>
                        Collects information about conflict regions and entities
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></div>
                        Categorizes conflict types and underlying causes
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></div>
                        Defines immediate objectives and long-term vision
                      </li>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-purple rounded-full mr-2"></div>
                        Maps historical timelines and triggering incidents
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-purple rounded-full mr-2"></div>
                        Analyzes power imbalances and economic factors
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-purple rounded-full mr-2"></div>
                        Assesses cultural and philosophical influences
                      </li>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-pink rounded-full mr-2"></div>
                        Employs integrative bargaining models
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-pink rounded-full mr-2"></div>
                        Uses game-theoretic modeling with strategy prediction
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-pink rounded-full mr-2"></div>
                        Develops trust-restoration mechanisms
                      </li>
                    </>
                  )}
                  {activeStep === 4 && (
                    <>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-teal rounded-full mr-2"></div>
                        Creates emergency stabilization protocols
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-teal rounded-full mr-2"></div>
                        Establishes bilateral/multilateral mediation frameworks
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-teal rounded-full mr-2"></div>
                        Designs mechanisms for enforcement and verification
                      </li>
                    </>
                  )}
                  {activeStep === 5 && (
                    <>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-yellow rounded-full mr-2"></div>
                        Projects short, medium, and long-term outcomes
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-yellow rounded-full mr-2"></div>
                        Accounts for political realignments and leadership changes
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-yellow rounded-full mr-2"></div>
                        Considers climate-related pressures and regional instability
                      </li>
                    </>
                  )}
                  {activeStep === 6 && (
                    <>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></div>
                        Generates structured, downloadable documents
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></div>
                        Preserves all contextual details and strategy phases
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></div>
                        Creates a sequential, labeled master strategy document
                      </li>
                    </>
                  )}
                  {activeStep === 7 && (
                    <>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-purple rounded-full mr-2"></div>
                        Maintains memory of all conflict details and contexts
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-purple rounded-full mr-2"></div>
                        Allows for expansion, revision, or rerunning of scenarios
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyber-purple rounded-full mr-2"></div>
                        Ensures continuity and accuracy through all process stages
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
