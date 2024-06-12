// index.js
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your allowed origin
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

const serviceAccount = require('./gif-game-71d17-firebase-adminsdk-ntohz-1092c1abc9.json'); // Download this from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gif-game-71d17-default-rtdb.europe-west1.firebasedatabase.app"
});

app.post("/lobby/delete_lobby", (req, res) => {
  console.log("Delete req for lobby ", req.body)
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});