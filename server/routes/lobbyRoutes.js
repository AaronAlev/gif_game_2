const express = require('express')
const lobbyController = require('../controllers/lobbycontroller.js')
const router = express.Router;

router.post("/delete_lobby", lobbyController.deleteLobby)

module.exports = router;