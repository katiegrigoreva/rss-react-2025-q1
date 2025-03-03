import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './header.module.css';

const Header = () => {
  const context = useContext(ThemeContext);

  return (
    <header className={context.theme === 'dark' ? `${styles.header} ${styles.dark}` : styles.header}>
      <h1 className={styles.title}>MARVEL HEROES</h1>
    </header>
  );
};

export default Header;
