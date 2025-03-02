/* import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { heroInfo } from '../../../api/apiSlice';
import HeroInfo from './HeroInfo';
import { configureStore } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';

const mocks = vi.hoisted(() => {
  return {
    marvelApi: vi.fn(),
    useGetHeroInfoQuery: vi.fn(),
  };
});

vi.mock('../../api/apiSlice', () => {
  return {
    marvelApi: mocks.marvelApi,
    useGetHeroInfoQuery: mocks.useGetHeroInfoQuery,
  };
});

const mockStore = configureStore({
  reducer: mocks.marvelApi,
});

describe('Tests for the Detailed Card component', () => {
  beforeEach(() => {
    mocks.useGetHeroInfoQuery.mockClear();
    mocks.marvelApi.mockClear();
    const mockHeroData: heroInfo = {
      heroInfo: {
        id: 1,
        name: 'mockHero1',
        description: 'ipsum',
      },
    };
    mocks.useGetHeroInfoQuery.mockReturnValueOnce({
      data: mockHeroData,
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
    });
  });

  it('displays loading indicator while fetching data', () => {
    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <HeroInfo></HeroInfo>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.queryByRole('spinner')).toBeInTheDocument();
  });
  it('correctly displays the detailed card data', () => {
    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <HeroInfo></HeroInfo>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('NAME: mockHero1')).toBeInTheDocument();
    expect(screen.getByText('ipsum')).toBeInTheDocument();
  });
  it('hides the component when clicking the close button', () => {
    const history = createMemoryHistory({
      initialEntries: ['/main', '/mockDetails:id'],
    });

    render(
      <Router location={'/mockDetails:id'} navigator={history}>
        <Provider store={mockStore}>
          <HeroInfo></HeroInfo>
        </Provider>
      </Router>
    );
    fireEvent.click(screen.getByRole('closeBtn'));
    expect(history.location.pathname).toBe('/main');
  });
});
 */
