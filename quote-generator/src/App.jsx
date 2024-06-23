// src/App.jsx
import React, { useEffect, useState } from 'react';
import quotesData from './quotes.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const gradients = [
  'from-purple-400 via-pink-500 to-red-500',
  'from-green-400 via-blue-500 to-purple-500',
  'from-yellow-400 via-red-500 to-pink-500',
  'from-blue-400 via-indigo-500 to-purple-500',
  'from-red-400 via-pink-500 to-purple-500',
  'from-blue-400 via-purple-500 to-indigo-500',
  'from-green-400 via-yellow-500 to-red-500',
  'from-orange-400 via-yellow-500 to-green-500',
  'from-yellow-400 via-orange-500 to-red-500',
  'from-teal-400 via-blue-500 to-purple-500',
  'from-blue-400 via-teal-500 to-green-500',
  'from-red-400 via-yellow-500 to-orange-500',
  'from-pink-400 via-purple-500 to-blue-500',
  'from-yellow-400 via-green-500 to-teal-500',
  'from-indigo-400 via-purple-500 to-pink-500',
  'from-purple-400 via-blue-500 to-green-500',
  'from-blue-400 via-green-500 to-yellow-500',
  'from-green-400 via-yellow-500 to-orange-500',
  'from-yellow-400 via-orange-500 to-red-500',
  'from-orange-400 via-red-500 to-pink-500',
  'from-pink-400 via-purple-500 to-blue-500',
  'from-purple-400 via-blue-500 to-cyan-500',
  'from-cyan-400 via-teal-500 to-green-500',
  'from-green-400 via-lime-500 to-yellow-500',
  'from-yellow-400 via-amber-500 to-orange-500',
  'from-orange-400 via-deep-orange-500 to-red-500',
  'from-red-400 via-pink-500 to-purple-500',
  'from-purple-400 via-deep-purple-500 to-indigo-500',
  'from-indigo-400 via-blue-500 to-light-blue-500',
  'from-blue-400 via-cyan-500 to-teal-500'
];


function App() {
  const [quote, setQuote] = useState('');
  const [gradient, setGradient] = useState(gradients[0]);

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  const changeGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    setGradient(gradients[randomIndex]);
  };

  return (
    <div className={`min-h-screen min-w-full flex items-center justify-center bg-gradient-to-r ${gradient} relative`}>
      <div className="max-w-lg w-full p-10 bg-white bg-opacity-90 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Motivational Quote</h1>
        <blockquote className="text-xl italic text-gray-600 mb-4">"{quote.text}"</blockquote>
        <cite className="block mb-6 text-gray-500">- {quote.author}</cite>
        <button
          onClick={generateRandomQuote}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Another Quote
        </button>
      </div>
      <button
        onClick={changeGradient}
        className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
      >
        <FontAwesomeIcon icon={faCog} />
      </button>
    </div>
  );
}

export default App;
