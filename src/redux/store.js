import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/products';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false})
});
