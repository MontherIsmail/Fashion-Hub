module.exports = (req, res, next) => {
  res.json({ message: 'Page Not Found', status: 404 });
};
