// src/App.js
import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import GameContext from './gameContext.js';
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
  const [allMessagesRef, setAllMessagesRef] = React.useState([]);

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

  useEffect(() => { // Reads all messages from the chat
    const chatRef = ref(db, `${lobby_id}/chat`);
    const unsubscribe = onValue(chatRef, (snapshot) => {
      const chatData = snapshot.val();
      if (chatData) {
        const messageArray = Object.entries(chatData).map(([id, data]) => {
          return {
            sender: data.sender,
            message: data.message,
            time: data.time
          };
        });
        setAllMessagesRef(messageArray);
      }
    });

    return () => unsubscribe();
  }, [db, lobby_id]);

  return (
    <GameContext.Provider value={ [username, setUsername, lobby_id, setLobbyId, db, userUID, setIsLoggedIn] }>
        {!isLoggedIn && (
            <UsernameScreen/>
        )}
        {isLoggedIn && (
          <Lobby
            db={db}
            lobby_id={lobby_id}
          />
        )}
    </GameContext.Provider>
  );
};

export default App;