import { render, screen, cleanup } from '@testing-library/react';
import Heading from '../components/Heading';

test('should render Heading component', () => {
  render(<Heading />);

  const headingElement = screen.getByTestId('heading-1');
  expect(headingElement).toBeInTheDocument();

  expect(headingElement).toHaveTextContent('User List');
});
