import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from '../components/body/CardList';
import MyContext from '../services/myContext';
import { BrowserRouter } from 'react-router-dom';
import { contextValue, mockData } from './service/mockData';
import { ProductData } from '../interfaces';
import '@testing-library/jest-dom';

describe('CardList', () => {
  it('renders the correct number of product cards', () => {
    const mockProductData: ProductData[] = new Array(10)
      .fill(null)
      .map((_, index) => ({
        ...mockData,
        name: { en: `Product ${index + 1}` },
      }));
    contextValue.productsData = mockProductData;

    render(
      <MyContext.Provider value={contextValue}>
        <BrowserRouter>
          <CardList />
        </BrowserRouter>
      </MyContext.Provider>
    );

    const productCards: HTMLDivElement[] =
      screen.getAllByTestId('product-card');
    expect(productCards.length).toBe(mockProductData.length);
  });

  it('should show an appropriate message if no cards are present', () => {
    contextValue.productsData = [];

    render(
      <MyContext.Provider value={contextValue}>
        <BrowserRouter>
          <CardList />
        </BrowserRouter>
      </MyContext.Provider>
    );

    const errorMessageElement: HTMLHeadingElement = screen.getByText(
      'Oops! Products does not found'
    );
    expect(errorMessageElement).toHaveTextContent(
      'Oops! Products does not found'
    );
  });
});
