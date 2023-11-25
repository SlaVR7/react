import { ProductData } from '../../interfaces';

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

export const emptyMockData = {
  results: [],
  total: 0,
};
