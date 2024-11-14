import React, { useState, useRef } from 'react';

const HearingSection = () => {
  const [emailFile, setEmailFile] = useState(null);
  const [walletFile, setWalletFile] = useState(null);
  const [emails, setEmails] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [emailError, setEmailError] = useState('');
  const [walletError, setWalletError] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isWalletSubmitted, setIsWalletSubmitted] = useState(false);
  const emailInputRef = useRef(null);
  const walletInputRef = useRef(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const validateWalletAddress = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address.trim());
  };

  const handleEmailFileChange = async (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      try {
        const text = await uploadedFile.text();
        const emailList = text
          .split(',')
          .map((email) => email.trim())
          .filter((email) => email);

        const invalidEmails = emailList.filter((email) => !validateEmail(email));
        if (invalidEmails.length > 0) {
          setEmailError(
            `Emails invalides détectés: ${invalidEmails.slice(0, 3).join(', ')}${invalidEmails.length > 3 ? '...' : ''}`
          );
          setEmailFile(null);
          setEmails([]);
          return;
        }

        setEmails(emailList);
        setEmailFile(uploadedFile);
        setEmailError('');
        setIsEmailSubmitted(false);
      } catch (err) {
        setEmailError('Erreur lors de la lecture du fichier');
        setEmailFile(null);
        setEmails([]);
      }
    }
  };

  const handleWalletFileChange = async (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      try {
        const text = await uploadedFile.text();
        const addresses = text
          .split(',')
          .map((addr) => addr.trim())
          .filter((addr) => addr);

        const invalidAddresses = addresses.filter((addr) => !validateWalletAddress(addr));
        if (invalidAddresses.length > 0) {
          setWalletError(
            `Adresses invalides détectées: ${invalidAddresses.slice(0, 3).join(', ')}${invalidAddresses.length > 3 ? '...' : ''}`
          );
          setWalletFile(null);
          setWallets([]);
          return;
        }

        setWallets(addresses);
        setWalletFile(uploadedFile);
        setWalletError('');
        setIsWalletSubmitted(false);
      } catch (err) {
        setWalletError('Erreur lors de la lecture du fichier');
        setWalletFile(null);
        setWallets([]);
      }
    }
  };

  const handleEmailSubmit = () => {
    if (emails.length > 0) {
      setIsEmailSubmitted(true);
      console.log('Emails à traiter:', emails);
    }
  };

  const handleWalletSubmit = () => {
    if (wallets.length > 0) {
      setIsWalletSubmitted(true);
      console.log('Wallets à traiter:', wallets);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleEmailDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      const fakeEvent = { target: { files: [file] } };
      await handleEmailFileChange(fakeEvent);
    }
  };

  const handleWalletDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      const fakeEvent = { target: { files: [file] } };
      await handleWalletFileChange(fakeEvent);
    }
  };

  return (
    <div>
      {/* Section Emails */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Configuration des Emails
          </h2>
          <button
            onClick={handleEmailSubmit}
            disabled={!emailFile || isEmailSubmitted}
            className={`px-4 py-2 rounded-lg transition-all duration-300 
              ${
                !emailFile || isEmailSubmitted
                  ? 'bg-gray-500/20 text-gray-300 cursor-not-allowed'
                  : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'
              } border border-purple-300/20`}
          >
            {isEmailSubmitted ? 'Emails Envoyés' : 'Envoyer les Emails'}
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
          <div className="flex gap-6">
            {/* Zone de dépôt à gauche */}
            <div
              onClick={() => emailInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDrop={handleEmailDrop}
              className={`
                border-2 border-dashed rounded-lg p-4
                transition-all duration-300 cursor-pointer
                flex flex-col items-center justify-center
                min-w-48 h-32
                ${
                  emailFile
                    ? 'border-purple-500/50 bg-purple-500/5'
                    : 'border-purple-300/20 hover:border-purple-300/40 hover:bg-white/5'
                }
              `}
            >
              <input
                type="file"
                ref={emailInputRef}
                onChange={handleEmailFileChange}
                accept=".txt"
                className="hidden"
              />

              {emailFile ? (
                <div className="text-center">
                  <p className="text-purple-200 text-sm mb-1">{emailFile.name}</p>
                  <p className="text-purple-300 text-xs">{emails.length} emails</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-purple-200 text-sm">Déposez le fichier ici</p>
                  <p className="text-purple-300 text-xs mt-1">ou cliquez pour parcourir</p>
                </div>
              )}
            </div>

            {/* Informations à droite */}
            <div className="flex-1">
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-300/20">
                <p className="text-blue-200 text-sm">
                  <span className="font-medium">Format Requis:</span> Fichier texte (.txt) contenant
                  des adresses email séparées par des virgules.
                  <br />
                  <span className="text-blue-300 text-xs mt-1 block">
                    Cette liste sera invitée à acheter votre ART
                  </span>
                </p>
              </div>
            </div>
          </div>

          {emailError && (
            <div className="mt-4 p-4 bg-red-500/10 rounded-lg border border-red-300/20">
              <p className="text-red-200 text-center">{emailError}</p>
            </div>
          )}

          {isEmailSubmitted && (
            <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-300/20">
              <p className="text-green-200 text-center">Les emails ont été envoyés avec succès</p>
            </div>
          )}
        </div>
      </div>

      {/* Section Wallets */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Configuration des Wallets
          </h2>
          <button
            onClick={handleWalletSubmit}
            disabled={!walletFile || isWalletSubmitted}
            className={`px-4 py-2 rounded-lg transition-all duration-300 
              ${
                !walletFile || isWalletSubmitted
                  ? 'bg-gray-500/20 text-gray-300 cursor-not-allowed'
                  : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'
              } border border-purple-300/20`}
          >
            {isWalletSubmitted ? 'Wallets Traités' : 'Traiter les Wallets'}
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
          <div className="flex gap-6">
            {/* Zone de dépôt à gauche */}
            <div
              onClick={() => walletInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDrop={handleWalletDrop}
              className={`
                border-2 border-dashed rounded-lg p-4
                transition-all duration-300 cursor-pointer
                flex flex-col items-center justify-center
                min-w-48 h-32
                ${
                  walletFile
                    ? 'border-purple-500/50 bg-purple-500/5'
                    : 'border-purple-300/20 hover:border-purple-300/40 hover:bg-white/5'
                }
              `}
            >
              <input
                type="file"
                ref={walletInputRef}
                onChange={handleWalletFileChange}
                accept=".txt"
                className="hidden"
              />

              {walletFile ? (
                <div className="text-center">
                  <p className="text-purple-200 text-sm mb-1">{walletFile.name}</p>
                  <p className="text-purple-300 text-xs">{wallets.length} wallets</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-purple-200 text-sm">Déposez le fichier ici</p>
                  <p className="text-purple-300 text-xs mt-1">ou cliquez pour parcourir</p>
                </div>
              )}
            </div>

            {/* Informations à droite */}
            <div className="flex-1">
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-300/20">
                <p className="text-blue-200 text-sm">
                  <span className="font-medium">Format Requis:</span> Fichier texte (.txt) contenant
                  des adresses de wallet ERC20 séparées par des virgules.
                  <br />
                  <span className="text-blue-300 text-xs mt-1 block">
                    Cette liste de wallet sera exposée à votre ART dans IBW
                  </span>
                </p>
              </div>
            </div>
          </div>

          {walletError && (
            <div className="mt-4 p-4 bg-red-500/10 rounded-lg border border-red-300/20">
              <p className="text-red-200 text-center">{walletError}</p>
            </div>
          )}

          {isWalletSubmitted && (
            <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-300/20">
              <p className="text-green-200 text-center">Les wallets ont été traités avec succès</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HearingSection;
