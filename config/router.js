const router = require('express').Router();
const bagCtrl = require('../controllers/bagCtrl');
const authCtrl = require('../controllers/authCtrl');
const purchasesCtrl = require('../controllers/purchasesCtrl');
const secureRoute = require('../lib/secureRoute');
const adminRoute = require('../lib/adminRoute');
const stockCtrl = require('../controllers/stockCtrl');


router.route('/bags')
  .get( bagCtrl.index)
  .post(adminRoute, bagCtrl.create);

router.route('/bags/:id')
  .get(bagCtrl.show)
  .put(adminRoute, bagCtrl.update)
  .delete(adminRoute, bagCtrl.delete);


router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

router.post('/checkout', secureRoute, purchasesCtrl.createPurchase);
router.get('/purchases', secureRoute, purchasesCtrl.indexPurchase);
router.get('/allpurchases', adminRoute, purchasesCtrl.allPurchase);
router.get('/stock/:id', stockCtrl.stockIndex);


module.exports = router;
