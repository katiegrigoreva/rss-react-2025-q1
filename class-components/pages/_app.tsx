import { AppProps } from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from '../src/context/ThemeContext';
import { Provider } from 'react-redux';
import store from '../src/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
