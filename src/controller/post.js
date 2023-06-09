const { createBlogPost, createPost, getPost, 
  getPostId, updatePost, deletePost, searchPost } = require('../services/postService');
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

const getPostIdController = async (req, res) => {
  const { id } = req.params;
  const user = await getPostId(id);
  if (!user) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(user);
};

const updatePostController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    await updatePost(id, title, content);
    const newPostId = await getPostId(id);
    return res.status(200).json(newPostId);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePost(id);
    return res.status(204).json();
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const searchPostController = async (req, res) => {
  const { q } = req.query;
  const search = await searchPost(q);
  res.status(200).json(search);
};

module.exports = {
  createBlogPostController, 
  getPostController, 
  getPostIdController, 
  updatePostController,
  deletePostController,
  searchPostController,
};