import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export default loadingSlice.reducer;
