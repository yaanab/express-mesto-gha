const jwt = require('jsonwebtoken');
const AuthorizationError = require('../errors/authorisation-error');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  if (!token) {
    const err = new AuthorizationError('Необходима авторизация');
    next(err);
  }

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    err.statusCode = 401;
    err.message = 'Необходима авторизация';
    next(err);
  }

  req.user = payload;

  next();
};
