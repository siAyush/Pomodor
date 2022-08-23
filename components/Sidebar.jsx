import React from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut } from "next-auth/react";

const SideBar = () => {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
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

        <p className="cursor-pointer hover:text-white">PlayList 1</p>
        <p className="cursor-pointer hover:text-white">PlayList 2</p>
        <p className="cursor-pointer hover:text-white">PlayList 3</p>
        <p className="cursor-pointer hover:text-white">PlayList 4</p>
        <p className="cursor-pointer hover:text-white">PlayList 5</p>
      </div>
    </div>
  );
};

export default SideBar;
