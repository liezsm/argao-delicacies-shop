import React from "react";

const Button = ({ img, name }) => {
  return (
    <button className='signIn_btn'>
      <img src={img} alt='logo' />
      {name}
    </button>
  );
};

export default Button;
