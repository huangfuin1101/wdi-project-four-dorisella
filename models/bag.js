const mongoose = require('mongoose');



const bagSchema = new mongoose.Schema({
  name: String,
  brand: String,
  image: String,
  detail: String,
  description: String,
  stock: Number,
  unitPrice: Number
});

module.exports = mongoose.model('Bag', bagSchema);
