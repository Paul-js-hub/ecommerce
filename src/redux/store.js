import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/products.js';
import cartsReducer from './cart/cart.js';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false})
});

export default store;
