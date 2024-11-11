import React from 'react';
import AnimatedTitle from './AnimatedTitle'; // Changement ici : import du default export

const MenuGrid = ({ onNavigate }) => {
  const menuItems = [
    { title: 'Builders', position: 1, route: 'builders' },
    { title: 'Distributors', position: 2, route: 'distributors' },
    { title: 'Issuers', position: 3, route: 'issuers' },
    { title: 'Documentation', position: 4, route: 'documentation' },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <AnimatedTitle />
      <div className="grid grid-cols-2 gap-6 max-w-2xl w-full">
        {menuItems.map((item) => (
          <div
            key={item.position}
            onClick={() => onNavigate(item.route)}
            className="bg-white/10 backdrop-blur-xl rounded-lg p-6
                     border border-purple-300/20 
                     hover:bg-white/15 hover:scale-105 
                     transition-all duration-300 ease-in-out
                     cursor-pointer
                     flex items-center justify-center
                     h-32
                     active:scale-95"
          >
            <span className="text-3xl font-medium bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
