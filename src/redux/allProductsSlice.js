import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsAsync = createAsyncThunk(
  "todos/getProducts",
  async () => {
    const res = await fetch(
      "https://argao-shop-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    if (res.ok) {
      const products = await res.json();
      return { products };
    }
  }
);
const productsReducer = createSlice({
  name: "allProducts",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return state;
    },
  },
  extraReducers: {
    [getProductsAsync.fulfilled]: (state, action) => {
      return action.payload.products;
    },
  },
});

export default productsReducer.reducer;
