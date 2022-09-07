module.exports.errorStatusCode = (err) => {
  if (err.code === 11000) {
    return 409;
  }
  if (err.name === 'ValidationError' || err.kind === 'ObjectId') {
    return 400;
  }
  if (err.name === 'NotFoundError') {
    return 404;
  }
  return 500;
};
