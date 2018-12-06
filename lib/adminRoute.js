// const jwt = require('jsonwebtoken');
const User = require('../models/user');
// const { secret } = require('../config/environment');




function adminCheck(req, res, next) {
  console.log('admin');
  User.findOne({ email: req.body.email })
    // const email = req.body.eamil;
    .then(() => {
      if(req.body.email=== 'd@d'){
        return User.admin === true ;
      }else {
        res.status(401).json({
          message: 'DENIED!'
        });
      }
    })
    .catch(next);
}



module.exports = {
  adminCheck: adminCheck
};
