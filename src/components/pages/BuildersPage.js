import React, { useState } from 'react';
import IssuerSection from '../builders/IssuerSection';
import HearingSection from '../builders/HearingSection';
import TokenSection from '../builders/TokenSection';
import ContentSection from '../builders/ContentSection';
import DistributorSection from '../builders/DistributorSection';
import ComplianceSection from '../builders/ComplianceSection';
import StrategySection from '../builders/StrategySection';
import { Zap, ChevronRight } from 'lucide-react';

const BuildersSidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'token', title: 'Token' },
    { id: 'content', title: 'Reserve' },
    { id: 'issuer', title: 'Issuer' },
    { id: 'distributor', title: 'Distributor' },
    { id: 'compliance', title: 'Compliance' },
    { id: 'hearing', title: 'Audience' },
  ];

  return (
    <div className="w-64 flex flex-col h-full">
      <div className="space-y-3">
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
      <div className="flex-grow min-h-[100px]" />
      <button
        onClick={() => setActiveSection('strategy')}
        className={`group w-full px-6 py-3 rounded-lg transition-all duration-300
          backdrop-blur-xl border
          mb-6
          ${
            activeSection === 'strategy'
              ? 'bg-gradient-to-br from-yellow-400/40 via-amber-500/40 to-yellow-600/40 border-yellow-300/70 shadow-[0_0_15px_rgba(251,191,36,0.3)] scale-105'
              : 'bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-yellow-600/20 border-yellow-300/50 hover:border-yellow-300/70 hover:shadow-[0_0_10px_rgba(251,191,36,0.2)]'
          }
          flex items-center justify-between
          transform hover:translate-x-1`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-1 rounded-full
            ${
              activeSection === 'strategy'
                ? 'bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600 shadow-lg'
                : 'bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-500'
            }
          `}
          >
            <Zap size={16} className="text-yellow-900 group-hover:animate-pulse" />
          </div>
          <span
            className={`font-semibold
            ${
              activeSection === 'strategy'
                ? 'bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600'
                : 'bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-500'
            }
            bg-clip-text text-transparent
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
          >
            Strategy
          </span>
        </div>
        <ChevronRight
          size={18}
          className={`
            ${
              activeSection === 'strategy'
                ? 'text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'
                : 'text-yellow-400/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]'
            }
            group-hover:translate-x-1 transition-transform duration-300`}
        />
      </button>
    </div>
  );
};

const BuildersContent = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case 'token':
        return <TokenSection />;
      case 'content':
        return <ContentSection />;
      case 'distributor':
        return <DistributorSection />;
      case 'compliance':
        return <ComplianceSection />;
      case 'issuer':
        return <IssuerSection />;
      case 'hearing':
        return <HearingSection />;
      case 'strategy':
        return <StrategySection />;
      default:
        return <div className="text-purple-200 text-center">In Progress...</div>;
    }
  };

  return (
    <div className="flex-1 bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
      {renderContent()}
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
