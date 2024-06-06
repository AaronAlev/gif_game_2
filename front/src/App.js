// src/App.js
import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken } from 'firebase/auth';
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

const App = () => {
  useEffect(() => {
    signInAnonymously(auth).catch((error) => {
      console.error('Authentication error', error);
    });
    
    
    /*const authenticate = async () => {
      try {
        const response = await axios.post('http://localhost:3001/authenticate');
        const { token } = response.data;
        console.log('Token', token);
        await signInWithCustomToken(auth, token);
        console.log('User authenticated anonymously');
      } catch (error) {
        console.error('Authentication error', error);
      }
    };*/

    //authenticate();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Anonymous Authentication with Firebase</h1>
      </header>
    </div>
  );
};

export default App;