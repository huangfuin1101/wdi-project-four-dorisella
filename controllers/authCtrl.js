const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { secret } = require('../config/environment');


function registerRoute(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome ${user.username}`
    }))
    .catch(next);
}

function loginRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user && user.validatePassword(req.body.password)) {
        const token = jwt.sign({
          username: user.username,
          sub: user._id,
          check: user.admin
        }, secret, { expiresIn: '5h'});
        res.json({
          messgae: ` Hello again ${user.username}`,
          token: token
        });
      }else {
        res.status(401).json({
          message: 'DENIED!'
        });
      }
    })
    .catch(next);
}




module.exports = {
  login: loginRoute,
  register: registerRoute
};
