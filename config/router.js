const router = require('express').Router();
const bagCtrl = require('../controllers/bagCtrl');
const authCtrl = require('../controllers/authCtrl');
const purchasesCtrl = require('../controllers/purchasesCtrl');


router.route('/bags')
  .get(bagCtrl.indexRoute)
  .post(bagCtrl.createRoute);

router.route('/bags/:id')
  .get(bagCtrl.showRoute)
  .put(bagCtrl.updateRoute )
  .delete(bagCtrl.deleteRoute);


router.post('/register', authCtrl.registerRoute);
router.post('/login', authCtrl.loginRoute);

router.post('/checkout', purchasesCtrl.createRoute);
router.get('/purchases', purchasesCtrl.userIndexRoute);


module.exports = router;
