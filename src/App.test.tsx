import React from 'react';
<<<<<<< HEAD
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<React.StrictMode><App/></React.StrictMode>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
=======
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
});
