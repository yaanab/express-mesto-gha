const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({
      // name: user.name,
      // about: user.about,
      // avatar: user.avatar,
      data: user,
     }))
    .catch(() => res.status(400).send({ message: 'Переданы некорректные данные' }));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(404).send({ message: 'Пользователь не найден' }));
};
