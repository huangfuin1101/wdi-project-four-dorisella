const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  bag: { type: mongoose.Schema.ObjectId, ref: 'Bag'},
  unitQuantity: Number,
  retailPrice: Number,
  unitCost: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  status: { type: String, enum: ['paid', 'sent', 'received'], default: 'paid' }
}, { timestamps: true });


// function checkQuantity(quantity, respond) {
//   console.log('Validating', this, quantity);
//   this.populate('bag', () => {
//     const enoughStock = this.bag.stock >= this.unitQuantity;
//     if(!enoughStock){
//       respond(false);
//     } else {
//       respond(true);
//     }
//   });
// }

purchaseSchema.pre('validate', function(next){
  this.populate('bag', () => {
    const enoughStock = this.bag.stock >= this.unitQuantity;
    console.log('purchasing',this.bag._id, 'enough stock?', enoughStock);
    if(!enoughStock){
      this.invalidate(this.bag._id.toString(), 'not enough stock');
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
    return this.retailPrice * this.unitQuantity;
  });

purchaseSchema.virtual('grossProfit')
  .get(function() {
    return (this.retailPrice - this.unitCost) * this.unitQuantity;
  });

purchaseSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
