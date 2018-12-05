const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function secureRoute(req, res, next) {
  console.log('I am token',token);
  if(!req.headers.authorization)
    res.status(401).json({ message: 'Unauthorised'});
  console.log('Headers',req.headers);
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, secret, function(err) {
    if (err) {
      res.status(401).json({ message: 'nope!!!' });
    } else {
      req.tokenUserId = jwt.decode(token).sub;
      next();
      console.log('req.tokenUserId', req.tokenUserId);
      console.log('req.headers.authorization', req.headers.authorization);
    }
  });
}

module.exports = secureRoute;
