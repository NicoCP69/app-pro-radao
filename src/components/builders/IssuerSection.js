import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TokenSelector = ({
  selectedToken,
  onTokenSelect,
  tokens = ['BTC-ETH.ART', 'GOOGLE-BTC.ART', 'AAPLLOOP.ART'],
  className = '',
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`px-4 py-2 rounded-lg transition-all duration-300 
          bg-purple-500/20 hover:bg-purple-500/30 
          text-purple-200 border border-purple-300/20 
          flex items-center gap-2 min-w-[200px] justify-between
          ${className}`}
      >
        <span className="truncate">{selectedToken || 'Select Token'}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 w-full mt-2 rounded-lg border border-purple-300/20 bg-gray-900/95 backdrop-blur-xl shadow-xl">
          <div className="py-1">
            {tokens.map((token) => (
              <button
                key={token}
                onClick={() => {
                  onTokenSelect(token);
                  setIsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-purple-200 hover:bg-purple-500/20 transition-colors duration-150"
              >
                {token}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const IssuerSection = () => {
  const [selectedToken, setSelectedToken] = useState('');
  const [enableSPV, setEnableSPV] = useState(false);
  const [selectedSPV, setSelectedSPV] = useState('');
  const [enableIssuer, setEnableIssuer] = useState(false);
  const [isConfigLocked, setIsConfigLocked] = useState(false);

  const spvOptions = [
    { value: 'chainr-ou', label: 'ChainR OÜ' },
    { value: 'chainr-sas', label: 'ChainR SAS' },
    { value: 'chainr-uab', label: 'ChainR UAB' },
  ];

  const handleLockConfig = () => {
    if (selectedToken) {
      setIsConfigLocked(true);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Issuer Configuration
          </h2>
          <TokenSelector selectedToken={selectedToken} onTokenSelect={setSelectedToken} />
        </div>
        <div className="flex space-x-4">
          {isConfigLocked && (
            <button
              onClick={() => setIsConfigLocked(false)}
              className="px-4 py-2 rounded-lg transition-all duration-300 
                bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 
                hover:scale-105 border border-orange-300/20"
            >
              Modify
            </button>
          )}
          <button
            onClick={handleLockConfig}
            disabled={isConfigLocked || !selectedToken}
            className={`px-4 py-2 rounded-lg transition-all duration-300 
              ${
                isConfigLocked || !selectedToken
                  ? 'bg-gray-500/20 text-gray-300 cursor-not-allowed'
                  : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'
              } border border-purple-300/20`}
          >
            {isConfigLocked ? 'Locked' : 'Validate'}
          </button>
        </div>
      </div>

      {!selectedToken ? (
        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
          <p className="text-purple-200 text-center">
            Please select a token to configure the issuer
          </p>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20 space-y-6">
          {/* SPV Section */}
          <div className="flex items-center space-x-8">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enableSPV}
                onChange={(e) => !isConfigLocked && setEnableSPV(e.target.checked)}
                disabled={isConfigLocked}
                className="sr-only peer"
              />
              <div
                className="relative w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-purple-300 after:rounded-full after:h-5 after:w-5 
                          after:transition-all peer-checked:bg-purple-500/30"
              ></div>
              <span className="ml-3 text-purple-200 font-medium">Enable SPV Selection</span>
            </label>

            {enableSPV && (
              <div className="w-64">
                <select
                  value={selectedSPV}
                  onChange={(e) => !isConfigLocked && setSelectedSPV(e.target.value)}
                  disabled={isConfigLocked}
                  className={`w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                          text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                          ${isConfigLocked ? 'cursor-not-allowed opacity-80' : ''}`}
                >
                  <option value="">Select SPV</option>
                  {spvOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Issuer Section */}
          <div className="pt-4 border-t border-purple-300/10">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enableIssuer}
                onChange={(e) => !isConfigLocked && setEnableIssuer(e.target.checked)}
                disabled={isConfigLocked}
                className="sr-only peer"
              />
              <div
                className="relative w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-purple-300 after:rounded-full after:h-5 after:w-5 
                          after:transition-all peer-checked:bg-purple-500/30"
              ></div>
              <span className="ml-3 text-purple-200 font-medium">Add My Issuer</span>
            </label>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                enableIssuer ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="mt-6 space-y-4 pl-4">
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-300/20">
                  <p className="text-purple-200 text-center">
                    Pour ajouter votre propre issuer, contactez{' '}
                    <a
                      href="mailto:issuer@radao.org"
                      className="text-purple-300 hover:text-purple-100 underline transition-colors"
                    >
                      issuer@radao.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssuerSection;
