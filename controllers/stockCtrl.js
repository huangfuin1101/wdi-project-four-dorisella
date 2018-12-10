const Bag = require('../models/bag');

function stockIndexRoute(req, res, next) {
  Bag
    .findById(req.params.id)
    .then(bag => {
      res.json(bag.stock);
      console.log('stock is', bag.stock);
    })
    .catch(next);
}



module.exports = {
  stockIndex: stockIndexRoute
};
