import React from 'react';

const DocumentationPage = () => (
  <div className="w-full max-w-4xl">
    <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
      Documentation
    </h1>
    <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
      <p className="text-purple-200 mb-4">
        Cette documentation explique comment utiliser notre plateforme.
      </p>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-purple-200 mb-2">Builders</h2>
          <p className="text-purple-300">
            Informations sur la création et la gestion des tokens...
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-purple-200 mb-2">Distributors</h2>
          <p className="text-purple-300">Guide de distribution et de gestion des actifs...</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-purple-200 mb-2">Issuers</h2>
          <p className="text-purple-300">Processus d'émission et conformité réglementaire...</p>
        </section>
      </div>
    </div>
  </div>
);

export default DocumentationPage;
