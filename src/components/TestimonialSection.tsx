
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "International Relations Expert",
    image: "/placeholders/person1.jpg",
    quote: "Global Peace Restoration GPT provides unprecedented depth in conflict analysis. The multi-phase approach captures nuances that traditional methods often miss.",
    rating: 5
  },
  {
    name: "Ambassador Michael Torres",
    title: "Former UN Mediator",
    image: "/placeholders/person2.jpg",
    quote: "The stakeholder mapping and negotiation frameworks this tool produces have been invaluable in our mediation efforts for regional conflicts.",
    rating: 5
  },
  {
    name: "Prof. Elena Novak",
    title: "Peace Studies Researcher",
    image: "/placeholders/person3.jpg",
    quote: "The forecasting capabilities are remarkable. Being able to model various intervention scenarios has transformed how we approach conflict resolution strategies.",
    rating: 5
  },
  {
    name: "Director James Wilson",
    title: "NGO Peace Foundation",
    image: "/placeholders/person4.jpg",
    quote: "We've integrated this tool into our conflict resolution programs, and the results have been transformative. Highly recommended for anyone in this field.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="glass rounded-lg p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute -left-2 top-2">
        <Quote className="h-8 w-8 text-cyber-blue/20" />
      </div>
      
      <div className="mb-4 pl-6">
        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
      </div>
      
      <div className="flex items-center mt-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-white">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.title}</p>
        </div>
        <div className="ml-auto flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-cyber-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-20 left-0 w-80 h-80 bg-cyber-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Experts Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hear from international relations experts and peace mediators who have used Global Peace Restoration GPT.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
