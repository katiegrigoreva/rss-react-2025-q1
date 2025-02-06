import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroesList from './HeroesList';
import { BrowserRouter } from 'react-router-dom';
import { heroData } from '../../api/ApiConnector';

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
});
