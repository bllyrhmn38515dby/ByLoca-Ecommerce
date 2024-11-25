import React, { useState } from 'react';

const UserProfile = ({ user, onUpdateUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, email, address });
    alert('Profile updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl font-bold">User Profile</h2>
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="border rounded-lg p-2 mb-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="border rounded-lg p-2 mb-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Address</label>
        <input
          type="text"
          className="border rounded-lg p-2 mb-2 w-full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Update Profile
      </button>
    </form>
  );
};

export default UserProfile;
