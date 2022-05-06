import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";
import { Provider } from "react-redux";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import { hydrate } from "./redux/cartSlice";

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cartItems));
});

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const getCartFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem("cart");
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

const cartItems = getCartFromLocalStorage();
if (cartItems) {
  store.dispatch(hydrate(cartItems));
}

root.render(
  <Provider store={store}>
    <Router basename='argao-delicacies-shop'>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
