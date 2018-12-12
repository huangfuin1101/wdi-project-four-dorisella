const jwt = require('jsonwebtoken');

function adminRoute(req, res, next) {
  const token = req.headers.authorization.replace('Bearer ', '');
  if (jwt.decode(token).check) {
    next();
  } else {
    res.status(401).json({ message: 'Declined!' });
  }
}




module.exports = adminRoute;
