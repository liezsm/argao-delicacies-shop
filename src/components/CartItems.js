import React from "react";
import { useSelector } from "react-redux";

const CartItems = () => {
  const addedToCart = useSelector((state) => state.cartItems);
  console.log(addedToCart);

  return (
    <div className='cart-wrapper'>
      <h1>Added to Cart Items</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.
      </p>
    </div>
  );
};

export default CartItems;
