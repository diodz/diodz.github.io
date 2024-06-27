import React from 'react';
import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-xl font-bold">Your Name</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"><Home className="inline mr-1" size={18} /> Home</a>
              <a href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"><User className="inline mr-1" size={18} /> About</a>
              <a href="/projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"><Briefcase className="inline mr-1" size={18} /> Projects</a>
              <a href="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"><FileText className="inline mr-1" size={18} /> Blog</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"><Home className="inline mr-1" size={18} /> Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"><User className="inline mr-1" size={18} /> About</a>
            <a href="/projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"><Briefcase className="inline mr-1" size={18} /> Projects</a>
            <a href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"><FileText className="inline mr-1" size={18} /> Blog</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;