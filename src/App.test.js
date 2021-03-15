import { render, screen, fireEvent, getByText, click} from '@testing-library/react';
import App from './App';
import React from 'react'
import userEvent from '@testing-library/user-event'

test('renders returns title', () => {
  render(<App />);
  const titleElement = screen.getByText(/BBC News/i);
  expect(titleElement).toBeInTheDocument();
});

test('instructions are loaded on home', () => {
  render(<App />);
  const instructions = screen.getByText(/Please choose an article above/i);
  expect(instructions).toBeInTheDocument();
});

test('no rank info is loaded initially', () => {
  render(<App />);
  const rank = screen.getByText(/rank/i);
  !expect(rank).toBeInTheDocument();
});

//TODO find how to stubb the request of the APP component so we can check test the ranking behaviour
//test('when clicking and article that ranking is available', () => {
//  render(<App />);
//  const link = screen.getByRole('link', { name: /Article1/i });
//  userEvent.click(link);
//  const link = getByText('/Article1/');
//  fireEvent.click(link);
//  const rank = screen.getByText(/Rank article1/i);
//  expect(rank).toBeInTheDocument();
//  const rank = screen.getByText(/Rank article1/i);
//  expect(rank).toBeInTheDocument();
//  expect(screen.getByRole('button')).toBeInTheDocument();
//});
