import React from 'react';
import { Zap, ChevronRight, Coins, Lock, PiggyBank, Wallet } from 'lucide-react';

// Logo ART 1
const ARTLogo1 = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 190.5 190.5">
    <g>
      <path
        fill="#9391F7"
        d="M190.5,95.3C190.5,42.6,147.9,0,95.3,0S0,42.6,0,95.3s42.6,95.3,95.3,95.3S190.5,147.9,190.5,95.3L190.5,95.3z"
      />
      <path
        fill="#FFFFFF"
        d="M77.5,99.9c8.2-1.3,13.7-9,12.4-17.2c-1.3-8.2-9-13.7-17.2-12.4c-8.2,1.3-13.7,9-12.4,17.2C61.7,95.7,69.4,101.2,77.5,99.9L77.5,99.9z M116.7,99.9c8.2-1.3,13.7-9,12.4-17.2c-1.3-8.2-9-13.7-17.2-12.4c-8.2,1.3-13.7,9-12.4,17.2C100.8,95.7,108.5,101.2,116.7,99.9L116.7,99.9z"
      />
      <path
        fill="#FFFFFF"
        d="M94.7,23.3C54,23.3,21,56.9,21,98.3h18.8c0-31.1,24.4-56.2,54.8-56.2c30.5,0,54.8,25.2,54.8,56.2h18.8C168.4,56.9,135.4,23.3,94.7,23.3L94.7,23.3L94.7,23.3z"
      />
    </g>
  </svg>
);

// Logo Communautaire
const CommunityLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 113 86">
    <g>
      <path
        fill="#FFFFFF"
        d="M6,15.5c6.3,0,12.6,0,19,0c0,0.4,0,0.8,0,1.2c0,1.7-0.1,3.4,0,5.1c0.3,3.1,1.1,6.1,2.4,9 c1.2,2.6,2.7,4.9,4.7,6.9c2.4,2.5,5.3,4.4,8.7,5.4c0.3,0.1,0.4,0.2,0.4,0.5c-0.1,1.6,0.2,3.1-0.2,4.7c-0.6,2.6-2.1,4.4-4.4,5.4 c-1.1,0.5-2.2,0.7-3.4,0.7c-3.8,0-7.7,0-11.5,0c-1.8,0-3.5-0.3-5-1.4c-2.2-1.6-3.2-3.9-3.2-6.7c0-7.5,0-15.1,0-22.6 c0-0.2,0-0.4,0-0.6c0-1.1-0.7-1.7-1.7-2c-2.6-0.8-4.5-2.6-5.7-5C6.1,16,6,15.8,6,15.7C6,15.7,6,15.6,6,15.5z"
      />
      <path
        fill="#FFFFFF"
        d="M95.1,33c-0.7-0.7-1.4-1.5-2-2.2c-0.3-0.4-0.7-0.6-1.2-0.6c-1.1,0-2.2,0-3.2,0v-0.1H58.6c-0.3,0-0.5,0-0.8,0 c-3.9,0-7.8,0-11.7,0c-0.2,0-0.4,0-0.6,0c-0.4,0-0.5,0.2-0.5,0.5c0,0.2,0,0.4,0,0.6c0,5.4,0,10.8,0,16.2c0,0.9-0.1,1.9-0.4,2.7 c-0.9,2.8-2.6,5-5.2,6.6c-0.4,0.3-0.6,0.5-0.6,1c0,2.2,0,4.4,0.1,6.6c0,5,0.1,10,0.1,14.9c0,0.8,0,0.9,0.8,0.9c2.6,0,5.1,0,7.6,0 c0.8,0,0.8,0,1-0.9c0.4-1.8,0.8-3.7,1.2-5.5c0.4-1.9,0.9-3.9,1.3-5.8c0.2-0.8,0.2-0.8,1-0.8c10.4,0,20.8,0,31.1,0 c0.2,0,0.5,0,0.7,0.1c1,4.4,1.9,8.7,3,13c3.1,0,6.1,0,9.2,0c0.1-1.5,0.2-2.8,0.3-4.2c0.1-2.2,0.3-4.4,0.4-6.6 c0.2-3.6,0.4-7.3,0.6-10.9c0.2-3.2,0.3-6.4,0.5-9.6c0.1-2.5,0.2-5,0.4-7.5C98.5,38.1,97.3,35.3,95.1,33z"
      />
      <path
        fill="#FFFFFF"
        d="M61.4,43.7c4.5,0,8.2-3.7,8.2-8.3S66,27,61.4,27c-4.5,0-8.2,3.7-8.2,8.3S56.9,43.7,61.4,43.7z"
      />
      <path
        fill="#FFFFFF"
        d="M84.9,60.2c3.8,0,6.9-3.1,6.9-7c0-3.9-3.1-7-6.9-7c-3.8,0-6.9,3.1-6.9,7C78,57.1,81.1,60.2,84.9,60.2z"
      />
      <path
        fill="#FFFFFF"
        d="M61.6,69.8c3.8-0.1,7.6,0.4,11.3,0.9c0.1,0,0.2,0,0.3,0c0.1-0.6,0.1-1.1,0.1-1.7c0-6.2-4.9-11.2-11-11.2 c-6.1,0-11,5-11,11.2c0,1.1,0.2,2.1,0.4,3.1C54.3,69.6,58.3,69.9,61.6,69.8z"
      />
    </g>
  </svg>
);

