import { beforeEach } from 'node:test';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../pages/mainPage/MainPage';

const localStorageMock = (function () {
  const localStorageStore: { [key: string]: string } = {};
  const setItem = (key: string, value: string) => {
    Object.defineProperty(localStorageStore, key, value);
  };
  const getItem = (key: string): string => {
    return localStorageStore[key];
  };
  const clear = () => {
    delete localStorageStore.key;
  };
  return { setItem, getItem, clear };
})();

Object.defineProperty(window, 'localStorage', localStorageMock);

describe('Test searchPanel', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('saves the entered value to the local storage', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(input, { target: { value: 'mockValue' } });
    expect(localStorage.getItem('searchTerm')).toBe('mockvalue');
  });
  it('retrieves the value from the local storage upon mounting', () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    const input = screen.getByRole('textbox');
    localStorage.setItem('searchTerm', 'mockvalue');
    expect((input as HTMLInputElement).value).toBe(localStorage.getItem('searchTerm'));
  });
});
