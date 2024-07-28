import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiConstants } from './apiConstants';
import { HeroesListProps } from '../components/heroesList/HeroesList';

export type ApiResponse = {
  data: {
    results: [];
    total: number;
  };
};

export const marvelApi = createApi({
  reducerPath: 'marvelApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiConstants._apiBase }),
  endpoints: (builder) => ({
    getAllHeroes: builder.query({
      query: (query = apiConstants._baseQuery) => `${query}&${apiConstants._apiKey}`,
      transformResponse: (response: ApiResponse): HeroesListProps => ({
        heroesList: response.data.results,
        totalHeroes: response.data.total,
      }),
    }),
    getSearchHeroes: builder.query({
      query: ({ searchValue, query = apiConstants._baseQuery }) =>
        searchValue === ''
          ? `?${query}&${apiConstants._apiKey}`
          : `?nameStartsWith=${searchValue}&${query}&${apiConstants._apiKey}`,
      transformResponse: (response: ApiResponse): HeroesListProps => ({
        heroesList: response.data.results,
        totalHeroes: response.data.total,
      }),
    }),
  }),
});

export const { useGetAllHeroesQuery, useGetSearchHeroesQuery } = marvelApi;
