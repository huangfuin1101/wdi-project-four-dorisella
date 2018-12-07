const router = require('express').Router();
const bagCtrl = require('../controllers/bagCtrl');
const authCtrl = require('../controllers/authCtrl');
const purchasesCtrl = require('../controllers/purchasesCtrl');
// const secureRoute = require('../lib/secureRoute');
const adminRoute = require('../lib/adminRoute');
// const secureRoute = require('../lib/secureRoute');


router.route('/bags')
  .get( bagCtrl.index)
  .post(adminRoute, bagCtrl.create);

router.route('/bags/:id')
  .get(bagCtrl.show)
  .put(adminRoute, bagCtrl.update)
  .delete(adminRoute, bagCtrl.delete);


router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

router.post('/checkout', purchasesCtrl.createPurchase);
router.get('/purchases', purchasesCtrl.indexPurchase);
router.get('/allpurchases', adminRoute, purchasesCtrl.allPurchase);


module.exports = router;
