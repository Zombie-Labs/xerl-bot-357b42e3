
import React from 'react';
import { Bot, Star, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-discord-blurple/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-discord-fuchsia/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-discord-blurple">Xerl-bot</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Creating the ultimate Discord experience since 2023
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-discord-dark rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Bot className="w-12 h-12 text-discord-blurple" />
                <div>
                  <h3 className="text-2xl font-bold">Xerl-bot</h3>
                  <p className="text-gray-300">Developed by ! ZenpaiZombie !</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Xerl-bot is a multipurpose Discord bot designed to enhance your server with powerful moderation tools, fun games, music playback, AI features, and much more.
                </p>
                
                <p className="text-gray-300">
                  Our mission is to provide the most comprehensive and user-friendly bot experience, with regular updates and new features based on community feedback.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-discord-dark rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-discord-blurple mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="bg-discord-dark rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-discord-blurple mb-2">500+</div>
                <div className="text-gray-300 text-sm">Servers</div>
              </div>
              <div className="bg-discord-dark rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-discord-blurple mb-2">50+</div>
                <div className="text-gray-300 text-sm">Commands</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="feature-icon">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Security First</h4>
                <p className="text-gray-300">
                  Xerl-bot prioritizes server security with antinuke features, raid protection, and advanced moderation tools to keep your community safe.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="feature-icon">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Customizable Experience</h4>
                <p className="text-gray-300">
                  From custom welcome messages to advanced auto-responses, Xerl-bot adapts to your server's unique needs and style.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="feature-icon">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Regular Updates</h4>
                <p className="text-gray-300">
                  Xerl-bot is constantly evolving with new features, improvements, and fixes based on user feedback and the latest Discord capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
