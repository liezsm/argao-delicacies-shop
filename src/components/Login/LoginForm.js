import React from "react";

// comps

import Button from "./Button";

const LoginForm = ({ isLogged }) => {
  return (
    <div className='container'>
      <div className='banner-left'>
        <img
          src='https://live.staticflickr.com/4546/38731655762_a16cb7f3aa_z.jpg'
          alt='torta'
        />
      </div>

      <div className='form-right'>
        <div className='login'>
          <h2>Log in </h2>
          <form>
            <div className='inputField'>
              <input type='text' placeholder='Phone number/ Username/ Email' />
            </div>
            <div className='inputField'>
              <input type='password' placeholder='Password' />
            </div>

            <button className='login-btn' onClick={() => isLogged(true)}>
              {" "}
              log in
            </button>
          </form>

          <div className='login_forgot'>
            <a> Forgot Password </a>
            <a> Log In with Phone Number </a>
          </div>

          <div className='or'>
            <div className='line'></div>
            <p> or</p>
            <div className='line'></div>
          </div>

          {/* other sign in options */}

          <div className='signIn_options'>
            <Button
              img={
                "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              }
              name='Google'
            />
            <Button
              name='Facebook'
              img={
                "https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
              }
            />

            <Button
              name='Apple'
              img={
                "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              }
            />
          </div>

          {/* sign up */}
          <div className='signUp'>
            <p>
              {" "}
              New to Shop?
              <a href='#'> Sign up </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
