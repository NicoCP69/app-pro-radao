import React from 'react';
import { Layers, Share2, Briefcase, BookOpen } from 'lucide-react';
import AnimatedTitle from './AnimatedTitle'; // Mise à jour de l'import

const MenuGrid = ({ onNavigate }) => {
  const menuItems = [
    {
      title: 'Builders',
      description: 'Créez votre jeton',
      icon: Layers,
      position: 1,
      route: 'builders',
    },
    {
      title: 'Distributors',
      description: 'Proposez des jetons à votre audience',
      icon: Share2,
      position: 2,
      route: 'distributors',
    },
    {
      title: 'Issuers',
      description: 'Émettez des jetons',
      icon: Briefcase,
      position: 3,
      route: 'issuers',
    },
    {
      title: 'Documentation',
      description: 'Comprendre et utilisez Radao',
      icon: BookOpen,
      position: 4,
      route: 'documentation',
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <AnimatedTitle />
      <div className="grid grid-cols-2 gap-6 max-w-2xl w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.position}
              onClick={() => onNavigate(item.route)}
              className="bg-white/10 backdrop-blur-xl rounded-lg p-6
                      border border-purple-300/20 
                      hover:bg-white/15 hover:scale-105 
                      transition-all duration-300 ease-in-out
                      cursor-pointer
                      flex flex-col items-center justify-center
                      h-48
                      active:scale-95
                      group"
            >
              <Icon
                className="w-8 h-8 mb-4 text-purple-300 group-hover:text-purple-200 
                        transition-colors duration-300"
              />
              <span
                className="text-2xl font-medium bg-gradient-to-r from-purple-200 to-pink-200 
                            bg-clip-text text-transparent text-center mb-2"
              >
                {item.title}
              </span>
              <span
                className="text-sm text-purple-300 text-center opacity-80 
                            group-hover:opacity-100 transition-opacity duration-300"
              >
                {item.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuGrid;
