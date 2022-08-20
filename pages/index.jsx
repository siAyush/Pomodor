import Head from "next/head";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Spotify-Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>
      <div className="bg-black h-screen overflow-hidden">
        <main>
          <SideBar />
        </main>
      </div>
    </>
  );
};

export default Home;
