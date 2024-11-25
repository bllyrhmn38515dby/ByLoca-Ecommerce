import React, { useState } from 'react';

const Coupon = ({ onApplyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleApply = () => {
    onApplyCoupon(couponCode);
    setCouponCode('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Apply Coupon</h2>
      <input
        type="text"
        placeholder="Enter coupon code"
        className="border rounded-lg p-2 mb-2 w-full"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
};

export default Coupon;
