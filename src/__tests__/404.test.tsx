import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import NotFound from '../../pages/404';

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      invalid: 'address',
    },
  }),
}));

describe('404 Page', () => {
  it('renders 404 component for an invalid route', async () => {
    render(<NotFound />);

    expect(screen.getByText('This page does not exist')).toBeInTheDocument();
  });
});
