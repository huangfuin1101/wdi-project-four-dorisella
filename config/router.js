const router = require('express').Router();
const bagCtrl = require('../controllers/bagCtrl');
const authCtrl = require('../controllers/authCtrl');


router.route('/bags')
  .get(bagCtrl.indexRoute)
  .post(bagCtrl.createRoute);

router.route('/bags/:id')
  .get(bagCtrl.showRoute)
  .put(bagCtrl.updateRoute )
  .delete(bagCtrl.deleteRoute);


router.post('/register', authCtrl.registerRoute);
router.post('/login', authCtrl.loginRoute);


module.exports = router;
