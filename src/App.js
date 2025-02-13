import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Error from "./components/Error";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
