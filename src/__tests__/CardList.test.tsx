import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import CardList from '../components/body/CardList';
import { emptyMockData, mockResponse } from './service/mockData';

const routerObj = {
  query: {
    page: '1',
    limit: '10',
    search: 'product',
  },
  push: (url: string) => {
    const params = new URLSearchParams(url);
    routerObj.query.page = params.get('/?page')!;
    routerObj.query.limit = params.get('limit')!;
    routerObj.query.search = params.get('search')!;
  },
};
vi.mock('next/router', () => ({
  useRouter: () => routerObj,
}));

describe('CardList', () => {
  it('renders the correct number of product cards', () => {
    render(<CardList data={mockResponse} />);
    waitFor(() => {
      const productCards = screen.getAllByTestId('product-card');
      expect(productCards).toHaveLength(mockResponse.results.length);
    });
  });

  it('should show an appropriate message if no cards are present', () => {
    render(<CardList data={emptyMockData} />);

    waitFor(() => {
      const errorMessageElement: HTMLHeadingElement = screen.getByText(
        'Oops! Products does not found'
      );
      expect(errorMessageElement).toHaveTextContent(
        'Oops! Products does not found'
      );
    });
  });
});
