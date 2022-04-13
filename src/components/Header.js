import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to='/'>
        <FontAwesomeIcon icon={faHomeAlt} className='icon' />
      </Link>
      <h1 className='shop-name'>Argao's Best Delicacies</h1>
      <div className='cart'>
        <Link to='/cartItems'>
          <FontAwesomeIcon icon={faShoppingCart} className='cart-icon icon' />
          <span className='cart-items-number'>0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
