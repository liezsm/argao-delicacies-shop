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
export function signUp(email, pwd, type, user) {
  createUserWithEmailAndPassword(auth, email, pwd)
    .then((user) => {
      alert("sign up successfully");
    })
    .catch((err) => alert(err.message));
  type("email");
  user({ email: "", pwd: "" });
}

// SIGNin email

export function signIn(email, pwd, user, login) {
  signInWithEmailAndPassword(auth, email, pwd)
    .then(() => {
      alert("sign in successfully");
      login(true);
    })
    .catch((err) => {
      alert(err.message);
      login(false);
    });
  user({ email: "", pwd: "" });
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

export const reducer = (action, email, pwd, type, user, login) => {
  switch (action) {
    case PHONE:
      return phone(user);
    case EMAIL:
      return signIn(email, pwd, user, login);
    case SIGNUP:
      return signUp(email, pwd, type, user);
    default:
      return "default";
  }
};
