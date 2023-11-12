import { render, screen } from '@testing-library/react';
import { mockData } from './service/mockData';
import '@testing-library/jest-dom';
import ProductCard from '../components/body/Card';

describe('Card should renders the relevant card data', () => {
  it('should renders the relevant product name', () => {
    render(<ProductCard data={mockData} />);
    const productNameElement: HTMLHeadingElement =
      screen.getByText('Product 1');
    expect(productNameElement).toBeInTheDocument();
    expect(productNameElement).toHaveTextContent(mockData.name.en);
  });

  it('should renders the relevant product price', () => {
    render(<ProductCard data={mockData} />);
    const productPriceElement = screen.getByText(
      `${mockData.masterVariant.prices[0].value.centAmount / 100} EUR`
    );
    expect(productPriceElement).toBeInTheDocument();
    expect(productPriceElement).toHaveTextContent(
      String(mockData.masterVariant.prices[0].value.centAmount / 100)
    );
  });

  it('should renders the relevant product image', () => {
    render(<ProductCard data={mockData} />);
    const productImageElement = screen.getByTestId('product-image');
    expect(productImageElement).toBeInTheDocument();
    expect(productImageElement).toHaveAttribute(
      'src',
      mockData.masterVariant.images[0].url
    );
  });
});