// Logo PancakeSwap
const PancakeSwapLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32">
    <path
      fill="#633001"
      d="M5.7,5C5.2,2.4,7.2,0,9.8,0c2.3,0,4.2,1.9,4.2,4.2v5.2c0.6,0,1.2-0.1,1.8-0.1c0.6,0,1.1,0,1.7,0.1V4.2c0-2.3,1.9-4.2,4.2-4.2c2.6,0,4.6,2.4,4.2,5l-1.1,6.1c3.9,1.7,6.9,4.7,6.9,8.4v2.3c0,3.1-2,5.7-4.9,7.4c-2.9,1.8-6.7,2.8-11,2.8s-8.1-1-11-2.8C2,27.5,0,24.9,0,21.8v-2.3c0-3.7,2.9-6.7,6.8-8.4L5.7,5z"
    />
    <path
      fill="#FEDC90"
      d="M30.4,21.8c0,4.9-6.5,8.9-14.5,8.9c-8,0-14.5-4-14.5-8.9v-2.3h29.1V21.8z"
    />
    <path
      fill="#D1884F"
      d="M7,4.8C6.6,3,8,1.3,9.8,1.3c1.6,0,2.9,1.3,2.9,2.9v6.6c1-0.1,2-0.2,3.1-0.2c1,0,2,0.1,3,0.2V4.2c0-1.6,1.3-2.9,2.9-2.9c1.8,0,3.2,1.7,2.9,3.5l-1.3,7.2c4.2,1.6,7.1,4.4,7.1,7.6c0,4.9-6.5,8.9-14.5,8.9c-8,0-14.5-4-14.5-8.9c0-3.2,2.8-6,7-7.6L7,4.8z"
    />
    <path
      fill="#633001"
      d="M11.8,18.9c0,1.3-0.7,2.4-1.6,2.4c-0.9,0-1.6-1.1-1.6-2.4s0.7-2.4,1.6-2.4C11.1,16.5,11.8,17.6,11.8,18.9z"
    />
    <path
      fill="#633001"
      d="M22.9,18.9c0,1.3-0.7,2.4-1.6,2.4c-0.9,0-1.6-1.1-1.6-2.4s0.7-2.4,1.6-2.4C22.2,16.5,22.9,17.6,22.9,18.9z"
    />
  </svg>
);

// Logo Compound
const CompoundLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 2000 2000">
    <path
      fill="#070A0E"
      d="M1000,2000c552.3,0,1000-447.7,1000-1000S1552.3,0,1000,0S0,447.7,0,1000S447.7,2000,1000,2000z"
    />
    <path
      fill="#00D395"
      d="M577.7,1335.3c-29.9-18.3-48.2-50.8-48.2-85.8v-195.4c0-23.2,18.9-42,42.1-41.9c7.4,0,14.7,2,21.1,5.7l440.9,257.1c25.8,15,41.7,42.6,41.7,72.5v202.4c0.1,27.8-22.4,50.4-50.2,50.4c-9.3,0-18.5-2.6-26.4-7.4L577.7,1335.3z"
    />
  </svg>
);

// Logo Ethereum avec dégradé
const EthereumLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 600 600">
    <defs>
      <radialGradient
        id="ethGradient"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(196 143.5) rotate(54.1675) scale(497.082)"
      >
        <stop stopColor="#FFD794" />
        <stop offset="1" stopColor="#ED5A37" />
      </radialGradient>
    </defs>
    <path
      d="M300 600C465.685 600 600 465.685 600 300C600 134.315 465.685 0 300 0C134.315 0 0 134.315 0 300C0 465.685 134.315 600 300 600Z"
      fill="url(#ethGradient)"
    />
    <path
      d="M299.556 364.731L185.417 297.211L299.556 107.867L413.593 297.211L299.556 364.731Z"
      fill="white"
    />
    <path
      d="M299.556 479.69L185.417 318.932L299.556 386.35L413.696 318.932L299.556 479.69Z"
      fill="white"
    />
  </svg>
);

// Logo Euler Finance
const EulerFinanceLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 800 800">
    <circle cx="400" cy="400" r="398.9" fill="#0c2129" />
    <rect
      x="139.71"
      y="213.48"
      width="398.9"
      height="99.73"
      rx="49.86"
      transform="translate(-77.79 160.72) rotate(-24)"
      fill="#37bec1"
    />
    <rect
      x="159.31"
      y="390.7"
      width="299.18"
      height="99.73"
      rx="49.86"
      transform="translate(-152.49 163.73) rotate(-24)"
      fill="#fbb144"
    />
    <rect
      x="261.39"
      y="486.79"
      width="398.9"
      height="99.73"
      rx="49.86"
      transform="translate(-178.44 233.84) rotate(-24)"
      fill="#e4615e"
    />
  </svg>
);

// Composant de carte stratégie
const StrategyCard = ({ title, description, icon: Icon, logos = [] }) => (
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
    {logos.length > 0 && (
      <div className="flex gap-2 mt-auto pt-4">
        {logos.map((Logo, index) => (
          <Logo key={index} size={48} />
        ))}
      </div>
    )}
  </div>
);

const StrategySection = () => {
  const strategies = [
    {
      icon: Coins,
      title: 'Stake',
      description: 'This allows you to stake an ART to obtain yield',
      logos: [PancakeSwapLogo],
    },
    {
      icon: Lock,
      title: 'Collateralize',
      description: 'adds an ART as collateral in order to have borrowing capacity',
      logos: [CompoundLogo, EthereumLogo],
    },
    {
      icon: PiggyBank,
      title: 'Lend',
      description: 'Lend your ART and get returns',
      logos: [ARTLogo1, CommunityLogo],
    },
    {
      icon: Wallet,
      title: 'Borrow',
      description: 'borrow to multiply your return',
      logos: [EulerFinanceLogo],
    },
  ];

  return (
    <div className="space-y-8">
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} {...strategy} />
        ))}
      </div>
    </div>
  );
};

export default StrategySection;
