import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { contextValue } from './service/mockData';
import MyContext from '../services/myContext';
import '@testing-library/jest-dom';

describe('Not found', () => {
  it('the 404 page is displayed when navigating to an invalid route. ', async () => {
    window.history.pushState({}, 'Test Page', '/incorrect-url');
    render(
      <MyContext.Provider value={contextValue}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyContext.Provider>
    );

    await waitFor(() => {
      const notFoundElement = screen.getByText('This page does not exist');
      expect(notFoundElement).toBeInTheDocument();
    });
  });
});
