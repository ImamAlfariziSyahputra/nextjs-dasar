import 'styles/globals.css';
import Head from 'next/head';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Lazy Web</title>
        <meta name="description" content="study" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
