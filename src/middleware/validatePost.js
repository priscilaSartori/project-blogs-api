const { getCategoryId } = require('../services/categoryService');
const { verifyToken } = require('../utils/jwt.util');
const { getPostId } = require('../services/postService');
require('dotenv/config');

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoryId = await Promise.all(categoryIds.map((id) => getCategoryId(id)));
  if (categoryId.some((category) => category === null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

const validateFields = async (req, res, next) => {  
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateUpdate = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
    const { authorization } = req.headers;
    const payload = verifyToken(authorization);
    const postId = await getPostId(id);
    if (postId.dataValues.userId !== payload.data.id) {
      return res.status(401).json({ message: 'Unauthorized user' }); 
    }
    if (!title || !content) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const validateDelete = async (req, res, next) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const payload = verifyToken(authorization);
  const postId = await getPostId(id);
  if (!postId) return res.status(404).json({ message: 'Post does not exist' });
  if (postId.dataValues.userId !== payload.data.id) {
    return res.status(401).json({ message: 'Unauthorized user' }); 
  }
  next();
};

module.exports = { validateFields, validateCategory, validateUpdate, validateDelete };