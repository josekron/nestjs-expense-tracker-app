import { render, screen } from '@testing-library/react';
import App from './App';

test('renders expense tracker header', () => {
  render(<App />);
  const header = screen.getByText(/Expense Tracker/i);
  expect(header).toBeInTheDocument();
});
