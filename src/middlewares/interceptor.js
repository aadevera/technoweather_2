module.exports = (result, req, res, next) => {
  const { status, data, error } = result;
  const timestamp = new Date().toISOString();
  if (error) {
    return res.status(500).json({ ...error, timestamp });
  }

  return res.status(status).json({ ...data, timestamp });
};
