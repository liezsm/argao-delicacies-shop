import { createSlice } from "@reduxjs/toolkit";
import products from "../data .json";
const productsReducer = createSlice({
  name: "allProducts",
  initialState: [...products.products],
  reducers: {
    setProducts(state, action) {
      return state;
    },
  },
});

export default productsReducer.reducer;
