import { ProductData } from '../../interfaces';
import Card from '../../components/body/Card';
import { Outlet } from 'react-router-dom';
import DetailedCard from '../../pages/DetailedCard';
import Pagination from '../../components/addition/Pagination';
import Search from '../../components/header/Search';
import { vi } from 'vitest';
import MainPage from '../../pages/MainPage';

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

export const localStorageMock: Storage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  key: vi.fn(),
  length: 0,
};

export const routesConfigDetailed = [
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

export const routesConfigMainPage = [
  {
    path: '/',
    element: (
      <>
        <MainPage />
        <Outlet />
      </>
    ),
    children: [
      { path: '/details/:queryParameters', element: <DetailedCard /> },
    ],
  },
];

export const routesConfigPagination = [
  {
    path: '/',
    element: <Pagination />,
  },
];

export const routesConfigSearch = [
  {
    path: '/',
    element: <Search />,
  },
];
