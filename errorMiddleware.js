module.exports = function errorMiddleware(err, req, res, next) {
  res.status(500).render('error', { error: err });
  next();
};
