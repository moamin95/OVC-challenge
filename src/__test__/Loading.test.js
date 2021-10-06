import { render, screen, cleanup } from '@testing-library/react';
import Loading from '../components/Loading';

test('should render Loading component', () => {
  render(<Loading />);

  const loadingElement = screen.getByTestId('loading-1');
  expect(loadingElement).toBeInTheDocument();

  expect(loadingElement).toHaveTextContent('Loading...');
});

test('should throw error if error in loading', () => {
  const error = 'Unexpected error has occured';
  render(<Loading error={error} />);

  const errorElement = screen.getByTestId('error-1');
});
