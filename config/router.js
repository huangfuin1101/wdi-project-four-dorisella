const router = require('express').Router();
const bagCtrl = require('../controllers/bagCtrl');


router.route('/bags')
  .get(bagCtrl.indexRoute)
  .post(bagCtrl.createRoute);

router.route('/bags/:id')
  .get(bagCtrl.showRoute)
  .put(bagCtrl.updateRoute )
  .delete(bagCtrl.deleteRoute);





module.exports = router;
