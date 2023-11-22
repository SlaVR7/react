import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store/store';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { localStorageMock, routesConfigSearch } from './service/mockData';
import { userEvent } from '@testing-library/user-event';

describe('Search', () => {
  it('clicking the Search button saves the entered value to the local storage', () => {
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    });
    const store = setupStore();
    const router = createMemoryRouter(routesConfigSearch, {
      initialEntries: ['/?page=1&limit=10'],
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Enter your search query');
    const searchButton = screen.getByText('Search');
    const searchKey = 'Search value';

    userEvent.type(input, searchKey);
    userEvent.click(searchButton);

    waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(searchKey);
    });
  });

  it('Check that the component retrieves the value from the local storage upon mounting.', () => {
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    });
    const store = setupStore();
    const router = createMemoryRouter(routesConfigSearch, {
      initialEntries: ['/?page=1&limit=10'],
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    waitFor(() => {
      expect(localStorageMock.getItem('term')).toHaveBeenCalled();
    });
  });
});
