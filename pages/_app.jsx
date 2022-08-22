import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>Spotify Clone</title>
          <link rel="icon" href="/icons8-spotify.svg" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
