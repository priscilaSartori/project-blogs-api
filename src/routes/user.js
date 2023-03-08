const express = require('express');

const userController = require('../controller/user');
const { validateDisplay, 
  validatePassword, validateEmail } = require('../services/validations/validate');

const userRouter = express.Router();
userRouter.post('/', validateDisplay, validatePassword, validateEmail, userController);

module.exports = userRouter;