import { describe, expect, it } from 'vitest';
import App from './App';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../../context/ThemeContext';
import store from '../../store';

describe('App', () => {
  it('renders header', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('MARVEL HEROES');
  });

  it('renders search panel', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders search button', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
});
