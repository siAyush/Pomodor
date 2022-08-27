import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

const SideBar = () => {
  const spotifyApi = useSpotify();
  const [playlists, setPlaylist] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const { data: session } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylist(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div
      className="text-gray-500 p-5 text-xs lg:tex-sm border-r border-gray-900 
      overflow-y-scroll h-screen scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem]
      hidden md:inline-flex"
    >
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          LogOut
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          Home
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          Search
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          Your Library
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          Create Playlist
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          Liked Songs
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          Your Episodes
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {playlists.map((playlist) => (
          <p
            onClick={() => setPlaylistId(playlist.id)}
            key={playlist.id}
            className="cursor-pointer hover:text-white"
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
