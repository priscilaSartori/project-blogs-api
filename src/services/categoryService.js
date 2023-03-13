const { Category } = require('../models');

const createCategory = ({ name }) =>
  Category.create({ name });

const getCategory = () => Category.findAll();

const getCategoryId = (id) => Category.findByPk(id);

module.exports = { createCategory, getCategory, getCategoryId };