import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store/store';

describe('Not found', () => {
  it('the 404 page is displayed when navigating to an invalid route. ', async () => {
    const store = setupStore();
    window.history.pushState({}, 'Test Page', '/incorrect-url');
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      const notFoundElement = screen.getByText('This page does not exist');
      expect(notFoundElement).toBeInTheDocument();
    });
  });
});
