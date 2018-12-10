const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  bag: { type: mongoose.Schema.ObjectId, ref: 'Bag'},
  unitQuantity: Number,
  unitPrice: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  status: { type: String, enum: ['paid', 'sent', 'received'], default: 'paid' }
}, { timestamps: true });

purchaseSchema.pre('validate', function(next){
  this.populate('bag', () => {
    const enoughStock = this.bag.stock >= this.unitQuantity;
    console.log('purchase is',this, 'enough stock?', enoughStock);
    if(!enoughStock){
      this.invalidate('items', 'insufficient stock');
      // res.json({
      //   messgae: 'insufficient stock'
      // });
    }
    next();
  });
});

purchaseSchema.pre('save', function(next){
  this.populate('bag', () => {
    this.bag.stock -= this.unitQuantity;
    this.bag.save(() => next());
  });
});

purchaseSchema.virtual('totalPrice')
  .get(function() {
    return this.unitPrice * this.unitQuantity;
  });

purchaseSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
