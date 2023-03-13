const express = require('express');

const { createBlogPostController,
   getPostController, getPostIdController } = require('../controller/post');
const validateToken = require('../middleware/validateToken');
const { validateFields, validateCategory } = require('../middleware/validatePost');

const postRouter = express.Router();
postRouter.post('/', validateToken, validateFields, validateCategory, createBlogPostController);
postRouter.get('/', validateToken, getPostController);
postRouter.get('/:id', validateToken, getPostIdController);

module.exports = postRouter;