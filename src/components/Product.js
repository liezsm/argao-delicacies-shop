import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = ({ id, name, image, price }) => {
  const navigate = useNavigate();

  function routeChange() {
    let path = `product/${id}`;
    navigate(path);
  }

  return (
    <div className='product_item rad-shadow' onClick={routeChange}>
      <img src={image} />
      <p>{name}</p>
      <p> &#8369;{price}</p>
    </div>
  );
};

export default Product;
