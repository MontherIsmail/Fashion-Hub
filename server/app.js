const { join } = require('path');
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/router');

const app = express();
const {
  env: { PORT },
} = process;
app.set('port', PORT || 3001);

morgan('dev');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'public')));

app.use('/api/v1', router);

module.exports = app;
