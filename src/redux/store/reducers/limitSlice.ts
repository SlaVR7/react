import { createSlice } from '@reduxjs/toolkit';
import queryString from 'query-string';

const urlParams = queryString.parse(window.location.search);
let initialLimit = (urlParams.limit as string) || '10';
if (!['5', '10', '15', '20'].includes(initialLimit)) {
  initialLimit = '10';
}

const limitSlice = createSlice({
  name: 'perPage',
  initialState: {
    limit: initialLimit,
  },
  reducers: {
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

export const { setLimit } = limitSlice.actions;

export default limitSlice.reducer;
