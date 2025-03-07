import { describe, expect, it } from 'vitest';
import heroesReducer, {
  selectHero,
  SliceState,
  unselectHero,
  unselectAll,
  /* selectCheckbox,
  unselectCheckbox, */
} from './heroesListSlice';

const mockHero = {
  id: 1,
  name: 'mockHero1',
  description: 'ipsum',
  img: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
};
const mockHero2 = {
  id: 2,
  name: 'mockHero2',
  description: 'ipsum',
  img: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
};

describe('Test heroesList slice', () => {
  it('should add hero with "selectHero" action', () => {
    const mockState: SliceState = {
      selectedHeroes: [],
      selectedCheckboxes: [],
    };
    const action = { type: selectHero.type, payload: mockHero };
    const result = heroesReducer(mockState, action);

    expect(result.selectedHeroes).toStrictEqual([mockHero]);
  });
  it('should remove hero with "unselectHero" action', () => {
    const mockState: SliceState = {
      selectedHeroes: [mockHero],
      selectedCheckboxes: [],
    };
    const action = { type: unselectHero.type, payload: mockHero.id };
    const result = heroesReducer(mockState, action);

    expect(result.selectedHeroes).toStrictEqual([]);
  });
  it('should remove all heroes with "unselectAll" action', () => {
    const mockState: SliceState = {
      selectedHeroes: [mockHero, mockHero2],
      selectedCheckboxes: [],
    };
    const action = { type: unselectAll.type };
    const result = heroesReducer(mockState, action);

    expect(result.selectedHeroes).toStrictEqual([]);
  });
});
