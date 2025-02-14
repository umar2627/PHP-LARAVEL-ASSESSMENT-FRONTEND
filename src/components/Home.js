import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "./addProductForm";

const Home = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? { ...product, id: editingProduct.id } : p)));
      setEditingProduct(null);
    } else {
      const newId = products.length + 1;
      setProducts([...products, { id: newId, ...product }]);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="plp-page">
      <h2>THIS IS PRODUCTS CRUD PAGE</h2>

      <AddProductForm onAddProduct={addProduct} onEditProduct={editingProduct} />

      <div className="product-lists">
        {products.map((product) => (
          <div key={product.id} className="product-list">
            <h4>{product.name}</h4>
            <h6><b>Price:</b> {product.price}</h6>
            <p><b>Description:</b> {product.description}</p>
            <div>
              <button onClick={() => handleProductClick(product)}>View</button>
              <button onClick={() => editProduct(product)}>Edit</button>
              <button onClick={() => deleteProduct(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
