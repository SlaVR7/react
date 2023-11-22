import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { mockData, routesConfigDetailed } from './service/mockData';
import '@testing-library/jest-dom';
import ProductCard from '../components/body/Card';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store/store';
import { useGetProductsListQuery } from '../redux/productsApi';

describe('Card should renders the relevant card data', () => {
  it('should renders the relevant product name', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <ProductCard data={mockData} />
      </Provider>
    );
    const productNameElement: HTMLHeadingElement =
      screen.getByText('Product 1');
    expect(productNameElement).toBeInTheDocument();
    expect(productNameElement).toHaveTextContent(mockData.name.en);
  });

  it('should renders the relevant product price', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <ProductCard data={mockData} />
      </Provider>
    );
    const productPriceElement = screen.getByText(
      `${mockData.masterVariant.prices[0].value.centAmount / 100} EUR`
    );
    expect(productPriceElement).toBeInTheDocument();
    expect(productPriceElement).toHaveTextContent(
      String(mockData.masterVariant.prices[0].value.centAmount / 100)
    );
  });

  it('should renders the relevant product image', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <ProductCard data={mockData} />
      </Provider>
    );
    const productImageElement = screen.getByTestId('product-image');
    expect(productImageElement).toBeInTheDocument();
    expect(productImageElement).toHaveAttribute(
      'src',
      mockData.masterVariant.images[0].url
    );
  });
});

it('shows details component on click', () => {
  const store = setupStore();
  const router = createMemoryRouter(routesConfigDetailed, {
    initialEntries: ['/?page=1&limit=10'],
  });
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
  const link = screen.getByTestId('product-card');

  fireEvent.click(link);
  waitFor(() => {
    const details = screen.getByTestId('detailed-container');
    expect(details).toBeDefined();
  });
});

it('clicking triggers an additional API call to fetch detailed information', () => {
  const store = setupStore();
  const router = createMemoryRouter(routesConfigDetailed, {
    initialEntries: ['/?page=1&limit=10'],
  });
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
  const link = screen.getByTestId('product-card');

  fireEvent.click(link);

  waitFor(() => {
    expect(useGetProductsListQuery).toHaveBeenCalled();
  });
});
