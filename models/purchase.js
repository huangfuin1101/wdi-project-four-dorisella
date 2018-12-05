const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  bag: { type: mongoose.Schema.ObjectId, ref: 'Bag'},
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  price: Number,
  quantity: Number,
  status: { type: String, enum: ['paid', 'sent', 'received'], default: 'paid' }
}, { timestamps: true });

purchaseSchema.virtual('totalPrice')
  .get(function() {
    return this.price * this.quantity;
  });

purchaseSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
