const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', createUser);
app.post('/signin', login);
app.use(auth);
app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use('/', (req, res) => res.status(404).send({ message: 'Запрос не найден' }));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
