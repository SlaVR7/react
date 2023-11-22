import { createSlice } from '@reduxjs/toolkit';
import {useRouter} from "next/router";

// const getInitialLimit = () => {
//   const router = useRouter();
//   console.log(router)
//   // const query =
//   let initialLimit = (query.limit as string) || '10';
//   if (!['5', '10', '15', '20'].includes(initialLimit)) {
//     initialLimit = '10';
//   }
//   return initialLimit;
// };

const limitSlice = createSlice({
  name: 'perPage',
  initialState: {
    limit: '10',
  },
  reducers: {
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

export const { setLimit } = limitSlice.actions;

export default limitSlice.reducer;
