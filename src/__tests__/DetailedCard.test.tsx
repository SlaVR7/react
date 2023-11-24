import { expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import DetailedCard from '../components/addition/DetailedCard';
import '@testing-library/jest-dom';
import { mockResponse } from './service/mockData';
import { vi } from 'vitest';
import { useRouter } from 'next/router';

const routerObj = {
  query: {
    page: '1',
    limit: '10',
    search: 'product',
    details: 'Product 1',
  },
  push: (url: string) => {
    const params = new URLSearchParams(url);
    routerObj.query.page = params.get('/?page')!;
    routerObj.query.limit = params.get('limit')!;
    routerObj.query.search = params.get('search')!;
    routerObj.query.details = params.get('details')!;
  },
};

vi.mock('next/router', () => ({
  useRouter: () => routerObj,
}));

it('should correctly displays the detailed card data', async () => {
  render(<DetailedCard data={mockResponse} />);
  await waitFor(() => {
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByAltText('product image 1')).toBeInTheDocument();
    expect(screen.getByText('product description')).toBeInTheDocument();
  });
});

it('hides details component on click', async () => {
  let details = useRouter().query.details;

  expect(details).toBeTruthy();
  render(<>{details && <DetailedCard data={mockResponse} />}</>);

  const closeButton = screen.getByText('Close');
  fireEvent.click(closeButton);

  await waitFor(() => {
    details = useRouter().query.details;
    expect(details).toBeNull();
  });
});
