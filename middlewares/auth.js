const jwt = require('jsonwebtoken');
const AuthorizationError = require('../errors/authorisation-error');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new AuthorizationError('Необходима авторизация');
  }

  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    throw new AuthorizationError('Необходима авторизация');
  }

  req.user = payload;

  return next();
};
