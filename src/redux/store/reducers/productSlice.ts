import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    totalProducts: '0',
    productsArray: [],
  },
  reducers: {
    setTotalProducts(state, action) {
      state.totalProducts = action.payload;
    },
    setProductsArray(state, action) {
      state.productsArray = action.payload;
    },
  },
});

export default productsSlice.reducer;
