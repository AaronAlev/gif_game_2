// index.js
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
app.use(cors());
app.use(express.json());

const serviceAccount = require('./gif-game-71d17-firebase-adminsdk-ntohz-1092c1abc9.json'); // Download this from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gif-game-71d17-default-rtdb.europe-west1.firebasedatabase.app"
});

app.post('/authenticate', async (req, res) => {
  try {
    const auth = admin.auth();
    const user = await auth.createUser({
      uid: 'anonymous3'
    });
    const token = await auth.createCustomToken(user.uid);
    res.send({ token });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});