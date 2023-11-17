import { createSlice } from '@reduxjs/toolkit';
import queryString from 'query-string';

const urlParams = queryString.parse(window.location.search);
const initialPage: string = (urlParams.page as string) || '1';

export const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    currentPage: initialPage,
    totalPages: '10',
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages } = pagesSlice.actions;
export default pagesSlice.reducer;
