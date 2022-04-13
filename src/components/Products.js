import React from "react";
import { Product } from "./Product";

import { useSelector } from "react-redux";

const Products = () => {
  const allProducts = useSelector((state) => state.products);

  const products = allProducts.map((item, index) => (
    <Product key={index} {...item} />
  ));

  return <div className='product-wrapper'>{products}</div>;
};

export default Products;
