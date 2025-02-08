import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import HeroesList from './HeroesList';
import { BrowserRouter } from 'react-router-dom';
import { heroData } from '../../api/ApiConnector';
import HeroesListItem from '../heroesListItem/heroesListItem';

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
        <HeroesList heroesList={mockHeroData} totalHeroes={mockHeroData.length}></HeroesList>
      </BrowserRouter>
    );
    expect(screen.getAllByText(/mockHero/i)).toHaveLength(mockHeroData.length);
  });
  it('renders appropriate message if no cards are present', () => {
    render(
      <BrowserRouter>
        <HeroesList heroesList={[]} totalHeroes={0}></HeroesList>
      </BrowserRouter>
    );
    expect(screen.getByText('There is no hero with such name')).toBeInTheDocument();
  });
  it('opens a detailed card component when clicking on a card', () => {
    const mockFn = vi.fn();
    render(
      <BrowserRouter>
        <HeroesListItem key={mockHeroData[0].name} itemInfo={mockHeroData[0]} onCardClick={mockFn}></HeroesListItem>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('mockHero1'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
