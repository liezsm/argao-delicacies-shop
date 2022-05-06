import React, { useState } from "react";

// comps
import Button from "./Button";
// firebase
// firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  signUp,
  signinGoogle,
  reducer,
  fbSignIn,
  PHONE,
  EMAIL,
  SIGNUP,
} from "../../firebase/functions";
import { auth } from "../../firebase-config";

const LoginForm = ({ isLogged, loading }) => {
  const [type, setType] = useState("email");
  const [user, setUser] = useState({ email: "", pwd: "" });

  const action = type.toUpperCase();
  const { email, pwd } = user;
  // click login
  function loggingIn(event) {
    event.preventDefault();

    reducer(action, email, pwd, setType, setUser, isLogged);
  }

  // sign in options

  // email and password

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  console.log(user);
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
          <h2>{action == SIGNUP ? "Sign up" : "Log in"} </h2>
          <form>
            <div className='inputField'>
              <input
                type='text'
                name='email'
                value={user.email}
                onChange={handleChange}
                placeholder={
                  action == PHONE
                    ? "UNDER-CONSTRUCTION"
                    : "Phone number/ Username/ Email"
                }
              />
            </div>
            {action !== PHONE && (
              <div className='inputField'>
                <input
                  type='password'
                  name='pwd'
                  value={user.pwd}
                  onChange={handleChange}
                  placeholder='Password'
                />
              </div>
            )}

            <button className='login-btn' id='login' onClick={loggingIn}>
              {action == EMAIL || PHONE ? " log in" : "sign up"}
            </button>
          </form>

          <div className='login_forgot'>
            <a> Forgot Password </a>
            <a
              onClick={() => {
                setType((prev) => (prev == "phone" ? "email" : "phone"));
              }}
            >
              {" "}
              Log In with {action == PHONE ? "Email" : "Phone Number"}
            </a>
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
              call={signinGoogle}
            />
            <Button
              name='Facebook'
              img={
                "https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
              }
              call={fbSignIn}
            />
            {/* 
            <Button
              name='Apple'
              img={
                "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              }
            /> */}
          </div>

          {/* sign up */}
          <div className='signUp'>
            <p>
              New to Shop?
              <a
                href='#'
                onClick={() => {
                  setType("signup");
                }}
              >
                {" "}
                Sign up{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;