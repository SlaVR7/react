import '@testing-library/jest-dom';
import Pagination from '../components/addition/Pagination';
import { mockResponse } from './service/mockData';
import { vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';

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

describe('Pagination component', () => {
  it('updates URL query parameter when page changes', async () => {
    render(<Pagination data={mockResponse} />);

    const page3 = screen.getByText('3');
    fireEvent.click(page3);

    await waitFor(() => {
      const { query } = useRouter();
      expect(query).toEqual({ page: '3', limit: '10', search: 'product' });
    });
  });
});
