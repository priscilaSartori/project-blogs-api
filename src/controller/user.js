const { createUser, getByEmail } = require('../services/userService');
const { createToken } = require('../utils/jwt.util');
require('dotenv/config');

module.exports = async (req, res) => {
  try {
  const { displayName, email, password, image } = req.body;
  
  const userEmail = await getByEmail(email);
  if (userEmail) return (res.status(409).json({ message: 'User already registered' }));
  
  const user = await createUser({ displayName, email, password, image });
  if (user.type) {
    return res.status(400).json({ message: user.message }); 
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = createToken(userWithoutPassword);
  res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};
