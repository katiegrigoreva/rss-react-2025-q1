import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heroesListData: {},
};

const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    heroesFetched: (state, action) => {
      state.heroesListData = action.payload;
    },
  },
});

const { actions, reducer } = heroesSlice;

export default reducer;

export const { heroesFetched } = actions;
