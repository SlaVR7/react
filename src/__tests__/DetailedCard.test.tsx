import { describe, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import DetailedCard from '../pages/DetailedCard';
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import { routesConfigDetailed } from './service/mockData';
import jest from 'jest-mock';
import * as fetchDataAndLoadImagesModule from '../services/fetchDataAndLoadImages';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store/store';

describe('DetailedCard', () => {
  it('should display loading indicator while fetching data', () => {
    const store = setupStore();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DetailedCard />
        </Provider>
      </BrowserRouter>
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should correctly displays the detailed card data', async () => {
    const store = setupStore();
    const fetchDataAndLoadImagesMock = jest.spyOn(
      fetchDataAndLoadImagesModule,
      'fetchDataAndLoadImages'
    );
    fetchDataAndLoadImagesMock.mockImplementation(
      async (_targetProductObj, setIsLoadingImages) => {
        setIsLoadingImages(false);
      }
    );

    render(
      <BrowserRouter>
        <Provider store={store}>
          <DetailedCard />
        </Provider>
      </BrowserRouter>
    );
    waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getAllByAltText('product image')).toHaveLength(2);
      expect(screen.getByText('product description')).toBeInTheDocument();
    });
  });

  it('hides details component on click', () => {
    const store = setupStore();
    const router = createMemoryRouter(routesConfigDetailed, {
      initialEntries: ['/details/:queryParameters'],
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    expect(screen.queryByTestId('detailed-container')).toBeInTheDocument();

    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    expect(screen.queryByTestId('detailed-container')).toBeNull();
  });
});
