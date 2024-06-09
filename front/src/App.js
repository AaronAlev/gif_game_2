// src/App.js
import React, { useEffect } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import GameContext from './gameContext.js';
import UsernameScreen from './components/login.js';
import Lobby from "./components/lobby.js";
import { auth, db } from './firebase.js';
import lobby from './components/lobby.js';

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
  }, [lobby_id]);

  return (
    <GameContext.Provider value={ {username, setUsername, lobby_id, setLobbyId, userUID, setIsLoggedIn} }>
        {!isLoggedIn && (
          <UsernameScreen/>
        )}
        {isLoggedIn && (
          <Lobby/>
        )}
    </GameContext.Provider>
  );
};

export default App;