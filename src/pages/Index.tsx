
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
    // Set page title for SEO
    document.title = "AI WEB TOOLS | Global Peace Restoration GPT - AI Conflict Resolution Tool | AIWEBTOOLS.AI";
    
    // Add meta description for better SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI WEB TOOLS presents Global Peace Restoration GPT - Advanced AI tools for conflict resolution, peace negotiation, and diplomatic solutions. Best AI tools by AIWEBTOOLS.AI for global peace restoration.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      {/* SEO-friendly hidden content for crawlers */}
      <div className="sr-only">
        <h1>AIWEBTOOLS.AI - Leading AI Tools Provider</h1>
        <p>AI WEB TOOLS offers cutting-edge artificial intelligence solutions including the Global Peace Restoration GPT for conflict resolution and diplomatic negotiations.</p>
        <p>Keywords: AI tools, AI web tools, AIWEBTOOLS.AI, artificial intelligence, peace restoration, conflict resolution AI</p>
      </div>

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
