import { DataState, ProductData } from '../../interfaces';
import jest from 'jest-mock';
import Card from '../../components/body/Card';
import { Outlet } from 'react-router-dom';
import DetailedCard from '../../pages/DetailedCard';

export const mockData: ProductData = {
  name: {
    en: 'Product 1',
  },
  masterVariant: {
    images: [
      {
        url: 'first image URL',
      },
      {
        url: 'second image URL',
      },
    ],
    prices: [
      {
        value: {
          centAmount: 300,
        },
      },
    ],
  },
  description: {
    en: 'product description',
  },
};

export const contextValue: DataState = {
  productsData: [],
  setProductsData: () => {},
  isLoading: false,
  limit: '10',
  page: '1',
  setIsLoading: () => {},
  inputValue: '',
  setInputValue: (newValue) => {
    if (typeof newValue === 'string') {
      contextValue.inputValue = newValue;
    }
  },
  setLimit: () => {},
  totalPages: 0,
  setTotalProducts: () => {},
  setPage: () => {},
  product: '',
  setProduct: jest.fn(),
  totalProducts: 0,
};

export const routesConfig = [
  {
    path: '/',
    element: (
      <>
        <Card data={mockData} />
        <Outlet />
      </>
    ),
    children: [
      { path: '/details/:queryParameters', element: <DetailedCard /> },
    ],
  },
];
