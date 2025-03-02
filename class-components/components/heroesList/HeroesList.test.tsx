import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HeroesList from './HeroesList';
import { BrowserRouter } from 'react-router-dom';
import { heroData } from '../../api/apiSlice';
import store from '../../src/store';
import HeroesListItem from './HeroesListItem';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { mockRouter } from '../pagination/Pagination.test';

const mockHeroData: heroData[] = [
  {
    id: 1,
    name: 'mockHero1',
    description: 'ipsum',
    img: '/Без названия.jpg',
  },
  {
    id: 2,
    name: 'mockHero2',
    description: 'lorem',
    img: '/Без названия.jpg',
  },
];

describe('Test heroesList component', () => {
  it('renders proper number of cards', () => {
    render(
      <RouterContext.Provider value={mockRouter({})}>
        <Provider store={store}>
          <HeroesList heroesList={mockHeroData} totalHeroes={mockHeroData.length}></HeroesList>
        </Provider>
      </RouterContext.Provider>
    );

    expect(screen.getAllByText(/mockHero/i)).toHaveLength(mockHeroData.length);
  });

  it('renders appropriate message if no cards are present', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HeroesList heroesList={[]} totalHeroes={0}></HeroesList>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('No heroes found')).toBeInTheDocument();
  });

  it('renders relevant card data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HeroesList heroesList={mockHeroData} totalHeroes={mockHeroData.length}></HeroesList>
        </Provider>
      </BrowserRouter>
    );
    mockHeroData.forEach((obj) => {
      expect(screen.getByText(obj.name)).toBeInTheDocument();
      expect(screen.getByText(obj.description)).toBeInTheDocument();
    });
  });

  it('opens a detailed card component when clicking on a card', () => {
    const mockFn = vi.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HeroesListItem
            key={mockHeroData[0].name}
            itemInfo={mockHeroData[0]}
            onCardClick={mockFn}
            onCheckboxClick={mockFn}
          ></HeroesListItem>
        </Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('mockHero1'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
