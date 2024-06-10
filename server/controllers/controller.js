const { getAuth, signInAnonymously, onAuthStateChanged } = require('firebase/auth');
const { getDatabase, ref, set, onDisconnect, onValue} = require('firebase/database');
const { fbapp, auth } = require('../index.js');

const playerAuth = getAuth();
const db = getDatabase();

const sayHello = (req, res) => {
  res.json({ message: "Hello from server!" });
};

const login = (req, res) => {
    res.json({ message: "Hello from server!" });
    const { username, lobby_id } = req.body;
    if (username.trim() !== '' || lobby_id.trim() !== '') {
        console.log(req.body);
    }
};

module.exports = { sayHello, login };