
import React from 'react';
import { Bot, Music, Shield, MessageCircle, Smile, Star, Bell } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const commandCategories = [
  {
    id: "general",
    name: "General",
    icon: <Bot className="h-5 w-5" />,
    commands: [
      { name: "/help", description: "Show all available commands" },
      { name: "/invite", description: "Get an invite link for the bot" },
      { name: "/ping", description: "Check the bot's response time" },
      { name: "/serverinfo", description: "Display information about the server" },
      { name: "/userinfo", description: "Display information about a user" }
    ]
  },
  {
    id: "moderation",
    name: "Moderation",
    icon: <Shield className="h-5 w-5" />,
    commands: [
      { name: "/kick", description: "Kick a member from the server" },
      { name: "/ban", description: "Ban a member from the server" },
      { name: "/mute", description: "Mute a member in the server" },
      { name: "/clear", description: "Clear messages in a channel" },
      { name: "/warn", description: "Warn a member for breaking rules" }
    ]
  },
  {
    id: "music",
    name: "Music",
    icon: <Music className="h-5 w-5" />,
    commands: [
      { name: "/play", description: "Play a song from YouTube or other sources" },
      { name: "/skip", description: "Skip the current song" },
      { name: "/stop", description: "Stop the music and clear the queue" },
      { name: "/queue", description: "View the current music queue" },
      { name: "/volume", description: "Adjust the volume of the music" }
    ]
  },
  {
    id: "fun",
    name: "Fun & Games",
    icon: <Smile className="h-5 w-5" />,
    commands: [
      { name: "/imagine", description: "Generate an AI image from your description" },
      { name: "/8ball", description: "Ask the magic 8-ball a question" },
      { name: "/joke", description: "Get a random joke" },
      { name: "/trivia", description: "Start a trivia game" },
      { name: "/tictactoe", description: "Play tic-tac-toe with someone" }
    ]
  },
  {
    id: "utility",
    name: "Utility",
    icon: <Star className="h-5 w-5" />,
    commands: [
      { name: "/giveaway", description: "Start a giveaway in your server" },
      { name: "/poll", description: "Create a poll for members to vote on" },
      { name: "/reminder", description: "Set a reminder for yourself or the channel" },
      { name: "/customrole", description: "Create a custom role with colors" },
      { name: "/afk", description: "Set your status as AFK" }
    ]
  },
];

const CommandsSection: React.FC = () => {
  return (
    <section id="commands" className="py-24 bg-discord-darker relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-discord-blurple/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-discord-fuchsia/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bot <span className="text-discord-blurple">Commands</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore some of Xerl-bot's most useful commands and features
          </p>
        </div>
        
        <div className="bg-discord-dark rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 bg-transparent">
              {commandCategories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 bg-discord-light data-[state=active]:bg-discord-blurple"
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {commandCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="bg-discord-darker rounded-lg p-4 space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-discord-blurple mb-4">
                    {category.icon}
                    <span>{category.name} Commands</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {category.commands.map((command, idx) => (
                      <div 
                        key={idx}
                        className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-discord-light rounded-lg"
                      >
                        <code className="font-mono text-discord-blurple font-semibold mb-2 md:mb-0">
                          {command.name}
                        </code>
                        <span className="text-gray-300">{command.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;
