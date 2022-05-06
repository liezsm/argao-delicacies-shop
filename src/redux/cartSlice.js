import { createSlice } from "@reduxjs/toolkit";

// exp this sof for persisting the localstorage items into the redux state
// https://stackoverflow.com/questions/67248867/react-redux-toolkit-how-can-i-can-store-my-initialstate-to-localstorage-using-c
const cartReducer = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    hydrate: (state, action) => {
      // do not do state = action.payload it will not update the store
      return action.payload;
    },
    addItem(state, action) {
      const newItem = action.payload;
      //  check if the new  item is already in the cart
      const existing = state.find((item) => item.id == newItem.id);
      if (existing) {
        existing.quantity += newItem.quantity;
        existing.totalPrice += newItem.totalPrice;
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
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default cartReducer.reducer;

export const { addItem, removeItem, deleteItem, setCart, hydrate } =
  cartReducer.actions;
