import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HeroesList from './HeroesList';
import { BrowserRouter } from 'react-router-dom';
import { heroData } from '../../api/apiSlice';
import store from '../../store';

const mockHeroData: heroData[] = [
  {
    id: 1,
    name: 'mockHero1',
    description: 'lorem',
  },
  {
    id: 2,
    name: 'mockHero2',
    description: 'lorem',
  },
];

describe('Test heroesList component', () => {
  it('renders proper number of cards', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HeroesList heroesList={mockHeroData} totalHeroes={mockHeroData.length}></HeroesList>
        </Provider>
      </BrowserRouter>
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
    expect(screen.getByText('There is no hero with such name')).toBeInTheDocument();
  });
});
