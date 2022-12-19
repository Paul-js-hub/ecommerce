import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/products';
import cartsReducer from './cart/cart';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false})
});
