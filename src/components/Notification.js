import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg transition-transform transform">
      <p>{message}</p>
      <button className="mt-2 text-white underline" onClick={onClose}>Close</button>
    </div>
  );
};

export default Notification;
