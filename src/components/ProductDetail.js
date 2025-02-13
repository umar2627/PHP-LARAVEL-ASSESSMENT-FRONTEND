import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

  // const history = useNavigate();

  return (
    <>
      <h1> PRODUCT DETAIL PAGE AND THE ID OF PRODUCT IS {id} </h1>
    </>
  );
};

export default ProductDetail;
