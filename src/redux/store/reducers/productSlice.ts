import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    totalProducts: '0',
    productsArray: [],
    isDetailsOpen: false,
  },
  reducers: {
    setTotalProducts(state, action) {
      state.totalProducts = action.payload;
    },
    setProductsArray(state, action) {
      state.productsArray = action.payload;
    },
    setIsDetailsOpen(state, action) {
      state.isDetailsOpen = action.payload;
    },
  },
});

export default productsSlice.reducer;
