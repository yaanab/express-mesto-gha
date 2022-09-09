require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const routes = require('./routes/index');
const { errorFunction } = require('./middlewares/error-unction');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use(errors());

app.use(errorFunction);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
