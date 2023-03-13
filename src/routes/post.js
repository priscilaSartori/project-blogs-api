const express = require('express');

const { createBlogPostController } = require('../controller/post');
const validateToken = require('../middleware/validateToken');
const { validateFields, validateCategory } = require('../middleware/validatePost');

const postRouter = express.Router();
postRouter.post('/', validateToken, validateFields, validateCategory, createBlogPostController);

module.exports = postRouter;