import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    remove(state, action) {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.totalQuantity -= state.cart[index].quantity;
        state.totalPrice -= state.cart[index].quantity * state.cart[index].price;
        state.cart.splice(index, 1);
      }
    },
    removeall(state, action) {
      state.cart = [];
      state.totalPrice = 0;
    },
    increaseItemQuantity(state, action) {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index].quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += state.cart[index].price;
      }
    },
    decreaseItemQuantity(state, action) {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.cart[index].quantity > 0) {
          state.cart[index].quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= state.cart[index].price;
        }
      }
    },
    clearcart(state) {
      state.cart = [];
    },
  },
});
export const {
  add,
  remove,
  removeall,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearcart,
} = cartSlice.actions;
export default cartSlice.reducer;
