import { AppProps } from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from '../src/context/ThemeContext';
import { Provider } from 'react-redux';
import store from '../src/store';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Spinner from '../components/spinner/Spinner';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [onLoading, setOnLoading] = useState(false);

  const handleStart = () => {
    setOnLoading(true);
  };

  const handleEnd = () => {
    setOnLoading(false);
  };

  router.events?.on('routeChangeStart', handleStart);
  router.events?.on('routeChangeComplete', handleEnd);
  router.events?.on('routeChangeError', handleEnd);

  return (
    <>
      {!onLoading ? (
        <Provider store={store}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      ) : (
        <Spinner />
      )}
    </>
  );
}
