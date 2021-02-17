const rateLimit = require('express-rate-limit');
const { tooManyRequests } = require('./constants');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: tooManyRequests,
});

module.exports = limiter;
