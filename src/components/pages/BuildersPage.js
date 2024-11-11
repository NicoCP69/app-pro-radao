import React from 'react';

const BuildersPage = () => (
  <div className="w-full max-w-4xl">
    <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
      Builders Dashboard
    </h1>

    {/* Overview Section */}
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-purple-300/20">
        <h3 className="text-sm text-purple-200/70 mb-1">Total Tokens</h3>
        <p className="text-2xl font-semibold text-purple-200">12</p>
      </div>
      <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-purple-300/20">
        <h3 className="text-sm text-purple-200/70 mb-1">Active Tokens</h3>
        <p className="text-2xl font-semibold text-purple-200">8</p>
      </div>
      <div className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-purple-300/20">
        <h3 className="text-sm text-purple-200/70 mb-1">Total Value</h3>
        <p className="text-2xl font-semibold text-purple-200">$1.2M</p>
      </div>
    </div>

    {/* Main Content */}
    <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-purple-200">Your Tokens</h2>
        <button
          className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 
                         text-purple-200 rounded-lg border border-purple-300/20
                         transition-all duration-200"
        >
          Create New Token
        </button>
      </div>

      <p className="text-purple-200">Liste des tokens et leurs statistiques...</p>
    </div>
  </div>
);

export default BuildersPage;
