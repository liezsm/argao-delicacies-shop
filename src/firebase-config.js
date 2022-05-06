// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDiwxz_NdGNceH_7pulhTrLxUqLL6LcPqc",

  authDomain: "argao-shop.firebaseapp.com",

  projectId: "argao-shop",

  storageBucket: "argao-shop.appspot.com",

  messagingSenderId: "129573641897",

  appId: "1:129573641897:web:c0f1c232c6a41605c713b8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
