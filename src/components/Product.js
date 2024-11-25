import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart, addToWishlist }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = () => {
    if (review) {
      setReviews([...reviews, { rating, text: review }]);
      setReview('');
    }
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <Link to={`/product/${product.name}`}>
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      </Link>
      <p className="text-gray-600">${product.price}</p>
      <div className="flex mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        className="border rounded-lg p-2 mt-2 w-full"
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleReviewSubmit}
      >
        Submit Review
      </button>
      <div className="mt-4">
        <h3 className="font-bold">Reviews:</h3>
        {reviews.map((rev, index) => (
          <div key={index} className="border-b py-1">
            <span className="font-semibold">{rev.rating} ★</span>
            <p>{rev.text}</p>
          </div>
        ))}
      </div>
      <button 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
      <button 
        className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        onClick={() => addToWishlist(product)}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default Product;
