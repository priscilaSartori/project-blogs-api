const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

const createBlogPost = ({ userId, title, content, updated, published }) =>
BlogPost.create({ userId, title, content, updated, published });

const createPost = ({ postId, categoryId }) => 
PostCategory.create({ postId, categoryId });

const getPost = () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const getPostId = (id) => BlogPost.findOne({
  where: { id },
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const updatePost = async (id, title, content) => {
  const [updatedPost] = await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  return updatedPost;
};

const deletePost = async (id) => {
  const post = await BlogPost.destroy(
    { where: { id } },
  );
  return post;
};

const searchPost = async (q) => {
  const search = await BlogPost.findAll({
    where: {
        [Op.or]: [
      { title: { [Op.like]: `%${q}%` } },
      { content: { [Op.like]: `%${q}%` } },
    ] },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return search;
};

module.exports = {
  createBlogPost, createPost, getPost, getPostId, updatePost, deletePost, searchPost,
};