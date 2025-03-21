
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Global Peace Restoration GPT?",
      answer: "Global Peace Restoration GPT is an AI-driven conflict resolution and negotiation facilitator that analyzes the root causes of conflicts and facilitates diplomatic negotiations between disputing parties across nations, regions, and cultures using data-driven methodologies."
    },
    {
      question: "How does the conflict analysis process work?",
      answer: "Our process begins with collecting information about the conflict, followed by deep historical analysis, stakeholder mapping, and development of negotiation strategies. We create multi-phase resolution plans, forecast potential outcomes, and compile comprehensive strategy documents, all while maintaining a complete memory of the process."
    },
    {
      question: "What types of conflicts can this tool address?",
      answer: "Global Peace Restoration GPT can address a wide range of conflicts, including geopolitical tensions, resource competitions, economic disparities, and ideological or religious disputes at local, regional, or international levels."
    },
    {
      question: "Can it integrate with existing conflict resolution efforts?",
      answer: "Yes, our tool is designed to complement and enhance existing peace-building initiatives. It can analyze current approaches, identify gaps, and suggest improvements based on comprehensive data analysis and forecasting capabilities."
    },
    {
      question: "How accurate are the conflict forecasts?",
      answer: "Our forecasts are based on comprehensive data analysis, historical patterns, and multiple scenario planning. While no prediction can be 100% accurate, our system accounts for a wide range of variables and continually refines its models based on new information."
    },
    {
      question: "Is my data secure when using this tool?",
      answer: "Yes, we adhere to strict data security protocols. Sensitive information related to conflict analysis is handled with the utmost confidentiality and in compliance with relevant data protection regulations."
    },
    {
      question: "Can I request customized conflict resolution strategies?",
      answer: "Absolutely. Global Peace Restoration GPT can tailor its analysis and recommendations to specific conflict situations, stakeholder requirements, and desired outcomes based on the information you provide."
    },
    {
      question: "Do I need technical expertise to use this tool?",
      answer: "No technical expertise is required. The tool is designed with an intuitive interface that guides users through the conflict resolution process while providing clear explanations of the analysis and recommendations."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about Global Peace Restoration GPT.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="glass rounded-lg border border-white/10 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-bold hover:text-cyber-blue transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
