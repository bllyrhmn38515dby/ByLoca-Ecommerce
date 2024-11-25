import React, { useState } from 'react';
import ShippingOptions from './ShippingOptions';
import Coupon from './Coupon';

const Checkout = ({ cart, onCheckout }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = (code) => {
    // Simulasi penerapan kupon
    if (code === 'DISCOUNT10') {
      setDiscount(10); // Diskon 10%
      alert('Coupon applied! You get a 10% discount.');
    } else {
      alert('Invalid coupon code.');
    }
  };

  const shippingCost = shippingMethod === 'express' ? 15 : 5;
  const totalCost = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0) + shippingCost;
  const discountedTotal = totalCost - (totalCost * (discount / 100));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber && expiryDate && cvv) {
      onCheckout();
      alert("Payment successful! Thank you for your purchase.");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <ShippingOptions onSelectShipping={setShippingMethod} />
      <Coupon onApplyCoupon={handleApplyCoupon} />
      <div className="mt-4">
        <h3 className="font-bold">Total Cost: ${discountedTotal.toFixed(2)}</h3>
      </div>
      <div>
        <label className="block mb-1">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          className="border rounded-lg p-2 mb-2 w-full"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Expiry Date</label>
        <input
          type="text"
          placeholder="MM/YY"
          className="border rounded-lg p-2 mb-2 w-full"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">CVV</label>
        <input
          type="text"
          placeholder="123"
          className="border rounded-lg p-2 mb-2 w-full"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Pay Now
      </button>
    </form>
  );
};

export default Checkout;
