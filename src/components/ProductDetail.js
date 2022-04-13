import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "./Product";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.filter((item) => item.id == id)
  );
  console.log(product[0]);
  const { name, img, price } = product[0];

  return (
    <div className='product_item_detail'>
      <div className='product_item_image'>
        <img src={`/${img}`} alt={name} />
      </div>
      <div className='product_item_info'>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
