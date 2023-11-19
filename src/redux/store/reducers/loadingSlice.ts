import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../productsApi';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: true,
    isDetailsLoading: true,
  },
  reducers: {
    setDetailsLoading(state, action) {
      state.isDetailsLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProductsList.matchFulfilled,
      (state, {}) => {
        state.isLoading = false;
      }
    );
  },
});

export const { setDetailsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
