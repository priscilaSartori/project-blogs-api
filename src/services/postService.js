const { BlogPost, PostCategory } = require('../models');

const createBlogPost = ({ userId, title, content, updated, published }) =>
BlogPost.create({ userId, title, content, updated, published });

const createPost = ({ postId, categoryId }) => 
PostCategory.create({ postId, categoryId });

module.exports = {
  createBlogPost, createPost,
};