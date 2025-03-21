
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import ConsentPopup from "@/components/ConsentPopup";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Global Peace Restoration GPT | AI-Driven Conflict Resolution";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <Header />
      
      <main>
        <HeroSection />
        <FeatureSection />
        <ProcessSection />
        <TestimonialSection />
        <FAQSection />
        <DisclaimerSection />
        <CTASection />
      </main>
      
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
