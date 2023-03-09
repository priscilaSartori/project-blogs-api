const express = require('express');

const { createCategoryController, getCategoryController } = require('../controller/category');
const validateToken = require('../middleware/validateToken');

const CategoryRouter = express.Router();
CategoryRouter.post('/', validateToken, createCategoryController);
CategoryRouter.get('/', validateToken, getCategoryController);

module.exports = CategoryRouter;