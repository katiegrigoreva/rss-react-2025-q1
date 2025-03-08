import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { Provider } from 'react-redux';
import store from '../../store';
import Details from './[id]';
import mockRouter from 'next-router-mock';

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

describe('Test detailed page', () => {
  mockRouter.asPath = '/details/1/?limit=8&offset=undefined';

  it('goes to main page when close details', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Provider store={store}>
          <Details
            data={{ results: mockData, total: mockData.length }}
            detailedData={{ results: mockData, total: mockData.length }}
          />
        </Provider>
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByRole('closeBtn'));
    expect(mockRouter.asPath).toEqual('/?limit=8&offset=undefined');
  });
  it('renders main card list', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Provider store={store}>
          <Details
            data={{ results: mockData, total: mockData.length }}
            detailedData={{ results: mockData, total: mockData.length }}
          />
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getByRole('cardList')).toBeInTheDocument();
  });
  it('renders main card details', () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Provider store={store}>
          <Details
            data={{ results: mockData, total: mockData.length }}
            detailedData={{ results: mockData, total: mockData.length }}
          />
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getByRole('cardInfo')).toBeInTheDocument();
  });
});
