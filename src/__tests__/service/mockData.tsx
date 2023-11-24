import { ProductData } from '../../interfaces';
import { vi } from 'vitest';

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

export const mockResponse = {
  results: [mockData],
  total: 60,
};

export const localStorageMock: Storage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  key: vi.fn(),
  length: 0,
};

// export const routesConfigDetailed = [
//   {
//     path: '/',
//     element: (
//       <>
//         <Card data={mockData} />
//         <DetailedCard data={}/>
//       </>
//     ),
//     children: [
//       { path: '/details/:queryParameters', element: <DetailedCard /> },
//     ],
//   },
// ];
//
// export const routesConfigMainPage = [
//   {
//     path: '/',
//     element: (
//       <>
//         <MainPage />
//         <Outlet />
//       </>
//     ),
//     children: [
//       { path: '/details/:queryParameters', element: <DetailedCard /> },
//     ],
//   },
// ];
//
// export const routesConfigPagination = [
//   {
//     path: '/',
//     element: <Pagination />,
//   },
// ];
//
// export const routesConfigSearch = [
//   {
//     path: '/',
//     element: <Search />,
//   },
// ];
