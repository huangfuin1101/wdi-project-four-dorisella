const Bag = require('../models/bag');

function indexRoute(req, res, next) {
  console.log('I am indexCtrl');
  Bag
    .find()
    .then(bags => res.json(bags))
    .catch(next);
}







module.exports = {
  indexRoute: indexRoute
};
