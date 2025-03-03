import { AppProps } from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from '../context/ThemeContext';
import { Provider } from 'react-redux';
import store from '../src/store';
import Spinner from '../components/spinner/Spinner';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => {
      setLoading(false);
      console.log('error');
    });
  }, [Router.events]);
  /* const handleStart = () => {
    setOnLoading(true);
  };

  const handleEnd = () => {
    setOnLoading(false);
  };

  const handleError = () => {
    console.log('routeChangeError');
    setOnLoading(false);
  };
  router.events?.on('routeChangeStart', handleStart);
  router.events?.on('routeChangeComplete', handleEnd);
  router.events?.on('routeChangeError', handleError); */

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Provider store={store}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      )}
    </>
  );
}
