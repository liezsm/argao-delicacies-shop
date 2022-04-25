import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  //  get the cart items

  const cartItems = useSelector((state) => state.cartItems).length;
  console.log(cartItems);
  return (
    <header>
      <Link to='/' className='icon_link'>
        <FontAwesomeIcon icon={faHomeAlt} className='icon' />
      </Link>
      <h1 className='shop-name'>Argao's Best Delicacies</h1>
      <div className='cart'>
        <div className='cart-icon'>
          <Link to='/cartItems' className='icon_link'>
            <FontAwesomeIcon icon={faShoppingCart} className='cart-icon icon' />
          </Link>
          {cartItems > 0 && (
            <span className='cart-items-number'>{cartItems}</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
