import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../lib/constants';
import { getProductsList } from '../services/getProductsList';
import { HYDRATE } from 'next-redux-wrapper';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProductsList: builder.query({
      queryFn: async ({ query = '', limit = 10, page = '1', token }) => {
        return await getProductsList(query, limit, page, token);
      },
    }),
  }),
});

export const { useGetProductsListQuery } = productsApi;
