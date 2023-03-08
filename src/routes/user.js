const express = require('express');

const { createUserController, getUsersController } = require('../controller/user');
const { validateDisplay, 
  validatePassword, validateEmail } = require('../services/validations/validate');
const validateToken = require('../middleware/validateToken');

const userRouter = express.Router();
userRouter.post('/', validateDisplay, validatePassword, validateEmail, createUserController);
userRouter.get('/', validateToken, getUsersController);

module.exports = userRouter;