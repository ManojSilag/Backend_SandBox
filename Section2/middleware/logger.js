// @desc Log req to console
const logger = (req, res, next) => {
  console.log(`${req.method}  ${req.url}`);
  next();
};

module.exports = logger;
