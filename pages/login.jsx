import React from "react";
import { getProviders, signIn } from "next-auth/react";
import spotifyIcon from "../public/spotify.svg";

const Login = (props) => {
  const { providers } = props;

  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      {/* <img src={spotifyIcon} width="200" height="200" alt="Spotify Logo"/> */}
      <img
        className="w-52 mb-5"
        src="https://img.icons8.com/bubbles/500/000000/spotify.png"
        alt="Spotify Logo"
      />

      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              className="bg-[#18D860] text-white p-5 rounded-full"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Login with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
