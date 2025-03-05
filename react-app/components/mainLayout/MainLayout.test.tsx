import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import MainLayout from '../mainLayout/MainLayout';

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
  };
});

describe('Test main layout', () => {
  it('renders heading', () => {
    render(
      <Provider store={store}>
        <MainLayout />
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
        <MainLayout />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('renders search button', () => {
    render(
      <Provider store={store}>
        <MainLayout />
      </Provider>
    );
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
});
