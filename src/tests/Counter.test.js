// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


beforeEach(() => {
  render(<Counter />);
  // Render the Counter component here
})

test('renders counter message', () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('2');
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-2');
  // Complete the unit test below based on the objective in the line above
});
