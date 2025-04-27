
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import CommandsSection from '@/components/CommandsSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Xerl-bot | The Ultimate Discord Bot";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <FeaturesSection />
      <CommandsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
