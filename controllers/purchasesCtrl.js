const Purchase = require('../models/purchase');

function allPurchase(req, res, next) {
  Purchase.find()
    .populate('user')
    .then(purchases => res.json(purchases))
    .catch(next);
}

function createPurchase(req, res, next) {
  if(Array.isArray(req.body)) {
    req.body.forEach(purchase => {
      purchase.user = req.tokenUserId;
      purchase._id = null;
    });
  } else {
    req.body.user = req.tokenUserId;
    req.body._id = null;
  }
  Purchase.create(req.body)
    .then(purchase => res.json(purchase))
    .catch(next);
}


function indexPurchase(req, res, next) {
  console.log('token id is', req.tokenUserId);
  Purchase.find({ user: req.tokenUserId })
    .populate('bag')
    .then(purchases => res.json(purchases))
    .catch(next);
}


module.exports = {
  allPurchase: allPurchase,
  createPurchase: createPurchase,
  indexPurchase: indexPurchase
};
