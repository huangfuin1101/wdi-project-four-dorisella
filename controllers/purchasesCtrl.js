const Purchase = require('../models/purchase');
const Bag = require('../models/bag');

function allPurchase(req, res, next) {
  Purchase.find()
    .populate('user bag')
    .then(purchases => res.json(purchases))
    .catch(next);
}

function createPurchase(req, res, next) {
  console.log('this is req.body', req.body);
  if(Array.isArray(req.body)) {
    req.body.forEach(purchase => {
      purchase.user = req.tokenUserId;
      purchase._id = null;
    });
  } else {
    req.body.user = req.tokenUserId;
    req.body._id = null;
  }
  const problems = [];
  Bag.find()
    .then(bags => {
      req.body.forEach(purchase => {
        const bagToPurchase = bags.find(bag => bag._id.equals(purchase.bag));
        if (purchase.unitQuantity > bagToPurchase.stock) {
          problems.push(bagToPurchase._id);
        }
      });
      if (problems.length) {
        res.status(422).json({ outOfStock: problems });
      } else {
        Purchase.create(req.body)
          .then(purchases => res.json(purchases))
          .catch(next);
      }
    });
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
