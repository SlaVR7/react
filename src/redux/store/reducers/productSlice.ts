import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    totalProducts: '0',
    isDetailsOpen: false,
  },
  reducers: {
    setTotalProducts(state, action) {
      state.totalProducts = action.payload;
    },
    setIsDetailsOpen(state, action) {
      state.isDetailsOpen = action.payload;
    },
  },
});

export default productsSlice.reducer;
