const { join } = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/router');
const { serverError, pageNotFoundError } = require('./errors');

const app = express();
const {
  env: { PORT },
} = process;
app.set('port', PORT || 3001);

morgan('dev');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.use('/api/v1', router);

app.use(pageNotFoundError);
app.use(serverError);

module.exports = app;
