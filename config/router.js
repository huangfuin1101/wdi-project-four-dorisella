const router = require('express').Router();
const bagCtrl = require('../controllers/bagCtrl');
const authCtrl = require('../controllers/authCtrl');
const purchasesCtrl = require('../controllers/purchasesCtrl');
// const secureRoute = require('../lib/secureRoute');
const adminRoute = require('../lib/adminRoute');


router.route('/bags')
  .get( bagCtrl.indexRoute)
  .post(adminRoute, bagCtrl.createRoute);

router.route('/bags/:id')
  .get(bagCtrl.showRoute)
  .put(adminRoute, bagCtrl.updateRoute )
  .delete(adminRoute, bagCtrl.deleteRoute);


router.post('/register', authCtrl.registerRoute);
router.post('/login', authCtrl.loginRoute);

router.post('/checkout', purchasesCtrl.createBasket);
router.get('/purchases', purchasesCtrl.IndexPurchase);


module.exports = router;
