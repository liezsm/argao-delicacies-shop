// firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "../firebase-config";

// providers

const g_provider = new GoogleAuthProvider();
const fb_provider = new FacebookAuthProvider();

// REGISTER
export function signUp(email, pwd, type, user, message) {
  createUserWithEmailAndPassword(auth, email, pwd)
    .then((user) => {
      message({ text: "sign up successfully", style: "success" });
    })
    .catch((err) => message({ text: err.code, style: "error" }));

  setTimeout(() => {
    type("email");
    user({ email: "", pwd: "" });
  }, 1500);
}

// SIGNin email

export function signIn(email, pwd, user, login, message, loading) {
  signInWithEmailAndPassword(auth, email, pwd)
    .then(() => {
      // alert("sign in successfully");
      message({ text: "sign in successfully", style: "success" });
      loading(true);
      setTimeout(() => {
        login(true);
      }, 1500);
    })
    .catch((err) => {
      err.code = err.code.slice(5).replace(/\-+/g, " ").toUpperCase();
      message({
        text: isNew(err.code) ? `${err.code}. Sign up` : err.code,
        style: "error",
      });

      login(false);
      loading(false);
    });
  setTimeout(() => {
    user({ email: "", pwd: "" });
  }, 2000);
}

// signin with  popup

export function signinGoogle() {
  signInWithPopup(auth, g_provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      // ...
    });
}

// phone
function phone(user) {
  console.log(user);
  // captcha
  // window.recaptchaVerifier = new RecaptchaVerifier(
  //   "login",
  //   {
  //     size: "invisible",
  //     callback: (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       // onSignInSubmit();
  //     },
  //   },
  //   auth
  // );
  // const phoneNumber = user.email;
  // const appVerifier = window.recaptchaVerifier;
  // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //   .then((confirmationResult) => {
  //     // SMS sent. Prompt user to type the code from the message, then sign the
  //     // user in with confirmationResult.confirm(code).
  //     window.confirmationResult = confirmationResult;
  //     // ...
  //   })
  //   .catch((error) => {
  //     alert(error);
  //     // Error; SMS not sent
  //     // ...
  //   });
}
// facebook

export function fbSignIn() {
  signInWithPopup(auth, fb_provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
}

export const PHONE = "PHONE";
export const EMAIL = "EMAIL";
export const SIGNUP = "SIGNUP";

export const reducer = (
  action,
  email,
  pwd,
  type,
  user,
  login,
  message,
  loading
) => {
  switch (action) {
    case PHONE:
      return phone(user);
    case EMAIL:
      return signIn(email, pwd, user, login, message, loading);
    case SIGNUP:
      return signUp(email, pwd, type, user, message);
    default:
      return "default";
  }
};

// for sign up if error is accout no tfound

export const isNew = (message) => {
  message = message.toLowerCase();

  return message.includes("user not found");
};
