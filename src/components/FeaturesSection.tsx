
import React from 'react';
import { 
  Bot, Music, Shield, Users, MessageCircle, 
  Smile, Gamepad, Image, Bell, Star
} from "lucide-react";

const featureGroups = [
  {
    title: "General Features",
    features: [
      { 
        icon: <Users className="h-6 w-6" />, 
        title: "Voice & Welcomer", 
        description: "Welcome new members with customizable voice and text greetings." 
      },
      { 
        icon: <Gamepad className="h-6 w-6" />, 
        title: "Games", 
        description: "Entertain your community with fun, interactive Discord games." 
      },
      { 
        icon: <MessageCircle className="h-6 w-6" />, 
        title: "Auto-react & Auto-responder", 
        description: "Set up automatic reactions and responses to specific messages." 
      },
      { 
        icon: <Star className="h-6 w-6" />, 
        title: "Autoroles & INVC", 
        description: "Automatically assign roles to new members and those in voice channels." 
      },
      { 
        icon: <Smile className="h-6 w-6" />, 
        title: "Fun & AI", 
        description: "Enjoy fun commands and advanced AI image generation." 
      }
    ]
  },
  {
    title: "Bot Features",
    features: [
      { 
        icon: <Shield className="h-6 w-6" />, 
        title: "Security & Antinuke", 
        description: "Protect your server with advanced security features and anti-nuke protection." 
      },
      { 
        icon: <Bell className="h-6 w-6" />, 
        title: "Automod", 
        description: "Automatic moderation to keep your server clean and safe." 
      },
      { 
        icon: <Bot className="h-6 w-6" />, 
        title: "Utility", 
        description: "Helpful utility commands for server management and information." 
      },
      { 
        icon: <Music className="h-6 w-6" />, 
        title: "Music", 
        description: "High-quality music playback from various sources." 
      },
      { 
        icon: <Users className="h-6 w-6" />, 
        title: "Moderation", 
        description: "Tools to manage users and keep your server orderly." 
      },
      { 
        icon: <Star className="h-6 w-6" />, 
        title: "Custom Roles & Giveaways", 
        description: "Create custom roles and host engaging giveaways for your community." 
      }
    ]
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-discord-fuchsia/5 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-discord-blurple/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful <span className="text-discord-blurple">Features</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Xerl-bot comes packed with all the features you need to create the perfect Discord community
          </p>
        </div>
        
        {featureGroups.map((group, index) => (
          <div key={index} className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">{group.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-discord-blurple/10 text-discord-blurple mb-6">
            <Image className="h-5 w-5" />
            <span className="font-semibold">AI Image Generation</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Create Amazing AI-Generated Images</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Use Xerl-bot's advanced AI to generate stunning images based on your descriptions
          </p>
          
          <div className="bg-discord-dark rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-discord-darker rounded-lg p-4">
                <p className="text-gray-300 mb-3 text-left"><span className="text-discord-blurple font-bold">Command:</span> /imagine</p>
                <p className="text-gray-300 italic text-left">"a futuristic cyberpunk city with neon lights"</p>
              </div>
              <div className="bg-discord-darker rounded-lg aspect-square flex items-center justify-center">
                <span className="text-gray-400 italic">AI generated image would appear here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
