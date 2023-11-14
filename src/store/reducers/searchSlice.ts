import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'searchQuery',
  initialState: {
    userInput: localStorage.getItem('term') || '',
  },
  reducers: {
    setSearchQuery(state, action) {
      state.userInput = action.payload;
    },
  },
});

export default searchSlice.reducer;
