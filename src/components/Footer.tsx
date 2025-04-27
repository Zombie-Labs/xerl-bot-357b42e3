
import React from 'react';
import { Bot } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-discord-darker pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-8 w-8 text-discord-blurple" />
              <span className="text-xl font-bold text-white">Xerl-bot</span>
            </div>
            
            <p className="text-gray-300 mb-4">
              Enhancing Discord servers with powerful features, moderation tools, and fun commands.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-discord-blurple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-discord-blurple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-discord-blurple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-discord-blurple transition-colors">Features</a></li>
              <li><a href="#commands" className="text-gray-300 hover:text-discord-blurple transition-colors">Commands</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-discord-blurple transition-colors">About</a></li>
              <li><a href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands" className="text-gray-300 hover:text-discord-blurple transition-colors">Add to Discord</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-discord-blurple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-discord-blurple transition-colors">Support Server</a></li>
              <li><a href="#" className="text-gray-300 hover:text-discord-blurple transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-discord-blurple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-discord-light pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Xerl-bot. Developed by ! ZenpaiZombie !. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Xerl-bot is not affiliated with Discord Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
