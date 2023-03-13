const { getCategoryId } = require('../services/categoryService');

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

module.exports = { validateFields, validateCategory };