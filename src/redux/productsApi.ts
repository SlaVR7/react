import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl, projectKey } from '../lib/constants';
import { setAnonymousToken } from '../services/getToken';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: async (headers) => {
      await setAnonymousToken();
      const newAccessToken = localStorage.getItem('token');
      const parsedNewAccessToken = JSON.parse(newAccessToken!).access_token;
      headers.set('Authorization', `Bearer ${parsedNewAccessToken}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: ({ query = '', limit = 10, page = '1' }) => ({
        url: `${projectKey}/product-projections/search`,
        method: 'GET',
        params: {
          offset: (+page - 1) * +limit,
          limit,
          ['text.en']: query.trim().toLowerCase(),
        },
      }),
    }),
  }),
});

export const { useGetProductsListQuery } = productsApi;
