import React from 'react';
import { DataState } from '../interfaces';

const MyContext = React.createContext<DataState>({
  productsData: [],
  setProductsData: () => {},
  setIsLoading: () => {},
  isLoading: false,
  totalProducts: 0,
  inputValue: '',
  limit: '10',
  setInputValue: () => {},
  setLimit: () => {},
  totalPages: 0,
  setTotalProducts: () => {},
  page: '1',
  setPage: () => {},
  product: '',
  setProduct: () => {},
});

export default MyContext;
