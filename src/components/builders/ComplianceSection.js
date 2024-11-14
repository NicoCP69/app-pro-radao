import React, { useState } from 'react';
import { Save, ChevronDown } from 'lucide-react';

const ComplianceSection = () => {
  const [selectedToken, setSelectedToken] = useState('');
  const [isTokenDropdownOpen, setIsTokenDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    legalStructure: '',
    jurisdiction: '',
    description: '',
    tokenomics: {
      totalSupply: '',
      distribution: '',
      vestingPeriod: '',
    },
    riskManagement: '',
    compliance: {
      amlPolicy: '',
      kycProcedures: '',
      regulatoryFramework: '',
    },
  });

  const [isSaving, setIsSaving] = useState(false);

  const tokens = ['BTC-ETH.ART', 'GOOGLE-BTC.ART', 'AAPLLOOP.ART'];

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: typeof prev[section] === 'object' ? { ...prev[section], [field]: value } : value,
    }));
  };

  const handleGenerateWhitepaper = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSaving(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Compliance Documentation
          </h2>

          {/* Token Selector */}
          <div className="relative">
            <button
              onClick={() => setIsTokenDropdownOpen(!isTokenDropdownOpen)}
              className="px-4 py-2 rounded-lg transition-all duration-300 
                bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 
                border border-purple-300/20 flex items-center gap-2 min-w-[200px]
                justify-between"
            >
              <span className="truncate">{selectedToken || 'Select Token'}</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${isTokenDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isTokenDropdownOpen && (
              <div
                className="absolute z-10 w-full mt-2 rounded-lg border border-purple-300/20 
                bg-gray-900/95 backdrop-blur-xl shadow-xl"
              >
                <div className="py-1">
                  {tokens.map((token) => (
                    <button
                      key={token}
                      onClick={() => {
                        setSelectedToken(token);
                        setIsTokenDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-purple-200 hover:bg-purple-500/20
                        transition-colors duration-150"
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
          onClick={handleGenerateWhitepaper}
          disabled={isSaving || !selectedToken}
          className={`px-4 py-2 rounded-lg transition-all duration-300 
            flex items-center gap-2 ${
              !selectedToken
                ? 'bg-purple-500/10 text-purple-200/50 cursor-not-allowed'
                : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'
            } border border-purple-300/20`}
        >
          <Save size={18} />
          {isSaving ? 'Generating...' : 'Generate Whitepaper'}
        </button>
      </div>

      {!selectedToken ? (
        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
          <p className="text-purple-200 text-center">
            Please select a token to proceed with compliance documentation
          </p>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20 space-y-6">
          {/* Project Information */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-purple-200">Project Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', null, e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="Enter project name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Legal Structure
                </label>
                <select
                  value={formData.legalStructure}
                  onChange={(e) => handleInputChange('legalStructure', null, e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                >
                  <option value="">Select structure</option>
                  <option value="foundation">Foundation</option>
                  <option value="corporation">Corporation</option>
                  <option value="llc">LLC</option>
                  <option value="dao">DAO</option>
                </select>
              </div>
            </div>
          </section>

          {/* Tokenomics */}
          <section className="space-y-4 pt-6 border-t border-purple-300/10">
            <h3 className="text-lg font-medium text-purple-200">Tokenomics</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Total Supply
                </label>
                <input
                  type="number"
                  value={formData.tokenomics.totalSupply}
                  onChange={(e) => handleInputChange('tokenomics', 'totalSupply', e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="Enter total supply"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Token Distribution
                </label>
                <textarea
                  value={formData.tokenomics.distribution}
                  onChange={(e) => handleInputChange('tokenomics', 'distribution', e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30 min-h-[100px]"
                  placeholder="Describe token distribution (e.g., Team: 20%, Public Sale: 40%...)"
                />
              </div>
            </div>
          </section>

          {/* Compliance Requirements */}
          <section className="space-y-4 pt-6 border-t border-purple-300/10">
            <h3 className="text-lg font-medium text-purple-200">Compliance Requirements</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">AML Policy</label>
                <textarea
                  value={formData.compliance.amlPolicy}
                  onChange={(e) => handleInputChange('compliance', 'amlPolicy', e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30 min-h-[100px]"
                  placeholder="Describe your Anti-Money Laundering policy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  KYC Procedures
                </label>
                <textarea
                  value={formData.compliance.kycProcedures}
                  onChange={(e) => handleInputChange('compliance', 'kycProcedures', e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30 min-h-[100px]"
                  placeholder="Describe your Know Your Customer procedures"
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ComplianceSection;
