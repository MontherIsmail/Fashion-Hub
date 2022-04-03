// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  switch (status) {
    case 400:
      res.status(status).json({ message: 'Try Again', status });
      break;
    case 409:
      res.status(status).json({ message: 'Something Wrong', status });
      break;
    default:
      res.status(status).json({ message: 'Server Error', status });
  }
};
