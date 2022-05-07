import React from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import ProductDetail from "./ProductDetail";
import Spinner from "./Spinner";

const Homepage = ({ loading }) => {
  return (
    <div className='content'>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Homepage;
