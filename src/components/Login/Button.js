import React from "react";

const Button = ({ img, name, call }) => {
  return (
    <button className='signIn_btn' onClick={call}>
      <img src={img} alt='logo' />
      {name}
    </button>
  );
};

export default Button;
