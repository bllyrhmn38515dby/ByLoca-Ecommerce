import React from 'react';

const PurchaseHistory = ({ history }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Purchase History</h2>
      {history.length === 0 ? (
        <p>No purchase history available.</p>
      ) : (
        history.map((purchase, index) => (
          <div key={index} className="border-b py-2">
            <h3 className="font-semibold">Purchase on {purchase.date.toLocaleString()}</h3>
            <ul>
              {purchase.items.map((item, i) => (
                <li key={i}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default PurchaseHistory;
