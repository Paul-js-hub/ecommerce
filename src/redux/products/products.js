import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://fakestoreapi.com/products';
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get(url);
  return response.data;
});

const productsSlice = createSlice({
    name:'products',
    initialState: {
      products: [],
      pending: true,
      error: false
    },
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(getProducts.pending, (state, action) => {
            const newState = state;
            newState.pending = true;
            newState.error = false;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            const newState = state;
            const currentState = (action.payload.map((product) => ({ 
              id: product.id,
              title: product.title,
              description: product.description,
              image: product.image,
              price: product.price
            })));
            newState.pending = false;
            newState.products = currentState;
          })
          .addCase(getProducts.rejected, (state, action) => {
            const newState = state;
            newState.pending = false;
            newState.error = true;
          })
      }
});

export default productsSlice.reducer

