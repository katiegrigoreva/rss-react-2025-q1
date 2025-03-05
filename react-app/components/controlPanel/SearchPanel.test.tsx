import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import MainLayout from '../mainLayout/MainLayout';
import { mockRouter } from '../../test/helpers/mockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

const localStorageMock = (function () {
  const localStorageStore: { [key: string]: string } = {};
  const getItem = (key: string): string => {
    return localStorageStore[key];
  };
  return getItem;
})();

Object.defineProperty(window, 'localStorage', localStorageMock);

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
  };
});

describe('Test searchPanel', () => {
  it('saves the entered value to the local storage', () => {
    render(
      <Provider store={store}>
        <MainLayout />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(input, { target: { value: 'mockValue' } });
    expect(localStorage.getItem('searchTerm')).toBe('mockvalue');
  });

  it('changes router path when submit button clicked', () => {
    const router = mockRouter();
    render(
      <RouterContext.Provider value={router}>
        <Provider store={store}>
          <MainLayout />
        </Provider>
      </RouterContext.Provider>
    );
    const submitBtn = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(submitBtn);
  });
});
