const router = require('express').Router();
const bagCtrl = require('../controllers/bagCtrl');


router.route('/bags')
  .get(bagCtrl.indexRoute);
// .post(bagCtrl.createRoute);






module.exports = router;
