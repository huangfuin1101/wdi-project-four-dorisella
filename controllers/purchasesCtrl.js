const Purchase = require('../models/purchase');

function indexRoute(req, res, next) {
  Purchase.find()
    .then(purchases => res.json(purchases))
    .catch(next);
}


function createBasket(req, res, next) {
  console.log('req.body',req.body);
  console.log('req.tokenUserId is', req.tokenUserId);
  if(Array.isArray(req.body)) {
    req.body.forEach(purchase => {
      purchase.user = req.tokenUserId;
      purchase._id = null;
      console.log('purchase._id ', purchase._id);
    });
  } else {
    req.body.user = req.tokenUserId;
    req.body._id = null;
  }
  Purchase.create(req.body)
    .then(purchase => res.json(purchase))
    .catch(next);
}

function IndexPurchase(req, res, next) {
  Purchase.find({ user: req.tokenId })
    .populate('bag')
    .then(purchases => res.json(purchases))
    .catch(next);
}



module.exports = {
  indexRoute: indexRoute,
  createBasket: createBasket,
  IndexPurchase: IndexPurchase
};
