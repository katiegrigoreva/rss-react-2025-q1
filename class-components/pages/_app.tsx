import { AppProps } from 'next/app';
import '../styles/global.css';
import { ThemeProvider } from '../src/context/ThemeContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
