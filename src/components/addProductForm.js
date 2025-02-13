import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      alert("Please fill all fields");
      return;
    }

    onAddProduct(newProduct);
    setNewProduct({ name: "", price: "", description: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
