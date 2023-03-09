const express = require('express');

const { createUserController, 
  getUsersController, getUserIdController } = require('../controller/user');
const { validateDisplay, 
  validatePassword, validateEmail } = require('../services/validations/validate');
const validateToken = require('../middleware/validateToken');

const userRouter = express.Router();
userRouter.post('/', validateDisplay, validatePassword, validateEmail, createUserController);
userRouter.get('/', validateToken, getUsersController);
userRouter.get('/:id', validateToken, getUserIdController);

module.exports = userRouter;