import { useContext } from 'react';
import styles from './themeSelector.module.css';
import { ThemeContext } from '../../context/ThemeContext';

export function ThemeSelector() {
  const context = useContext(ThemeContext);
  const dark = context.theme === 'dark' ? styles.dark : '';

  return (
    <div className={`${styles.themeTabs} ${dark}`}>
      <input
        type="radio"
        id="radio-1"
        data-testid="light"
        className={styles.input}
        name="tabs"
        onChange={context.toggleTheme}
        checked={context.theme === 'light' ? true : false}
      />
      <label className={styles.tab} htmlFor="radio-1">
        Light
      </label>
      <input
        type="radio"
        id="radio-2"
        data-testid="dark"
        className={styles.input}
        name="tabs"
        onChange={context.toggleTheme}
        checked={context.theme === 'dark' ? true : false}
      />
      <label className={styles.tab} htmlFor="radio-2">
        Dark
      </label>
      <span className={styles.glider}></span>
    </div>
  );
}
