import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import UserProfile from './components/UserProfile';
import ManageProducts from './components/ManageProducts';
import PurchaseHistory from './components/PurchaseHistory';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Wishlist from './components/Wishlist';
import Notification from './components/Notification';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 10, description: 'Description for Product 1', image: 'url_to_image_1' },
    { name: 'Product 2', price: 20, description: 'Description for Product 2', image: 'url_to_image_2' },
    { name: 'Product 3', price: 30, description: 'Description for Product 3', image: 'url_to_image_3' },
  ]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', address: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState(null);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProducts = products.filter(product => {
    const isCategoryMatch = category === '' || product.category === category;
    const isPriceMatch = (minPrice === '' || product.price >= minPrice) && (maxPrice === '' || product.price <= maxPrice);
    return isCategoryMatch && isPriceMatch;
  });

  const addToWishlist = (product) => {
    if (!wishlist.includes(product)) {
      setWishlist([...wishlist, product]);
      showNotification(`${product.name} has been added to your wishlist!`);
    }
  };

  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter(item => item !== product));
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    showNotification(`${product.name} has been added to your cart!`);
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    // Simpan riwayat pembelian
    const newPurchase = {
      items: cart,
      date: new Date(),
    };
    setPurchaseHistory([...purchaseHistory, newPurchase]);
    
    // Reset keranjang
    setCart([]);
    alert("Thank you for your purchase! Your order has been placed.");
  };

  return (
    <Router>
      <div className="container mx-auto p-6">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4 shadow-md rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold mr-6">ByLoca</Link>
              <Link to="/" className="mr-4 hover:text-gray-300 transition">Home</Link>
              {user && <Link to="/profile" className="mr-4 hover:text-gray-300 transition">Profile</Link>}
              <Link to="/purchase-history" className="mr-4 hover:text-gray-300 transition">Purchase History</Link>
              <Link to="/manage-products" className="mr-4 hover:text-gray-300 transition">Manage Products</Link>
              <Link to="/wishlist" className="mr-4 hover:text-gray-300 transition">Wishlist</Link>
              <Link to="/login" className="mr-4 hover:text-gray-300 transition">Login</Link>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search products..."
                className="border rounded-lg p-2 w-64 text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </nav>

        {/* Filter Controls */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search products..."
              className="border rounded-lg p-2 text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="border rounded-lg p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
            </select>
            <input
              type="number"
              placeholder="Min Price"
              className="border rounded-lg p-2"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max Price"
              className="border rounded-lg p-2"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Notifikasi */}
        {notification && (
          <Notification message={notification} onClose={() => setNotification(null)} />
        )}

        <Routes>
          <Route path="/" element={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Product key={index} product={product} addToCart={addToCart} addToWishlist={addToWishlist} />
              ))}
            </div>
          } />
          <Route path="/checkout" element={
            <Checkout cart={cart} onCheckout={handleCheckout} />
          } />
          <Route path="/cart" element={
            <Cart cartItems={cart} removeFromCart={(index) => {
              setCart(cart.filter((_, i) => i !== index));
            }} />
          } />
          <Route path="/purchase-history" element={
            <PurchaseHistory history={purchaseHistory} />
          } />
          <Route path="/login" element={
            <Login onLogin={setUser} />
          } />
          <Route path="/manage-products" element={
            <ManageProducts products={products} setProducts={setProducts} />
          } />
          <Route path="/product/:name" element={
            <ProductDetail products={products} addToCart={(product) => setCart([...cart, product])} />
          } />
          <Route path="/profile" element={
            <UserProfile user={user} onUpdateUser={handleUpdateUser} />
          } />
          <Route path="/wishlist" element={
            <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
          } />
        </Routes>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t text-center text-gray-600">
          <p>&copy; 2024 eByLoca. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy" className="text-blue-400">Privacy Policy</Link> | 
            <Link to="/terms" className="text-blue-400"> Terms of Service</Link>
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
