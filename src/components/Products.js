import React from 'react';
import Product from './Product';

const Products = ({ products, addToCart, addToWishlist }) => {
  if (!products || products.length === 0) {
    return <div className="text-center py-8">No products available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <Product
          key={index}
          product={product}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
        />
      ))}
    </div>
  );
};

export default Products; 