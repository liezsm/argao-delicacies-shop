import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./allProductsSlice";
export default configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
  },
});
