import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './header.css';

const Header = () => {
  const context = useContext(ThemeContext);

  return (
    <header className={`header header_${context.theme}`}>
      <h1 className="title">MARVEL HEROES</h1>
    </header>
  );
};

export default Header;
