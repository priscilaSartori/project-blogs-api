const { User } = require('../models');

const getByLogin = (email, password) => User.findOne({ where: { email, password } });

module.exports = {
  getByLogin,
};