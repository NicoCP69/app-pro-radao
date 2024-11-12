import React from 'react';
import { Layers, Share2, Briefcase, BookOpen } from 'lucide-react';

const AnimatedTitle = () => (
  <div className="text-center mb-16">
    <div className="relative inline-block">
      <h1 className="text-8xl lg:text-9xl font-bold tracking-wider mb-4">
        <span
          className="bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300 bg-clip-text text-transparent
                     animate-gradient-x hover:animate-pulse cursor-default
                     transition-all duration-300 ease-in-out
                     hover:scale-105"
        >
          Radao
        </span>
      </h1>
      <div className="text-xl text-purple-300/80 mt-6 tracking-wide space-y-1">
        <div className="flex justify-center space-x-4">
          <span className="animate-slide-in-1 opacity-0">Create</span>
          <span className="animate-slide-in-2 opacity-0">Organize</span>
          <span className="animate-slide-in-3 opacity-0">Execute</span>
        </div>
        <div className="animate-slide-in-4 opacity-0 mt-2">
          <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            and expose to the world
          </span>
        </div>
      </div>
    </div>
  </div>
);

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
