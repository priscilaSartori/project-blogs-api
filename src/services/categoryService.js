const { Category } = require('../models');

const createCategory = ({ name }) =>
  Category.create({ name });

const getCategory = () => Category.findAll();

module.exports = { createCategory, getCategory };