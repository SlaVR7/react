import { describe, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import DetailedCard from '../pages/DetailedCard';
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import { contextValue, mockData, routesConfig } from './service/mockData';
import MyContext from '../services/myContext';
import jest from 'jest-mock';
import * as fetchDataAndLoadImagesModule from '../services/fetchDataAndLoadImages';
import { act } from 'react-dom/test-utils';

describe('DetailedCard', () => {
  it('should display loading indicator while fetching data', () => {
    render(
      <BrowserRouter>
        <DetailedCard />
      </BrowserRouter>
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should correctly displays the detailed card data', async () => {
    contextValue.productsData = [mockData];

    const fetchDataAndLoadImagesMock = jest.spyOn(
      fetchDataAndLoadImagesModule,
      'fetchDataAndLoadImages'
    );
    fetchDataAndLoadImagesMock.mockImplementation(
      async (_targetProductObj, setCurrentObj, setIsLoadingImages) => {
        setCurrentObj(mockData);
        setIsLoadingImages(false);
      }
    );

    render(
      <MyContext.Provider value={contextValue}>
        <BrowserRouter>
          <DetailedCard />
        </BrowserRouter>
      </MyContext.Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getAllByAltText('product image')).toHaveLength(2);
    expect(screen.getByText('product description')).toBeInTheDocument();
  });

  test('hides details component on click', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/details/:queryParameters'],
    });
    render(<RouterProvider router={router} />);

    const closeButton = screen.getByText('Close');
    act(() => {
      fireEvent.click(closeButton);
    });

    expect(screen.queryByTestId('detailed-container')).toBeNull();
  });
});
