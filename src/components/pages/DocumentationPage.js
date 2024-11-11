import React, { useState } from 'react';

const DocSidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'radao', title: 'Radao' },
    { id: 'api', title: 'API' },
    { id: 'builders', title: 'Builders' },
    { id: 'issuers', title: 'Issuers' },
    { id: 'distributors', title: 'Distributors' },
  ];

  return (
    <div className="w-64 space-y-3">
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
  );
};

const DocContent = ({ section }) => {
  const content = {
    radao: (
      <div>
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          Radao Documentation
        </h2>
        <div className="prose prose-invert">
          <p className="text-purple-200">
            Radao is a decentralized protocol for asset tokenization that enables the transformation
            of real-world assets into digital tokens.
          </p>
          <h3 className="text-xl text-purple-200 mt-4 mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-purple-300">
            <li>Seamless asset tokenization</li>
            <li>Regulatory compliance built-in</li>
            <li>Automated token distribution</li>
            <li>Real-time asset tracking</li>
          </ul>
        </div>
      </div>
    ),
    api: (
      <div>
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          API Reference
        </h2>
        <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-purple-200">
          <pre className="overflow-x-auto">
            {`POST /api/v1/tokens
{
  "name": "Asset Token",
  "symbol": "AST",
  "totalSupply": 1000000,
  "decimals": 18,
  "assetType": "real_estate",
  "metadata": {
    "location": "Paris, France",
    "valuation": 1000000
  }
}`}
          </pre>
        </div>
      </div>
    ),
    builders: (
      <div>
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          Builders Guide
        </h2>
        <div className="text-purple-200">
          <p className="mb-4">
            Builders are responsible for creating and managing token contracts. This guide will help
            you understand the token creation process.
          </p>
          <p className="mb-4">
            All tokens must implement the standard ART interface and pass compliance checks before
            deployment.
          </p>
        </div>
      </div>
    ),
    issuers: (
      <div>
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          Issuers Documentation
        </h2>
        <div className="text-purple-200">
          <p className="mb-4">
            Issuers play a crucial role in validating and managing token emissions. They ensure
            regulatory compliance and maintain asset backing.
          </p>
          <p className="mb-4">
            Each issued token requires proper documentation and regular audits.
          </p>
        </div>
      </div>
    ),
    distributors: (
      <div>
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          Distributors Guide
        </h2>
        <div className="text-purple-200">
          <p className="mb-4">
            Distributors manage token distribution and secondary market operations. They ensure fair
            and compliant token distribution.
          </p>
          <p className="mb-4">Follow KYC/AML guidelines for all distribution activities.</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="flex-1 bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
      {content[section]}
    </div>
  );
};

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState('radao');

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
        Documentation
      </h1>
      <div className="flex gap-6">
        <DocSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <DocContent section={activeSection} />
      </div>
    </div>
  );
};

export default DocumentationPage;
