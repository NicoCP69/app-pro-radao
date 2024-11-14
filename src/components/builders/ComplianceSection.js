import React, { useState } from 'react';
import { Save, ChevronDown, Link, AlertTriangle, X } from 'lucide-react';

const CustomDialog = ({ isOpen, onClose, onConfirm, buttonPosition }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative bg-gray-900/95 p-6 rounded-lg border border-purple-300/20 max-w-md w-full m-4"
        style={{
          marginTop: buttonPosition ? `${buttonPosition.top + 40}px` : '20vh',
          marginLeft: buttonPosition ? `${buttonPosition.left - 200}px` : 'auto',
        }}
      >
        <div className="absolute right-4 top-4">
          <button onClick={onClose} className="text-purple-200 hover:text-purple-100">
            <X size={20} />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-purple-200 flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-orange-400" />
            Confirmation Required
          </h3>
          <p className="text-purple-100">
            Attention un White paper généré pour un token ne peut plus être effacé, il faudra
            recréer un autre token.
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-200 hover:bg-purple-500/20 border border-purple-300/20"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 border border-purple-300/20"
          >
            Confirm Generation
          </button>
        </div>
      </div>
    </div>
  );
};

const ComplianceSection = () => {
  const [selectedToken, setSelectedToken] = useState('');
  const [isTokenDropdownOpen, setIsTokenDropdownOpen] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(null);
  const [formData, setFormData] = useState({
    issuingDate: '',
    issuerLegalPerson: '',
    declaration: '',
    operation: '',
    tokenCategory: '',
    tokenSubCategory: '',
    fractionnable: null,
    reserve: '',
    reserveManagement: '',
    rightsObligations: '',
    risks: '',
    riskScore: '1',
    price: '',
    supply: '',
    primarySale: '',
    tokenDescription: '',
  });

  const tokens = ['BTC-ETH.ART', 'GOOGLE-BTC.ART', 'AAPLLOOP.ART'];

  const spvOptions = [
    { value: 'chainr-ou', label: 'ChainR OÜ' },
    { value: 'chainr-sas', label: 'ChainR SAS' },
    { value: 'chainr-uab', label: 'ChainR UAB' },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormValid = () => {
    return Object.entries(formData).every(([key, value]) => {
      if (key === 'riskScore') return true;
      if (typeof value === 'string') return value.trim() !== '';
      return value !== null;
    });
  };

  const handleGenerateClick = (event) => {
    if (isFormValid()) {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setButtonPosition({
        top: rect.top + scrollTop,
        left: rect.left,
      });
      setShowConfirmDialog(true);
    }
  };

  const handleGenerateWhitepaper = async () => {
    setIsSaving(true);
    setShowConfirmDialog(false);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const selectedSpv = spvOptions.find((spv) => spv.value === formData.issuerLegalPerson);
    if (selectedSpv && selectedToken) {
      const url = `https://assets.radao.org/${selectedSpv.value}/${selectedToken}`;
      setGeneratedUrl(url);
    }

    setIsSaving(false);
  };

  const GeneratedUrlDisplay = () => {
    if (!generatedUrl) return null;

    return (
      <div className="mt-4">
        <div className="flex items-center gap-2 px-4 py-3 bg-purple-500/10 rounded-lg border border-purple-300/20">
          <Link size={18} className="text-purple-200" />
          <a
            href={generatedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-200 hover:text-purple-100 underline break-all"
          >
            {generatedUrl}
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Compliance Documentation
            </h2>

            <div className="relative">
              <button
                onClick={() => setIsTokenDropdownOpen(!isTokenDropdownOpen)}
                className="px-4 py-2 rounded-lg transition-all duration-300 bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border border-purple-300/20 flex items-center gap-2 min-w-[200px] justify-between"
              >
                <span className="truncate">{selectedToken || 'Select Token'}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${isTokenDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isTokenDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 rounded-lg border border-purple-300/20 bg-gray-900/95 backdrop-blur-xl shadow-xl">
                  <div className="py-1">
                    {tokens.map((token) => (
                      <button
                        key={token}
                        onClick={() => {
                          setSelectedToken(token);
                          setIsTokenDropdownOpen(false);
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
          </div>
          <button
            onClick={handleGenerateClick}
            disabled={isSaving || !selectedToken || !isFormValid()}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 
              ${!selectedToken || !isFormValid() ? 'bg-purple-500/10 text-purple-200/50 cursor-not-allowed' : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'} 
              border border-purple-300/20`}
          >
            <Save size={18} />
            {isSaving ? 'Generating...' : 'Generate Whitepaper'}
          </button>
        </div>
        <GeneratedUrlDisplay />
      </div>

      <CustomDialog
        isOpen={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={handleGenerateWhitepaper}
        buttonPosition={buttonPosition}
      />
      {!selectedToken ? (
        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20 mt-8">
          <p className="text-purple-200 text-center">
            Please select a token to proceed with compliance documentation
          </p>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20 space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">Issuing Date</label>
              <input
                type="date"
                value={formData.issuingDate}
                onChange={(e) => handleInputChange('issuingDate', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Issuer Legal Person
              </label>
              <select
                value={formData.issuerLegalPerson}
                onChange={(e) => handleInputChange('issuerLegalPerson', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
              >
                <option value="">Select SPV</option>
                {spvOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Declaration Date
              </label>
              <input
                type="date"
                value={formData.declaration}
                onChange={(e) => handleInputChange('declaration', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">Operation</label>
              <input
                type="text"
                value={formData.operation}
                onChange={(e) => handleInputChange('operation', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Token Category
              </label>
              <input
                type="text"
                value={formData.tokenCategory}
                onChange={(e) => handleInputChange('tokenCategory', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Token Sub-category
              </label>
              <input
                type="text"
                value={formData.tokenSubCategory}
                onChange={(e) => handleInputChange('tokenSubCategory', e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Fractionnable</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="fractionnable"
                  value="yes"
                  checked={formData.fractionnable === 'yes'}
                  onChange={() => handleInputChange('fractionnable', 'yes')}
                  className="text-purple-500 focus:ring-purple-400/30"
                />
                <span className="ml-2 text-purple-200">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="fractionnable"
                  value="no"
                  checked={formData.fractionnable === 'no'}
                  onChange={() => handleInputChange('fractionnable', 'no')}
                  className="text-purple-500 focus:ring-purple-400/30"
                />
                <span className="ml-2 text-purple-200">No</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Reserve</label>
            <textarea
              value={formData.reserve}
              onChange={(e) => handleInputChange('reserve', e.target.value)}
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Reserve Management
            </label>
            <textarea
              value={formData.reserveManagement}
              onChange={(e) => handleInputChange('reserveManagement', e.target.value)}
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Rights & Obligations
            </label>
            <textarea
              value={formData.rightsObligations}
              onChange={(e) => handleInputChange('rightsObligations', e.target.value)}
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Risk Score (1-10)
            </label>
            <div className="grid grid-cols-10 gap-2 w-full">
              {[...Array(10)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleInputChange('riskScore', (index + 1).toString())}
                  className={`aspect-square rounded-lg transition-all duration-300 
          ${
            formData.riskScore === (index + 1).toString()
              ? 'bg-purple-500/50 text-purple-100 ring-2 ring-purple-400'
              : 'bg-purple-500/20 text-purple-200 hover:bg-purple-500/30'
          } 
          border border-purple-300/20 flex items-center justify-center font-medium`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Price</label>
            <textarea
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Supply</label>
            <textarea
              value={formData.supply}
              onChange={(e) => handleInputChange('supply', e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">Primary Sale</label>
            <textarea
              value={formData.primarySale}
              onChange={(e) => handleInputChange('primarySale', e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Token Description
            </label>
            <textarea
              value={formData.tokenDescription}
              onChange={(e) => handleInputChange('tokenDescription', e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplianceSection;
