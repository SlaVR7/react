import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'searchQuery',
  initialState: {
    userInput: '',
    userType: '',
  },
  reducers: {
    setSearchQuery(state, action) {
      state.userInput = action.payload;
    },
    setUserType(state, action) {
      state.userType = action.payload;
    },
  },
});

export default searchSlice.reducer;
