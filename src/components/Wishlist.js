import React from 'react';

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((product, index) => (
          <div key={index} className="flex justify-between py-1 border-b">
            <span>{product.name}</span>
            <button 
              className="text-red-500 hover:text-red-700"
              onClick={() => removeFromWishlist(product)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
