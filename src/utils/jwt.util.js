require('dotenv').config();
const jwt = require('jsonwebtoken');

// Função para criar o token
const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { createToken, verifyToken };