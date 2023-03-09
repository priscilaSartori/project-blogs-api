const { createUser, getByEmail, getUsers, getUserId } = require('../services/userService');
const { createToken } = require('../utils/jwt.util');
require('dotenv/config');

const createUserController = async (req, res) => {
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

const getUsersController = async (_req, res) => {
  try {
    const users = await getUsers();
     if (!users) throw Error;
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

const getUserIdController = async (req, res) => {
  try {
  const { id } = req.params;
  const userId = await getUserId(id);
  if (!userId) {
    return res.status(404).json({ message: 'User does not exist' }); 
  }
    return res.status(200).json(userId);
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

module.exports = { createUserController, getUsersController, getUserIdController };
