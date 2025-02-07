import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">
        🌶️ Extreme Pepper Collection 🌶️
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(pepper => (
          <div 
            key={pepper.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold text-red-700">{pepper.name}</h2>
              <p className="text-gray-600">{pepper.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-lg">${pepper.price}</span>
                <span className="text-sm text-gray-500">
                  Scoville: {pepper.scoville}
                </span>
              </div>
              <button 
                onClick={() => addToCart(pepper)}
                className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;