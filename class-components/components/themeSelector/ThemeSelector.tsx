import { useContext } from 'react';
import styles from './themeSelector.module.css';
import { ThemeContext } from '../../src/context/ThemeContext';

export function ThemeSelector() {
  const context = useContext(ThemeContext);

  return (
    <div className={styles.themeTabs}>
      {context.theme === 'light' ? (
        <input type="radio" id="radio-1" className={styles.input} name="tabs" onChange={context.toggleTheme} />
      ) : (
        <input type="radio" id="radio-1" className={styles.input} name="tabs" onChange={context.toggleTheme} />
      )}
      <label className={styles.tab} htmlFor="radio-1">
        Light
      </label>
      {context.theme === 'dark' ? (
        <input type="radio" id="radio-2" className={styles.input} name="tabs" onChange={context.toggleTheme} />
      ) : (
        <input type="radio" id="radio-2" className={styles.input} name="tabs" onChange={context.toggleTheme} />
      )}
      <label className={styles.tab} htmlFor="radio-2">
        Dark
      </label>
      <span className={styles.glider}></span>
    </div>
  );
}
