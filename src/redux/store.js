import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./allProductsSlice";
import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    user: userReducer,
  },
});
