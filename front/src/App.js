// src/App.js
import React, { useEffect } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import GameContext from './gameContext.js';
import UsernameScreen from './components/login.js';
import Lobby from "./components/lobby.js";
import { auth, db } from './firebase.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState(null);
  const [lobby_id, setLobbyId] = React.useState(null);
  const [userUID, setUserUID] = React.useState(null);
  const [allMessagesRef, setAllMessagesRef] = React.useState([]);
  const [allPlayersRef, setAllPlayersRef] = React.useState([]);

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
    const chatRef = ref(db, `lobbies/${lobby_id}/chat`);
    const unsubscribe = onValue(chatRef, (snapshot) => {
      const chatData = snapshot.val();
      if (chatData) {
        const messageArray = Object.entries(chatData).map(([id, data]) => {
          return {
            sender: data.sender,
            message: data.message,
          };
        });
        setAllMessagesRef(messageArray);
      }
    });

    return () => unsubscribe();
  }, [lobby_id]);

  useEffect(() => { // Reads all players from the database
    const allPlayersRef = ref(db, `lobbies/${lobby_id}/players`);

    const unsubscribe = onValue(allPlayersRef, (snapshot) => {
      const playersData = snapshot.val();
      if (playersData) {
        const playersArray = Object.entries(playersData).map(([id, data]) => {
          return {
            username: data.username,
          };
        });
        setAllPlayersRef(playersArray);
      }
    })
    return () => unsubscribe();
  }, [db, lobby_id]);

  return (
    <GameContext.Provider value={ {username, setUsername, lobby_id, setLobbyId, userUID, setIsLoggedIn, allMessagesRef, allPlayersRef} }>
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