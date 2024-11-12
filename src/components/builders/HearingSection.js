import React, { useState, useRef } from 'react';

const HearingSection = () => {
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setIsSubmitted(false);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          Hearing Configuration
        </h2>
        <button
          onClick={handleSubmit}
          disabled={!file || isSubmitted}
          className={`px-4 py-2 rounded-lg transition-all duration-300 
            ${
              !file || isSubmitted
                ? 'bg-gray-500/20 text-gray-300 cursor-not-allowed'
                : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 hover:scale-105'
            } border border-purple-300/20`}
        >
          {isSubmitted ? 'Emails Sent Successfully' : 'Send Emails'}
        </button>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-lg p-6 border border-purple-300/20">
        {/* Format Info Box */}
        <div className="mb-6 p-4 bg-blue-500/10 rounded-lg border border-blue-300/20">
          <p className="text-blue-200 text-sm">
            <span className="font-medium">Required Format:</span> Text file (.txt) containing email
            addresses separated by commas.
            <br />
            <span className="text-blue-300 text-xs mt-1 block">
              Example: email1@domain.com, email2@domain.com, email3@domain.com
            </span>
          </p>
        </div>

        {/* Email List Upload Section */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-lg p-8
            transition-all duration-300 cursor-pointer
            flex flex-col items-center justify-center
            ${
              file
                ? 'border-purple-500/50 bg-purple-500/5'
                : 'border-purple-300/20 hover:border-purple-300/40 hover:bg-white/5'
            }
          `}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".txt"
            className="hidden"
          />

          {file ? (
            <div className="text-center">
              <p className="text-purple-200 font-medium mb-2">{file.name}</p>
              <p className="text-purple-300 text-sm">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-purple-200 font-medium mb-2">
                Drop your email list here or click to browse
              </p>
              <p className="text-purple-300 text-sm">
                Accepts only .txt files with comma-separated emails
              </p>
            </div>
          )}
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-300/20">
            <p className="text-green-200 text-center">
              Emails have been successfully sent to all addresses in the list
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HearingSection;
