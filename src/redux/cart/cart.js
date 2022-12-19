import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalCount: 0,
    tax: 0,
    subAmount: 0,
    totalAmount: 0,
    pending: true,
    error: false,
  },
  reducers: {
    addToCart: (state, action) => {
      let cartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex >= 0) {
        state.cart[cartIndex].quantity += 1;
      } else {
        let tempProduct = { ...action.payload, quantity: 1 };
        state.cart.push(tempProduct);
      }
    },
    getCartProducts: (state, action) => {
      return {
        ...state,
      };
    },
    getCartCount: (state, action) => {
      let cartCount = state.cart.reduce((total, item) => {
        return item.quantity + total;
      }, 0);
      state.totalCount = cartCount;
    },
    getSubTotal: (state, action) => {},
  },
});

export const { addToCart, getCartProducts, getCartCount } = cartSlice.actions;

export default cartSlice.reducer;
