import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import 'nprogress/nprogress.css';
import '../styles/global.css';

const TopProgressBar = dynamic(
  () => {
    return import('components/TopProgressBar');
  },
  { ssr: false }
);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
