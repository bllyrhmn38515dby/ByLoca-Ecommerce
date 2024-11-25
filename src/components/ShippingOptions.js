import React, { useState } from 'react';

const ShippingOptions = ({ onSelectShipping }) => {
  const [selectedOption, setSelectedOption] = useState('standard');

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelectShipping(option);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Select Shipping Method</h2>
      <div className="mt-4">
        <label className="block">
          <input
            type="radio"
            value="standard"
            checked={selectedOption === 'standard'}
            onChange={() => handleSelect('standard')}
          />
          Standard Shipping (5-7 days) - $5.00
        </label>
        <label className="block mt-2">
          <input
            type="radio"
            value="express"
            checked={selectedOption === 'express'}
            onChange={() => handleSelect('express')}
          />
          Express Shipping (1-2 days) - $15.00
        </label>
      </div>
    </div>
  );
};

export default ShippingOptions;
