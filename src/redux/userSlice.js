import { createSlice } from "@reduxjs/toolkit";

// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const userReducer = createSlice({
  name: "users",
  initialState: {
    loginType: "",
    text: "",
    credential: {},
  },
  reducers: {
    login(state, action) {
      // firebase signIn withEmail and Password
    },
    loginPhone(state, action) {
      state.loginType = action.payload.type;
    },
    signUp(state, action) {
      // firebase create email and password
      const { email, pwd, type } = action.payload;
      createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("successfuly sign up");

          const newUser = { email: email, pwd: pwd };

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);

          // ..
        });
    },
    forgotPassword(state, action) {},
  },
});

export default userReducer.reducer;

export const { login, loginPhone, signUp, forgotPassword } =
  userReducer.actions;
