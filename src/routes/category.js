const express = require('express');

const { createCategoryController } = require('../controller/category');
const validateToken = require('../middleware/validateToken');

const userRouter = express.Router();
userRouter.post('/', validateToken, createCategoryController);

module.exports = userRouter;