const express = require('express');

const LoginController = require('../controller/login');

const loginRouter = express.Router();
loginRouter.post('/', LoginController);

module.exports = loginRouter;