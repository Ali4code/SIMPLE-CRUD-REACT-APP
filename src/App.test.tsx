import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Setvi React Test footer', () => {
  render(<App />);
  const linkElement = screen.getByText("Setvi React Test");
  expect(linkElement).toBeInTheDocument();
});
