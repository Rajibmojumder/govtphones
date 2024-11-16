import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <meta name="google-site-verification" content="A-0uOMkW3z-tI9yLRH8hK1mhZWI46c23K9UzMPnHlkU" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
