import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Head>
            <title>Spotify Clone</title>
            <link rel="icon" href="/icons8-spotify.svg" />
          </Head>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}

export default MyApp;
