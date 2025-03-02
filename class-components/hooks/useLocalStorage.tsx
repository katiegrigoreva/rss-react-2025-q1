import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, defaultValue: string): [string, (value: string) => void] => {
  const [localStorageValue, setLocalStorageValue] = useState(defaultValue);

  useEffect(() => {
    localStorage.setItem(key, localStorageValue);
  }, [key, localStorageValue]);

  return [localStorageValue, setLocalStorageValue];
};
