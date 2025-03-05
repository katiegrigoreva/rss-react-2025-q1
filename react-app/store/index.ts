import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from '../slices/heroesListSlice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: { heroesReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
