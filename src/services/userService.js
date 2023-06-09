const { User } = require('../models');

const createUser = ({ email, password }) => User.create({ email, password });

const getByEmail = (email) => User.findOne({ where: { email } });

const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserId = (id) => User.findByPk(id, { attributes: { exclude: ['password'] } });

const deleteUser = (id) => User.destroy({ where: { id } }); 

module.exports = {
  createUser,
  getByEmail,
  getUsers,
  getUserId,
  deleteUser,
};