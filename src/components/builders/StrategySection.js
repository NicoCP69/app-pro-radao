import React from 'react';
import { Zap, ChevronRight, Coins, Lock, PiggyBank } from 'lucide-react';

const StrategyCard = ({ title, description, icon: Icon }) => (
  <div
    className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-yellow-300/20 
                  hover:border-yellow-300/40 transition-all duration-300
                  flex flex-col gap-4"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-amber-500/20">
        <Icon className="text-yellow-300" size={24} />
      </div>
      <h3 className="text-lg font-semibold bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <p className="text-yellow-100/70">{description}</p>
  </div>
);

const StrategySection = () => {
  const strategies = [
    {
      icon: Coins,
      title: 'Stake',
      description: 'This allows you to stake an ART to obtain yield',
    },
    {
      icon: Lock,
      title: 'Collateralize',
      description: 'adds an ART as collateral in order to have borrowing capacity',
    },
    {
      icon: PiggyBank,
      title: 'Lend',
      description: 'Lend your ART and get returns',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
            Strategy Dashboard
          </h2>
          <p className="text-yellow-100/70 mt-2">Choose your ART strategy</p>
        </div>
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-amber-500/20 
                         border border-yellow-300/40 text-yellow-300
                         hover:border-yellow-300/60 transition-all duration-300
                         flex items-center gap-2"
        >
          <Zap size={18} />
          Create Strategy
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} {...strategy} />
        ))}
      </div>
    </div>
  );
};

export default StrategySection;
