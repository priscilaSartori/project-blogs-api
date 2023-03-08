const { verifyToken } = require('../utils/jwt.util');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    
    const payload = verifyToken(authorization);
    req.data = payload.data;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Expired or invalid token',
      error: 'É necessário um token válido para acessar esse endpoint',
    });
  }
};

module.exports = validateToken;