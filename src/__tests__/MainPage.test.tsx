import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from '../pages/MainPage';
import { setupStore } from '../redux/store/store';
import '@testing-library/jest-dom';

describe('MainPage Component', () => {
  it('should render MainPage component without errors', () => {
    const store = setupStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    const mainPageElement = screen.getByTestId('main-page');
    expect(mainPageElement).toBeInTheDocument();
  });
});
