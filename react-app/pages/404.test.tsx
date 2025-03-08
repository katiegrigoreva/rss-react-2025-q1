import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NotFoundPage from './404';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Test 404 page', () => {
  it('renders image and "go home" btn', () => {
    render(<NotFoundPage />);
    expect(screen.getByAltText('Error')).toBeInTheDocument();
    expect(screen.getByText('Go home')).toBeInTheDocument();
  });
  it('leads to home page when click a btn', () => {
    render(<NotFoundPage />, { wrapper: MemoryRouterProvider });
    act(() => {
      mockRouter.push('/badRoute');
    });
    fireEvent.click(screen.getByText('Go home'));
    expect(mockRouter.asPath).toEqual('/');
  });
});
