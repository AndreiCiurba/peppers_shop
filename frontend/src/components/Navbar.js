import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">🌶️ Pepper Shop</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-red-200">Home</Link>
          <Link to="/products" className="hover:text-red-200">Products</Link>
          <Link to="/about" className="hover:text-red-200">About</Link>
          <Link to="/contact" className="hover:text-red-200">Contact</Link>
          <Link to="/cart" className="hover:text-red-200">
            Cart ({cart.items.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;