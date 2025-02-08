import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { heroData } from '../../api/ApiConnector';
import HeroesListItem from './heroesListItem';
import Spinner from '../spinner/Spinner';
import HeroInfo from '../heroInfo/HeroInfo';

const mockHeroData: heroData[] = [
  {
    id: 1,
    name: 'mockHero1',
    description: 'lorem',
  },
];
const mockFn = vi.fn();

describe('Test heroesListItem component', () => {
  it('renders relevant card data', () => {
    render(
      <BrowserRouter>
        <HeroesListItem key={mockHeroData[0].name} itemInfo={mockHeroData[0]} onCardClick={mockFn}></HeroesListItem>
      </BrowserRouter>
    );
    expect(screen.getByText('mockHero1')).toBeInTheDocument();
    expect(screen.getByText('lorem')).toBeInTheDocument();
  });

  it('opens a detailed card component when clicking on a card', () => {
    const mockCardClickFn = vi.fn(() => render(<Spinner />));

    render(
      <BrowserRouter>
        <HeroesListItem
          key={mockHeroData[0].name}
          itemInfo={mockHeroData[0]}
          onCardClick={mockCardClickFn}
        ></HeroesListItem>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('mockHero1'));
    expect(mockCardClickFn).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('spinner')).toBeInTheDocument();
  });
});
describe('Test heroInfo component', () => {
  it('correctly displays the detailed card data', () => {
    const mockCardClickFn = vi.fn(() =>
      render(
        <BrowserRouter>
          <HeroInfo />
        </BrowserRouter>
      )
    );
    render(
      <BrowserRouter>
        <HeroesListItem
          key={mockHeroData[0].name}
          itemInfo={mockHeroData[0]}
          onCardClick={mockCardClickFn}
        ></HeroesListItem>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('mockHero1'));
    expect(screen.getByRole('heroInfo')).toBeInTheDocument();
  });
});
