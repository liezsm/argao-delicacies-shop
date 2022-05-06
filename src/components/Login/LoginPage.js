import React from "react";

// component
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingBag,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faShoppingBag, faEyeSlash, faEye);

const LoginPage = ({ isLogged, loading }) => {
  return (
    <div className='welcome'>
      <LoginHeader />
      <LoginForm isLogged={isLogged} loading={loading} />
    </div>
  );
};

export default LoginPage;
