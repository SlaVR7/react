import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/header/Search';
import { vi } from 'vitest';
import { useRouter } from 'next/router';

const routerObj = {
  query: {
    page: '1',
    limit: '10',
    search: 'product',
  },
  push: (url: string) => {
    const params = new URLSearchParams(url);
    routerObj.query.page = params.get('page')!;
    routerObj.query.limit = params.get('limit')!;
    routerObj.query.search = params.get('search')!;
  },
};

vi.mock('next/router', () => ({
  useRouter: () => routerObj,
}));

test('Search component renders correctly', () => {
  render(<Search />);

  const inputElement = screen.getByPlaceholderText('Enter your search query');
  const selectElement = screen.getByText('Cards per page');
  const buttonElement = screen.getByText('Search');

  expect(inputElement).toBeInTheDocument();
  expect(selectElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('Form submission works correctly', () => {
  const router = useRouter();
  render(<Search />);

  const formElement = screen.getByRole('form');
  fireEvent.submit(formElement);

  expect(router.query).toStrictEqual({ page: '1', limit: '10', search: '' });
});

test('Select change updates the URL correctly', () => {
  const router = useRouter();
  render(<Search />);

  const selectElement = screen.getByRole('select');
  fireEvent.change(selectElement, { target: { value: '15' } });

  expect(router.query).toStrictEqual({ page: '1', limit: '15', search: '' });
});
