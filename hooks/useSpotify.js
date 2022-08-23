
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import spotifyApi from '../lib/util';

function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken)
    }
  }, [session, spotifyApi]);

  return spotifyApi;
}

export default useSpotify;