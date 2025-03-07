import { createSlice } from '@reduxjs/toolkit';
import { heroData } from '../components/heroesList/HeroesList';

export type SliceState = {
  selectedHeroes: heroData[];
  selectedCheckboxes: string[];
};

const initialState: SliceState = {
  selectedHeroes: [],
  selectedCheckboxes: [],
};

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    selectHero: (state, action) => {
      state.selectedHeroes.push(action.payload);
    },
    selectCheckbox: (state, action) => {
      state.selectedCheckboxes.push(action.payload);
    },
    unselectHero: (state, action) => {
      state.selectedHeroes = state.selectedHeroes.filter((hero) => hero.id !== action.payload);
    },
    unselectCheckbox: (state, action) => {
      state.selectedCheckboxes = state.selectedCheckboxes.filter((item) => item !== action.payload);
    },
    unselectAll: (state) => {
      state.selectedHeroes = [];
      state.selectedCheckboxes = [];
    },
  },
});

const { actions, reducer } = heroesSlice;

export default reducer;

export const { selectHero, unselectHero, unselectAll, selectCheckbox, unselectCheckbox } = actions;
