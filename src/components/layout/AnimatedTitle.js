import React from 'react';

const AnimatedTitle = () => (
  <div className="text-center mb-20">
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

export default AnimatedTitle;
