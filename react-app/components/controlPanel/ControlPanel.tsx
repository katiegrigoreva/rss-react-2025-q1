import { useContext } from 'react';
import styles from './controlPanel.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeSelector } from '../themeSelector/ThemeSelector';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useRouter, useSearchParams } from 'next/navigation';

const ControlPanel = () => {
  const context = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const searchParams = useSearchParams();
  const router = useRouter();
  const offset = searchParams.get('offset') ? searchParams.get('offset') : '0';
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
        <button
          type="submit"
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            router.push(`/?nameStartsWith=${searchTerm}&limit=8&offset=${offset}`);
          }}
        >
          Search
        </button>
      </form>
      <ThemeSelector />
    </section>
  );
};

export default ControlPanel;
