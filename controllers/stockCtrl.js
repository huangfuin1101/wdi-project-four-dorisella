const Bag = require('../models/bag');

function findStockRoute(req, res, next) {
  Bag
    .findById(req.params.id)
    .then(bag => {
      res.json(bag.stock);
      console.log('stock is', bag.stock);
    })
    .catch(next);
}



module.exports = {
  findStock: findStockRoute
};
