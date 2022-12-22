import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const totalCount =
  localStorage.getItem("totalCount") !== null
    ? JSON.parse(localStorage.getItem("totalCount"))
    : 0;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: items,
    totalCount: totalCount,
    subAmount: 0,
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
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.map((item) => item))
      );
      localStorage.setItem(
        "totalCount",
        JSON.stringify(state.cart.map((item) => item.quantity))
      );
      // localStorage.setItem('subAmount', JSON.stringify(state.subAmount))
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
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.map((item) => item))
      );
      localStorage.setItem(
        "totalCount",
        JSON.stringify(state.cart.map((item) => item.quantity))
      );
    },
    getSubTotal: (state, action) => {
      let subTotal = state.cart.reduce((acc, product) => {
        return acc + product.quantity * product.price;
      }, 0);
      state.subAmount = subTotal;
    },
    increment: (state, action) => {
      let idx = state.cart.findIndex((item) => item.id === action.payload);
      state.cart[idx].quantity += 1;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.map((item) => item))
      );
      localStorage.setItem(
        "totalCount",
        JSON.stringify(state.cart.map((item) => item.quantity))
      );
    },
    decrement: (state, action) => {
      let idx = state.cart.findIndex((item) => item.id === action.payload);
      if (state.cart[idx].quantity <= 0) {
        state.cart[idx].quantity = 0;
      } else {
        state.cart[idx].quantity -= 1;
      }
    },
    removeCartItem: (state, action) => {
      let idx = state.cart.findIndex((item) => item.id === action.payload);
      if (idx !== -1) {
        state.cart.splice(idx, 1);
      }
    },
  },
});

export const {
  addToCart,
  getCartProducts,
  getCartCount,
  getSubTotal,
  increment,
  decrement,
  removeCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
