import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "../redux/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItemsRedux = useSelector((state) => state.cartItems);

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
        quantity: 1,
        totalPrice,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(
      deleteItem({
        id: id,
      })
    );
  };

  const itemsDiv = cartItemsRedux.map(
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
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    )
  );

  // get the total of all

  const total = cartItemsRedux
    .map((item) => item.totalPrice)
    .reduce((a, b) => a + b, 0);

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

      {cartItemsRedux.length > 0 ? (
        itemsDiv
      ) : (
        <div className='added_item' id='no_item'>
          There are no items on the cart
        </div>
      )}
      <div className='total'>
        {cartItemsRedux.length > 0 && <h2>&#8369;{total}</h2>}
      </div>
    </div>
  );
};

export default CartItems;
