const express = require('express');
const controller = require('../controllers/controller.js');
const router = express.Router();

router.get("/api", controller.sayHello);

router.post("/login", controller.login);

module.exports = router;