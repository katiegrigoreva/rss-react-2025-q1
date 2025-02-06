import NotFoundPage from './NotFoundPage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, describe, it } from 'vitest';
describe('404 page testing', () => {
  it('renders image', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('renders go home button', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: 'Go home' })).toBeInTheDocument();
  });
});
