import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.name === name);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <button 
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back
      </button>
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-xl">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button 
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
