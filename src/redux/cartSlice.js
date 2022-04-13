import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      //  check if the new  item is already in the cart
      const existing = state.find((item) => item.id == newItem.id);
      if (existing) {
        existing.quantity++;
        existing.totalPrice += newItem.price;
        return;
      }

      state.push(action.payload);
    },
    removeItem(state, action) {
      if (action.payload.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }

      const updatedItems = state.map((item) =>
        item.id === action.payload.id
          ? {
              ...action.payload,
              quantity: action.payload.quantity - 1,
              totalPrice: action.payload.totalPrice - action.payload.price,
            }
          : item
      );
      return updatedItems;
    },
  },
});

export default cartReducer.reducer;

export const { addItem, removeItem } = cartReducer.actions;
