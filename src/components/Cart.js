import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between py-1 border-b">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button 
              className="text-red-500 hover:text-red-700"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <div className="flex justify-between font-bold">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-transform transform hover:scale-105"
        onClick={() => navigate('/checkout')}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
