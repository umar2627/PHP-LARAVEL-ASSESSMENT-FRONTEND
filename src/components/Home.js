import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>THIS IS PRODUCTS CRUD PAGE</h1>
      <NavLink className="navbar-brand" to="/product/10">
        jis product py click ho ga us ki id dynamic kr ky agly product detail
        waly page py chalay jae ga. muje click kro zara
      </NavLink>
    </>
  );
};

export default Home;
