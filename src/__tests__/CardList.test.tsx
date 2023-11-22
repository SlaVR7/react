import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import CardList from '../components/body/CardList';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store/store';

describe('CardList', () => {
  it('renders the correct number of product cards', () => {
    const store = setupStore();
    const mockData = {
      results: [{ name: { en: 'Product 1' } }, { name: { en: 'Product 2' } }],
      total: 10,
    };

    vi.mock('../../redux/productsApi', () => ({
      ...jest.requireActual('../../redux/productsApi'),
      useGetProductsListQuery: vi.fn(() => ({
        data: mockData,
        isLoading: false,
      })),
    }));

    render(
      <BrowserRouter>
        <Provider store={store}>
          <CardList />
        </Provider>
      </BrowserRouter>
    );
    waitFor(() => {
      const productCards = screen.getAllByTestId('product-card');
      expect(productCards).toHaveLength(mockData.results.length);
    });
  });

  it('should show an appropriate message if no cards are present', () => {
    const store = setupStore();
    const mockData = {
      results: [],
      total: 10,
    };

    vi.mock('../../redux/productsApi', () => ({
      ...jest.requireActual('../../redux/productsApi'),
      useGetProductsListQuery: vi.fn(() => ({
        data: mockData,
        isLoading: false,
      })),
    }));

    render(
      <BrowserRouter>
        <Provider store={store}>
          <CardList />
        </Provider>
      </BrowserRouter>
    );

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
