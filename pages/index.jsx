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
