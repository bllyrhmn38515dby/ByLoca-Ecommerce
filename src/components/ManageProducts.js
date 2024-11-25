import React, { useState } from 'react';

const ManageProducts = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdateProduct = () => {
    if (editIndex !== null) {
      // Update existing product
      const updatedProducts = products.map((product, index) => {
        if (index === editIndex) {
          return { ...product, ...newProduct }; // Update only the selected product
        }
        return product; // Return the unchanged product
      });
      setProducts(updatedProducts);
      setEditIndex(null); // Reset edit index
    } else {
      // Add new product
      setProducts([...products, { ...newProduct }]);
    }
    setNewProduct({ name: '', price: '', description: '' }); // Reset input fields
  };

  const handleEditProduct = (index) => {
    setEditIndex(index);
    setNewProduct(products[index]); // Set the product to be edited
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Manage Products</h2>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          className="border rounded-lg p-2 mb-2 w-full"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product Price"
          className="border rounded-lg p-2 mb-2 w-full"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <textarea
          placeholder="Product Description"
          className="border rounded-lg p-2 mb-2 w-full"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddOrUpdateProduct}
        >
          {editIndex !== null ? 'Update Product' : 'Add Product'}
        </button>
      </div>
      <div className="mt-4">
        {products.map((product, index) => (
          <div key={index} className="flex justify-between py-2 border-b">
            <span>{product.name} - ${product.price}</span>
            <div>
              <button
                className="text-blue-500 hover:text-blue-700 mr-2"
                onClick={() => handleEditProduct(index)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteProduct(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
