const express = require('express');

const { createBlogPostController, getPostController, getPostIdController,
   updatePostController, deletePostController } = require('../controller/post');
const validateToken = require('../middleware/validateToken');
const { validateFields, validateCategory, validateUpdate } = require('../middleware/validatePost');

const postRouter = express.Router();
postRouter.post('/', validateToken, validateFields, validateCategory, createBlogPostController);
postRouter.get('/', validateToken, getPostController);
postRouter.get('/:id', validateToken, getPostIdController);
postRouter.put('/:id', validateToken, validateUpdate, updatePostController);
postRouter.delete('/:id', validateToken, deletePostController);

module.exports = postRouter;