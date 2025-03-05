import { AppProps } from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from '../context/ThemeContext';
import { Provider } from 'react-redux';
import store from '../store';
import Spinner from '../components/spinner/Spinner';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ErrorBoundary>
          <Provider store={store}>
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </ErrorBoundary>
      )}
    </>
  );
}
