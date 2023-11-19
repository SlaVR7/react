import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store/store';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routesConfigPagination } from './service/mockData';

describe('Pagination', () => {
  it('component should update URL query parameter when page changes', async () => {
    const store = setupStore();
    const router = createMemoryRouter(routesConfigPagination, {
      initialEntries: ['?page=1&limit=10'],
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    expect(router.state.location.search).toBe('?page=1&limit=10');

    const toPage3Button = screen.getByText('3');

    fireEvent.click(toPage3Button);

    await waitFor(() => {
      expect(router.state.location.search).toBe('?page=3&limit=10');
    });
  });
});
