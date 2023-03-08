const { User } = require('../models');

const createUser = ({ email, password }) =>
  User.create({ email, password });

const getByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getByEmail,
};