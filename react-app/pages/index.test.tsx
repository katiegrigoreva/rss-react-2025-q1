import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Index from '.';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { mockRouter } from '../test/helpers/mockRouter';
import { Provider } from 'react-redux';
import store from '../store';

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

const mockData = [
  {
    id: 1,
    name: 'mockHero1',
    description: 'ipsum',
    img: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  },
  {
    id: 2,
    name: 'mockHero2',
    description: 'lorem',
    img: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  },
];
const router = mockRouter();

describe('Test home page', () => {
  it('renders heading', () => {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <Index
            data={{
              results: mockData,
              total: 0,
            }}
          />
        </Provider>
      </RouterContext.Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('MARVEL HEROES');
  });
  it('renders search panel', () => {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <Index
            data={{
              results: mockData,
              total: 0,
            }}
          />
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('renders heroes list', () => {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <Index
            data={{
              results: mockData,
              total: 0,
            }}
          />
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getByText('mockHero1')).toBeInTheDocument();
    expect(screen.getByText('mockHero2')).toBeInTheDocument();
  });
  it('renders pagination component', () => {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <Index
            data={{
              results: mockData,
              total: 0,
            }}
          />
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getByRole('pagination')).toBeInTheDocument();
  });
});
