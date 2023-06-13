import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Nav } from '../../src/components/Nav';

describe('<Nav />', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    expect(getByText('DEMO Streaming')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
    expect(getByText('Start your free trial')).toBeInTheDocument();
  });

  test('navigates home on title click', () => {
    const { getByText } = render(
      <BrowserRouter>
          <Nav />
      </BrowserRouter>
    );

    fireEvent.click(getByText('DEMO Streaming'));
    expect(window.location.pathname).toBe('/');
  });

  test('displays correct title', () => {
    const { getByText } = render(
      <BrowserRouter>
          <Nav />
      </BrowserRouter>
    );

    expect(getByText('Popular Titles')).toBeInTheDocument();
  });
});
