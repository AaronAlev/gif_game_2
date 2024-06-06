// src/App.js
import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import UsernameScreen from './components/login.js';
import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyABEJ2CVtJwHV1XKV4kVmj4YhXcsIut5MA",
  authDomain: "gif-game-71d17.firebaseapp.com",
  databaseURL: "https://gif-game-71d17-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gif-game-71d17",
  storageBucket: "gif-game-71d17.appspot.com",
  messagingSenderId: "899899259239",
  appId: "1:899899259239:web:48a900f8080fa33817d7c2",
  measurementId: "G-J6YV3WB8R2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const App = () => {
  const [username, setUsername] = React.useState(null);
  const [lobby_id, setLobbyId] = React.useState(null);
  const [playerRef, setPlayerRef] = React.useState(null);

  useEffect(() => {
    signInAnonymously(auth)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('User signed in', user.uid);
       const playerReference = ref(db, `players/${user.uid}`);
       setPlayerRef(playerReference);
    })
    .catch((error) => {
      console.error('Authentication error', error);
    });
  }, [lobby_id, username]);

  return (
    <div className="App">
      <header className="App-header">
        <UsernameScreen
          username={username}
          setUsername={setUsername}
          lobby_id={lobby_id}
          setLobbyId={setLobbyId}
          playerRef={playerRef}
        />
      </header>
    </div>
  );
};

export default App;