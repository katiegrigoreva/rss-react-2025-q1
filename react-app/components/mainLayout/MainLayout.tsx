import Head from 'next/head';
import Header from '../header/Header';
import ControlPanel from '../controlPanel/ControlPanel';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface MainLayout {
  children?: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title = 'Main' }: MainLayout) => {
  const context = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Marvel heroes | {title}</title>
        <meta name="keywords" content="marvel, heroes, comics" />
        <meta name="description" content="find  your hero" />
        <meta charSet="utf-8" />
      </Head>
      <main>
        <div className={context.theme === 'dark' ? 'background dark' : 'background'}></div>
        <div className="appContainer">
          <Header />
          <ControlPanel />
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
