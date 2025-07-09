import React from 'react';
import { ExternalLink } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Writings', href: '#writings' },
    { name: 'Curator\'s Corner', href: '#curator' },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-80 bg-black bg-opacity-90 backdrop-blur-sm border-r border-gray-800 z-50">
      <div className="flex flex-col h-full p-8">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-white tracking-wide">
            Suhas
          </h1>
        </div>
        
        <div className="flex-1">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-lg text-gray-300 hover:text-white transition-colors duration-300 font-light tracking-wide hover:translate-x-2 transform transition-transform"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <div className="mb-4">
            <p className="text-gray-400 text-sm font-light tracking-wide">
              You can find me on
            </p>
          </div>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-lg font-light tracking-wide">X</span>
            <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;