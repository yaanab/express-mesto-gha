const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;
  if (!token) {
    return res
      .status(401)
      .send({ message: 'Нeобходима авторизация' });
  }

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }

  req.user = payload;
  console.log(req.user);

  next();
}