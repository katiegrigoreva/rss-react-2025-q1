import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HeroesList, { ApiResponse } from './HeroesList';
import store from '../../store';
import { mockRouter } from '../../test/helpers/mockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import HeroesListItem from './HeroesListItem';

const mockHeroData: ApiResponse = {
  data: {
    results: [
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
    ],
    total: 2,
  },
};

const emptyMockData: ApiResponse = {
  data: {
    results: [],
    total: 0,
  },
};

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      on: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
  };
});
const router = mockRouter();

describe('Test heroesList component', () => {
  it('renders proper number of cards', () => {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <HeroesList data={mockHeroData}></HeroesList>
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getAllByText(/mockHero/i)).toHaveLength(mockHeroData.data.results.length);
  });

  it('renders appropriate message if no cards are present', () => {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <HeroesList data={emptyMockData}></HeroesList>
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getByText('No heroes found')).toBeInTheDocument();
  });

  it('renders relevant card data', () => {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <HeroesList data={mockHeroData}></HeroesList>
        </Provider>
      </RouterContext.Provider>
    );
    mockHeroData.data.results.forEach((obj) => {
      expect(screen.getByText(obj.name)).toBeInTheDocument();
      expect(screen.getByText(obj.description)).toBeInTheDocument();
    });
  });

  it('opens a detailed card component when clicking on a card', () => {
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <HeroesList data={mockHeroData}></HeroesList>
        </Provider>
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByText('mockHero1'));
    expect(router.push).toHaveBeenCalledOnce();
  });

  it('renders flyout when clicking checkbox', () => {
    const mockFn = vi.fn();
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <HeroesListItem itemInfo={mockHeroData.data.results[0]} onCheckboxClick={mockFn} />
        </Provider>
      </RouterContext.Provider>
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockFn).toHaveBeenCalledOnce();
  });
});
