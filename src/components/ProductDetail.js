import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "./Home";

const ProductDetail = () => {
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  console.log(productDetail);

  const getProductDetail = async () => {
    try {
      const res = await fetch(`${url}/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProductDetail(data);
    } catch (error) {
      console.log(error);
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card my-2" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Name: {productDetail?.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Price: {productDetail.price}
            </h6>
            <p className="card-text">
              Description: {productDetail.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
