import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../lib/constants';
import { getProductsList } from '../services/getProductsList';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      queryFn: async ({ query = '', limit = 10, page = '1' }) => {
        return await getProductsList(query, limit, page);
      },
    }),
  }),
});

export const { useGetProductsListQuery } = productsApi;
