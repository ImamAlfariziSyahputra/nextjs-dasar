import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import '../components/Navbar.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
