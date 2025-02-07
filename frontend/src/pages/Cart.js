import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto text-center py-8">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <p>Add some spicy peppers to get started!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg">
        {cart.items.map(item => (
          <div key={item.id} className="flex justify-between items-center p-4 border-b">
            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>${item.price}</p>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                -
              </button>
              <span className="mx-4">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                +
              </button>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="ml-4 bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="p-4 text-right">
          <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
          <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;