import { getSession } from "next-auth/react";
import Player from "../components/Player";
import SideBar from "../components/SideBar";
import SongList from "../components/SongList";

const Home = () => {
  return (
    <>
      <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <SideBar />
          <SongList />
        </main>
        <div className="sticky bottom-0">
          <Player />
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProsps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
