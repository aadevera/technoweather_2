module.exports = (req, res, next) => {
  next({ status: 404, data: { message: `Not found` } });
};
