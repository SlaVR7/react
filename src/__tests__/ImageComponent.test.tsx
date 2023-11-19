import { render, screen } from '@testing-library/react';
import ImageComponent from '../components/addition/ImageComponent';
import '@testing-library/jest-dom';

it('should render image component', () => {
  render(<ImageComponent src={'someUrl'} alt={'someDescription'} />);
  const image = screen.getByTestId('product-image');
  expect(image).toBeInTheDocument();
});
