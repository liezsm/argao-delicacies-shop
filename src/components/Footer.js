import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className='footer_title'>Proud Argawanon &copy;{year}</p>
    </footer>
  );
};

export default Footer;
