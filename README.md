<div align="center">
    <img src="./public/spotify.svg" width="200" height="200"> 
    <h1>Spotify Clone</h1>
</div>

## About

Spotify Clone

### Features
- Play full audio tracks.
- Control playback (pause, volume, shuffle, etc).
- Add or edit your playlists.
- See your recently played tracks and your top artists.
- Follow and unfollow playlists and artists.
- Add or remove tracks from your library.
- Change the device in which you are currently playing.
- Search tracks, albums, artists and playlists.

## Setup Locally

```
$ git clone https://github.com/siAyush/Spotify-Clone.git
$ cd Spotify-Clone
$ npm install
$ npm run dev
```

## Dependencies

- Next.js
- Tailwind CSS
- Heroicons
- NextAuth.js
- Recoil

## Environment Variables
- Create .env file
-  Add this values
```
NEXTAUTH_URL = http://localhost:3000
NEXT_PUBLIC_CLIENT_SECRET = ''
NEXT_PUBLIC_CLIENT_ID = ''
JWT_SECRET = secret_value
```
