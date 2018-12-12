const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function secureRoute(req, res, next) {
  if(!req.headers.authorization)
    res.status(401).json({ message: 'Unauthorised'});
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, secret, function(err) {
    if (err) {
      res.status(401).json({ message: 'nope!!!' });
    } else {
      req.tokenUserId = jwt.decode(token).sub;
      next();
    }
  });
}

module.exports = secureRoute;
