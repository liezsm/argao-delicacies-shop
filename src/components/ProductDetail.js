import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "./Product";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { useState } from "react";
import importAll from "./importImages";

const ProductDetail = () => {
  const getImages = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.filter((item) => item.id == id)
  );

  const { name, img, price } = product[0];
  //get the product image

  const prod_img = Object.keys(getImages)
    .filter((i) => i.includes(img))
    .map((img) => getImages[img]);

  const dispatch = useDispatch();

  // when add to cart clicked,  add the details to the store
  function handleCartItem() {
    dispatch(
      addItem({
        id,
        name,
        price,
        quantity: items,
        totalPrice: total,
      })
    );
  }
  const [items, setItems] = useState(1);
  const [total, setTotal] = useState(price);

  const handleDecrement = () => {
    setItems((prev) => (prev > 1 ? prev - 1 : 1));
    items > 1 ? setTotal((prev) => prev - price) : setTotal(price);
  };

  const handleIncrement = () => {
    setItems((prev) => prev + 1);
    setTotal((prev) => prev + price);
  };

  console.log("total", total);
  return (
    <div className='product_item_detail'>
      <div className='product_item_image'>
        <img src={prod_img} alt={name} />
      </div>
      <div className='product_item_info'>
        <p>{name}</p>
        <p>&#8369;{price}</p>

        <div className='counter_items'>
          <button className='decrement' onClick={handleDecrement}>
            -
          </button>
          <div className='number' data-quantity>
            {items}
          </div>
          <button className='increment' onClick={handleIncrement}>
            +
          </button>
        </div>

        <button className='addtocart-btn rad-shadow' onClick={handleCartItem}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
