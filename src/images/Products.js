import React from "react";
import Product from "./Product";

import { useSelector } from "react-redux";

const Products = () => {
  const allProducts = useSelector((state) => state.products);

  // fetching all the images

  // exp https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(images);

  const products = allProducts.map((item, index) => (
    <Product key={index} {...item} />
  ));
  return <div className='product-wrapper'>{products}</div>;
};

export default Products;
