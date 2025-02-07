import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto text-center py-16">
      <h1 className="text-4xl font-bold text-red-800 mb-6">
        🌶️ Welcome to Pepper Paradise 🌶️
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Discover the world's hottest and most exotic peppers!
      </p>
      <div className="flex justify-center space-x-4">
        <Link 
          to="/products" 
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Shop Peppers
        </Link>
        <Link 
          to="/about" 
          className="bg-gray-200 text-red-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HomePage;