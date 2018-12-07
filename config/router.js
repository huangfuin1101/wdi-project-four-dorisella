const router = require('express').Router();
const bagCtrl = require('../controllers/bagCtrl');
const authCtrl = require('../controllers/authCtrl');
const purchasesCtrl = require('../controllers/purchasesCtrl');
// const secureRoute = require('../lib/secureRoute');
const adminRoute = require('../lib/adminRoute');
const secureRoute = require('../lib/secureRoute');


router.route('/bags')
  .get( bagCtrl.indexRoute)
  .post(adminRoute, bagCtrl.createRoute);

router.route('/bags/:id')
  .get(bagCtrl.showRoute)
  .put(adminRoute, bagCtrl.updateRoute )
  .delete(adminRoute, bagCtrl.deleteRoute);


router.post('/register', authCtrl.registerRoute);
router.post('/login', authCtrl.loginRoute);

router.post('/checkout', purchasesCtrl.createPurchase);
router.get('/purchases', secureRoute, purchasesCtrl.indexPurchase);
router.get('/allpurchases', adminRoute, purchasesCtrl.allPurchase);


module.exports = router;
