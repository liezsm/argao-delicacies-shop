import React from "react";

import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Products />} />

          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cartItems' element={<CartItems />} />
        </Routes>
      </main>{" "}
    </>
  );
};

export default Homepage;
