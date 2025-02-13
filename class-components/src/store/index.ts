import { configureStore } from '@reduxjs/toolkit';
import { marvelApi } from '../api/apiSlice';
import heroesReducer from '../slices/heroesListSlice';

const store = configureStore({
  reducer: { [marvelApi.reducerPath]: marvelApi.reducer, heroesReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marvelApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
