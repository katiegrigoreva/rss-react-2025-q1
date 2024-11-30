import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Main from '../pages/mainPage/MainPage';

const localStorageMock = (function () {
  const localStorageStore: { [key: string]: string } = {};

  const setItem = (key: string, value: string) => {
    Object.defineProperty(store, key, value);
  };
  const getItem = (key: string): string => {
    return localStorageStore[key];
  };
  return { setItem, getItem };
})();

Object.defineProperty(window, 'localStorage', localStorageMock);

describe('Test searchPanel', () => {
  it('saves the entered value to the local storage', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(input, { target: { value: 'mockValue' } });
    expect(localStorage.getItem('searchTerm')).toBe('mockvalue');
  });
  it('retrieves the value from the local storage upon mounting', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText(/Search/i);
    expect((input as HTMLInputElement).value).toBe(localStorage.getItem('searchTerm'));
  });
});
