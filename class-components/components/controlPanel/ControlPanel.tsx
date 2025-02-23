'use client';

import { useContext } from 'react';
import styles from './controlPanel.module.css';
import { ThemeContext } from '../../src/context/ThemeContext';
import { ThemeSelector } from '../themeSelector/ThemeSelector';
import { useLocalStorage } from '../../src/hooks/useLocalStorage';

/* export type SearchPanelProps = {
  onUpdateSearch: (arg: string) => void;
}; */

const ControlPanel = () => {
  const context = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');

  return (
    <section className={styles.control}>
      <form className={styles.search}>
        <input
          type="search"
          className={context.theme === 'dark' ? `${styles.input} ${styles.dark}` : styles.input}
          placeholder="Search your superhero"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value.trim().toLowerCase())}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <ThemeSelector />
    </section>
  );
};

export default ControlPanel;
