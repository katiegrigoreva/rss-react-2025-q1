import { createContext, useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(getCookie('theme')?.toString() ?? 'light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCookie('theme', theme);
  }, [theme, setTheme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
}
