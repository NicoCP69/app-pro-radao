import React, { useState } from 'react';

const TokenSection = () => {
  const [isConfigLocked, setIsConfigLocked] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);
  const [tokens, setTokens] = useState([
    {
      id: 1,
      name: 'APPLE-SHARE-USD',
      ticker: 'AAPL',
      mintUnmintFees: '2.5',
      walletFees: '0x1234567890123456789012345678901234567890',
    },
    {
      id: 2,
      name: 'BITCOIN-USD',
      ticker: 'BTC',
      mintUnmintFees: '3.0',
      walletFees: '0x2345678901234567890123456789012345678901',
    },
    {
      id: 3,
      name: 'GOOGLE-SHARE-USD',
      ticker: 'GOOGL',
      mintUnmintFees: '2.0',
      walletFees: '0x3456789012345678901234567890123456789012',
    },
  ]);

  const [tokenConfig, setTokenConfig] = useState({
    name: '',
    ticker: '',
    mintUnmintFees: '',
    walletFees: '',
  });

  const handleSelectToken = (token) => {
    setTokenConfig(token);
    setShowConfig(true);
    setIsConfigLocked(true);
  };

  const handleAddNew = () => {
    setTokenConfig({
      name: '',
      ticker: '',
      mintUnmintFees: '',
      walletFees: '',
    });
    setShowConfig(true);
    setIsConfigLocked(false);
  };

  const handleInputChange = (field, value) => {
    if (!isConfigLocked) {
      setTokenConfig((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const validateWalletAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  const isFormValid = () => {
    return (
      tokenConfig.name.trim() !== '' &&
      tokenConfig.ticker.trim() !== '' &&
      tokenConfig.mintUnmintFees !== '' &&
      validateWalletAddress(tokenConfig.walletFees)
    );
  };

  const handleSaveToken = () => {
    if (isFormValid()) {
      setTokens((prev) => [...prev, { ...tokenConfig, id: prev.length + 1 }]);
      setIsConfigLocked(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Your Tokens Section */}
      <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Your Tokens
          </h2>
          <button
            onClick={handleAddNew}
            className="px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 
                     text-purple-200 border border-purple-300/20 transition-all duration-300
                     hover:scale-105"
          >
            Add New
          </button>
        </div>

        <select
          onChange={(e) => handleSelectToken(tokens.find((t) => t.id === parseInt(e.target.value)))}
          className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                   text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
          value={selectedToken?.id || ''}
        >
          <option value="">Select a token</option>
          {tokens.map((token) => (
            <option key={token.id} value={token.id}>
              {token.ticker} - {token.name}
            </option>
          ))}
        </select>
      </div>

      {/* Token Configuration Section */}
      {showConfig && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Token Configuration
            </h2>
            <div className="flex space-x-4">
              {isConfigLocked && (
                <button
                  onClick={() => setIsConfigLocked(false)}
                  className="px-4 py-2 rounded-lg transition-all duration-300 
                    bg-orange-500/20 hover:bg-orange-500/30 text-orange-200 
                    hover:scale-105 border border-orange-300/20"
                >
                  Modify Configuration
                </button>
              )}
              <button
                onClick={() => {
                  setIsConfigLocked(true);
                  if (!isConfigLocked) handleSaveToken();
                }}
                disabled={!isFormValid() || isConfigLocked}
                className={`px-4 py-2 rounded-lg transition-all duration-300 
                  ${
                    !isFormValid() || isConfigLocked
                      ? 'bg-gray-500/20 text-gray-300 cursor-not-allowed'
                      : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'
                  } border border-purple-300/20`}
              >
                {isConfigLocked ? 'Configuration Locked' : 'Validate Configuration'}
              </button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
            <div className="space-y-6">
              {/* First Row - Name, Ticker, Fees */}
              <div className="flex gap-6">
                {/* Name Field - 50% width */}
                <div className="flex-grow">
                  <label className="block text-sm font-medium text-purple-200 mb-2">Name</label>
                  <input
                    type="text"
                    value={tokenConfig.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={isConfigLocked}
                    placeholder="ALPIN-ALUNI-LONG-SHORT"
                    className={`w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                             text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                             ${isConfigLocked ? 'cursor-not-allowed opacity-80' : ''}
                             placeholder:text-purple-200/30`}
                  />
                </div>

                {/* Ticker Field - 25% width */}
                <div className="w-1/4">
                  <label className="block text-sm font-medium text-purple-200 mb-2">Ticker</label>
                  <input
                    type="text"
                    value={tokenConfig.ticker}
                    onChange={(e) => handleInputChange('ticker', e.target.value.toUpperCase())}
                    disabled={isConfigLocked}
                    placeholder="rALPIN"
                    className={`w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                             text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                             ${isConfigLocked ? 'cursor-not-allowed opacity-80' : ''}
                             placeholder:text-purple-200/30`}
                  />
                </div>

                {/* Mint/Unmint Fees Field - 25% width */}
                <div className="w-1/4">
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Mint/Unmint Fees (%)
                  </label>
                  <input
                    type="number"
                    value={tokenConfig.mintUnmintFees}
                    onChange={(e) => handleInputChange('mintUnmintFees', e.target.value)}
                    disabled={isConfigLocked}
                    placeholder="between 0 and 5%"
                    min="0"
                    max="5"
                    step="0.01"
                    className={`w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                             text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                             ${isConfigLocked ? 'cursor-not-allowed opacity-80' : ''}
                             placeholder:text-purple-200/30`}
                  />
                </div>
              </div>

              {/* Wallet Fees Field - Full width */}
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Wallet Fees (Gnosis Blockchain Address)
                </label>
                <input
                  type="text"
                  value={tokenConfig.walletFees}
                  onChange={(e) => handleInputChange('walletFees', e.target.value)}
                  disabled={isConfigLocked}
                  placeholder="0x..."
                  className={`w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                           ${isConfigLocked ? 'cursor-not-allowed opacity-80' : ''}
                           ${
                             tokenConfig.walletFees &&
                             !validateWalletAddress(tokenConfig.walletFees)
                               ? 'border-red-500/50'
                               : ''
                           }`}
                />
                {tokenConfig.walletFees && !validateWalletAddress(tokenConfig.walletFees) && (
                  <p className="mt-1 text-xs text-red-400">
                    Please enter a valid Gnosis wallet address (0x... format)
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenSection;
