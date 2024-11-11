import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import MenuGrid from './components/layout/MenuGrid';
import BuildersPage from './components/pages/BuildersPage';
import DistributorsPage from './components/pages/DistributorsPage';
import IssuersPage from './components/pages/IssuersPage';
import DocumentationPage from './components/pages/DocumentationPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('menu');

  const renderPage = () => {
    switch (currentPage) {
      case 'builders':
        return <BuildersPage />;
      case 'distributors':
        return <DistributorsPage />;
      case 'issuers':
        return <IssuersPage />;
      case 'documentation':
        return <DocumentationPage />;
      default:
        return <MenuGrid onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-950 p-4">
      <div className="max-w-6xl mx-auto">
        {currentPage !== 'menu' && (
          <div className="mb-6">
            <button
              onClick={() => setCurrentPage('menu')}
              className="flex items-center px-3 py-1.5 text-sm font-medium text-purple-200 
                       bg-white/5 hover:bg-white/10 rounded-lg border border-purple-300/20
                       transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Menu
            </button>
          </div>
        )}

        <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App;
