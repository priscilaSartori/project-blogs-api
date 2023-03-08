const loginService = require('../services/loginService');
const { createToken } = require('../utils/jwt.util');
require('dotenv/config');

const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
  try {
     const { email, password } = req.body;
  if (!isBodyValid(email, password)) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }
    const user = await loginService.getByLogin(email, password);
  if (!user) {
    return res
      .status(400)
      .json({ message: 'Invalid fields' });
  }
  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};