import React, { useState, useEffect } from "react";

const AddProductForm = ({ onAddProduct, onEditProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (onEditProduct) {
      setProduct(onEditProduct);
    } else {
      setProduct({ name: "", price: "", description: "" });
    }
  }, [onEditProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.description) {
      alert("Please fill all fields");
      return;
    }

    onAddProduct(product);
    setProduct({ name: "", price: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
      <button type="submit">{onEditProduct ? "Update Product" : "Add Product"}</button>
    </form>
  );
};

export default AddProductForm;
