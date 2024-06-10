const firebase = require('firebase/app');
const { getAuth, signInAnonymously, onAuthStateChanged } = require('firebase/auth');
const { getDatabase, ref, set, get, update, remove } = require('firebase/database');

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

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

module.exports = { auth, database };