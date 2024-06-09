// src/App.js
import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import UsernameScreen from './components/login.js';
import Lobby from "./components/lobby.js";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState(null);
  const [lobby_id, setLobbyId] = React.useState(null);
  const [userUID, setUserUID] = React.useState(null);

  useEffect(() => {
    signInAnonymously(auth)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('User signed in', user.uid);
      setUserUID(user.uid);
    })
    .catch((error) => {
      console.error('Authentication error', error);
    });
  }, [lobby_id, username]);

  return (
    <div className="App">
        {!isLoggedIn && (
            <UsernameScreen
            username={username}
            setUsername={setUsername}
            lobby_id={lobby_id}
            setLobbyId={setLobbyId}
            db={db}
            uid={userUID}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        {isLoggedIn && (
          <Lobby
            
          />
        )}
    </div>
  );
};

export default App;