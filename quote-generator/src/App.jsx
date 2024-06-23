// src/App.jsx
import React, { useEffect, useState } from 'react';
import quotesData from './quotes.json';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Motivational Quote</h1>
        <blockquote className="text-lg italic">{quote.text}</blockquote>
        <cite className="block mt-4">- {quote.author}</cite>
        <button
          onClick={generateRandomQuote}
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Get Another Quote
        </button>
      </div>
    </div>
  );
}

export default App;
