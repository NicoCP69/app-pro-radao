import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import LoginPage from './components/pages/LoginPage';
import MenuGrid from './components/layout/MenuGrid';
import BuildersPage from './components/pages/BuildersPage';
import DistributorsPage from './components/pages/DistributorsPage';
import IssuersPage from './components/pages/IssuersPage';
import DocumentationPage from './components/pages/DocumentationPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('menu');
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setCurrentPage('menu');
  };

  // Si l'utilisateur n'est pas connecté, afficher la page de login
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

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
        {/* Header avec email de l'utilisateur et bouton déconnexion */}
        <div className="flex justify-between items-center mb-6">
          {currentPage !== 'menu' && (
            <button
              onClick={() => setCurrentPage('menu')}
              className="flex items-center px-3 py-1.5 text-sm font-medium text-purple-200 
                       bg-white/5 hover:bg-white/10 rounded-lg border border-purple-300/20
                       transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Menu
            </button>
          )}

          <div className="flex items-center space-x-4 ml-auto">
            <span className="text-purple-200 text-sm">{userEmail}</span>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setUserEmail('');
                setCurrentPage('menu');
              }}
              className="px-3 py-1.5 text-sm font-medium text-purple-200 
                       bg-white/5 hover:bg-white/10 rounded-lg border border-purple-300/20
                       transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App;
