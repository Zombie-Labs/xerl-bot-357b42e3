
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-discord-blurple/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-discord-fuchsia/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-discord-blurple/10 text-discord-blurple mb-6">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">The Ultimate Discord Bot</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet <span className="text-discord-blurple">Xerl-bot</span>, Your Discord Server's New Best Friend
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Enhance your Discord experience with moderation, music, games, AI features, and much more - all in one powerful bot.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-discord-blurple hover:bg-discord-blurple/80 text-lg" asChild>
                <a href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">
                  Add to Discord
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-discord-blurple text-discord-blurple hover:bg-discord-blurple/10 text-lg">
                <a href="#features">
                  See Features
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-discord animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <Bot className="w-32 h-32 md:w-40 md:h-40 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
