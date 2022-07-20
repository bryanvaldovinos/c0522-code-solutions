const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  const pass = req.get('X-Access-Token');
  if (pass === undefined) {
    throw new ClientError(401, 'authentication required');
  }
  const payload = jwt.verify(pass, process.env.TOKEN_SECRET);
  req.user = payload;
  next();
}

module.exports = authorizationMiddleware;
