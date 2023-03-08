const { displayNameShema, emailShema, passwordShema } = require('./schemas');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const { error } = emailShema.validate(email);
  if (error) return (res.status(400).json({ message: '"email" must be a valid email' }));

  next();
};

const validateDisplay = (req, res, next) => {
  const { displayName } = req.body;
  const { error } = displayNameShema.validate(displayName);
  if (error) {
    return (res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' })); 
}
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const { error } = passwordShema.validate(password);
  if (error) {
    return (res.status(400)
  .json({ message: '"password" length must be at least 6 characters long' })); 
}
  next();
};
module.exports = { validatePassword, validateDisplay, validateEmail };
