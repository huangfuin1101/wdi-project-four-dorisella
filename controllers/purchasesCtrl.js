const Purchase = require('../models/purchase');

function allPurchase(req, res, next) {
  Purchase.find()
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

function updateRoute(req, res, next) {
  console.log('this is req.params.id',req.body);
  Purchase
    .findById(req.params.id)
    .then(bag => {
      bag.set(req.body);
      return bag.save();
    })
    .then(bag => res.json(bag))
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
  indexPurchase: indexPurchase,
  updateRoute: updateRoute
};
