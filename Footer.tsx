import React from 'react';
import { Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Music className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold">Harmonic Fusion</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-purple-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#music" className="hover:text-purple-500 transition-colors">Music</a>
            <a href="#tour" className="hover:text-purple-500 transition-colors">Tour</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-900/30 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Harmonic Fusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
