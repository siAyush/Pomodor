import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
