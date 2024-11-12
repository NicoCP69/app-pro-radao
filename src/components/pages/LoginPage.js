import React, { useState } from 'react';
import AnimatedTitle from '../layout/AnimatedTitle';

const LoginPage = ({ onLogin }) => {
  const [isNewUser, setIsNewUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isNewUser) {
      // Sign Up validation
      if (password !== confirmPassword) {
        setError('Les mots de passe ne correspondent pas');
        return;
      }
      if (password.length < 8) {
        setError('Le mot de passe doit contenir au moins 8 caractères');
        return;
      }
      // Show success message and reset form
      setShowSuccess(true);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setShowSuccess(false);
        setIsNewUser(false);
      }, 3000);
    } else {
      // Sign In
      // Here you would typically validate against your backend
      onLogin(email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-purple-950 p-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <AnimatedTitle />

        <div className="w-full max-w-xl">
          {' '}
          {/* Réduit de 2xl à xl */}
          <div className="bg-white/5 backdrop-blur-xl rounded-lg p-8 border border-purple-300/20">
            {' '}
            {/* Réduit de p-12 à p-8 */}
            {/* Toggle Sign In / Sign Up */}
            <div className="flex justify-center space-x-6 mb-8">
              {' '}
              {/* Réduit les espacements */}
              <button
                onClick={() => {
                  setIsNewUser(true);
                  setError('');
                  setShowSuccess(false);
                }}
                className={`px-6 py-2 rounded-lg transition-all duration-300 
                ${
                  isNewUser
                    ? 'bg-purple-500/30 text-purple-100 scale-105'
                    : 'bg-white/5 text-purple-300 hover:bg-white/10'
                } border border-purple-300/20`}
              >
                Sign Up
              </button>
              <button
                onClick={() => {
                  setIsNewUser(false);
                  setError('');
                  setShowSuccess(false);
                }}
                className={`px-6 py-2 rounded-lg transition-all duration-300 
                ${
                  !isNewUser
                    ? 'bg-purple-500/30 text-purple-100 scale-105'
                    : 'bg-white/5 text-purple-300 hover:bg-white/10'
                } border border-purple-300/20`}
              >
                Sign In
              </button>
            </div>
            {/* Messages */}
            {showSuccess && (
              <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-300 text-center text-sm">
                  Compte créé avec succès ! Vous pouvez maintenant vous connecter.
                </p>
              </div>
            )}
            {error && (
              <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-300 text-center text-sm">{error}</p>
              </div>
            )}
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {' '}
              {/* Réduit l'espacement */}
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                         text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                         text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="********"
                />
              </div>
              {isNewUser && (
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-purple-300/20 rounded-lg
                           text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                    placeholder="********"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/80 to-pink-500/80 
                       text-white text-sm font-medium hover:from-purple-500 hover:to-pink-500
                       transition-all duration-300 hover:scale-102"
              >
                {isNewUser ? 'Créer un compte' : 'Se connecter'}
              </button>
            </form>
            {/* Additional Info */}
            <div className="mt-6 text-center text-sm text-purple-200/70">
              {isNewUser ? (
                <p>En créant un compte, vous acceptez nos conditions d'utilisation</p>
              ) : (
                <p>Entrez vos identifiants pour accéder à votre compte</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
