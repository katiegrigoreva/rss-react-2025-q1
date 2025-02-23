import Header from '../components/header/Header';
import ControlPanel from '../components/controlPanel/ControlPanel';
import { useContext } from 'react';
import { ThemeContext } from '../src/context/ThemeContext';

export default function Index() {
  const context = useContext(ThemeContext);

  return (
    <>
      <div className={context.theme === 'dark' ? 'appContainer dark' : 'appContainer'}>
        <Header />
        <ControlPanel />
      </div>
    </>
  );
}
