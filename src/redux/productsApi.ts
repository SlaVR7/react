import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../lib/constants';
import { setAnonymousToken } from '../services/getToken';
import { getProductsList } from '../services/getProductsList';
import { AxiosResponse } from '../interfaces';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      queryFn: async ({ query = '', limit = 10, page = '1' }) => {
        try {
          return await getProductsList(query, limit, page);
        } catch (error) {
          const authorizationError = error as AxiosResponse;
          if (authorizationError.response.status === 401) {
            await setAnonymousToken();
            return await getProductsList(query, limit, page);
          } else throw error;
        }
      },
    }),
  }),
});

export const { useGetProductsListQuery } = productsApi;
