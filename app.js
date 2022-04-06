const { join } = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const {
  env: { PORT },
} = process;
app.set('port', PORT || 3001);

morgan('dev');
app.use(cors({ Credentials: true }));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', router);
app.use(express.static(join(__dirname, 'client', 'build')));
app.use('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
});

module.exports = app;
