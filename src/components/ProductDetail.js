import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <h3>Price: {product.price}</h3>
          <p>{product.description}</p>
        </>
      ) : (
        <h1>Product not found!</h1>
      )}
    </div>
  );
};

export default ProductDetail;
