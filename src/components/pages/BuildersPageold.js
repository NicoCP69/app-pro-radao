import React, { useState } from 'react';
import DistributorSection from '../builders/DistributorSection';

const BuildersSidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'token', title: 'Token' },
    { id: 'content', title: 'Content' },
    { id: 'issuer', title: 'Issuer' },
    { id: 'distributor', title: 'Distributor' },
    { id: 'hearing', title: 'Hearing' },
  ];

  return (
    <div className="w-64 space-y-3">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`w-full px-6 py-3 rounded-lg transition-all duration-300
            backdrop-blur-xl border border-purple-300/20
            ${
              activeSection === item.id
                ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-100 scale-105 shadow-lg'
                : 'bg-white/5 text-purple-300 hover:bg-white/10 hover:scale-102'
            }
            flex items-center justify-start
            transform hover:translate-x-1`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

const BuildersContent = ({ section }) => {
  return (
    <div className="flex-1 bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
      <div className="text-purple-200 text-center">In Progress...</div>
    </div>
  );
};

const BuildersPage = () => {
  const [activeSection, setActiveSection] = useState('token');

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
        Builders Dashboard
      </h1>
      <div className="flex gap-6">
        <BuildersSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <BuildersContent section={activeSection} />
      </div>
    </div>
  );
};

export default BuildersPage;