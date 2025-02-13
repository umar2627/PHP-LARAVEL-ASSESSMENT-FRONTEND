import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "./addProductForm";

const Home = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100, description: "This is Product 1 description." },
    { id: 2, name: "Product 2", price: 200, description: "This is Product 2 description." },
    { id: 3, name: "Product 3", price: 300, description: "This is Product 3 description." },
  ]);

  const addProduct = (product) => {
    const newId = products.length + 1;
    setProducts([...products, { id: newId, ...product }]);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  const deleteProduct = (id) => {
    const deleteProducts = products.filter(product => product.id !== id);
    setProducts(deleteProducts);
  };

  const [editingProduct, setEditingProduct] = useState(null);

  const editProduct = (product) => {
    alert(product);
    console.log(product);

  }

  return (
    <div className="plp-page">
      <h2>THIS IS PRODUCTS CRUD PAGE</h2>

      <AddProductForm onAddProduct={addProduct} />

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
