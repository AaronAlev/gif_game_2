const express = require('express');
const controller = require('../controllers/controller.js');
const lobbyController = require('../controllers/lobbycontroller.js')
const router = express.Router();

router.get("/api", controller.sayHello);

router.post("/login", controller.login);

router.post('/delete_lobby', controller.lobbyDelete)

module.exports = router;