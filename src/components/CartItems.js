import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const addedToCart = useSelector((state) => state.cartItems);

  console.log(addedToCart);

  const handleDecrement = (id, name, price, quantity, totalPrice) => {
    dispatch(
      removeItem({
        id,
        name,
        price,
        quantity,
        totalPrice,
      })
    );
  };

  const handleIncrement = (id, name, price, quantity, totalPrice) => {
    dispatch(
      addItem({
        id,
        name,
        price,
        quantity,
        totalPrice,
      })
    );
  };

  const itemsDiv = addedToCart.map(
    ({ id, name, price, quantity, totalPrice }, index) => (
      <div className='added_item' key={index}>
        <p>{name}</p>
        <p>{price}</p>
        <p>X{quantity}</p>
        <div className='counter_items'>
          <button
            className='decrement'
            onClick={() =>
              handleDecrement(id, name, price, quantity, totalPrice)
            }
          >
            -
          </button>
          <div className='number' data-quantity>
            {quantity}
          </div>
          <button
            className='increment'
            onClick={() =>
              handleIncrement(id, name, price, quantity, totalPrice)
            }
          >
            +
          </button>
        </div>
        <p>{totalPrice}</p>
        <button>Delete</button>
      </div>
    )
  );

  return (
    <div className='cart-wrapper'>
      <div className='added_item header'>
        <p>Product</p>
        <p>Unit Price</p>
        <p>Quantity</p>
        <p>Add Items</p>
        <p>Total</p>
        <p>Actions</p>
      </div>
      {itemsDiv}
    </div>
  );
};

export default CartItems;
