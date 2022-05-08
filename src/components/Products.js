import React from "react";
import Product from "./Product";

import { useSelector } from "react-redux";

import importAll from "./importImages";

const Products = () => {
  const allProducts = useSelector((state) => state.products);

  // fetching all the images

  // exp https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
  // credits for this article

  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  const products = allProducts.map((item, index) => {
    // select the images from the images
    const prod_img = Object.keys(images)
      .filter((img) => img.includes(item.img))
      .map((img) => images[img]);

    return <Product key={index} {...item} image={prod_img} />;
  });
  return <div className='product-wrapper'>{products}</div>;
};

export default Products;
