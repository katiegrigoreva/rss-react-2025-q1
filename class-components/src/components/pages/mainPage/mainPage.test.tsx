import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import MainPage from './MainPage';
import { BrowserRouter } from 'react-router-dom';

describe('Main page', () => {
  it('renders search panel', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
  it('renders card list component', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('cardList')).toBeInTheDocument();
  });
  it('renders pagination component', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('pagination')).toBeInTheDocument();
  });
});
