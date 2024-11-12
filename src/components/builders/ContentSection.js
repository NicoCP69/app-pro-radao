import React, { useState } from 'react';

const ContentSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isConfigLocked, setIsConfigLocked] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [requestType, setRequestType] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [requestDescription, setRequestDescription] = useState('');

  const categories = [
    {
      id: 'crypto',
      name: 'Crypto',
      options: ['BTC', 'ETH', 'PEPE', 'stETH'],
    },
    {
      id: 'nasdaq',
      name: 'Nasdaq',
      options: ['AAPL', 'GOOGL', 'MICROSOFT', 'TESLA'],
    },
    {
      id: 'nyse',
      name: 'Nyse',
      options: ['3D SYSTEMS', 'A10 NETWORKS', 'ACCO BRANDS'],
    },
  ];

  const requestTypes = [
    { value: 'new_market', label: 'Nouveau marché' },
    { value: 'new_asset', label: 'Nouvel actif sur marché existant' },
    { value: 'new_crypto', label: 'Nouvelle crypto' },
    { value: 'unlisted', label: 'Actif non listé' },
  ];

  const calculateTotal = () => {
    return selectedAssets.reduce((sum, item) => sum + (Number(item.percentage) || 0), 0);
  };

  const handleAssetSelect = (asset) => {
    if (!selectedAssets.find((item) => item.asset === asset)) {
      setSelectedAssets([...selectedAssets, { asset, percentage: '' }]);
      setShowAlert(false);
    }
  };

  const handlePercentageChange = (asset, value) => {
    const newValue = Math.min(Math.max(0, value), 100);
    const updatedAssets = selectedAssets.map((item) =>
      item.asset === asset ? { ...item, percentage: newValue } : item
    );

    const newTotal = updatedAssets.reduce((sum, item) => sum + (Number(item.percentage) || 0), 0);

    if (newTotal > 100) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }

    setSelectedAssets(updatedAssets);
  };

  const handleRemoveAsset = (asset) => {
    setSelectedAssets(selectedAssets.filter((item) => item.asset !== asset));
    setShowAlert(false);
  };

  const isValid = () => {
    return calculateTotal() === 100 && !showAlert;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          Reserve Configuration
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
            onClick={() => setIsConfigLocked(true)}
            disabled={isConfigLocked || !isValid()}
            className={`px-4 py-2 rounded-lg transition-all duration-300 
              ${
                isConfigLocked || !isValid()
                  ? 'bg-gray-500/20 text-gray-300 cursor-not-allowed'
                  : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'
              } border border-purple-300/20`}
          >
            {isConfigLocked ? 'Configuration Locked' : 'Validate Configuration'}
          </button>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20 space-y-6">
        {/* Question Title */}
        <div className="text-center mb-8">
          <h3 className="text-xl text-purple-200">What do you want in your Token's reserve?</h3>
        </div>
        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                setSelectedCategory(selectedCategory === category.id ? null : category.id)
              }
              disabled={isConfigLocked}
              className={`px-6 py-3 rounded-lg transition-all duration-300 
                ${
                  selectedCategory === category.id
                    ? 'bg-purple-500/30 text-purple-100 scale-105 shadow-lg'
                    : 'bg-white/5 text-purple-300 hover:bg-white/10 hover:scale-102'
                } border border-purple-300/20
                ${isConfigLocked ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Content Selection Area */}
        <div className="flex gap-6">
          {/* Left Side - Asset Selection */}
          {selectedCategory && (
            <div className="w-1/3">
              <select
                className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                         text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                onChange={(e) => handleAssetSelect(e.target.value)}
                disabled={isConfigLocked}
                value=""
              >
                <option value="">Select an asset</option>
                {categories
                  .find((cat) => cat.id === selectedCategory)
                  ?.options.filter(
                    (option) => !selectedAssets.find((item) => item.asset === option)
                  )
                  .map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {/* Right Side - Selected Assets with Percentages */}
          {selectedAssets.length > 0 && (
            <div className="flex-1">
              <div className="space-y-4">
                {selectedAssets.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-1 bg-white/5 px-4 py-2 rounded-lg text-purple-200">
                      {item.asset}
                    </div>
                    <input
                      type="number"
                      value={item.percentage}
                      onChange={(e) => handlePercentageChange(item.asset, e.target.value)}
                      placeholder="%"
                      min="0"
                      max="100"
                      disabled={isConfigLocked}
                      className="w-24 px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                               text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                    />
                    <button
                      onClick={() => handleRemoveAsset(item.asset)}
                      disabled={isConfigLocked}
                      className="p-2 text-purple-300 hover:text-purple-100 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Total Percentage with Alert */}
                <div className="space-y-2">
                  <div className="flex justify-end items-center gap-4 pt-4 border-t border-purple-300/20">
                    <span className="text-purple-200">Total:</span>
                    <span
                      className={`font-medium ${showAlert ? 'text-red-400' : 'text-purple-100'}`}
                    >
                      {calculateTotal()}%
                    </span>
                  </div>

                  {showAlert && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-300 text-sm">
                      Le total des pourcentages ne peut pas dépasser 100%
                    </div>
                  )}

                  {!showAlert && calculateTotal() < 100 && selectedAssets.length > 0 && (
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-blue-300 text-sm">
                      Le total doit être égal à 100%
                    </div>
                  )}

                  {calculateTotal() === 100 && (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-green-300 text-sm">
                      Total valide (100%)
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Les éléments précédents (Total Percentage with Alert, etc.) restent identiques */}
        {/* Request Form Section */}
        <div className="mt-8 pt-6 border-t border-purple-300/20">
          <div className="max-w-2xl mx-auto">
            {!requestType ? (
              <button
                onClick={() => setRequestType('initial')}
                className="w-full px-4 py-3 rounded-lg transition-all duration-300
                 bg-white/5 hover:bg-white/10 text-purple-200
                 border border-purple-300/20 hover:scale-102"
              >
                L'actif que vous souhaitez intégrer n'existe pas ?
              </button>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-purple-200">Demande d'ajout d'actif</h3>
                  <button
                    onClick={() => {
                      setRequestType('');
                      setRequestDetails('');
                      setRequestDescription('');
                    }}
                    className="text-purple-300 hover:text-purple-100 transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Request Type Selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-200">
                    Que souhaitez vous ?
                  </label>
                  <select
                    value={requestType === 'initial' ? '' : requestType}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                     text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  >
                    <option value="">Sélectionnez une option</option>
                    {requestTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dynamic Input Field */}
                {requestType && requestType !== 'initial' && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-purple-200">
                      {requestType === 'new_crypto'
                        ? 'Numéro de smart contract'
                        : 'Détails de votre demande'}
                    </label>
                    <input
                      type="text"
                      value={requestDetails}
                      onChange={(e) => setRequestDetails(e.target.value)}
                      placeholder={
                        requestType === 'new_crypto' ? '0x...' : 'Précisez votre demande...'
                      }
                      className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                       text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                    />
                  </div>
                )}

                {/* Description Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-200">
                    Qui êtes vous et que voulez vous ?
                  </label>
                  <textarea
                    value={requestDescription}
                    onChange={(e) => setRequestDescription(e.target.value)}
                    rows="3"
                    className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                     text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30
                     resize-none"
                    placeholder="Décrivez votre projet et vos besoins..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      console.log({ requestType, requestDetails, requestDescription });
                      setRequestType('');
                      setRequestDetails('');
                      setRequestDescription('');
                    }}
                    disabled={!requestType || !requestDescription}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 
              ${
                !requestType || !requestDescription
                  ? 'bg-gray-500/20 text-gray-300 cursor-not-allowed'
                  : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'
              } border border-purple-300/20`}
                  >
                    Envoyer la demande
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
