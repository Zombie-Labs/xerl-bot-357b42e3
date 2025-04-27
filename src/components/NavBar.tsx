
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-discord-darker/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="h-8 w-8 text-discord-blurple" />
          <span className="text-xl font-bold text-white">Xerl-bot</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-200 hover:text-white transition-colors">Features</a>
          <a href="#commands" className="text-gray-200 hover:text-white transition-colors">Commands</a>
          <a href="#about" className="text-gray-200 hover:text-white transition-colors">About</a>
          
          <Button variant="default" className="bg-discord-blurple hover:bg-discord-blurple/80" asChild>
            <a href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">
              Add to Discord
            </a>
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-discord-darker py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-200 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#commands" className="text-gray-200 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Commands</a>
            <a href="#about" className="text-gray-200 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            
            <Button variant="default" className="bg-discord-blurple hover:bg-discord-blurple/80 w-full" asChild>
              <a href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">
                Add to Discord
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
