
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bot, Shield, Music, Gamepad, Star } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-discord-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-discord-blurple/10 to-discord-fuchsia/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to <span className="text-discord-blurple">Enhance</span> Your Discord Server?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of servers already using Xerl-bot to moderate, entertain, and grow their communities
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-discord-light/50 px-4 py-2 rounded-full">
              <Shield className="h-5 w-5 text-discord-blurple" />
              <span>Security</span>
            </div>
            <div className="flex items-center gap-2 bg-discord-light/50 px-4 py-2 rounded-full">
              <Music className="h-5 w-5 text-discord-blurple" />
              <span>Music</span>
            </div>
            <div className="flex items-center gap-2 bg-discord-light/50 px-4 py-2 rounded-full">
              <Gamepad className="h-5 w-5 text-discord-blurple" />
              <span>Games</span>
            </div>
            <div className="flex items-center gap-2 bg-discord-light/50 px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-discord-blurple" />
              <span>And More!</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-discord-blurple hover:bg-discord-blurple/80 text-lg px-8" asChild>
            <a href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">
              Add Xerl-bot to Discord
            </a>
          </Button>
          
          <p className="text-gray-400 mt-4">
            Free to use with premium features available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
