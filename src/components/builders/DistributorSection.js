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

const DistributorSection = () => {
  const [selectedToken, setSelectedToken] = useState('');
  const [enableSPV, setEnableSPV] = useState(false);
  const [selectedSPV, setSelectedSPV] = useState('');
  const [enableWidget, setEnableWidget] = useState(false);
  const [isConfigLocked, setIsConfigLocked] = useState(false);
  const [widgetConfig, setWidgetConfig] = useState({
    theme: 'blue',
    font: 'Inter',
    title: '',
  });

  const spvOptions = [
    { value: 'ibex', label: 'IBExWallet' },
    { value: 'radao', label: 'Radao' },
    { value: 'shares', label: 'Shares' },
  ];

  const themeOptions = [
    { value: 'red', label: 'Rouge' },
    { value: 'green', label: 'Vert' },
    { value: 'black', label: 'Noir' },
    { value: 'blue', label: 'Bleu' },
    { value: 'gray', label: 'Gris' },
  ];

  const fontOptions = [
    { value: 'Inter', label: 'Inter' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Poppins', label: 'Poppins' },
    { value: 'Arial', label: 'Arial' },
    { value: 'Helvetica', label: 'Helvetica' },
  ];

  const generateWidgetCode = () => {
    if (!enableWidget || !selectedToken) return '';

    const randomId = Math.random().toString(36).substring(7);
    return `<div id="radao-widget-${randomId}"
  data-token="${selectedToken}"
  data-theme="${widgetConfig.theme}"
  data-font="${widgetConfig.font}"
  data-title="${widgetConfig.title}"
  data-spv="${selectedSPV}">
</div>
<script src="https://widget.radao.com/v1/${randomId}.js"></script>`;
  };

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
            Distributor Configuration
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
            Please select a token to configure the distributor
          </p>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20 space-y-6">
          {/* Le reste du contenu reste identique */}
          {/* SPV Section */}
          <div className="flex items-center space-x-8">
            {/* ... Le contenu existant ... */}
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
              <span className="ml-3 text-purple-200 font-medium">Enable Distributor Selection</span>
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
                  <option value="">Select Distributor</option>
                  {spvOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Distributor Section avec le widget */}
          <div className="pt-4 border-t border-purple-300/10">
            {/* ... Le reste du code existant ... */}
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enableWidget}
                onChange={(e) => !isConfigLocked && setEnableWidget(e.target.checked)}
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
              <span className="ml-3 text-purple-200 font-medium">Create My Distributor</span>
            </label>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                enableWidget ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="mt-6 space-y-4 pl-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Theme</label>
                    <select
                      value={widgetConfig.theme}
                      onChange={(e) =>
                        !isConfigLocked &&
                        setWidgetConfig({ ...widgetConfig, theme: e.target.value })
                      }
                      disabled={isConfigLocked}
                      className={`w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                             text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                             ${isConfigLocked ? 'cursor-not-allowed opacity-80' : ''}`}
                    >
                      {themeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">Font</label>
                    <select
                      value={widgetConfig.font}
                      onChange={(e) =>
                        !isConfigLocked &&
                        setWidgetConfig({ ...widgetConfig, font: e.target.value })
                      }
                      disabled={isConfigLocked}
                      className={`w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                             text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                             ${isConfigLocked ? 'cursor-not-allowed opacity-80' : ''}`}
                    >
                      {fontOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Widget Title
                  </label>
                  <input
                    type="text"
                    value={widgetConfig.title}
                    onChange={(e) =>
                      !isConfigLocked && setWidgetConfig({ ...widgetConfig, title: e.target.value })
                    }
                    disabled={isConfigLocked}
                    placeholder="Enter widget title"
                    className={`w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                           ${isConfigLocked ? 'cursor-not-allowed opacity-80' : ''}`}
                  />
                </div>

                {/* Widget Code avec le token sélectionné */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Widget Code
                  </label>
                  <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-purple-200">
                    <pre className="whitespace-pre-wrap break-all">{generateWidgetCode()}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistributorSection;
