const { createCategory, getCategory } = require('../services/categoryService');
require('dotenv/config');

const createCategoryController = async (req, res) => {
  try {
  const { name } = req.body;
  if (!name) return (res.status(400).json({ message: '"name" is required' }));
  
  const category = await createCategory({ name });
  res.status(201).json(category.dataValues);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const getCategoryController = async (_req, res) => {
  try {
    const category = await getCategory();
     if (!category) throw Error;
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

module.exports = { createCategoryController, getCategoryController };
