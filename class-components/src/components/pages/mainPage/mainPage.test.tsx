import { describe, expect, it } from 'vitest';
import MainPage from './MainPage';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../../../context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store';

describe('Main Page', () => {
  it('renders search panel', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <MainPage />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders search button', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <MainPage />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('renders card list component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <MainPage />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('cardList')).toBeInTheDocument();
  });

  it('renders pagination component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <MainPage />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('pagination')).toBeInTheDocument();
  });
});
