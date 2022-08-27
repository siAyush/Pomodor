import { getSession } from "next-auth/react";
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
