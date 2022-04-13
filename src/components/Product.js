import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export const Product = ({ id, name, img, price }) => {
  const navigate = useNavigate();

  function routeChange() {
    let path = `/product/${id}`;
    navigate(path);
  }
  return (
    <div className='product_item' onClick={routeChange}>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p> &#8369;{price}</p>
    </div>
  );
};
