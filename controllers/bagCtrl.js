const Bag = require('../models/bag');

function indexRoute(req, res, next) {
  Bag
    .find()
    .then(bags => {
      res.json(bags);
      console.log('this is the stock', bags[0].stock);
    })
    .catch(next);
}


function showRoute(req, res, next) {
  Bag
    .findById(req.params.id)
    .then(bag =>  res.json(bag))
    .catch(next);
}


function createRoute(req, res, next) {
  Bag
    .create(req.body)
    .then(bag => {
      console.log('create a bag', req.body);
      res.status(201).json(bag);
    })
    .catch(next);
}


function updateRoute(req, res, next) {
  Bag
    .findById(req.params.id)
    .then(bag => {
      bag.set(req.body);
      return bag.save();
    })
    .then(bag => res.json(bag))
    .catch(next);
}


function deleteRoute(req, res, next) {
  Bag
    .findById(req.params.id)
    .then(bag =>  bag.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}




module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
