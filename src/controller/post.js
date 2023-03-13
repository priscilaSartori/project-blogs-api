const { createBlogPost, createPost, getPost } = require('../services/postService');
require('dotenv/config');

const createBlogPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const published = Date.now();
  const updated = Date.now();
  const userId = req.data.id;
  const post = await createBlogPost({ title, content, updated, published, userId });
  const blogPost = post.dataValues;
  blogPost.id = post.null;
  
  await Promise.all(categoryIds.map((id) => createPost({ postId: blogPost.id, categoryId: id })));
  res.status(201).json(blogPost);
};

const getPostController = async (req, res) => {
  const allPost = await getPost();
  return res.status(200).json(allPost);
};

module.exports = { createBlogPostController, getPostController };