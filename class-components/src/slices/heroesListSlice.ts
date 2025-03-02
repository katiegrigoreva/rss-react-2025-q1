import { createSlice } from '@reduxjs/toolkit';
import { heroData } from '../../api/apiSlice';

export type SliceState = {
  heroesListData: heroData[];
  selectedHeroes: heroData[];
  selectedCheckboxes: string[];
};

const initialState: SliceState = {
  heroesListData: [],
  selectedHeroes: [],
  selectedCheckboxes: [],
};

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    heroesFetched: (state, action) => {
      state.heroesListData = action.payload;
    },
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

export const { heroesFetched, selectHero, unselectHero, unselectAll, selectCheckbox, unselectCheckbox } = actions;
